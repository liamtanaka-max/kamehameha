"""
Builds catalog.js — the anime catalog the game uses for title prompts.

Sources (both open data, refreshed regularly):
  * MyAnimeList data via github.com/meesvandongen/anime-dataset
      data/anime.csv, data/genres.csv, data/studios.csv
      -> titles (romaji + English), start date, type, genres, studios,
         and num_list_users (members), which sets how "niche" an answer is.
  * manami-project/anime-offline-database (ODbL)
      anime-offline-database-minified.json
      -> alternate titles / spellings so more answers match.

Usage:
  python3 tools/build_catalog.py <folder with anime.csv, genres.csv, studios.csv, db.json>

Seasons and sequels of the same show are grouped into one answer
("Attack on Titan Season 3 Part 2" counts as "Attack on Titan").
"""

import csv
import json
import re
import sys
import unicodedata
from collections import defaultdict
from pathlib import Path

SRC = Path(sys.argv[1] if len(sys.argv) > 1 else ".")
OUT = Path(__file__).resolve().parent.parent / "catalog.js"

MIN_MEMBERS_BY_TYPE = {"tv": 1000, "movie": 3000, "ova": 12000, "ona": 12000}
TYPES = {"tv": 0, "movie": 1, "ova": 2, "ona": 3}
BLOCKED_GENRES = {"12", "49"}      # Hentai, Erotica
MAX_ALIASES = 8


def norm(s):
    s = unicodedata.normalize("NFKD", s.lower())
    s = "".join(c for c in s if not unicodedata.combining(c))
    return re.sub(r"[^a-z0-9]", "", s)


def tokens(s):
    s = unicodedata.normalize("NFKD", (s or "").lower())
    s = "".join(c for c in s if not unicodedata.combining(c))
    return [t for t in re.split(r"[^a-z0-9]+", s) if t]


def latin(s):
    return all(ord(c) < 0x250 or c in "–—’‘“”☆★♪·×" for c in s)


SEASON_PATTERNS = [
    r"\s*[:\-–]\s*(the\s+)?final\s+season.*$",
    r"\s*[:\-–]?\s*(the\s+)?final\s+(season|chapters?).*$",
    r"\s*[:\-–]?\s*season\s+\d+.*$",
    r"\s*[:\-–]?\s*\d+(st|nd|rd|th)\s+season.*$",
    r"\s*[:\-–]?\s*(second|third|fourth|fifth|sixth|seventh)\s+season.*$",
    r"\s*[:\-–]?\s*(part|cour)\s+\d+.*$",
    r"\s*:\s*[^:]*\b\w+-hen\b.*$",                             # ": Yuukaku-hen"
    r"\s*:\s*[^:]*\barc\b.*$",                                 # ": Entertainment District Arc"
    r"\s+(ii|iii|iv|2|3|4|5)$",
    r"\s+(s\d+|tv|\d+\.?\s*(staffel|saison|temporada|stagione)|(saison|staffel|temporada|stagione)(\s+\d+)?)$",
    r"['°\.\s]+$",
]


def base_title(t):
    s = t.strip()
    for _ in range(3):
        before = s
        for p in SEASON_PATTERNS:
            s = re.sub(p, "", s, flags=re.I).strip()
        if s == before:
            break
    return s or t


def main():
    genres = {r["id"]: r["name"] for r in csv.DictReader(open(SRC / "genres.csv", encoding="utf-8"))}
    studios = {r["id"]: r["name"] for r in csv.DictReader(open(SRC / "studios.csv", encoding="utf-8"))}

    # MAL id -> extra spellings from manami
    synonyms = {}
    for a in json.load(open(SRC / "db.json", encoding="utf-8"))["data"]:
        for src in a.get("sources", []):
            m = re.match(r"https://myanimelist\.net/anime/(\d+)", src)
            if m:
                synonyms[m.group(1)] = [a["title"]] + a.get("synonyms", [])

    rows = []
    for r in csv.DictReader(open(SRC / "anime.csv", encoding="utf-8")):
        members = int(r["num_list_users"] or 0)
        if r["media_type"] not in TYPES:
            continue
        # OVAs and web shorts include lots of promo clips/recaps: require a real audience
        if members < MIN_MEMBERS_BY_TYPE[r["media_type"]]:
            continue
        if r["status"] == "not_yet_aired" or not r["start_date"]:
            continue
        g = [x for x in (r["genres"] or "").split(";") if x]
        if BLOCKED_GENRES & set(g) or r["rating"] == "rx":
            continue
        rows.append({
            "id": r["id"], "title": r["title"], "en": r["titleEn"] or "",
            "year": int(r["start_date"][:4]), "type": TYPES[r["media_type"]],
            "members": members, "genres": g,
            "studios": [x for x in (r["studios"] or "").split(";") if x],
            "eps": int(r["num_episodes"] or 0),
        })

    # Group seasons/sequels of the same show. Two entries join if their base
    # Japanese OR base English titles match (and both are series, or both movies).
    parent = {}

    def find(k):
        while parent.setdefault(k, k) != k:
            parent[k] = parent[parent[k]]
            k = parent[k]
        return k

    def union(a, b):
        parent[find(a)] = find(b)

    for r in rows:
        kind = "m" if r["type"] == 1 else "s"
        # Remakes like "Hunter x Hunter (2011)" stay separate from the original
        remake = re.search(r"\((19|20)\d\d\)$", r["title"])
        if remake:
            kind += remake.group(0)
        r["_k"] = kind + ":" + norm(base_title(r["title"]))
        find(r["_k"])
        if r["en"] and norm(base_title(r["en"])):
            union(r["_k"], kind + ":en:" + norm(base_title(r["en"])))

    groups = defaultdict(list)
    for r in rows:
        groups[find(r["_k"])].append(r)

    items = []
    for _, entries in groups.items():
        entries.sort(key=lambda e: (e["year"], -e["members"]))
        root = entries[0]
        display = base_title(root["en"]) if root["en"] else base_title(root["title"])
        remake = re.search(r"\((19|20)\d\d\)$", root["title"])
        if remake and remake.group(0) not in display:
            display = f"{display} {remake.group(0)}"

        names, seen = [], set()

        def add(n):
            n = (n or "").strip()
            k = norm(n)
            if n and k and k not in seen and latin(n) and len(n) <= 60:
                seen.add(k)
                names.append(n)

        add(display)
        for e in entries[:3]:
            add(base_title(e["title"]))
            add(base_title(e["en"]))
        # Extra spellings: abbreviations ("AoT", "JJK") and variants of the official
        # romaji/English titles. Translations into other languages are skipped —
        # they bloat the file and some are fan nicknames.
        official = set()
        for e in entries[:3]:
            official |= set(tokens(e["title"])) | set(tokens(e["en"]))
        for e in entries[:2]:
            for s in sorted(synonyms.get(e["id"], []), key=len):
                if not s.isascii():
                    continue
                t = tokens(s)
                if set(t) & {"special", "edited", "version", "recap", "digest", "ova", "oad", "drama", "picture", "promo", "pv"}:
                    continue
                is_abbrev = len(s) <= 6 and " " not in s and any(c.isupper() for c in s)
                is_variant = t and sum(1 for x in t if x in official) / len(t) >= 0.6
                if is_abbrev or is_variant:
                    add(base_title(s))
        names = names[:MAX_ALIASES]

        items.append([
            display,
            "|".join(names[1:]),
            root["year"],
            root["type"],
            max(e["members"] for e in entries),
            ",".join(sorted({g for e in entries for g in e["genres"]}, key=int)),
            ",".join(sorted({s for e in entries for s in e["studios"]}, key=int)),
            sum(e["eps"] for e in entries),
        ])

    items.sort(key=lambda x: -x[4])
    used_studios = {s for it in items for s in it[6].split(",") if s}
    out = {
        "updated": max(r["year"] for r in rows),
        "genres": genres,
        "studios": {k: v for k, v in studios.items() if k in used_studios},
        # [display, aliases, year, type(0 tv,1 movie,2 ova,3 ona), members, genre ids, studio ids, episodes]
        "items": items,
    }
    js = ("// Generated by tools/build_catalog.py — do not edit by hand.\n"
          "// Data: MyAnimeList (via meesvandongen/anime-dataset) + manami-project/anime-offline-database (ODbL).\n"
          "const CATALOG = " + json.dumps(out, ensure_ascii=False, separators=(",", ":")) + ";\n"
          "if (typeof module !== 'undefined') module.exports = { CATALOG };\n")
    OUT.write_text(js, encoding="utf-8")
    print(f"{len(rows)} entries -> {len(items)} grouped items, {OUT.stat().st_size/1e6:.2f} MB")


if __name__ == "__main__":
    main()

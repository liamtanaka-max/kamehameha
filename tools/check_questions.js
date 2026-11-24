#!/usr/bin/env node
// Checks the question pool. Run: node tools/check_questions.js
//
// Flags:
//   - themes that aren't the same size (the Daily needs them equal)
//   - exact duplicate prompts or ids
//   - near-duplicate prompts: same key words, or the same idea reworded
//     (hand-written prompts that share a big chunk of their answers)
//   - thin prompts: too few easy answers for a casual player
// Exits with code 1 if anything is flagged.

const { THEMES, QUESTIONS, CATALOG_PROMPTS } = require("../questions.js");

const all = [
  ...QUESTIONS.map((q) => ({ ...q, kind: "hand" })),
  ...CATALOG_PROMPTS.map((q) => ({ ...q, kind: "catalog" }))
];
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
all.forEach((q) => { q.id = q.id || slug(q.prompt); });

const problems = [];
const flag = (msg) => problems.push(msg);

// ---- 1. Theme balance ----
const sizes = Object.fromEntries(THEMES.map((t) => [t, all.filter((q) => q.theme === t).length]));
const stray = all.filter((q) => !THEMES.includes(q.theme));
stray.forEach((q) => flag(`no valid theme: "${q.prompt}" (${q.theme})`));
if (new Set(Object.values(sizes)).size > 1) flag(`themes are not the same size: ${JSON.stringify(sizes)}`);

// ---- 2. Exact duplicates ----
const byKey = new Map();
for (const q of all) {
  for (const key of [`id:${q.id}`, `prompt:${q.prompt.toLowerCase().trim()}`]) {
    if (byKey.has(key)) flag(`exact duplicate (${key.split(":")[0]}): "${q.prompt}"`);
    byKey.set(key, q);
  }
}

// ---- 3. Near-duplicates ----
// Words that say nothing about what a prompt is asking for
const FILLER = new Set(("name a an the of in on at to or and for with from who whose that is are be their them they " +
  "his her its it's anime character characters someone something famous classic iconic real one can could " +
  "would you your like has have get gets goes all any most mostly set").split(" "));
// Light stemming so "powers"/"power", "eyes"/"eye" match
const stem = (w) => w.replace(/'s$/, "").replace(/(ies)$/, "y").replace(/(es|s)$/, "");
const keywords = (p) => new Set(p.toLowerCase().replace(/\(.*?\)/g, " ").split(/[^a-z0-9']+/)
  .filter((w) => w && !FILLER.has(w)).map(stem).filter((w) => w.length > 1));

const nameKey = (e) => e.split("|")[0].toLowerCase().replace(/[^a-z0-9]/g, "");
const easyNames = (q) => new Set([...(q.answers[1] || []), ...(q.answers[2] || [])].map(nameKey));
const allNames = (q) => new Set(Object.values(q.answers).flat().map(nameKey));

function overlap(a, b) { // share of the smaller set that's also in the other
  if (!a.size || !b.size) return 0;
  let n = 0;
  for (const x of a) if (b.has(x)) n++;
  return n / Math.min(a.size, b.size);
}

for (let i = 0; i < all.length; i++) {
  for (let j = i + 1; j < all.length; j++) {
    const a = all[i], b = all[j];
    // Same key words
    const ka = keywords(a.prompt), kb = keywords(b.prompt);
    const shared = [...ka].filter((w) => kb.has(w));
    const jaccard = shared.length / new Set([...ka, ...kb]).size;
    if (shared.length && jaccard >= 0.5) {
      flag(`near-duplicate wording (${shared.join(", ")}):\n      "${a.prompt}"\n      "${b.prompt}"`);
      continue;
    }
    // Same idea reworded: hand-written prompts whose easy answers mostly match
    if (a.kind === "hand" && b.kind === "hand") {
      const easy = overlap(easyNames(a), easyNames(b));
      const full = overlap(allNames(a), allNames(b));
      // Both the easy answers and the whole lists have to match: villains and
      // mind-controllers share names, but they're different questions.
      if ((easy >= 0.6 && full >= 0.35) || full >= 0.6) {
        flag(`near-duplicate answers (${Math.round(Math.max(easy, full) * 100)}% shared):\n      "${a.prompt}"\n      "${b.prompt}"`);
      }
    }
    // Same idea reworded: catalog prompts with the same filter
    if (a.kind === "catalog" && b.kind === "catalog" && JSON.stringify(a.where) === JSON.stringify(b.where) && !a.nameTest && !b.nameTest) {
      flag(`same catalog filter:\n      "${a.prompt}"\n      "${b.prompt}"`);
    }
  }
}

// ---- 4. Thin prompts ----
for (const q of all.filter((x) => x.kind === "hand")) {
  const easy = (q.answers[1] || []).length + (q.answers[2] || []).length;
  const total = Object.values(q.answers).flat().length;
  if (easy < 3) flag(`only ${easy} easy answers (a casual player needs 3+): "${q.prompt}"`);
  if (total < 15) flag(`only ${total} answers in total (good guesses will be marked wrong): "${q.prompt}"`);
  const seen = new Set();
  for (const e of Object.values(q.answers).flat()) {
    const k = nameKey(e);
    if (seen.has(k)) flag(`"${e.split("|")[0]}" is listed twice in "${q.prompt}"`);
    seen.add(k);
  }
}

// ---- Report ----
console.log(`${all.length} prompts · ${THEMES.map((t) => `${t} ${sizes[t]}`).join(" · ")}`);
if (problems.length) {
  console.log(`\n${problems.length} problem${problems.length > 1 ? "s" : ""}:\n`);
  problems.forEach((p) => console.log("  ✗ " + p));
  process.exit(1);
}
console.log("✓ no duplicates, near-duplicates or thin prompts");

# KAMEHAME-HA!

A daily anime trivia game inspired by [Krillion](https://krillion.io). Answer open-ended anime prompts — obvious answers charge a little power, obscure ones charge a lot. When you're done you fire, and the more niche you went, the farther the blast flies.

**Play:** https://liamtanaka-max.github.io/kamehameha/

## Modes

- **Daily Charge** (main) — 7 prompts, the same for everyone each day: 3 about characters, 2 about anime titles, then 2 **HARD** ones. Progress is saved; come back tomorrow for a new set. Days don't repeat a prompt for ~26 days.
- **Infinite ∞** — endless prompts, mostly about characters (5 character : 2 title : 1 hard). A skip or time-out costs one of 3 lives. Your best run is saved. The game remembers which prompts you've seen and serves new ones first.
- **Party** — 2–6 players pass one device. Everyone answers the same prompt in turn, and an answer someone already gave that round is *taken* — so later players have to dig deeper. Leaderboard after each round; the winner fires the final blast.

When the fighter fires, every answer summons a wave of pixel monsters for the beam to vaporize — a Common answer brings one slime, a Deep Cut brings a wave led by a dragon.

## How it works

| Tier | Power | Example ("Name an anime made by MAPPA") |
|---|---|---|
| ⚪ Common | 10 | Jujutsu Kaisen |
| 🔵 Uncommon | 25 | Vinland Saga |
| 🟢 Rare | 40 | Banana Fish |
| 🟣 Epic | 60 | Kids on the Slope |
| 🟡 Legendary | 80 | In This Corner of the World |
| 🌈 Deep Cut | 100 | Oblivion Battery |

- **216 prompts** (53 hard). Two kinds:
  - **Title prompts** ("a 2010s anime", "a sports anime", "made by Kyoto Animation", "title starts with K") are answered from a catalog of **~7,000 anime from the 1960s to 2026**. Any anime that fits counts, and rarity comes from real popularity (how many people have it on their list).
  - **Character prompts** (hand-written) about who characters are and what they can do: "a fighter who refuses to kill", "a character who works as a teacher", "an orphan", "royalty", "way older than they look", "can turn into an animal", "sacrificed themselves for others", "a character fast enough to race the Flash", "an attack that could destroy a planet" — plus character prompts for One Piece, JJK, Chainsaw Man, Frieren, Blue Lock, Solo Leveling and more.
- 25 seconds per prompt. Wrong guesses cost nothing; running out of time scores 0.
- **Forgiving answers:** word order doesn't matter (`satoru gojo` = Gojo Satoru), common romanization differences are ignored (`gojou`, `ruffy`), and close misspellings get **"Did you mean …?"** with up to 3 options — press Enter to take the first.
- If you name a real anime that doesn't fit a title prompt, the game tells you ("Death Note (2006) is an anime we know — but it doesn't fit this prompt").
- Distance = total power × 10 km. Max is 7,000 km in the Daily.

## Files

```
index.html          the page (menu, prompts, results)
style.css           retro pixel look
catalog.js          ~7,000 anime (generated — see below)
questions.js        hand-written prompts + CATALOG_PROMPTS (title prompt definitions)
logic.js            answer matching, catalog prompts, daily/infinite prompt picking
scene.js            pixel background: fighter, charge-ups, mobs, beam
game.js             the three modes and all screens
tools/build_catalog.py   rebuilds catalog.js from the open datasets
fonts/              VT323 + Press Start 2P (free, Open Font License)
```

No build step to play, no backend. Just open `index.html`.

## Adding prompts

**A hand-written prompt** — copy a block in `QUESTIONS` in `questions.js`. `|` separates alternate names for the same answer:

```js
{
  prompt: "Name a Jujutsu Kaisen character",
  answers: {
    1: ["Gojo|Satoru Gojo", "Yuji|Yuji Itadori"],
    2: ["Megumi|Megumi Fushiguro", "Nobara"],
    3: ["Todo|Aoi Todo"],
    4: ["Mechamaru"],
    5: ["Kusakabe"],
    6: ["Ui Ui"]
  }
},
```

**A title prompt** — add a line to `CATALOG_PROMPTS` (same file). Rarity tiers are worked out automatically:

```js
{ prompt: "Name an anime made by Madhouse", where: { studio: 11 } },
{ prompt: "Name a horror anime from the 2000s", where: { genre: 14, years: [2000, 2009] } },
{ prompt: "Name an anime whose title starts with R", nameTest: startsWith("R") },
```

Add `hard: true` to put it in the hard pool. Genre and studio ids are listed in `catalog.js` (`CATALOG.genres`, `CATALOG.studios`).

## Updating the anime catalog

New anime come out every season. To refresh:

1. Download into one folder:
   - `anime.csv`, `genres.csv`, `studios.csv` from [meesvandongen/anime-dataset](https://github.com/meesvandongen/anime-dataset) (`data/`)
   - `anime-offline-database-minified.json` from the latest [manami-project/anime-offline-database](https://github.com/manami-project/anime-offline-database/releases) release, saved as `db.json`
2. Run `python3 tools/build_catalog.py path/to/that/folder`

## Data credits

- Anime titles, dates, genres, studios and popularity: MyAnimeList data via [meesvandongen/anime-dataset](https://github.com/meesvandongen/anime-dataset).
- Alternate titles: [manami-project/anime-offline-database](https://github.com/manami-project/anime-offline-database), made available under the [Open Database License (ODbL) v1.0](https://opendatacommons.org/licenses/odbl/1-0/).

## Host it free

Repo **Settings → Pages → Deploy from branch → `main` / root**.

## Ideas for later

- Track what real players submit and set rarity from actual answer frequency.
- Streaks and a stats page.
- Use an AI judge for valid answers that aren't on the list.

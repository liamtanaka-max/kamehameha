# KAMEHAME-HA!

A daily anime trivia game inspired by [Krillion](https://krillion.io). Answer open-ended anime prompts — obvious answers charge a little power, obscure ones charge a lot. When you're done you fire, and the more niche you went, the farther the blast flies.

**Play:** https://liamtanaka-max.github.io/kamehameha/

## Modes

- **Daily Charge** (main) — 7 prompts, the same for everyone each day, one from each theme (characters, powers, tropes, relationships, objects, settings, shows). Progress is saved; come back tomorrow for a new set. No prompt comes back until all 154 have been used (22 days).
- **Infinite ∞** — endless prompts that cycle through all 7 themes, never the same theme twice in a row. A skip or time-out costs one of 3 lives. Your best run is saved. The game remembers which prompts you've seen and serves new ones first.
- **Party** — 2–6 players pass one device. Everyone answers the same prompt in turn, and an answer someone already gave that round is *taken* — so later players have to dig deeper. Every player gets their own fighter on screen that grows with their answers. Leaderboard after each round; the winner leads the final power-up.

**Prompts don't repeat.** The Daily is picked by a shuffle seeded with the date, so everyone gets the same set with no server needed, and each theme walks through all its prompts before any comes back. Every prompt you see in any mode is also saved to Supabase under a random player ID for your browser: Infinite and Party skip prompts you've seen, and if you already met one of today's Daily prompts there, it's swapped for a fresh one from the same theme.

Every answer shows its rarity right away: a stamp that pops harder the rarer it is, with a screen shake and a burst of pixels for Epic and up. The charge meter eases up and glows brighter as your power builds, and your fighter grows and transforms through original forms — SPARK, SURGE, OVERDRIVE, STORM, ASCENDED, ZENITH, and a secret VOID form for near-perfect runs.

At the end he charges up for a second and fires: the beam's thickness, brightness and reach all scale with your score. A weak run fizzles partway across; a great one tears off the screen with a flash. It wipes out a wave of pixel monsters for every answer — a Common answer brings one slime, a Deep Cut brings a wave led by a dragon. If your device is set to reduce motion, there's no shake and the finale is shorter.

## How it works

| Tier | Power | Example ("Name an anime made by MAPPA") |
|---|---|---|
| ⚪ Common | 10 | Jujutsu Kaisen |
| 🔵 Uncommon | 25 | Vinland Saga |
| 🟢 Rare | 40 | Banana Fish |
| 🟣 Epic | 60 | Kids on the Slope |
| 🟡 Legendary | 80 | In This Corner of the World |
| 🌈 Deep Cut | 100 | Oblivion Battery |

- **154 prompts, 22 in each of 7 themes**, all about anime itself — no voice actors, directors or other real people. Every prompt has to pass one test: someone who's only seen the big shows (Naruto, One Piece, Demon Slayer, AOT, DBZ…) can name 3 answers, and a hardcore fan can still find a rare one. No single-show prompts and no one-fact trivia.
  - **Hand-written prompts** ("a character who can control minds", "an enemy who became an ally", "a legendary weapon with its own name") list their answers by rarity tier.
  - **Catalog prompts** ("an anime from the 1990s", "a horror anime", "an anime set in space") are answered from a catalog of **~7,000 anime from the 1960s to 2026**. Any anime that fits counts, and rarity comes from real popularity (how many people have it on their list).
- 25 seconds per prompt. Wrong guesses cost nothing; running out of time scores 0.
- **Forgiving answers:** word order doesn't matter (`satoru gojo` = Gojo Satoru), common romanization differences are ignored (`gojou`, `ruffy`), and close misspellings get **"Did you mean …?"** with up to 3 options — press Enter to take the first.
- If you name a real anime that doesn't fit a title prompt, the game tells you ("Death Note (2006) is an anime we know — but it doesn't fit this prompt").
- Distance = total power × 10 km. Max is 7,000 km in the Daily.

## Files

```
index.html          the page (menu, prompts, results)
style.css           retro pixel look
catalog.js          ~7,000 anime (generated — see below)
questions.js        THEMES, hand-written prompts + CATALOG_PROMPTS (title prompt definitions)
logic.js            answer matching, catalog prompts, daily/infinite prompt picking
scene.js            pixel background: fighter, forms, mobs, the beam finale
game.js             the three modes and all screens
db.js               Supabase sync (seen prompts + the Daily)
supabase/schema.sql database tables and functions
tools/build_catalog.py   rebuilds catalog.js from the open datasets
tools/check_questions.js flags duplicate / near-duplicate / thin prompts
.claude/skills/     design skills for Claude Code (see below)
fonts/              VT323 + Press Start 2P (free, Open Font License)
```

No build step to play, no backend. Just open `index.html`.

## Adding prompts

Every prompt has a `theme`, and **every theme must have the same number of prompts** (the Daily takes one per theme per day, so equal sizes mean the whole pool is used before anything repeats). If you add one, add one to every theme, or swap one out.

**A hand-written prompt** — copy a block in `QUESTIONS` in `questions.js`. `|` separates alternate names for the same answer:

```js
{
  id: "name-a-character-with-wind-powers",
  theme: "powers",
  prompt: "Name a character with wind powers",
  answers: {
    1: ["Temari", "Naruto|Naruto Uzumaki"],
    2: ["Asuma|Asuma Sarutobi", "Wendy|Wendy Marvell"],
    3: ["Erigor"],
    4: [], 5: [], 6: []
  }
},
```

**A title prompt** — add a line to `CATALOG_PROMPTS` (same file). Rarity tiers are worked out automatically:

```js
{ theme: "shows", prompt: "Name a horror anime", where: { genre: 14 } },
{ theme: "settings", prompt: "Name an anime set in space", where: { genre: 29 } },
{ theme: "shows", prompt: "Name an anime with a number in its title", nameTest: titleHas(/\d/) },
```

Add `hard: true` to show the HARD badge and put it last in the Daily. Genre and studio ids are listed in `catalog.js` (`CATALOG.genres`, `CATALOG.studios`).

**Then run the checker:**

```
node tools/check_questions.js
```

It fails if the themes aren't the same size, if two prompts are the same or nearly the same (same key words, or hand-written prompts whose answers mostly overlap), or if a prompt has fewer than 3 easy answers or 15 answers in total.

**If you swap out prompts**, set `POOL_START` in `logic.js` to the day the new pool goes live, so the Daily starts a fresh cycle.

## Updating the anime catalog

New anime come out every season. To refresh:

1. Download into one folder:
   - `anime.csv`, `genres.csv`, `studios.csv` from [meesvandongen/anime-dataset](https://github.com/meesvandongen/anime-dataset) (`data/`)
   - `anime-offline-database-minified.json` from the latest [manami-project/anime-offline-database](https://github.com/manami-project/anime-offline-database/releases) release, saved as `db.json`
2. Run `python3 tools/build_catalog.py path/to/that/folder`

## Database (Supabase)

`supabase/schema.sql` creates two tables and three functions:

- `kh_player_seen` — which prompts each player has seen (still used)
- `kh_daily`, `kh_get_daily` — the old server-picked Daily. The Daily is now picked in the browser (`questionsFor` in `logic.js`), so these are no longer called; they're left in place so nothing breaks.
- `kh_mark_seen`, `kh_get_seen` — what the page calls

The tables have row-level security with no policies, so the public key in `db.js` can't read or change them directly. To use a different Supabase project, run `schema.sql` in its SQL editor and change `SUPABASE_URL` / `SUPABASE_KEY` in `db.js`.

## Data credits

- Anime titles, dates, genres, studios and popularity: MyAnimeList data via [meesvandongen/anime-dataset](https://github.com/meesvandongen/anime-dataset).
- Alternate titles: [manami-project/anime-offline-database](https://github.com/manami-project/anime-offline-database), made available under the [Open Database License (ODbL) v1.0](https://opendatacommons.org/licenses/odbl/1-0/).

## Design skills (Claude Code)

`.claude/skills/` holds three skills that Claude Code picks up automatically when you work in this repo:

- **frontend-design** (Anthropic) — picks a deliberate visual direction instead of generic AI defaults.
- **web-design-guidelines** (Vercel, MIT) — audits UI code against 100+ accessibility and UX rules. Try: "review index.html and style.css against the web design guidelines".
- **ui-animation** (Matthew Blode, MIT) — easing, timing and performance rules for motion. Try: "use ui-animation to refine the beam finale".

## Host it free

Repo **Settings → Pages → Deploy from branch → `main` / root**.

## Ideas for later

- Track what real players submit and set rarity from actual answer frequency.
- Streaks and a stats page.
- Use an AI judge for valid answers that aren't on the list.

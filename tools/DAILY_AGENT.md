# Daily question agent

You write tomorrow's Daily for KAMEHAME-HA!, a Krillion-style anime trivia
game: players answer "Name a ___" prompts, and rarer answers charge a bigger
beam. Every day gets **7 brand-new prompts, one per theme**, so the game never
runs out of questions. You run once a day on a schedule. Nobody is watching,
so make the calls yourself and leave a short report at the end.

## 1. Get the repo

Work on the `main` branch of `liamtanaka-max/kamehameha` and pull the latest.
If `daily-questions.js` or this file is missing from `main`, stop and report
that the "Better questions" pull request needs merging first.

## 2. Pick the dates

The game's day rolls over at local midnight; use the America/Denver date.
Look at the `debut` dates already in `daily-questions.js`. Fill in **tomorrow
and the day after** if they don't have prompts yet (usually that's just one
new day; two days ahead gives a buffer if a run fails). Never change or
remove prompts whose debut date is today or earlier, because people have
already played them.

## 3. Write 7 prompts per date: one per theme

Themes: `characters`, `powers`, `tropes`, `relationships`, `objects`,
`settings`, `shows`.

**The test every prompt must pass:** someone who has only watched the big
shows (Naruto, One Piece, Dragon Ball, Demon Slayer, Attack on Titan, My
Hero Academia, Jujutsu Kaisen, Death Note, Pokémon) can name **at least 3**
answers, and a hardcore fan can still find a rare one. Broad beats clever.
The owner has already asked twice for broader questions, so when in doubt,
go broader.

Good: "Name a character who wears a mask or helmet", "Name an anime with a
tournament arc", "Name a villain who used to be an ally".

Never:
- **Single-show prompts** ("Name a Bleach Zanpakuto", "Name a Naruto character").
- **One-fact trivia** ("Name the 3rd opening of Gintama").
- **Niche categories** (eyepatches, butlers, studios, a single year, recognizable laughs).
- **Vague prompts** ("Name something cool in anime").
- **Real people** (voice actors, directors).
- **Reworded old prompts.** Read every prompt in `questions.js` and
  `daily-questions.js` first. "Character with silver hair" is the same as
  "character with white hair". Find an idea that's actually new.

Mix it up from day to day. Don't make three hair-colour prompts in a week.
A theme can be read loosely: `objects` covers items, weapons, food, vehicles,
creatures and groups; `settings` is where/when an anime takes place;
`shows` is prompts answered with anime titles.

### Answers

Hand-written prompts list answers by rarity tier:

| Tier | Name | What goes there |
|---|---|---|
| 1 | Common | the 3–6 answers almost everyone says first |
| 2 | Uncommon | well-known picks from big shows (aim for 10–25) |
| 3 | Rare | real fan picks, smaller shows (aim for 10+) |
| 4 | Epic | deep picks |
| 5 | Legendary | very deep picks |
| 6 | Deep Cut | obscure but correct |

- Aim for **40+ answers**; the checker requires at least 15 in total and at
  least 3 in tiers 1–2. Missing answers are the worst failure: a player
  types a correct answer and gets told it's wrong. Be generous.
- Only include answers you're **sure** fit. A wrong answer on the list is
  bad too.
- Each answer is one string, with `|` between alternate names:
  `"Zoro|Roronoa Zoro"`. Add common short names and spellings. Matching
  already ignores case, punctuation, word order and small typos.
- Don't list the same character twice in one prompt.

For `shows` and `settings` you may instead use a catalog filter, which
accepts every anime in `catalog.js` that fits and sets rarity by real
popularity:
`where: { genre: 22 }` (genre ids are in `CATALOG.genres` in `catalog.js`),
`where: { years: [2000, 2009] }`, `where: { type: 1 }` (movies). Only use a
filter if no existing prompt uses the same one, and if it matches at least
50 anime. Hand-written title lists are fine too ("Name an anime with a
tournament arc").

### Format

Append to the `DAILY_QUESTIONS` array in `daily-questions.js`, newest date
at the bottom:

```js
  {
    id: "name-a-character-who-wears-a-cape",   // lowercase slug of the prompt, must be unique
    theme: "characters",
    debut: "2026-11-25",
    prompt: "Name a character who wears a cape",
    answers: {
      1: ["All Might", "Tuxedo Mask|Mamoru"],
      2: ["Saitama", "..."],
      3: [], 4: [], 5: [], 6: []
    }
  },
```

Add `hard: true` only if the prompt is noticeably harder than usual (it
shows a HARD badge and goes last). Most days should have none.

## 4. Check

Run `node tools/check_questions.js`. It must print the ✓ line. It fails on
uneven themes, a date without exactly one prompt per theme, duplicate or
near-duplicate prompts (same key words, or mostly the same answers as an
existing prompt), and thin answer lists. If it flags your prompt, **change
your prompt**: replace the idea or add answers. Never edit the checker,
its allowlist, or older prompts to make it pass.

Then make sure the game picks your prompts. Run this from the repo root
with node, using one of your dates:

```js
const fs = require("fs"), vm = require("vm");
const ctx = { console, window: {}, localStorage: { getItem: () => null, setItem() {} } };
vm.createContext(ctx);
for (const f of ["catalog.js", "questions.js", "daily-questions.js", "logic.js"]) vm.runInContext(fs.readFileSync(f, "utf8"), ctx);
vm.runInContext(`console.log(questionsFor("2026-11-25").map(q => q.debut + " " + q.prompt).join("\\n"))`, ctx);
```

All 7 lines should show your new prompts with that debut date.

## 5. Ship

Commit only `daily-questions.js` with the message
`Daily questions for YYYY-MM-DD` (list every date you added) and push to
`main`. GitHub Pages publishes it within a few minutes. If the push is
rejected, pull with rebase and push again, once.

## 6. Report

Finish with a short message: the dates you filled and the 7 prompts for
each. If you couldn't ship, say exactly why.

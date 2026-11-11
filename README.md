# KAMEHAME-HA!

A daily anime trivia game inspired by [Krillion](https://krillion.io). Answer 7 open-ended anime questions — obvious answers charge a little power, obscure ones charge a lot. After the last question you fire, and the more niche you went, the farther the blast flies.

## How it works

| Tier | Power | Example ("Name a Studio Ghibli film") |
|---|---|---|
| ⚪ Common | 10 | Spirited Away |
| 🔵 Uncommon | 25 | Ponyo |
| 🟢 Rare | 40 | Porco Rosso |
| 🟣 Epic | 60 | Whisper of the Heart |
| 🟡 Legendary | 80 | Pom Poko |
| 🌈 Deep Cut | 100 | Ocean Waves |

- Same 7 questions for everyone each day, picked by date from a bank of 32 prompts and 2,200+ answers spanning the 1980s to now.
- 25 seconds per prompt. Wrong guesses cost nothing; running out of time scores 0.
- Close typos get **"Did you mean …?"** — press Enter again to accept (`spirted away` → Spirited Away, `kibagami` → Jubei Kibagami).
- Every answer charges the fighter at the bottom: rarer answers trigger a bigger energy pillar, shockwave and power-gauge jump.
- Distance = total power × 10 km. Max is 7,000 km.

## Files

```
index.html     the page (start, prompts, results)
style.css      retro pixel look
questions.js   all questions + tiered answers  <-- edit this to add content
logic.js       answer matching, daily pick, scoring tables
scene.js       pixel background: fighter, charging orb, beam
game.js        connects the page to the logic
fonts/         VT323 + Press Start 2P (free, Open Font License)
```

No build step, no backend, no dependencies. Just open `index.html`.

## Adding a question

Copy a block in `questions.js`:

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

`|` separates alternate names that all count as the same answer.

## Host it free

Repo **Settings → Pages → Deploy from branch → `main` / root**. Your site will be at
`https://<username>.github.io/kamehameha/`.

## Ideas for later

- Track what real players submit (e.g. Supabase) and set rarity from actual answer frequency instead of a hand-made list.
- Streaks and a stats page.
- Use an AI judge for valid answers that aren't on the list.

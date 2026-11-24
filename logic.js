// =========================================================
//  GAME LOGIC (no page code here)
//  - checkAnswer: forgiving matching (typos, word order, romanization)
//  - catalog prompts: "Name a 2010s anime" built from catalog.js
//  - prompt picking: one prompt per theme each day, no repeats
// =========================================================

const PER_DAY = 7;
const TIME_LIMIT = 25; // seconds per prompt
const MAX_POWER = PER_DAY * TIERS[6].points; // 700
const KM_PER_POWER = 10;
const LAUNCH_DATE = "2026-11-11"; // Charge #1

const TIER_COLORS = { 0: "#4a5578", 1: "#9aa4c4", 2: "#48d6ff", 3: "#5dff9b", 4: "#b86bff", 5: "#ffd23f", 6: "#ff4f8b" };

const LANDMARKS = [
  [0, "It fizzled on the training grounds."],
  [500, "It cleared the mountains."],
  [1500, "It crossed the ocean."],
  [3000, "It punched through the clouds."],
  [4500, "It hit the Moon."],
  [6000, "It left the solar system."]
];

const SCALE = [
  [0, 150, "SPARK", "Barely a flicker. Warm hands."],
  [151, 300, "CHARGED", "You felt that one."],
  [301, 450, "OVERCHARGED", "The ground is starting to crack."],
  [451, 600, "PLANET BUSTER", "Visible from orbit."],
  [601, 700, "BEYOND", "The universe noticed."]
];

// ---------------------------------------------------------
//  Matching
// ---------------------------------------------------------

const STOPWORDS = new Set(["the", "a", "an", "no", "wo", "ga", "of"]);

function tokensOf(text) {
  return text.toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/&/g, " and ")
    .replace(/['’`]/g, "")
    .split(/[^a-z0-9]+/)
    .filter((t) => t && !STOPWORDS.has(t));
}

// Folds common romanization / spelling differences:
// Gojou = Gojo, Ruffy = Luffy, Shinobu = Sinobu, Kakkashi = Kakashi
function fold(s) {
  return s
    .replace(/ou|oh(?![aeiou])/g, "o").replace(/uu/g, "u").replace(/oo/g, "o")
    .replace(/aa/g, "a").replace(/ii/g, "i").replace(/ee/g, "e")
    .replace(/tch/g, "c").replace(/sh/g, "s").replace(/ch/g, "c").replace(/ph/g, "f")
    .replace(/l/g, "r").replace(/v/g, "b").replace(/j/g, "z").replace(/y/g, "i")
    .replace(/([a-z])\1+/g, "$1");
}

// "Howl's Moving Castle!" -> "howlsmovingcastle" (kept for older callers)
function normalize(text) { return tokensOf(text).join(""); }

const prepCache = new Map();
function prep(text) {
  let p = prepCache.get(text);
  if (p) return p;
  const tokens = tokensOf(text);
  const sorted = tokens.slice().sort();
  const ftokens = tokens.map(fold);
  const grams = new Set();
  for (const t of ftokens) for (let i = 0; i < t.length - 1; i++) grams.add(t.slice(i, i + 2));
  p = {
    key: tokens.join(""),
    sorted: sorted.join(""),
    fold: fold(tokens.join("")),
    foldSorted: sorted.map(fold).join(""),
    tokens,
    ftokens,
    grams // letter pairs, for a quick "not even close" check
  };
  prepCache.set(text, p);
  return p;
}

// Damerau–Levenshtein (adjacent swaps count as 1), stops early past `max`
function distance(a, b, max) {
  const la = a.length, lb = b.length;
  if (Math.abs(la - lb) > max) return max + 1;
  let prev2 = null, prev = Array.from({ length: lb + 1 }, (_, j) => j);
  for (let i = 1; i <= la; i++) {
    const cur = [i];
    let rowMin = i;
    for (let j = 1; j <= lb; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      let v = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      if (prev2 && i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) v = Math.min(v, prev2[j - 2] + 1);
      cur[j] = v;
      if (v < rowMin) rowMin = v;
    }
    if (rowMin > max) return max + 1;
    prev2 = prev; prev = cur;
  }
  return prev[lb];
}

function ratio(a, b) {
  const L = Math.max(a.length, b.length);
  if (!L) return 0;
  const max = Math.floor(L * 0.4);
  const d = distance(a, b, max);
  return d > max ? 0 : 1 - d / L;
}

// 1 = same answer; ~0.7+ = probably what they meant
function similarity(g, t) {
  if (!g.key || !t.key) return 0;
  if (g.key === t.key || g.sorted === t.sorted || g.fold === t.fold || g.foldSorted === t.foldSorted) return 1;
  // Quick reject: barely any shared letter pairs (and not a prefix of the name)
  if (g.grams.size && t.grams.size && !t.key.startsWith(g.key)) {
    let shared = 0;
    for (const x of g.grams) if (t.grams.has(x)) shared++;
    if (shared / Math.min(g.grams.size, t.grams.size) < 0.34) return 0;
  }
  let best = Math.max(ratio(g.key, t.key), ratio(g.sorted, t.sorted), ratio(g.fold, t.fold), ratio(g.foldSorted, t.foldSorted));

  // Word by word, in any order (also catches "just the last name")
  if (t.tokens.length > 1 || g.tokens.length > 1) {
    let got = 0, len = 0;
    const used = new Set();
    for (const gt of g.ftokens) {
      if (gt.length < 2) continue;
      len += gt.length;
      let m = 0, mi = -1;
      t.ftokens.forEach((tt, i) => {
        const r = gt === tt ? 1 : gt.length >= 4 ? ratio(gt, tt) : 0;
        if (r > m) { m = r; mi = i; }
      });
      if (m >= 0.75) { got += m * gt.length; used.add(mi); }
    }
    if (len) {
      const tLen = t.ftokens.reduce((s, x) => s + x.length, 0) || 1;
      const covered = [...used].reduce((s, i) => s + t.ftokens[i].length, 0) / tLen;
      best = Math.max(best, (got / len) * (0.55 + 0.45 * covered));
    }
  }
  // Started typing the full name
  if (g.key.length >= 4 && t.key.startsWith(g.key)) best = Math.max(best, 0.74 + 0.26 * (g.key.length / t.key.length));
  return best;
}

const SUGGEST_AT = 0.72;

// Returns
//   { type: "exact",   name, tier }               typed it right (order/spelling variants included)
//   { type: "suggest", name, tier, alts: [...] }  "Did you mean ...?" (best first)
//   null                                         nothing close
function checkAnswer(question, input) {
  const g = prep(input);
  if (!g.key) return null;
  const scored = [];
  for (const [tierKey, list] of Object.entries(answersOf(question))) {
    const tier = Number(tierKey);
    for (const entry of list) {
      const names = entry.split("|");
      let best = 0;
      for (const n of names) {
        const s = similarity(g, prep(n));
        if (s > best) best = s;
        if (best === 1) break;
      }
      if (best === 1) return { type: "exact", name: names[0], tier };
      const shortName = prep(names[0]).key.length <= 4;
      if (best >= (shortName ? 0.8 : SUGGEST_AT)) scored.push({ name: names[0], tier, score: best });
    }
  }
  if (!scored.length) return null;
  scored.sort((a, b) => b.score - a.score);
  const seen = new Set();
  const top = scored.filter((s) => !seen.has(s.name) && seen.add(s.name)).slice(0, 3);
  return { type: "suggest", name: top[0].name, tier: top[0].tier, alts: top.slice(1) };
}

// ---------------------------------------------------------
//  Catalog prompts (built from catalog.js on first use)
// ---------------------------------------------------------

let catalogCache = null;
function catalogItems() {
  if (catalogCache || typeof CATALOG === "undefined") return catalogCache || [];
  catalogCache = CATALOG.items.map(([t, a, y, k, m, g, s, e]) => ({
    names: [t].concat(a ? a.split("|") : []), year: y, type: k, members: m,
    genres: g ? g.split(",").map(Number) : [], studios: s ? s.split(",").map(Number) : [], eps: e
  }));
  return catalogCache;
}

const ANY_IDS = (v) => (Array.isArray(v) ? v : [v]);

function matchesWhere(item, w) {
  if (w.years && (item.year < w.years[0] || item.year > w.years[1])) return false;
  if (w.genre && !ANY_IDS(w.genre).some((x) => item.genres.includes(x))) return false;
  if (w.studio && !ANY_IDS(w.studio).some((x) => item.studios.includes(x))) return false;
  if (w.notStudio && ANY_IDS(w.notStudio).some((x) => item.studios.includes(x))) return false;
  if (w.type != null && !ANY_IDS(w.type).includes(item.type)) return false;
  if (w.minEps && item.eps < w.minEps) return false;
  return true;
}

// Rarity inside one prompt: rank by popularity, then slice into tiers
function tierCounts(n) {
  const c1 = Math.min(25, Math.max(3, Math.round(n * 0.03)));
  const c2 = Math.min(90, Math.max(4, Math.round(n * 0.08)));
  const c3 = Math.max(4, Math.round(n * 0.14));
  const c4 = Math.max(4, Math.round(n * 0.2));
  const c5 = Math.max(4, Math.round(n * 0.25));
  return [c1, c2, c3, c4, c5];
}

function buildCatalogAnswers(spec) {
  const answers = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };
  const list = [];
  for (const item of catalogItems()) {
    if (!matchesWhere(item, spec.where || {})) continue;
    // Title-text prompts (letters, one word...) only accept the names that fit
    const names = spec.nameTest ? item.names.filter(spec.nameTest) : item.names;
    if (!names.length) continue;
    list.push(names.join("|"));
  }
  // catalog items are already sorted by popularity
  const counts = tierCounts(list.length);
  let i = 0;
  for (let t = 1; t <= 6; t++) {
    const take = t === 6 ? list.length - i : counts[t - 1];
    answers[t] = list.slice(i, i + take);
    i += take;
  }
  return answers;
}

// Works for both kinds of question
function answersOf(q) {
  if (q.answers) return q.answers;
  if (!q._answers) q._answers = buildCatalogAnswers(q);
  return q._answers;
}

// Pre-process a prompt's names in the background so the first guess is instant
function warmUp(q) {
  for (const list of Object.values(answersOf(q))) for (const e of list) for (const n of e.split("|")) prep(n);
}

// Every anime, for "that's an anime, but it doesn't fit this prompt"
const ANY_ANIME = { id: "any-anime-lookup", catalog: true, where: {} };
function findInCatalog(input) {
  if (!catalogItems().length) return null;
  const m = checkAnswer(ANY_ANIME, input);
  if (!m) return null;
  const item = catalogItems().find((it) => it.names[0] === m.name);
  return { ...m, year: item ? item.year : null };
}

// Catalog prompts (title answers) from questions.js
function catalogQuestions() {
  if (typeof CATALOG_PROMPTS === "undefined" || !catalogItems().length) return [];
  return CATALOG_PROMPTS.map((spec) => ({ ...spec, catalog: true }));
}

// ---------------------------------------------------------
//  Picking prompts — themes + no repeats
// ---------------------------------------------------------

// New prompts written every day by the daily question agent (daily-questions.js).
// Each has a `debut` date: it's that day's Daily, then joins the pool.
const DAILY_EXTRA = (typeof DAILY_QUESTIONS !== "undefined" ? DAILY_QUESTIONS : [])
  .map((q) => (q.where ? { ...q, catalog: true } : q));

const ALL_QUESTIONS = QUESTIONS.concat(catalogQuestions(), DAILY_EXTRA);
ALL_QUESTIONS.forEach((q) => { if (!q.id) q.id = slug(q.prompt); });
const QUESTION_BY_ID = new Map(ALL_QUESTIONS.map((q) => [q.id, q]));
const BY_THEME = Object.fromEntries(THEMES.map((t) => [t, ALL_QUESTIONS.filter((q) => q.theme === t)]));
// The fixed pool (no daily prompts), used when a day has no new prompts
const BASE_BY_THEME = Object.fromEntries(THEMES.map((t) => [t, BY_THEME[t].filter((q) => !q.debut)]));
// A daily prompt isn't playable anywhere until its debut day
const released = (q, dateKey = todayKey()) => !q.debut || q.debut <= dateKey;

function slug(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

function todayKey(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function daysBetween(fromKey, toKey) {
  return Math.round((new Date(toKey + "T00:00:00") - new Date(fromKey + "T00:00:00")) / 86400000);
}

function dayNumber(dateKey) { return Math.max(1, daysBetween(LAUNCH_DATE, dateKey) + 1); }

// Small, fast, seedable random numbers (mulberry32)
function seededRandom(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashString(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

function shuffle(list, rand = Math.random) {
  const a = list.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Daily: one prompt from each of the 7 themes, the same for everyone.
// If the daily question agent wrote 7 new prompts for this date, those are
// the Daily. Otherwise it falls back to the fixed pool: each theme walks a shuffled order seeded by its name and the cycle number,
// so a prompt only comes back after every prompt in its theme has been used
// (every theme is the same size, so that's the whole pool). Each new cycle
// gets a fresh order. HARD prompts go last.
const POOL_START = "2026-11-24"; // day 0 of the current question pool
const DAILY_SEED = 20261124;
function questionsFor(dateKey) {
  const d = Math.max(0, daysBetween(POOL_START, dateKey));
  const fresh = DAILY_EXTRA.filter((q) => q.debut === dateKey);
  const freshThemes = new Set(fresh.map((q) => q.theme));
  const picks = fresh.length === THEMES.length && freshThemes.size === THEMES.length ? fresh : THEMES.map((theme) => {
    const pool = BASE_BY_THEME[theme];
    const cycle = Math.floor(d / pool.length);
    const order = shuffle(pool, seededRandom(DAILY_SEED + hashString(theme) + cycle * 7919));
    return order[d % pool.length];
  });
  const mixed = shuffle(picks, seededRandom(DAILY_SEED + d));
  return mixed.filter((q) => !q.hard).concat(mixed.filter((q) => q.hard));
}

// Prompts this player has already seen (any mode), oldest first.
// Kept in this browser and synced to Supabase (db.js) so it survives forever.
const SEEN_KEY = "kamehameha-seen";
const SEEN_MAX = 5000;
function loadSeen() { try { return JSON.parse(localStorage.getItem(SEEN_KEY)) || []; } catch (e) { return []; } }
function saveSeen(list) { try { localStorage.setItem(SEEN_KEY, JSON.stringify(list.slice(-SEEN_MAX))); } catch (e) {} }
function markSeen(q) {
  if (!q) return;
  const seen = loadSeen().filter((id) => id !== q.id);
  seen.push(q.id);
  saveSeen(seen);
  if (typeof DB !== "undefined") DB.queueSeen(q.id);
}
// Combine the database's history (oldest first) with anything only this browser knows
function mergeRemoteSeen(remote) {
  const remoteSet = new Set(remote);
  saveSeen([...remote, ...loadSeen().filter((id) => !remoteSet.has(id))]);
}

// If this player already met one of today's prompts in Infinite or Party,
// swap it for a fresh prompt from the same theme (so the round still has
// one prompt per theme).
function personalizeDaily(qs) {
  const seen = new Set(loadSeen());
  const taken = new Set(qs.map((q) => q.id));
  return qs.map((q) => {
    if (!seen.has(q.id)) return q;
    const fresh = BY_THEME[q.theme].filter((x) => released(x) && !seen.has(x.id) && !taken.has(x.id));
    if (!fresh.length) return q;
    const pick = fresh[Math.floor(Math.random() * fresh.length)];
    taken.add(pick.id);
    return pick;
  });
}

// Infinite / Party: cycles through all 7 themes in a shuffled order, never
// the same theme twice in a row. Never shows a prompt this player has seen
// (or one that's in today's Daily) while unseen ones are left; after that it
// brings back the ones seen longest ago.
function promptStream() {
  const used = new Set();
  const dailyIds = new Set(questionsFor(todayKey()).map((q) => q.id));
  let lap = [];
  let lastTheme = null;

  function nextTheme() {
    if (!lap.length) {
      lap = shuffle(THEMES);
      if (lap[0] === lastTheme) lap.push(lap.shift());
    }
    return lap.shift();
  }

  function pickFrom(theme) {
    const seenList = loadSeen();
    const seen = new Set(seenList);
    const pool = BY_THEME[theme].filter((q) => released(q) && !used.has(q.id));
    const fresh = pool.filter((q) => !seen.has(q.id) && !dailyIds.has(q.id));
    const unseen = fresh.length ? fresh : pool.filter((q) => !seen.has(q.id));
    if (unseen.length) return unseen[Math.floor(Math.random() * unseen.length)];
    if (!pool.length) return null;
    const age = new Map(seenList.map((id, i) => [id, i]));
    const oldest = pool.slice().sort((a, b) => (age.get(a.id) ?? -1) - (age.get(b.id) ?? -1));
    return oldest[Math.floor(Math.random() * Math.min(3, oldest.length))];
  }

  return function next() {
    for (let tries = 0; tries < THEMES.length * 2; tries++) {
      const theme = nextTheme();
      const q = pickFrom(theme);
      if (q) {
        used.add(q.id);
        lastTheme = theme;
        return q;
      }
    }
    used.clear(); // played every prompt in one sitting: start over
    return next();
  };
}

if (typeof module !== "undefined") {
  module.exports = { normalize, checkAnswer, findInCatalog, questionsFor, promptStream, personalizeDaily, mergeRemoteSeen, loadSeen, markSeen, QUESTION_BY_ID, BY_THEME, dayNumber, todayKey, answersOf, ALL_QUESTIONS, similarity, prep, slug };
}

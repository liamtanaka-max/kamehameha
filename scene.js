// =========================================================
//  PIXEL SCENE — background canvas
//  Night sky, mountains, and original pixel fighters.
//
//  Every answer powers a fighter up, sized by how niche it was:
//  he visibly grows, and as his total climbs he transforms through
//  eight forms (BASE -> SPARK -> SURGE -> OVERDRIVE -> STORM ->
//  ASCENDED -> ZENITH -> the secret VOID form).
//  At the end his aura explodes into a shockwave that wipes out
//  a wave of monsters for every answer.
//
//  Public API:
//    Scene.init(canvas)
//    Scene.setPlayers(names)            one fighter per name ("" = solo, no label)
//    Scene.setActive(i)                 whose turn it is (Party)
//    Scene.setCharge(i, pct)            set a fighter's power (0..1) silently
//    Scene.burst(i, tier, points, pct, label)   power-up for one answer
//    Scene.fizzle(i, label)             a dud (skip / time out)
//    Scene.finale(i, tiers, onDone, onKill, instant)
//    Scene.reset()
//    Scene.FORMS, Scene.formOf(pct)
// =========================================================

const Scene = (() => {
  // ---------- Forms ----------
  // "at" = share of the maximum possible power needed to reach the form
  const FORMS = [
    { name: "BASE",      at: 0,    color: "#7d88ad" },
    { name: "SPARK",     at: 0.06, color: "#9aa4c4" },
    { name: "SURGE",     at: 0.15, color: "#48d6ff" },
    { name: "OVERDRIVE", at: 0.27, color: "#5dff9b" },
    { name: "STORM",     at: 0.42, color: "#b86bff" },
    { name: "ASCENDED",  at: 0.60, color: "#ffd23f" },
    { name: "ZENITH",    at: 0.80, color: "#ff4f8b" },
    { name: "VOID",      at: 0.95, color: "#ffffff" }
  ];
  function levelOf(pct) {
    let l = 0;
    FORMS.forEach((f, i) => { if (pct >= f.at) l = i; });
    return l;
  }
  const SCALE_MAX = 1.9; // fighters grow up to this size at full power

  // ---------- Sprites (original designs) ----------
  const IDLE = [
    "........####........",
    ".......######.......",
    ".......######.......",
    "........####........",
    ".........##.........",
    "......########......",
    ".....##########.....",
    "....###.####.###....",
    "...##...####...##...",
    "..##....####....##..",
    "..###...####...###..",
    "........#####.......",
    ".......#######......",
    "......###...###.....",
    ".....###.....###....",
    "....###.......###...",
    "...###.........###..",
    "..###...........###.",
    ".####...........####"
  ];
  const POWER = [
    "........####........",
    ".......######.......",
    ".......######.......",
    "........####........",
    ".........##.........",
    "....############....",
    "...##############...",
    "..###.########.###..",
    "..##..########..##..",
    "..##...######...##..",
    "..###..######..###..",
    "..###..######..###..",
    ".......#######......",
    "......###...###.....",
    ".....###.....###....",
    "....###.......###...",
    "...###.........###..",
    "..###...........###.",
    ".####...........####"
  ];
  const COLS = 20, ROWS = 19;

  // Original pixel monsters, one per tier. "#" body, "o" glowing eyes.
  const MOB_SPRITES = {
    1: ["..####..", ".######.", "##o##o##", "########", "########", ".######."],
    2: ["#.........#", "##.#####.##", "####o#o####", ".#########.", "..#.###.#..", ".....#....."],
    3: ["..####..", ".#o##o#.", ".######.", "..####..", ".######.", "#.####.#", "#.####.#", "..#..#..", "..#..#..", ".##..##."],
    4: ["...###...", "..#####..", "..#o#o#..", "..#####..", "...###...", ".#######.", "#.#####.#", "#.#####.#", "#.#####.#", "..##.##..", "..##.##..", ".###.###."],
    5: ["....####....", "...######...", "..##o##o##..", "..########..", "...######...", ".##########.", "############", "##.######.##", "##.######.##", "#..######..#", "...######...", "...##..##...", "...##..##...", "..###..###.."],
    6: ["............###.", "...........##o##", "..#.......######", ".###.....###....", "#####...####....", "##############..", ".##############.", "..############..", "...##########...", "....##....##....", "....##....##....", "...###...###...."]
  };
  const MOB_COLORS = { 1: "#9aa4c4", 2: "#48d6ff", 3: "#5dff9b", 4: "#b86bff", 5: "#ffd23f", 6: "#ff4f8b" };
  const DROP_MS = 1000, WAVE_MS = 2600, END_MS = 600;
  const MAX_MOBS = 60;

  let canvas, ctx, W, H, horizon, small;
  let stars = [], ridgeFar = [], ridgeNear = [], rocks = [];
  let fighters = [], active = 0;
  let sparks = [], floaters = [], rings = [], pillars = [], mobs = [], debris = [];
  let firing = null, shake = 0, flash = 0, zoneEnd = 0;

  // ---------- Layout ----------

  function layout() {
    const dpr = window.devicePixelRatio || 1;
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + "px"; canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.imageSmoothingEnabled = false;
    small = W < 600;
    horizon = Math.round(H * (small ? 0.86 : 0.8));
    stars = Array.from({ length: Math.round(W * H / 6000) }, () => ({
      x: Math.random() * W, y: Math.random() * horizon * 0.85,
      s: Math.random() < 0.15 ? 2 : 1, t: Math.random() * 6
    }));
    ridgeFar = makeRidge(0.22, 14);
    ridgeNear = makeRidge(0.12, 8);
    rocks = Array.from({ length: Math.round(W / 40) }, () => ({
      x: Math.random() * W, y: horizon + 6 + Math.random() * (H - horizon - 10),
      w: (1 + Math.floor(Math.random() * 3)) * 2
    }));
    layoutFighters();
  }

  function makeRidge(heightRatio, step) {
    const pts = [];
    let y = horizon - H * heightRatio * 0.5;
    for (let x = 0; x <= W + step; x += step) {
      y += (Math.random() - 0.5) * step * 1.6;
      y = Math.max(horizon - H * heightRatio, Math.min(horizon - 4, y));
      pts.push([x, Math.round(y / 2) * 2]);
    }
    return pts;
  }

  function layoutFighters() {
    const n = fighters.length;
    if (!n) return;
    if (n === 1) {
      const px = small ? 4 : 7;
      const f = fighters[0];
      f.px = px;
      f.cx = 16 + (COLS * px * SCALE_MAX) / 2;
      zoneEnd = f.cx + (COLS * px * SCALE_MAX) / 2;
    } else {
      const left = 10, right = W * (small ? 0.72 : 0.6);
      const slot = (right - left) / n;
      const px = Math.min(small ? 4 : 6, Math.max(1, (slot * 0.95) / (COLS * SCALE_MAX)));
      fighters.forEach((f, i) => { f.px = px; f.cx = left + slot * (i + 0.5); });
      zoneEnd = right;
    }
    fighters.forEach((f) => {
      f.cracks = Array.from({ length: 6 }, () => ({ a: Math.PI + Math.random() * Math.PI, len: 0.5 + Math.random() }));
    });
  }

  function newFighter(name) {
    return { name, pct: 0, shown: 0, level: 0, scale: 1, flexUntil: 0, dimUntil: 0, particles: [], bolts: [], cracks: [], px: 4, cx: 0 };
  }

  // ---------- Helpers ----------

  function hexA(hex, a) {
    const n = parseInt(hex.slice(1), 16);
    return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
  }

  function glowCircle(x, y, r, core, edge) {
    if (!(r > 0)) return;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, "#ffffff");
    g.addColorStop(0.35, core);
    g.addColorStop(1, edge);
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Where a fighter's sprite sits right now
  function geom(f) {
    const s = f.px * f.scale;
    const w = COLS * s, h = ROWS * s;
    return { s, w, h, x: f.cx - w / 2, y: horizon - h + s, top: horizon - h + s, mid: horizon - h * 0.55 };
  }

  function drawSprite(sprite, x0, y0, s, fill) {
    ctx.fillStyle = fill;
    for (let y = 0; y < sprite.length; y++) {
      const row = sprite[y];
      let x = 0;
      while (x < row.length) {
        if (row[x] === ".") { x++; continue; }
        let run = 1;
        while (x + run < row.length && row[x + run] !== ".") run++;
        ctx.fillRect(x0 + x * s, y0 + y * s, run * s + 0.5, s + 0.5);
        x += run;
      }
    }
  }

  function formColor(level, time) {
    if (level === 7) return `hsl(${(time * 90) % 360}, 100%, 70%)`;
    return FORMS[level].color;
  }

  // ---------- Fighters ----------

  function drawFighter(f, i, now, time) {
    f.shown += (f.pct - f.shown) * 0.06;
    const target = 1 + (SCALE_MAX - 1) * Math.min(1, f.shown);
    f.scale += (target - f.scale) * 0.12;
    const g = geom(f);
    const L = f.level;
    const c = formColor(L, time);
    const solo = fighters.length === 1;
    const isActive = solo || i === active || (firing && i === firing.who);
    const dim = now < f.dimUntil;
    const sprite = now < f.flexUntil || (firing && i === firing.who) ? POWER : IDLE;

    ctx.save();
    if (!isActive && !firing) ctx.globalAlpha = 0.55;

    // Ground cracks (ZENITH and up)
    if (L >= 6 && !dim) {
      ctx.strokeStyle = hexA("#ff4f8b", 0.5);
      if (L === 7) ctx.strokeStyle = "rgba(255,255,255,0.5)";
      ctx.lineWidth = 2;
      for (const k of f.cracks) {
        const len = g.w * 0.6 * k.len;
        ctx.beginPath();
        ctx.moveTo(f.cx, horizon + 2);
        ctx.lineTo(f.cx + Math.cos(k.a) * len, horizon + 2 + Math.abs(Math.sin(k.a)) * 10 + 4);
        ctx.stroke();
      }
    }

    // Halo (ASCENDED and up)
    if (L >= 5 && !dim) {
      ctx.save();
      ctx.strokeStyle = c;
      ctx.shadowColor = c;
      ctx.shadowBlur = 14;
      ctx.lineWidth = Math.max(2, g.s * 0.8);
      ctx.beginPath();
      ctx.ellipse(f.cx, g.top - g.s * 2.5, g.w * 0.22, g.s * 1.6, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    // Aura glow (SPARK and up): a glowing copy of the silhouette, flickering from SURGE
    if (L >= 1 && !dim) {
      ctx.save();
      ctx.shadowColor = c;
      ctx.shadowBlur = 8 + L * 7 + Math.sin(time * 14 + i) * (L >= 2 ? 5 : 1);
      ctx.globalAlpha *= 0.3 + L * 0.08;
      const j = L >= 2 ? (Math.random() - 0.5) * g.s * 0.6 : 0;
      drawSprite(sprite, g.x + j, g.y - (L >= 3 ? g.s * 0.5 : 0), g.s, c);
      if (L >= 4) drawSprite(sprite, g.x - j, g.y - g.s, g.s * 1.0, hexA(L === 7 ? "#ffffff" : FORMS[L].color, 0.5));
      ctx.restore();
    }

    // Flame particles rising off the body (OVERDRIVE and up)
    if (L >= 3 && !dim && Math.random() < 0.25 + L * 0.1) {
      f.particles.push({
        x: g.x + g.w * (0.2 + Math.random() * 0.6), y: g.y + g.h * (0.2 + Math.random() * 0.7),
        vy: -(0.6 + Math.random() * (0.6 + L * 0.25)), life: 1, s: Math.max(2, g.s * (0.4 + Math.random() * 0.5)),
        c: Math.random() < 0.3 ? "#ffffff" : (L === 7 ? `hsl(${Math.random() * 360},100%,70%)` : FORMS[L].color)
      });
    }
    f.particles = f.particles.filter((p) => {
      p.y += p.vy; p.x += Math.sin(p.y * 0.1) * 0.4; p.life -= 0.02;
      ctx.globalAlpha = Math.max(0, p.life) * (isActive || firing ? 1 : 0.55);
      ctx.fillStyle = p.c;
      ctx.fillRect(Math.round(p.x), Math.round(p.y), p.s, p.s);
      return p.life > 0;
    });
    ctx.globalAlpha = isActive || firing ? 1 : 0.55;

    // Body: dark silhouette with a rim light; VOID turns it white
    drawSprite(sprite, g.x - 1, g.y - 1, g.s, L === 7 ? "#b8c7ff" : "#2a3a6b");
    drawSprite(sprite, g.x, g.y, g.s, L === 7 ? "#ffffff" : "#02040a");

    // Lightning arcs (STORM and up)
    if (L >= 4 && !dim) {
      if (Math.random() < 0.18 + (L - 4) * 0.1) {
        const pts = [];
        let x = g.x + Math.random() * g.w, y = g.y + Math.random() * g.h * 0.4;
        for (let k = 0; k < 5; k++) {
          pts.push([x, y]);
          x += (Math.random() - 0.5) * g.w * 0.5;
          y += g.h * 0.15 * Math.random() + 4;
        }
        f.bolts.push({ pts, until: now + 120 });
      }
      f.bolts = f.bolts.filter((b) => {
        if (now > b.until) return false;
        ctx.save();
        ctx.strokeStyle = "#ffffff";
        ctx.shadowColor = c;
        ctx.shadowBlur = 10;
        ctx.lineWidth = Math.max(1.5, g.s * 0.35);
        ctx.beginPath();
        b.pts.forEach(([x, y], k) => (k ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
        ctx.stroke();
        ctx.restore();
        return true;
      });
    }

    // Orbiting runes (ZENITH and up)
    if (L >= 6 && !dim) {
      const n = L === 7 ? 8 : 6;
      for (let k = 0; k < n; k++) {
        const a = time * (L === 7 ? 2.2 : 1.6) + (k / n) * Math.PI * 2;
        const rx = g.w * 0.62, ry = g.h * 0.18;
        const x = f.cx + Math.cos(a) * rx, y = g.mid + Math.sin(a) * ry;
        ctx.save();
        ctx.fillStyle = L === 7 ? `hsl(${(time * 90 + k * 45) % 360},100%,70%)` : c;
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = 10;
        const sz = Math.max(3, g.s * 0.9);
        ctx.fillRect(x - sz / 2, y - sz / 2, sz, sz);
        ctx.restore();
      }
    }
    ctx.restore();

    // Labels: form name above, player name below, turn marker
    const labelSize = solo ? (small ? 9 : 11) : Math.max(7, Math.min(10, f.px * 2.4));
    ctx.save();
    ctx.textAlign = "center";
    ctx.font = `${labelSize}px "Press Start 2P", monospace`;
    // Hide the head label while this fighter's "+points" text is floating, so they don't overlap.
    const busy = floaters.some((fl) => fl.who === fighters.indexOf(f));
    if (L >= 1 && !busy) {
      ctx.fillStyle = c;
      ctx.shadowColor = c;
      ctx.shadowBlur = 8;
      ctx.globalAlpha = isActive || firing ? 1 : 0.6;
      ctx.fillText(FORMS[L].name, f.cx, g.top - (L >= 5 ? g.s * 5 : g.s * 1.5) - 4);
    }
    ctx.shadowBlur = 0;
    if (f.name) {
      ctx.globalAlpha = isActive ? 1 : 0.6;
      ctx.fillStyle = isActive ? "#48d6ff" : "#7d88ad";
      ctx.fillText(f.name.toUpperCase().slice(0, 10), f.cx, horizon + labelSize + 10);
      if (isActive && !firing && fighters.length > 1) {
        const bob = Math.sin(time * 6) * 3;
        ctx.fillStyle = "#48d6ff";
        ctx.fillText("▼", f.cx, horizon + labelSize * 2 + 20 + bob);
      }
    }
    ctx.restore();
  }

  // ---------- Effects ----------

  function spark(f, v, c) {
    const g = geom(f);
    return { x: g.x + Math.random() * g.w, y: horizon, v, life: 1, c };
  }

  function drawSparks() {
    sparks = sparks.filter((s) => {
      s.y -= s.v; s.life -= 0.012;
      ctx.globalAlpha = Math.max(0, s.life);
      ctx.fillStyle = s.c;
      ctx.fillRect(Math.round(s.x), Math.round(s.y), 2, 2);
      return s.life > 0;
    });
    ctx.globalAlpha = 1;
  }

  function drawPillars(now) {
    pillars = pillars.filter((p) => {
      const t = (now - p.start) / p.dur;
      if (t >= 1) return false;
      const f = fighters[p.who];
      if (!f) return false;
      const g = geom(f);
      const maxH = horizon * (small ? 0.12 + (p.tier - 3) * 0.08 : 0.25 + (p.tier - 3) * 0.22);
      const h = maxH * Math.min(1, t * 3);
      const w = g.w * (0.4 + p.tier * 0.12) * (1 - t * 0.5);
      ctx.save();
      ctx.globalAlpha = 0.55 * (1 - t);
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 30;
      ctx.fillStyle = p.color;
      ctx.fillRect(f.cx - w / 2, horizon - h, w, h);
      ctx.globalAlpha = 0.8 * (1 - t);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(f.cx - w / 8, horizon - h, w / 4, h);
      ctx.restore();
      return true;
    });
  }

  function drawRings(now) {
    rings = rings.filter((r) => {
      const p = (now - r.start) / r.dur;
      if (p >= 1) return false;
      if (p < 0) return true;
      ctx.save();
      ctx.globalAlpha = 1 - p;
      ctx.strokeStyle = r.color;
      ctx.lineWidth = 2 + r.tier;
      ctx.shadowColor = r.color;
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(r.x, r.y, r.max * (1 - Math.pow(1 - p, 3)), 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
      return true;
    });
  }

  function drawFloaters(now) {
    floaters = floaters.filter((fl) => {
      const p = (now - fl.start) / fl.dur;
      if (p >= 1) return false;
      const f = fighters[fl.who];
      if (!f) return false;
      const g = geom(f);
      // Points float just above the form label; a new-form banner sits higher so they never overlap.
      const y = Math.max(fl.big ? 40 : 70, fl.big ? g.top - (small ? 95 : 140) - p * 25 : g.top - (small ? 42 : 62) - p * 40);
      ctx.save();
      ctx.globalAlpha = p < 0.12 ? p / 0.12 : 1 - Math.max(0, (p - 0.6) / 0.4);
      ctx.textAlign = fighters.length === 1 && !fl.big ? "left" : "center";
      const x = fighters.length === 1 && !fl.big ? g.x : Math.min(W - 80, Math.max(80, f.cx));
      ctx.fillStyle = fl.color;
      ctx.shadowColor = fl.color;
      ctx.shadowBlur = 10;
      ctx.font = `${fl.size}px "Press Start 2P", monospace`;
      ctx.fillText(fl.text, x, y);
      if (fl.sub) {
        ctx.font = `${Math.round(fl.size * 0.55)}px "Press Start 2P", monospace`;
        ctx.fillText(fl.sub, x, y + fl.size * 0.9);
      }
      ctx.restore();
      return true;
    });
  }

  // ---------- Mobs + finale ----------

  function spawnMobs(tiers, startX) {
    let list = [];
    tiers.forEach((t, wave) => { for (let k = t; k >= 1; k--) list.push({ type: k, wave }); });
    if (list.length > MAX_MOBS) {
      list = list.map((m, i) => ({ ...m, i })).sort((a, b) => b.type - a.type).slice(0, MAX_MOBS).sort((a, b) => a.i - b.i);
    }
    const right = W - 12;
    const mp = small ? 2 : 4;
    const gap = small ? 3 : 8;
    const widths = list.map((m) => MOB_SPRITES[m.type][0].length * mp);
    const natural = widths.reduce((s, w) => s + w + gap, 0);
    const room = Math.max(60, right - startX);
    const scale = natural > room ? room / natural : 1;
    const extra = natural < room ? (room - natural) / Math.max(1, list.length) : 0;
    let x = startX;
    mobs = list.map((m, i) => {
      const g = MOB_SPRITES[m.type];
      const w = widths[i], h = g.length * mp;
      const mob = { ...m, x, w, h, mp, y: horizon - h + 1, delay: i * Math.min(40, 600 / Math.max(1, list.length)), dead: false, bob: Math.random() * 6 };
      x += (w + gap) * scale + extra;
      return mob;
    });
    mobs.sort((a, b) => b.type - a.type);
  }

  function drawMobs(now, time) {
    const t = now - firing.start;
    for (const m of mobs) {
      if (m.dead) continue;
      const drop = Math.min(1, Math.max(0, (t - m.delay) / 350));
      if (drop <= 0) continue;
      const g = MOB_SPRITES[m.type];
      const c = MOB_COLORS[m.type];
      const oy = m.y - (1 - drop * drop) * 160 + Math.round(Math.sin(time * 6 + m.bob) * (m.type === 2 ? 3 : 1));
      ctx.save();
      ctx.shadowColor = c;
      ctx.shadowBlur = 6 + m.type * 2;
      for (let gy = 0; gy < g.length; gy++) {
        const row = g[gy];
        for (let gx = 0; gx < row.length; gx++) {
          const ch = row[row.length - 1 - gx]; // mirrored: monsters face the fighters
          if (ch === ".") continue;
          ctx.fillStyle = ch === "o" ? c : "#0b1024";
          ctx.fillRect(m.x + gx * m.mp, oy + gy * m.mp, m.mp, m.mp);
        }
      }
      ctx.restore();
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = c;
      ctx.fillRect(m.x, oy + m.h, m.w, 1);
      ctx.globalAlpha = 1;
    }
  }

  function explode(m) {
    m.dead = true;
    const c = MOB_COLORS[m.type];
    for (let i = 0; i < 8 + m.type * 6; i++) {
      debris.push({
        x: m.x + Math.random() * m.w, y: m.y + Math.random() * m.h,
        vx: (Math.random() - 0.2) * (2 + m.type), vy: -Math.random() * (2 + m.type),
        life: 1, c: Math.random() < 0.3 ? "#ffffff" : c, s: Math.random() < 0.3 ? 3 : 2
      });
    }
    rings.push({ start: performance.now(), tier: Math.min(3, m.type), color: c, dur: 350, max: 10 + m.type * 6, x: m.x + m.w / 2, y: m.y + m.h / 2 });
    shake = Math.max(shake, 1 + m.type * 0.8);
    firing.kills++;
    firing.onKill && firing.onKill(firing.kills, m.type);
  }

  function drawDebris() {
    debris = debris.filter((d) => {
      d.x += d.vx; d.y += d.vy; d.vy += 0.15; d.life -= 0.02;
      ctx.globalAlpha = Math.max(0, d.life);
      ctx.fillStyle = d.c;
      ctx.fillRect(Math.round(d.x), Math.round(d.y), d.s, d.s);
      return d.life > 0 && d.y < H;
    });
    ctx.globalAlpha = 1;
  }

  // The leader's aura explodes into a wall of energy that sweeps the field
  function drawWave(now, time) {
    const t = now - firing.start;
    const f = fighters[firing.who];
    if (!f) return;
    const g = geom(f);
    const c = formColor(f.level, time);
    if (t < DROP_MS) {
      shake = Math.max(shake, 1 + firing.pct * 2);
      if (Math.random() < 0.6) sparks.push(spark(f, 1 + Math.random() * 4, f.level === 7 ? "#ffffff" : FORMS[f.level].color));
      return;
    }
    if (!firing.burst) {
      firing.burst = true;
      flash = 0.5 + firing.pct * 0.4;
      rings.push({ start: now, tier: 6, color: f.level === 7 ? "#ffffff" : FORMS[f.level].color, dur: 900, max: W * 0.5, x: f.cx, y: g.mid });
    }
    const p = Math.min(1, (t - DROP_MS) / WAVE_MS);
    const ease = 1 - Math.pow(1 - p, 2);
    const startX = f.cx;
    const x = startX + (W - startX + 80) * ease;
    const hgt = 40 + firing.pct * horizon * 0.65;
    const wid = 14 + firing.pct * 30;
    ctx.save();
    const grad = ctx.createLinearGradient(x - wid * 3, 0, x + wid, 0);
    grad.addColorStop(0, "rgba(0,0,0,0)");
    grad.addColorStop(0.7, hexA(f.level === 7 ? "#ffffff" : FORMS[f.level].color, 0.55));
    grad.addColorStop(1, "#ffffff");
    ctx.fillStyle = grad;
    ctx.shadowColor = c;
    ctx.shadowBlur = 30;
    ctx.beginPath();
    ctx.moveTo(x - wid * 3, horizon);
    ctx.quadraticCurveTo(x + wid, horizon - hgt * 0.5, x - wid, horizon - hgt);
    ctx.lineTo(x + wid * 0.6, horizon - hgt);
    ctx.quadraticCurveTo(x + wid * 2, horizon - hgt * 0.5, x + wid, horizon);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    if (Math.random() < 0.8) debris.push({ x, y: horizon - Math.random() * 6, vx: -1 - Math.random() * 2, vy: -Math.random() * 3, life: 1, c: "#2a3a6b", s: 3 });

    for (const m of mobs) if (!m.dead && x >= m.x + m.w * 0.3) explode(m);
    if (p < 1) shake = Math.max(shake, 2 + firing.pct * 6);
    if (p >= 1 && t > DROP_MS + WAVE_MS + END_MS && !firing.done) {
      firing.done = true;
      firing.onDone && firing.onDone(firing.kills);
    }
  }

  // ---------- Main loop ----------

  function frame() {
    try { draw(); }
    catch (e) { console.warn("scene frame error", e); try { ctx.restore(); } catch (e2) {} }
    if (firing && !firing.done && performance.now() - firing.start > DROP_MS + WAVE_MS + END_MS + 400) {
      firing.done = true;
      firing.onDone && firing.onDone(firing.kills);
    }
    requestAnimationFrame(frame);
  }

  function draw() {
    const now = performance.now();
    const time = now / 1000;
    ctx.save();
    if (shake > 0) {
      ctx.translate((Math.random() - 0.5) * shake, (Math.random() - 0.5) * shake);
      shake *= 0.9;
      if (shake < 0.3) shake = 0;
    }
    drawBackground(time);
    if (firing) { drawMobs(now, time); drawDebris(); }
    drawPillars(now);
    fighters.forEach((f, i) => drawFighter(f, i, now, time));
    drawSparks();
    drawRings(now);
    if (firing && !firing.instant) drawWave(now, time);
    drawFloaters(now);
    ctx.restore();
    if (flash > 0.01) {
      ctx.fillStyle = `rgba(255,255,255,${flash})`;
      ctx.fillRect(0, 0, W, H);
      flash *= 0.88;
    }
  }

  function drawBackground(time) {
    const sky = ctx.createLinearGradient(0, 0, 0, horizon);
    sky.addColorStop(0, "#050a14");
    sky.addColorStop(1, "#121a33");
    ctx.fillStyle = sky;
    ctx.fillRect(-20, -20, W + 40, H + 40);
    for (const s of stars) {
      const a = 0.35 + 0.65 * Math.abs(Math.sin(time * 0.8 + s.t));
      ctx.fillStyle = `rgba(200,220,255,${a})`;
      ctx.fillRect(Math.round(s.x), Math.round(s.y), s.s, s.s);
    }
    drawRidge(ridgeFar, "#0d1428");
    drawRidge(ridgeNear, "#0a1020");
    ctx.fillStyle = "#070b17";
    ctx.fillRect(-20, horizon, W + 40, H - horizon + 20);
    ctx.fillStyle = "#1a2445";
    ctx.fillRect(-20, horizon, W + 40, 2);
    ctx.fillStyle = "#111933";
    for (const r of rocks) ctx.fillRect(Math.round(r.x), Math.round(r.y), r.w, 2);
  }

  function drawRidge(pts, fill) {
    ctx.fillStyle = fill;
    for (let i = 0; i < pts.length - 1; i++) {
      const [x, y] = pts[i];
      ctx.fillRect(x, y, pts[i + 1][0] - x + 1, horizon - y + 1);
    }
  }

  // ---------- Public ----------

  return {
    FORMS,
    formOf(pct) { const l = levelOf(Math.min(1, pct)); return { level: l, ...FORMS[l] }; },

    init(c) {
      canvas = c; ctx = c.getContext("2d");
      fighters = [newFighter("")];
      layout();
      window.addEventListener("resize", layout);
      requestAnimationFrame(frame);
    },

    setPlayers(names) {
      fighters = (names && names.length ? names : [""]).map(newFighter);
      active = 0;
      layoutFighters();
    },

    setActive(i) { active = i; },

    setCharge(i, pct) {
      const f = fighters[i];
      if (!f) return;
      f.pct = Math.min(1, pct);
      f.level = levelOf(f.pct);
    },

    // One answer's power-up. Bigger tier = bigger everything; crossing into a
    // new form triggers a transformation.
    burst(i, tier, points, pct, label) {
      const f = fighters[i];
      if (!f) return;
      const now = performance.now();
      const before = f.level;
      f.pct = Math.min(1, pct);
      f.level = levelOf(f.pct);
      f.flexUntil = now + 500 + tier * 180;
      const color = MOB_COLORS[tier];
      const g = geom(f);
      if (tier >= 3) pillars.push({ start: now, who: i, tier, color, dur: 500 + tier * 280 });
      rings.push({ start: now, tier, color, dur: 500 + tier * 150, max: 18 + tier * (small ? 14 : 28), x: f.cx, y: g.mid });
      shake = Math.max(shake, tier * tier * 0.5);
      for (let k = 0; k < tier * tier * 3; k++) sparks.push(spark(f, 1 + Math.random() * tier, color));
      floaters.push({ start: now, dur: 1600, who: i, text: `+${points}`, sub: label, color, size: small ? 11 + tier * 1.5 : 13 + tier * 2.5 });

      if (f.level > before) {
        const form = FORMS[f.level];
        const fc = f.level === 7 ? "#ffffff" : form.color;
        flash = Math.max(flash, 0.25 + f.level * 0.06);
        shake = Math.max(shake, 8 + f.level * 2);
        rings.push({ start: now + 120, tier: 6, color: fc, dur: 900, max: 60 + f.level * 30, x: f.cx, y: g.mid });
        for (let k = 0; k < 40 + f.level * 10; k++) sparks.push(spark(f, 1 + Math.random() * 6, fc));
        floaters.push({ start: now + 250, dur: 2000, who: i, text: `${form.name}!`, sub: "NEW FORM", color: fc, size: small ? 16 : 26, big: true });
      }
    },

    fizzle(i, label) {
      const f = fighters[i];
      if (!f) return;
      const now = performance.now();
      f.dimUntil = now + 900;
      floaters.push({ start: now, dur: 1400, who: i, text: "+0", sub: label, color: "#7d88ad", size: small ? 12 : 14 });
      for (let k = 0; k < 10; k++) sparks.push(spark(f, 0.4 + Math.random(), "#4a5578"));
    },

    // tiers: one entry per answer (0 = none). Each summons a wave of monsters.
    finale(i, tiers, onDone, onKill, instant) {
      pillars = []; floaters = []; rings = []; debris = []; mobs = [];
      const f = fighters[i] || fighters[0];
      firing = {
        who: fighters[i] ? i : 0, start: performance.now(), pct: f ? f.pct : 0,
        onDone, onKill, kills: 0, done: !!instant, instant: !!instant
      };
      if (!instant) spawnMobs(tiers || [], zoneEnd + (small ? 20 : 50));
    },

    reset() {
      firing = null;
      mobs = []; debris = []; pillars = []; floaters = []; rings = []; sparks = [];
      fighters = [newFighter("")];
      active = 0;
      layoutFighters();
    }
  };
})();

// =========================================================
//  SUPABASE SYNC
//  Remembers every prompt this player has ever seen (all modes,
//  Party included) and gets the official Daily set, so prompts
//  never repeat. If the database can't be reached, the game keeps
//  working with what's saved in this browser.
//
//  The key below is Supabase's public "publishable" key — it is meant
//  to be in web pages. The tables are locked; the page can only call
//  the three kh_* functions defined in supabase/schema.sql.
// =========================================================

const SUPABASE_URL = "https://aehyljylidmxvszgzfmd.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlaHlsanlsaWRteHZzemd6Zm1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEzNzYwMjIsImV4cCI6MjEwNjk1MjAyMn0.jE4bNefTYxFo620qVlX77fUlG6SK_CJzr1TPDrFJ5K8";

const DB = (() => {
  const PLAYER_KEY = "kamehameha-player";
  const PENDING_KEY = "kamehameha-pending-seen";
  let online = null; // null = unknown, true/false after first call
  let flushTimer = null;

  function uuid() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
  }

  function playerId() {
    try {
      let id = localStorage.getItem(PLAYER_KEY);
      if (!/^[0-9a-f-]{36}$/i.test(id || "")) {
        id = uuid();
        localStorage.setItem(PLAYER_KEY, id);
      }
      return id;
    } catch (e) {
      return (playerId.mem = playerId.mem || uuid());
    }
  }

  async function rpc(name, body, timeoutMs = 4000, keepalive = false) {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), timeoutMs);
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${name}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` },
        body: JSON.stringify(body),
        signal: ctrl.signal,
        keepalive
      });
      if (!res.ok) throw new Error(`${name} ${res.status}`);
      online = true;
      const text = await res.text();
      return text ? JSON.parse(text) : null;
    } catch (e) {
      online = false;
      throw e;
    } finally {
      clearTimeout(t);
    }
  }

  // ---- seen prompts ----

  function pending() { try { return JSON.parse(localStorage.getItem(PENDING_KEY)) || []; } catch (e) { return []; } }
  function setPending(list) { try { localStorage.setItem(PENDING_KEY, JSON.stringify(list.slice(-500))); } catch (e) {} }

  async function flush(keepalive = false) {
    clearTimeout(flushTimer);
    const ids = pending();
    if (!ids.length) return;
    try {
      await rpc("kh_mark_seen", { p_player: playerId(), p_ids: ids.slice(0, 200) }, 4000, keepalive);
      const sent = new Set(ids.slice(0, 200));
      setPending(pending().filter((id) => !sent.has(id)));
      if (pending().length) flush();
    } catch (e) { /* stays pending; retried next time */ }
  }

  function queueSeen(id) {
    const list = pending();
    if (!list.includes(id)) list.push(id);
    setPending(list);
    clearTimeout(flushTimer);
    flushTimer = setTimeout(flush, 400);
  }

  // Merge the server's history into this browser (and upload anything local-only)
  async function pullSeen(localSeen) {
    const remote = (await rpc("kh_get_seen", { p_player: playerId() })) || [];
    const remoteSet = new Set(remote);
    const localOnly = localSeen.filter((id) => !remoteSet.has(id));
    if (localOnly.length) {
      setPending([...new Set([...pending(), ...localOnly])]);
      flush();
    }
    return remote;
  }

  // ---- daily ----

  async function getDaily(dateKey, pools) {
    const ids = await rpc("kh_get_daily", {
      p_day: dateKey,
      p_character: pools.character,
      p_title: pools.title,
      p_hard: pools.hard
    }, 5000);
    return Array.isArray(ids) ? ids : null;
  }

  window.addEventListener("pagehide", () => flush(true));
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") flush(true); });

  return {
    playerId, queueSeen, pullSeen, getDaily, flush,
    get online() { return online; }
  };
})();

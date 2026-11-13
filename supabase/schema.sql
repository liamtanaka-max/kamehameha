-- =========================================================
--  KAMEHAME-HA! — Supabase schema
--  Prompt history so prompts never repeat.
--
--  kh_player_seen : every prompt each player (one per browser) has seen
--  kh_daily       : the official 7 prompts for each day
--
--  Tables have row-level security on and NO policies, so the public
--  key can't read or write them directly. The page can only call the
--  three kh_* functions below.
-- =========================================================

create table if not exists public.kh_player_seen (
  player_id uuid not null,
  prompt_id text not null check (char_length(prompt_id) between 1 and 120),
  seen_at   timestamptz not null default now(),
  primary key (player_id, prompt_id)
);

create table if not exists public.kh_daily (
  day        date primary key,
  prompt_ids text[] not null,
  created_at timestamptz not null default now()
);

alter table public.kh_player_seen enable row level security;
alter table public.kh_daily enable row level security;
revoke all on public.kh_player_seen from anon, authenticated;
revoke all on public.kh_daily from anon, authenticated;

-- Record prompts a player has seen (re-seeing just refreshes the time)
create or replace function public.kh_mark_seen(p_player uuid, p_ids text[])
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if p_player is null or p_ids is null or cardinality(p_ids) = 0 then
    return;
  end if;
  if cardinality(p_ids) > 200 then
    raise exception 'too many ids';
  end if;
  insert into public.kh_player_seen (player_id, prompt_id)
  select p_player, id
  from unnest(p_ids) as id
  where id ~ '^[a-z0-9-]{1,120}$'
  on conflict (player_id, prompt_id) do update set seen_at = now();
end;
$$;

-- Everything a player has seen, oldest first
create or replace function public.kh_get_seen(p_player uuid)
returns text[]
language sql
stable
security definer
set search_path = ''
as $$
  select coalesce(array_agg(prompt_id order by seen_at), '{}')
  from (
    select prompt_id, seen_at
    from public.kh_player_seen
    where player_id = p_player
    order by seen_at desc
    limit 10000
  ) recent;
$$;

-- Internal: pick n ids from a pool, never-used-in-a-Daily first, then least recently used
create or replace function public.kh_pick(p_pool text[], p_n int, p_exclude text[])
returns text[]
language sql
stable
security definer
set search_path = ''
as $$
  with used as (
    select u.id, max(d.day) as last_day
    from public.kh_daily d, unnest(d.prompt_ids) as u(id)
    group by u.id
  )
  select coalesce(array_agg(id), '{}')
  from (
    select p.id
    from unnest(p_pool) as p(id)
    left join used on used.id = p.id
    where p.id ~ '^[a-z0-9-]{1,120}$'
      and not (p.id = any (coalesce(p_exclude, '{}')))
    order by used.last_day nulls first, random()
    limit p_n
  ) picked;
$$;

-- The Daily for a given day. The first player of the day creates it from
-- prompts no earlier Daily has used; everyone after gets the same set.
create or replace function public.kh_get_daily(p_day date, p_character text[], p_title text[], p_hard text[])
returns text[]
language plpgsql
security definer
set search_path = ''
as $$
declare
  existing text[];
  c text[];
  t text[];
  h text[];
  result text[];
begin
  select prompt_ids into existing from public.kh_daily where day = p_day;
  if existing is not null then
    return existing;
  end if;

  -- Only today-ish can be created (time zones differ), never future days
  if p_day < current_date - 1 or p_day > current_date + 1 then
    return null;
  end if;
  if cardinality(p_character) > 3000 or cardinality(p_title) > 3000 or cardinality(p_hard) > 3000 then
    raise exception 'pool too large';
  end if;

  c := public.kh_pick(p_character, 3, '{}');
  t := public.kh_pick(p_title, 2, c);
  h := public.kh_pick(p_hard, 2, c || t);
  if cardinality(c) < 3 or cardinality(t) < 2 or cardinality(h) < 2 then
    return null;
  end if;

  -- Order: character, title, character, title, character, hard, hard
  result := array[c[1], t[1], c[2], t[2], c[3], h[1], h[2]];

  insert into public.kh_daily (day, prompt_ids) values (p_day, result)
  on conflict (day) do nothing;

  select prompt_ids into result from public.kh_daily where day = p_day;
  return result;
end;
$$;

revoke all on function public.kh_pick(text[], int, text[]) from public, anon, authenticated;
revoke all on function public.kh_mark_seen(uuid, text[]) from public;
revoke all on function public.kh_get_seen(uuid) from public;
revoke all on function public.kh_get_daily(date, text[], text[], text[]) from public;
grant execute on function public.kh_mark_seen(uuid, text[]) to anon, authenticated;
grant execute on function public.kh_get_seen(uuid) to anon, authenticated;
grant execute on function public.kh_get_daily(date, text[], text[], text[]) to anon, authenticated;

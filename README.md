# sarthak-sharma2003.github.io

Personal portfolio, styled as a live football broadcast: cobalt plates, a score bug, a live ticker, and Edmonton snow.
Live at **https://sarthak-sharma2003.github.io** (once published, see below).

## Adding a project (the whole point of this site)

Edit [`src/data/projects.ts`](src/data/projects.ts) and add one entry:

```ts
{
  title: 'My Next Thing',
  status: 'building',   // 'live' | 'shipped' | 'building' | 'next'
  year: '2026',
  description: 'What it does and why it matters — lead with the outcome.',
  tags: ['Python', 'Whatever'],
  repo: 'my-repo-name', // optional: enables live "pushed Xd ago" stat
  demo: 'https://...',  // optional
  shot: '/shots/my-thing.webp', // optional: screenshot of the live app (public/shots/)
}
```

That's it. No other file needs touching.

## Local dev

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # production build → dist/
```

## Publishing (one-time setup)

1. Create a **public** GitHub repo named exactly `sarthak-sharma2003.github.io`.
2. Push this folder to it (branch `main`).
3. On GitHub: repo → Settings → Pages → Source: **GitHub Actions**.
4. The included workflow (`.github/workflows/deploy.yml`) builds and deploys
   on every push to `main`.

## What's live on the page

- **Cold open** — the hero starts dark; four floodlight banks switch on in the snow, then the
  player card (cartoon Sarthak, real stats) flips in and tilts toward the cursor with holo foil.
- **The ball** — a kickable football with simple physics; it knocks the letters of the name around.
- **Live ticker** (bottom of the hero) — real Edmonton weather (Open-Meteo), local clock,
  your latest GitHub push, and every `live` project, fetched client-side. No keys, no backend.
- **Score bug** (top-left) — its match clock is scroll progress: 0' at the top, FT at the footer.
- **Shelf rows** — the real live apps on angled "monitors" that pan through the page on hover,
  plus last-push date + language from the GitHub API.
- **Toolkit** — a tactics board; skills are magnets you can drag around.
- **Cursor** — says what a click does: Kick, Shoot, Open app, Drag.
- **Penalties** — a 5-shot shootout with a broadcast tracker. Keeper difficulty is selectable.
- **Companion** — opt-in cursor pet (husky / cat / rolling ball / magpie) behind the
  "adopt a companion" chip, bottom-right. Lazy-follows the cursor, idles when you stop,
  naps in the corner during the penalties, remembers your choice (localStorage),
  ambles along the bottom on touch devices, and stays fully off under
  `prefers-reduced-motion`. Restraint rule: if the site ever needs trimming for
  professionalism, this goes first — never the shelf or the live data.

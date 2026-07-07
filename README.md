# sarthak-sharma2003.github.io

Personal portfolio — dark, data-driven, snowing.
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

- **Telemetry bar** — real Edmonton weather (Open-Meteo), local clock,
  and your latest GitHub push, fetched client-side. No keys, no backend.
- **Shelf cards** — enriched with last-push date + language from the GitHub API.
- **Halftime** — a 5-shot penalty mini-game. The keeper reads your mind 35% of the time.

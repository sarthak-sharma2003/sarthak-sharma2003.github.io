# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers screening Sarthak for software development, data science / engineering, and analytics roles (confirmed 2026-11-17). They arrive from a résumé, LinkedIn or an application link, usually on a laptop between other candidates, sometimes on a phone. Their job: decide in under a minute whether he builds real things and is worth a call.

Secondary: people following a project link (HitApply users, FPL players, county staff) who land here and want to see what else he made.

## Product Purpose

A personal portfolio for Sarthak Sharma, BSc Computing Science with a Business minor at the University of Alberta, Edmonton. It shows shipped and live projects, internship experience, toolkit and certifications, and makes contacting him one click. Success: a recruiter leaves knowing what he builds, sees proof that it runs in production, and emails or opens LinkedIn.

## Positioning

He ships things that are actually live and kept alive: a product with real users (HitApply), nightly-rebuilt model-driven apps (FPL / UCL scouts), a county climate-shelter finder built with a community partner, a self-refreshing World Cup scraper. The site's live GitHub data proves the "still running" claim rather than asserting it.

## Operating Context

Static Astro site on GitHub Pages, published by GitHub Actions on push to `main`. Client-side only: Open-Meteo weather for Edmonton, GitHub public API for repo push dates and languages (cached in sessionStorage). No backend, no keys.

## Capabilities and Constraints

- Projects are one list in `src/data/projects.ts`; order in the file is order on the page; adding a project must stay a one-entry edit. Statuses: live, shipped, building, next (one reserved "next" slot on purpose).
- Certifications are one list in `src/data/certs.ts`; verification links slot in when he has them.
- Playful features stay (confirmed 2026-11-17), restyled to fit: 5-shot penalty mini-game with keeper difficulty and trophy popup, opt-in cursor companion (husky / cat / ball / magpie), cartoon mascot of him (curly hair, round glasses, red bomber, black tee, white sneakers), Edmonton snow.
- Must respect `prefers-reduced-motion`.

## Brand Commitments

- Name: Sarthak Sharma. Edmonton, Alberta. Contact: sarthak7@ualberta.ca, github.com/sarthak-sharma2003, linkedin.com/in/sarthak-sharma07.
- Voice: plain, confident, a little dry and funny ("he read you like a csv", "snow is free in Edmonton"). Outcome-first bullets.
- Football is a real part of his identity (FPL, UCL, World Cup projects, the penalty game).

## Evidence on Hand

Real project descriptions, tags, repos and demo links in `src/data/projects.ts`; real experience bullets (PCL Construction, Safety First Industrial) and awards in `src/components/Experience.astro`. No headshot photo, no testimonials, no metrics beyond what those files state. Do not invent users, numbers or employers.

## Product Principles

1. Proof over claims: live links, live data, real outcomes.
2. A recruiter should get the gist in one viewport and one scroll.
3. Say it once; keep copy short.
4. Personality is welcome but never in the way of the work.

## Accessibility & Inclusion

Reduced-motion respected for every animation and the companion. Keyboard-reachable controls.

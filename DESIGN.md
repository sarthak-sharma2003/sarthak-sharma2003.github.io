---
name: Sarthak Sharma Portfolio
description: A live football broadcast of one player. Cool-white studio, cobalt plates, volt signal.
colors:
  n0: "#ffffff"
  n1: "#f3f4f8"
  n2: "#e8eaf1"
  n3: "#d5d8e3"
  n4: "#b2b7c7"
  n5: "#8a90a4"
  n6: "#60667b"
  n7: "#454b5f"
  n8: "#2b3043"
  n9: "#171a27"
  n10: "#0a0c16"
  cobalt: "#2337ff"
  cobalt-deep: "#1424c4"
  cobalt-night: "#0c1680"
  cobalt-tint: "#cdd3ff"
  volt: "#e4ff3a"
  red: "#ff5a47"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(3.1rem, 9.4vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.03em"
    fontVariation: "font-stretch 125%, italic"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2rem, 8.2vw, 4.25rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.03em"
    fontVariation: "font-stretch 112%, italic, uppercase"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.45rem, 2.6vw, 2.1rem)"
    fontWeight: 800
    fontVariation: "font-stretch 88%"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    letterSpacing: "0.04em"
    fontVariation: "font-stretch 75%, uppercase, tabular-nums"
rounded:
  dot: "50%"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  section: "clamp(72px, 10vw, 128px)"
  maxw: "1240px"
components:
  button-volt:
    backgroundColor: "{colors.volt}"
    textColor: "{colors.n10}"
    padding: "16px 28px 15px 22px"
  button-volt-hover:
    backgroundColor: "{colors.n0}"
  button-white:
    backgroundColor: "{colors.n0}"
    textColor: "{colors.cobalt}"
  button-ink:
    backgroundColor: "{colors.n10}"
    textColor: "{colors.n0}"
  button-ink-hover:
    backgroundColor: "{colors.cobalt}"
  state-live:
    backgroundColor: "{colors.volt}"
    textColor: "{colors.n10}"
  score-bug:
    backgroundColor: "{colors.n0}"
    height: "40px"
---

# Design System: Sarthak Sharma Portfolio

## Overview

**Creative North Star: "The Match Centre"**

One player, one broadcast. The page is a studio graphics package: a cobalt plate cold open under floodlights, a score bug that tracks the match clock, a ticker, numbered lineup rows, and a full-time sign-off. Everything is cut from the same slanted plate.

Ground is cool studio white; cobalt is committed and owns the opening viewport and the close. Navy ink bands break the white. Volt is the only signal colour. One Archivo family carries every voice by changing width, weight and slant.

**Key Characteristics:**
- Slanted plates (clip-path parallelograms) are the only container shape; no rounded cards.
- Every neutral comes from the n0 to n10 ramp.
- Status is always a word (LIVE, SHIPPED, BUILDING, NEXT), never colour alone.
- Numbers act as headlines (07, 01 to 0N, years).
- Real empty space between plates; no card grid.

## Colors

Cool-white ground, hard cobalt, one volt signal, navy ink.

### Primary
- **Broadcast Cobalt** (#2337ff): plates, section-heading marks, focus ring, caret, scrollbar. Deep (#1424c4) and night (#0c1680) form the plate gradient; tint (#cdd3ff) is secondary text on cobalt.

### Secondary
- **Volt** (#e4ff3a): the signal. LIVE state and its pulse dot, the primary action (Email me), the second line of the name, and the match clock/goal flash on the score bug. Also text selection and link/tab hover on dark.

### Neutral
- **Studio Ramp** n0 #ffffff, n1 #f3f4f8 (page), n2 #e8eaf1, n3 #d5d8e3, n4 #b2b7c7, n5 #8a90a4, n6 #60667b (secondary text), n7 #454b5f, n8 #2b3043, n9 #171a27 (body text), n10 #0a0c16 (ink bands, volt-button text).
- **Miss Red** (#ff5a47): missed penalty only.

### Named Rules
**The One Ramp Rule.** Greys come from n0 to n10 only. No ad hoc greys.
**The Signal Rule.** Volt marks what is live or what to press. It never decorates, and never fills a large area.
**The Word Rule.** State is carried by a word on a plate; colour reinforces it.

## Typography

**Font:** Archivo variable (Google Fonts, axes wdth 62-125, wght 100-900, italic), fallback system-ui. One family, no mono.

**Character:** Width is the voice. Expanded black italic shouts; condensed caps label and count.

### Hierarchy
- **Display** (900 italic, stretch 125%, clamp 3.1-6rem, 0.9): the name, stacked in two lines.
- **Headline** (900 italic uppercase, stretch 112%, clamp 2-4.25rem, 0.95, -0.03em): section titles, with a cobalt slanted mark before.
- **Title** (800, stretch 88%, clamp 1.45-2.1rem): project, role and cert names.
- **Body** (400, 17px, 1.6): prose; lede capped at 60ch.
- **Label / Data** (700-800, stretch 62-85%, uppercase, 0.04em, tabular figures): `.cap` class for tabs, states, stats, ticker. Big numerals (rows, years, 07) use 900 italic at stretch 62%.

### Named Rules
**The Width Rule.** Change voice with font-stretch and weight, not a second family.

## Layout

Single page, `.wrap` container 1240px, gutter clamp(16px, 4vw, 40px), sections padded clamp(72px, 10vw, 128px). Sections are rows: number column (116px, 84px at 1040px, stacked at 600px), content, optional screenshot column (400px max). Experience is a 220px label plus body; Certifications a 116px year, name, link. Skills board is three columns, one column under 860px. Ink bands are cut with a slanted clip-path (56px). Score bug fixed top; scroll-padding-top 80px.

## Elevation & Depth

Flat plates with soft, long-offset shadows only where a plate floats off the page: score bug and tab bar (0 10px 28px -10px at 45% ink), screenshot monitors (18px 26px 40px -22px), chips and popovers. Cobalt plates get inset 2px white hairlines and 115deg stripe textures instead of shadow. The holo card is lifted by tilt and a foil sheen, not shadow.

## Shapes

Parallelograms. Trailing edge slants 8-16px (`polygon(0 0, 100% 0, calc(100% - Npx) 100%, 0 100%)`); the player card has chamfered corners (30px). Circles for dots, pips, ball, cursor, skill chips (999px). Outlined state (NEXT) uses an inset line, no slant. No rounded-rectangle cards.

## Components

### Score Bug (nav)
Fixed top-left plate: cobalt initials block, name, ink clock cell in volt showing scroll progress as match time; flashes volt on a goal. Beside it an ink tab bar: condensed caps tabs, volt on hover/current, Email tab filled volt. On mobile it collapses to a LIVE pulse dot.

### Buttons
Slanted plates, 800 stretch 85% caps, 0.05em. Volt (primary, hover white), white (cobalt text, hover volt), ink (hover cobalt), line (transparent, inset 2px hairline, no slant). Arrow icon nudges 2px up-right on hover.

### Hero (floodlit cold open)
Cobalt full-bleed. Lamp banks and beams light in sequence, name wipes in as two lines (second in volt), position plate, lede, CTAs, holo player card (tilt follows pointer, foil sheen, 07 in volt), kickable ball with physics resting on the ticker. Ticker: condensed caps marquee, 48s linear, pauses on hover.

### Shelf (project rows)
Numbered row per project: big italic condensed number on a slanted plate, title, state plate, year, stack, links, live GitHub stat. Screenshot "monitor" on the right with cursor tag and slow object-position pan on hover. A reserved NEXT row is a numbered empty slot.

### Experience
Ink band, slanted cuts. Role title, club-line in n4, hairline-separated spells.

### Skills (tactics board)
Striped green pitch with inset ink frame. Draggable player-dot chips grouped by formation line; chips settle back with a slow ease.

### Certifications
Honours table: large year numeral, name, verify link.

### Game (penalty shootout)
Canvas pitch with stands and LED board; pens row of dots (volt goal, red-outlined miss); keeper difficulty plates; trophy popup.

### Companion
Opt-in cursor pet (husky, cat, ball, magpie) picked from a slanted adopt chip and popover; states walk, idle, nap.

### Cursor
Fine pointer only: white dot plus lagging ring, `mix-blend-mode: difference`; the ring grows into a white disc with a verb label (Kick, Drag, ...) over interactive targets.

### Footer (full time)
Cobalt, slanted top edge, a huge "Full time." heading, email as the headline link (volt on hover), sign-off in tint.

## Motion

- **Authored intro:** one cold open in the hero (lights on, name wipes in, card enters, foil shine, name letters squeeze once). Easing `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Scroll-linked stingers:** a cobalt plate (white on ink) sweeps each section heading via `animation-timeline: view()`, behind `@supports`; unsupported browsers just show the heading.
- **On-air ambience:** small continuous loops that say "live": the LIVE dot pulse, the ticker marquee (pauses on hover), the slow 7s card float, the companion's idle bobs. Nothing larger loops.
- **Everything else is interaction:** hover, drag, kick, click, goal flash, trophy pop.
- **Reduced motion:** global rule kills all animation and transition and smooth scroll; the custom cursor, ball physics and companion motion are not started in JS.

## Do's and Don'ts

### Do:
- **Do** build new surfaces from slanted plates and the n0 to n10 ramp.
- **Do** label state with a word; keep a 3px focus ring (cobalt, volt on cobalt/ink).
- **Do** use big numerals as headlines.
- **Do** keep screen space for cobalt: over a third of first viewport and the close.

### Don't:
- **Don't** use dark dev-card grids, mono labels or rounded-card layouts.
- **Don't** add a second type family or an ad hoc grey.
- **Don't** spend volt on decoration or large fills.
- **Don't** hide a heading or content behind an animation that needs JS to reveal it.
- **Don't** use volt for anything that isn't live or active (LIVE, current tab, match clock, a goal), the primary action, or the second line of the name.

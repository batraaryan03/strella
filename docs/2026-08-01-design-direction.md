# Design Direction — Stellar Redesign Blueprint
**Date:** 2026-08-01 09:02 IST
**Topic:** The "big idea", palette, type, structure, and what gets removed
**Status:** Proposed direction, pending user confirmation on logo / photos / map.

---

## 1. The big idea: "Guided, not moved."

The brand idea is **navigation / wayfinding done with precision** — a removalist that guides your household from one coordinate to another. This is expressed through:

- **A real route** (not random lines): the homepage tells a journey story — the quote as departure point, the move as the route, delivery as arrival.
- **Geographic truth**: a real dark-styled Melbourne map with a highlighted service area and animated route (replaces the fake SVG map).
- **Coordinate / waypoint language** used sparingly and functionally (suburb, postcode, date, distance) — never decorative.
- **Zero literal stars.** No star iconography anywhere unless a real logo mark exists (pending confirmation).

## 2. Palette (researched)

| Role | Value | Notes |
|---|---|---|
| Canvas | `#0b0c0a` | warm charcoal (Aesop-like warmth) |
| Surface L1 | `#131410` | cards/panels |
| Surface L2 | `#1a1b16` | raised / hover |
| Border | `rgba(244,245,240,0.08)` | sub-pixel hairline |
| Text primary | `#f4f4f2` | warm alabaster (headings) |
| Text body | `#a6a8a0` (refines research range `#a0a0a0`–`#b3b3b3`) | readable silver, not pure white |
| Text muted | `#7c8175` | labels / meta |
| Accent | `#8a9a52` (olive) | reserved for interactive + primary CTA only |
| Accent bright | `#aebd75` | hover |
| Paper | `#f2f1ea` | light surfaces (pricing cards, ~10%) |

Rule: ~90% neutral monochrome, olive appears only where it means something (CTAs, active states, map highlights, live indicators).

**Olive contrast constraint:** `#8a9a52` on `#0b0c0a` ≈ 4.2:1 — below AA for small text. Olive is allowed for large text, borders, map highlights, and CTA backgrounds with dark text. Any olive used as small text must be the brighter `#aebd75` variant (passes 4.5:1).

## 3. Typography

- **Display:** Instrument Serif 400, tight `-0.02em`, with italic accent words (e.g. "moved *precisely*").
- **UI/body:** Instrument Sans (fallback Hanken Grotesk), body 16–17px, lh 1.6–1.7, max 65ch.
- **Data:** Geist Mono / JetBrains Mono — prices, coordinates, stats, labels only.
- Scale: `--text-hero: clamp(3rem,7vw,6rem)`; `--text-h1: clamp(2.25rem,4.5vw,4rem)`; `--text-h2: clamp(1.75rem,3vw,2.75rem)`.

## 4. Structure (from CRO research)

1. **Header** — wordmark + nav + "Get a Quote" primary + phone (secondary).
2. **Hero** — asymmetric editorial: oversized serif headline left, real photography right, no floating card, no badge. Google 4.9★ inline. One CTA.
3. **Trust strip** — verified badges: 100% insured · police-checked crew · ABN verified · 5,000+ moves.
4. **Quote wizard** — multi-step: from → to → home size → date → contact (last step only).
5. **How it works** — 3-step waypoint flow (departure → transit → arrival). NOT another fake map: a simple functional waypoint line inside the quote wizard context (or reuse the real map below).
6. **Why Stellar** — pillar layout, guarantee-led copy (no fake icons).
7. **Reviews** — real reviews with photo/video, verified indicators.
8. **Service areas** — REAL dark Melbourne map + suburb grid.
9. **Pricing** — transparent rate card: what's included vs extras; truck tiers.
10. **Final CTA + footer** — fixed-price promise, ABN, address, hours.

## 5. What gets removed (explicit anti-patterns)

- ❌ Constellation line networks in backgrounds (random lines).
- ❌ Pill badge above hero headline.
- ❌ Floating glass card over hero image.
- ❌ Dummy star logo (replace with confirmed wordmark/mark).
- ❌ Fake illustrated "map" (replace with real map).
- ❌ Dummy icons in hover cards.
- ❌ Glow orbs / radial gradients.
- ❌ Generic 3-column card grids with icon + title + text.
- ❌ Auto-scrolling marquee as primary content (pause + reduced-motion safe or removed).

## 6. Open questions → CONFIRMED DECISIONS (2026-08-01 09:30 IST)

| Question | Decision |
|---|---|
| Logo | **Pure text wordmark only** — no icon, no mark. "Stellar" in Instrument Serif + mono "Removals · MEL" subline. |
| Photography | **Unsplash via MCP tool only, NO EXCEPTIONS** (user directive). All photos searched, curated, and download-tracked for attribution. |
| Real map | **MapLibre GL + OpenFreeMap dark tiles, no API key**, lazily loaded when scrolled into view. Homepage only. |
| Brand details | Keep existing BRAND constants; ABN placeholder stays out of hero copy (removed fake "ABN 00 000 000 000"). |
| Scope | **Homepage only** for this pass. /book-move and /contact pages keep current structure (anti-pattern removal only). |

**Implementation note (reuse):** keep the existing primitive layer (Button, Input, Label, Card, Accordion, SectionHeader) and *update tokens* in `globals.css`; rebuild the section-level components (hero, services, pricing, etc.) per this direction. Avoid rewriting primitives that already follow the new token system.

## 7. Decisions locked from research (no further input needed)

- Warm charcoal surface ladder (not pure black).
- Instrument Serif display + Instrument Sans UI + mono data.
- Remove all listed anti-patterns.
- CRO section ordering; multi-step quote; phone last.
- Motion spec: 400–600ms reveals, ease-out-expo, reduced-motion safe, transform/opacity only.

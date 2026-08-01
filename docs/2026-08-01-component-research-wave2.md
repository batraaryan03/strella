# Component Research — Wave 2: Full Catalogs, Per-Section Pick-List & Borrow List
**Date:** 2026-08-01 (afternoon session)
**Topic:** Which components are *right* (from the actual catalogs, not assumptions), and which website designs to *copy a little and improve*. Companion to `2026-08-01-component-research.md` (Wave 1 matrix).

---

## 1. Full catalog inventories (fetched live from the sites)

### Magic UI — complete catalog (79 components, verified 2026-08-01)
Text/type: `animated-gradient-text`, `animated-shiny-text`, `aurora-text`, `comic-text`, `dia-text-reveal`, `hyper-text`, `kinetic-text`, `line-shadow-text`, `morphing-text`, `sparkles-text`, `spinning-text`, `text-3d-flip`, `text-animate`, `text-reveal`, `typing-animation`, `word-rotate`, `video-text`, `glyph-matrix`
Backgrounds: `animated-grid-pattern`, `dot-pattern`, `flickering-grid`, `grid-pattern`, `hexagon-pattern`, `interactive-grid-pattern`, `light-rays`, `noise-texture`, `retro-grid`, `striped-pattern`, `warp-background`
Effects/motion: `animated-beam`, `animated-circular-progress-bar`, `animated-list`, `backlight`, `border-beam`, `blur-fade`, `glare-hover`, `highlighter`, `magic-card`, `meteors`, `number-ticker`, `orbiting-circles`, `particles`, `pixel-image`, `pointer`, `progressive-blur`, `ripple`, `scroll-based-velocity`, `scroll-progress`, `shine-border`, `smooth-cursor`
Layout/misc: `bento-grid`, `dock`, `marquee`, `avatar-circles`, `icon-cloud`, `code-comparison`, `dotted-map`, `file-tree`, `globe`, `hero-video-dialog`, `iphone`, `safari`, `terminal`, `tweet-card`, `android`
Buttons: `interactive-hover-button`, `pulsating-button`, `rainbow-button`, `ripple-button`, `shimmer-button`, `shiny-button`, `animated-theme-toggler`

### Aceternity UI — complete catalog (verified 2026-08-01)
Text: `flip-words`, `typewriter-effect`, `text-generate-effect`, `text-hover-effect`, `text-reveal-card`, `squiggly-text`, `layout-text-flip`, `container-text-flip`, `canvas-text`, `encrypted-text`, `ascii-art`, `colourful-text`, `text-flipping-board`
Backgrounds: `aurora-background`, `background-beams`, `background-beams-with-collision`, `background-boxes`, `background-gradient`, `background-gradient-animation`, `background-lines`, `background-ripple-effect`, `dotted-glow-background`, `grid-and-dot-backgrounds`, `glowing-stars-effect`, `meteors`, `noise-background`, `shooting-stars-and-stars-background`, `vortex`, `wavy-background`, `world-map`
Cards: `3d-card-effect`, `3d-pin`, `card-hover-effect`, `card-spotlight`, `card-stack`, `comet-card`, `draggable-card`, `evervault-card`, `expandable-card`, `focus-cards`, `glare-card`, `hover-border-gradient`, `magic-card` (via bento), `moving-border`, `wobble-card`, `direction-aware-hover`, `pointer-highlight`, `following-pointer`
Hero/scroll: `hero-highlight`, `hero-parallax`, `hero-sections-free`, `parallax-hero-images`, `parallax-scroll`, `sticky-scroll-reveal`, `container-scroll-animation`, `canvas-reveal-effect`, `lamp-effect`, `spotlight`, `spotlight-new`, `tracing-beam`, `timeline`, `scales`
Other: `bento-grid`, `tabs`, `carousel`, `apple-cards-carousel`, `images-slider`, `images-badge`, `animated-testimonials`, `infinite-moving-cards`, `3d-marquee`, `floating-dock`, `navbar-menu`, `floating-navbar`, `resizable-navbar`, `sidebar`, `animated-tooltip`, `tooltip-card`, `magnetic-button`, `stateful-button`, `gooey-input`, `placeholders-and-vanish-input`, `animated-modal`, `multi-step-loader`, `sticky-banner`, `signup-form`, `file-upload`, `compare`, `lens`, `link-preview`, `loader`, `keyboard`, `terminal`, `code-block`, `github-globe`, `3d-globe`, `macbook-scroll`, `notch`, `pixelated-canvas`, `webcam-pixel-grid`, `svg-mask-effect`, `dither-shader`, `glowing-effect`, `card-spotlight`, `evervault-card`, `comet-card`, `glare-card`, `hover-border-gradient`, `moving-border`, `animated-tooltip`, `canvas-reveal-effect`

### shadcn/ui — v4 status (verified live)
- The official registry and docs are **Tailwind v4 native** in 2026 (`Tailwind v4` confirmed on docs pages). Our hand-authored primitives mirror the same radix + cva + cn + `tw-animate-css` pattern, so we're already aligned with the current standard.
- Primitives already in Stellar: Sheet, Dialog, Tooltip, Progress, Toaster (Sonner), Button, Card, Input, Label, Badge, Accordion, Select.
- Worth adding next (Tailwind v4-safe): `Calendar/DatePicker` (move-date in wizard — dark theme + min-date), `Drawer` (bottom sheet on mobile for map suburb picker), `Carousel` (only if we need a controlled review carousel — we currently use a marquee, which is better).

### React Bits (reactbits.dev)
Client-rendered SPA — catalog not scrapable via curl; Wave-1 assessment stands (from prior session): Spotlight Card + Split Text ADOPT (already built); Text Scramble / Magnet / Particles / Aurora / Waves / Blob Cursor AVOID.

---

## 2. Per-section pick-list — the *right* component for each Stellar section

| Section | Component(s) already shipped | Verified-available upgrade | Verdict |
|---|---|---|---|
| Hero | Spotlight, SplitText, chart-paper, photo grade | — | **Done.** Do NOT add hero-parallax/hero-highlight (Aceternity) — tilt-y, gimmicky for trust |
| Trust ribbon | Static mono numerals (user decision) | MagicUI `number-ticker` exists but **REJECTED by user** — static stays | **Done.** |
| Quote wizard | Progress, Sonner, RouteBeam-style rail, hand-rolled validation | shadcn `Calendar` for move-date; Aceternity `multi-step-loader` (AVOID — animated loader = AI-slop); Aceternity `gooey-input` (AVOID) | **Add shadcn Calendar** (dark, min-date) next |
| Services | BentoGrid + PixelImage cards | Aceternity `card-spotlight` / `direction-aware-hover` (premium); `hover-border-gradient` (subtle) | **ADOPT scoped:** olive spotlight-follow on service cards at 200ms, expo-out — cheap, compositor-friendly |
| Why Stellar | BentoGrid with metrics | MagicUI `progressive-blur` (page/section blur) — AVOID here (decorative) | **Done.** |
| Process | RouteBeam (pathLength-normalized) + waypoint nodes | Aceternity `timeline`, `tracing-beam` — we already have the tasteful version | **Done.** Keep ours. |
| Reviews | Marquee (paused on hover) | Aceternity `animated-testimonials` (AVOID — auto-rotating carousel reads template); `infinite-moving-cards` (same as marquee) | **Keep marquee.** |
| Service areas | Real MapLibre map + RouteBeam legend + pins | MagicUI `dotted-map` (decorative world map — NO, we have real geography); Aceternity `world-map` (same — AVOID) | **Done.** Real map wins. |
| Pricing | ShineBorder on popular + Badge | Aceternity `moving-border` / MagicUI `border-beam` (same family, already shipped) | **Done.** |
| Gallery | PixelImage blur-up + dual marquee + lightbox | MagicUI `lens` (magnify on hover — gimmick for furniture photos? No), `progressive-blur` (nice but decorative) | **Done.** |
| Final CTA | Spotlight | Aceternity `lamp-effect` (AVOID — theatrical); `sticky-banner` (NO) | **Done.** |
| Header/Footer | Sheet nav, kinetic wordmark, credentials tier | MagicUI `dock` (NO — macOS dock = gimmick); Aceternity `floating-navbar` (NO — we have a fixed header) | **Done.** |
| Mobile | Sheet | shadcn `Drawer` (bottom sheet for suburb picker on book-move) | **ADOPT scoped** |

**Net new components worth building next (Wave 3 implementation):**
1. **Spotlight-follow service cards** (Aceternity `card-spotlight` pattern, olive-tinted, 200ms expo-out, reduced-motion static) — elevates services + pricing hover.
2. **shadcn Calendar** (dark theme, min-date today, AU locale) for wizard + book-move move-date fields.
3. **shadcn Drawer** (bottom sheet) for the mobile suburb picker on book-move.
4. **`direction-aware-hover`** on bento cells (the metric cells in Why-Stellar) — subtle olive border glow from cursor side.

**Explicitly avoid (from the live catalogs):** `aurora-text`, `comic-text`, `glyph-matrix`, `meteors`, `sparkles-text`, `typing-animation`, `warp-background`, `light-rays`, `particles`, `orbiting-circles`, `rainbow-button`, `shimmer-button`, `retro-grid`, `hexagon-pattern`, `3d-marquee`, `floating-dock`, `glowing-stars-effect`, `shooting-stars`, `wavy-background`, `vortex`, `typewriter-effect`, `flip-words`, `lamp-effect`, `world-map`, `dotted-map`, `lens`, `wobble-card`, `3d-card-effect`, `3d-pin`, `draggable-card`, `apple-cards-carousel`, `magic-card` (the tilt one), `pointer`, `smooth-cursor`. Every one of these screams AI-template or breaks trust — the exact opposite of the user's directive.

---

## 3. Borrow list — website designs to *copy a little and improve*

### Footers (from footer.design + live research) — 4 borrowable patterns
1. **Giant floating wordmark** — Stripe/Cuberto/Object & Archive style: brand name stretched 80–100% viewport width at 4–10% opacity. **We have this (STELLAR watermark). Improve:** add the olive gradient shift + parallax on scroll, and tuck the ABN/licence line into it.
2. **Trust & credentials tier** — dark-adapted licence/insurance line (`Fully licensed · Bonded & insured to $20M` + ABN + Google 4.9★ stroke badge). **We have the credentials tier. Improve:** add the Google-review stroke badge in the same mono line.
3. **CTA bridge above the footer grid** — "Moving soon? Get a binding flat-rate quote in 60 seconds" with one primary action. **We have the FinalCta section. Improve:** make sure the CTA row directly above the footer columns reads as part of the footer system (it does).
4. **Live state micro-widget** — a "Crews active across Melbourne" pill (real, from the map) or a quiet location/status line. **Map depot beacon exists; consider a static status line** in the footer meta row (not an animated fake — a real line).

### Heroes (from storefront.design + prior session) — already implemented
Asymmetric editorial split, single primary CTA + phone secondary, inline micro-trust line, photo caption bar as move-record. **No changes needed.**

### Dark editorial (Awwwards/SiteInspire — 5 patterns)
1. **Oversized serif + one italic accent word** — done (Instrument Serif + olive italic).
2. **Staggered scroll reveals, ≤3 animation families** — done (SplitText, ScrollReveal, RouteBeam).
3. **Mono metadata labels everywhere** (`STL-08 · Sat 08:00`) — done.
4. **Consistent photo grading** (olive desat) — done.
5. **Real map as the brand signature graphic** — done (MapLibre, the differentiator). **Improve:** draw the route on scroll into view (scroll-linked), and add the depot beacon (one, static-safe).

### Moving-industry (Muval, Grace, Little Red Trucks, TAXI, CBD — prior session + live)
- **Borrow:** transparent hourly rate-card with "included vs extra" split; step-by-step quote calculator (ours: route → load → details, phone-last — matches Muval's best practice); suburb coverage lists (we have them on the map); real review counts (4.9★, 2,300+).
- **Copy-a-little upgrade candidates:**
  - **Muval's estimate honesty** — show a *range* ("$320–$420") rather than a single number before confirmation. Consider adding an indicative range to the wizard's step 3 summary.
  - **Grace's "what's included" checklist** beside pricing — we have features lists; consider a small "Included on every move" strip (blankets, ramp, two movers, insurance).
  - **Little Red Trucks' fleet photography** — real truck photos in pricing (we use real Unsplash photos — done).

---

## 4. Synthesis — the 6 highest-impact moves for Wave 3

1. **Spotlight-follow service cards** (Aceternity `card-spotlight` adapted) — biggest perceived-premium lift per line of code.
2. **shadcn Calendar** for move-date (dark, min-date, AU) — biggest CRO/UX win in the wizard.
3. **shadcn Drawer** bottom-sheet suburb picker on mobile book-move — mobile conversion.
4. **`direction-aware-hover`** on Why-Stellar metric cells — subtle, editorial.
5. **Footer polish** — olive gradient on the giant wordmark + Google stroke badge in the credentials line + optional static "crews active" status line.
6. **Map scroll-linked route draw** + one static-safe depot beacon — makes the signature graphic feel alive without gimmick.

**Anti-list reminder (from live catalogs):** no particles/aurora/meteors/stars/sparkles/typewriter/flip-words/wavy/vortex/3D-tilt/rainbow/shimmer anywhere. The brand is navigation language — waypoints, routes, coordinates — never decoration.

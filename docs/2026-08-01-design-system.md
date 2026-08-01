# Stellar Design System — Full Website Articulation
**Date:** 2026-08-01 (morning, resumed session)
**Topic:** The complete, carefully-articulated design system for the ENTIRE Stellar website — tokens, typography, the constellation/rocket motif as a system, documented illustration concepts + prompts, component inventory, page-by-page application.

---

## 1. Locked color (non-negotiable, user directive)

| Token | Value | Role |
|---|---|---|
| `--color-canvas` | `#0b0c0a` | near-black warm charcoal — page background |
| `--color-surface` | `#12140f` | cards/panels |
| `--color-raised` | `#191c15` | elevated surfaces |
| `--color-raised-2` | `#21251c` | hover / overlay |
| `--color-ink` | `#f4f5f0` | primary text (white-leaning) |
| `--color-ink-2` | `#a8aca2` | secondary text |
| `--color-ink-3` | `#7c8175` | muted/meta |
| `--color-olive` | `#8a9a52` | **anaconda olive** — the only accent |
| `--color-olive-bright` | `#aebd75` | olive hover/highlight (AA-safe for small text) |
| `--color-olive-deep` | `#5a693a` | dark olive variant |
| `--color-paper` | `#f2f1ea` | light surfaces (pricing cards, ~10% of composition) |

Rules: ~90% neutral monochrome. Olive appears ONLY where it means something: CTAs, active states, route lines, map highlights, live indicators, the wordmark subline. White appears only where readability demands.

## 2. Typography (user-directed upgrade, shipped)

- **Display:** **Instrument Serif 400** (+ italic accents) — hero, section titles, CTA headlines. Editorial serif accent restored.
- **UI/body:** **Instrument Sans** (next/font), 16–17px, lh 1.6–1.7, max 65ch.
- **Data/mono:** Geist Mono — prices, coordinates, stats, labels only.
- **Typographic motion:** `KineticText` (hover weight) for the footer wordmark; `RevealText` (React Bits word-split, scroll-scrubbed) and `SplitText` (staggered word reveal) for headlines; `Highlighter` (rough-notation, olive) for key phrases.
- Scale: `--text-hero: clamp(3rem,7vw,6rem)`; `--text-h1: clamp(2.25rem,4.5vw,4rem)`; `--text-h2: clamp(1.75rem,3vw,2.75rem)`.

### Shipped amendments (Wave 5 + GSAP, supersede earlier decisions)

- **Stats are ANIMATED CountUp numerals** (user approved Wave 5) — IntersectionObserver-driven tick-up on scroll, ease-out quart ~1.4s, reduced-motion renders the settled value instantly. `aria-hidden` on the animated span + an `sr-only` settled value so screen readers announce once. The earlier "static mono numerals, no CountUp" decision is superseded.
- **Process section is a ScrollStack** — sticky panels pile up on scroll (staggered 4/8/12rem tops) with a vertical RouteBeam drawing down the rail (desktop only; reduced-motion full-draw).
- **Gallery is editorial masonry** (CSS columns, varied aspect rhythm) with the full-viewport lightbox retained; the dual marquee was removed.
- **GSAP ScrollSmoother** (free since 3.13) — see § 9 Motion layer below.

## 3. The constellation system — a discipline, not decoration

**The idea:** "Stellar" = precision navigation. The astronomy motif appears ONLY as *navigation language*: waypoints, routes, coordinates, bearing. It never appears as random stars, glow, or particles.

**System rules:**
1. **One route line** is allowed per section that is about movement (quote wizard, process, map). The line must be *functional* — it draws as you progress.
2. **Waypoint markers** (small circles with crosshair ticks) only mark real steps (process steps, map suburbs, wizard steps). No free-floating nodes.
3. **Blueprint grid** — hairline grid texture allowed ONLY in hero + map section, at ≤7% opacity, as "chart paper" for the map/route. Never full-page.
4. **Zero** particles, stars, glow orbs, aurora, sparkles, shooting stars anywhere. The name does the work.
5. **Coordinates in mono** (LAT/LON, postcodes, "STL-08") only where real or functional.

## 4. Documented illustration concepts + prompts

These are the *only* illustrations in the system. Each is a deliberate, hand-drawn SVG or photo treatment — documented so the user can review and direct.

### ILL-01 — "The Route Mark" (brand glyph, used sparingly)
- **Concept:** A thin 4-point asterisk/compass made of two crossing route lines with a small node at center — reads as a star AND a route junction. Used at tiny size next to the wordmark only in footer + favicon. NOT in the header (wordmark stays pure text per user decision).
- **Prompt (if generating):** "Minimal thin-line compass asterisk mark, four points, small center node, single olive stroke, transparent background, no fill, no glow, vector, premium editorial."

### ILL-02 — "Guided Route" (wizard + process connecting line)
- **Concept:** A dashed olive route line with rounded waypoint nodes that draws left→right (or between steps) as the user progresses. Represents the move itself: departure → transit → arrival.
- **Prompt:** "Dashed navigation route line with three round waypoints, thin olive stroke on dark charcoal, clean vector, flat, no glow, minimal."

### ILL-03 — "Chart Paper" (hero + map hairline grid)
- **Concept:** A faint architectural grid (1px lines every 56px, ~4–6% white opacity) used as the "chart" under the hero and behind the real map. Reads as blueprint, not decoration.
- **Prompt:** "Faint architectural blueprint grid, hairline 1px lines, very low contrast on dark background, no color, subtle."

### ILL-04 — "The Real Map" (service coverage, signature graphic)
- **Concept:** The actual MapLibre dark map of Melbourne with: olive service-area polygon (12% fill, dashed outline), one sample route (depot → CBD → Hawthorn), olive waypoint pins with suburb labels. This is the brand's centerpiece illustration — real geography, not drawn.
- **Prompt (if generating a static fallback):** "Dark monochrome map of Melbourne city, olive service area polygon, one thin olive route line, minimal labels, no icons, premium flat cartography."

### ILL-05 — "Packing Still" (photo treatments)
- **Concept:** Real Unsplash photography with a consistent olive-tinted desaturation grade (CSS filter: `saturate(0.82) contrast(1.02)` + subtle olive duotone overlay on hover for gallery). All photos share the same grade → cohesive system.
- **Prompt (if generating):** "Professional movers handling furniture in a bright modern home, natural light, muted olive-and-charcoal color grade, editorial photography, no text."

### ILL-06 — "Live Beacon" (availability indicator)
- **Concept:** A single soft-pulsing olive dot (2000ms loop, reduced-motion-safe) marking "crews across Melbourne today" / depot on the map. One per page max.
- **Prompt:** n/a — CSS/SVG only.

## 5. Component inventory (whole site)

### Primitives (keep + add)
- Keep: Button, Badge (pricing only), Card, Input, Textarea, Label, Select (story-only), Accordion, StarRating, Eyebrow, SectionHeader, Divider, ScrollReveal, Logo (text wordmark), StarRating.
- **Add from research (real components, not hand-rolled):** Aceternity **Spotlight** (SVG sweep), Magic UI **BentoGrid/BentoCard**, **PixelImage** (pixel-reveal), **NumberTicker** (spring counter), **NoiseTexture** (olive grain), **Highlighter** (rough-notation), **KineticText** (hover weight), **AnimatedCircularProgressBar**, **RevealText** (React Bits word-split), plus Sheet (mobile nav), Sonner (toasts), Tooltip, Dialog, Progress (wizard), **SmoothScroll** (GSAP ScrollSmoother wrapper), ScrollStack + Masonry patterns.
- **React Bits kit (user-directed, shipped):** **Hyperspeed** — olive-tuned "Neon Waves" as the **homepage backdrop only** (fixed z-0, client-only WebGL via `next/dynamic({ ssr: false })`, lazy-mounted, reduced-motion-skipped; grain paints above). **LaserFlow** — olive laser wash. **ColorBends** — color-field bends (stock palette + anaconda-olive variant). **Silk** — flowing silk via `@react-three/fiber`, brand olive. **Grainient** — animated olive gradient via `ogl` (exact docs palette `#98a686/#636B2F/#808000`). **Counter** — rolling digits via `motion`. **CountUp** — spring counter via `motion` (distinct from the retired custom CountUp; trust ribbon uses NumberTicker). **DomeGallery** — drag-rotatable photo sphere via `@use-gesture/react` (exact docs props; real Unsplash gallery photography). **FluidGlass** — 3D glass lens/bar/cube via `@react-three/drei` + `maath`, self-hosted GLB models in `public/assets/3d/` (lens/bar/cube.glb) + demo imagery `public/assets/demo/`. **GradualBlur** — layered edge blur overlay (exact docs props). **MagicBento** — GSAP bento card grid with spotlight/border-glow/tilt/magnetism; re-coloured from the stock purple to the brand olive `#636B2F` (RGB glow `99, 107, 47`), with an added `cards` prop so the grid can carry real Stellar content instead of the baked-in demo cards. **ShinyText** — motion shine sweep (stock props exact in the story, olive variant added). **SplitText** — GSAP letter/word reveal via `@gsap/react` + `gsap/SplitText` (stories under `Backgrounds/SplitText`, distinct from the Typography SplitText). **StaggeredMenu** — GSAP staggered fullscreen menu, olive underlay layers + olive accent, project logo default (`/assets/logo.png`). **Stepper** — motion spring step wizard; stock purple `#5227FF` re-coloured to olive `#636B2F` (active) / olive-bright `#97a75a` (complete); story carries the Stellar move-flow steps. **SpotlightCard** — cursor spotlight card; border/bg re-tinted to the olive-dark palette, story uses `rgba(151, 167, 90, 0.35)` olive spotlight. Every component ships a Storybook story under `Backgrounds/*`. The stock "Neon Waves" preset stays exact in the story — preset on display, olive on the site.
- **Removed:** RouteBeam (user directive — replaced with pure-CSS waypoint rail in the process ScrollStack). CountUp retired in favour of NumberTicker.

### Sections (rebuild in system)
- Header (wordmark + nav + "Get a Quote" CTA + phone) — Sheet mobile nav.
- Hero (editorial split + real photo + caption bar + Aceternity Spotlight + Chart Paper + SplitText headline + Highlighter).
- **TrustRibbon** (verified badges with **animated CountUp numerals** — $20M, 100%, 5,000+, 4.9★ tick up on scroll).
- QuoteWizard (3 steps, RouteLine progress, Sonner toast, Progress bar, Phone-last).
- ServicesSection (real Magic UI BentoGrid + PixelImage photo backgrounds + hover CTA).
- ProcessSection (**ScrollStack** — 3 waypoints, sticky pile + pure-CSS waypoint rail; RouteBeam removed).
- WhyChooseUs (real BentoGrid: metrics + guarantee-led copy + olive satisfaction gauge (AnimatedCircularProgressBar)).
- ReviewsSection (marquee of large editorial cards, real review counts).
- ServiceAreas (REAL map + suburb chips + legend + Live Beacon at depot).
- PricingSection (rate card, day-of-week toggle, Badge).
- GallerySection (PixelImage blur-up, **editorial masonry**, lightbox).
- MovingTips / FAQ (Accordion).
- FinalCta (Spotlight, one headline, two paths).
- Footer (KineticText giant wordmark + asymmetric columns + credentials tier + credits).

## 6. Page-by-page application (ENTIRE website)

1. **Home** (`/`) — all sections above in CRO order (already assembled).
2. **Book a Move** (`/book-move`) — rebuild the page header to the system (no "Booking waypoint" gimmick label → editorial kicker), apply the new form styling, wrap in ScrollReveal, add trust strip + reassurance rail, real photo accent, Sheet nav already via Header. Range slider + radio/checkbox restyled to olive tokens.
3. **Contact** (`/contact`) — remove remaining pseudo-theme labels, apply system header, contact cards without glow, real hours, map snippet option (embed MelbourneMap small), consistent form.
4. **Header/Footer** shared across all pages — Sheet mobile nav, kinetic footer wordmark, credentials tier.

## 7. Open items for user sign-off (before build)

1. ~~Count-up stats~~ — **RESOLVED: animated CountUp approved and shipped** (Wave 5).
2. **Spotlight depth:** subtle radial olive spotlight in hero/final-CTA backgrounds — approve the intensity (very subtle ≤0.10 opacity).
3. **Favicon/Route Mark (ILL-01):** adopt the compass-asterisk mark as favicon only? (Header stays pure text per earlier decision.)
4. **Photo grading:** apply the olive-tinted desaturation filter to all Unsplash photos site-wide — approve.
5. **shadcn Sheet/Sonner/Tooltip:** installing shadcn primitives is the pragmatic path vs hand-rolling — approve adding the dependency (`@shadcn/ui` CLI) or keep hand-rolled (Sheet is worth it).

## 8. What we will NOT do (anti-list, whole site)

No particles, no stars, no glow orbs, no aurora, no waves, no 3D tilt, no text scramble, no gradient text, no custom cursor, no confetti, no fake live indicators, no random lines, no AI-slop badges, no orange/blue truck-template anything. **No RouteBeam — removed (user directive).**

## 9. Motion layer — GSAP ScrollSmoother (shipped)

The whole site scrolls through **GSAP ScrollSmoother** (bundled free since 3.13):

- `#smooth-wrapper` → `#smooth-content` wraps all page content in the root layout (`src/components/ui/smooth-scroll.tsx`). `smooth: 1.2`, `effects: true`, `smoothTouch: 0.1`.
- **Fixed elements must live OUTSIDE the wrapper** — the content transform turns it into a containing block and breaks `position: fixed` descendants. Header, Toaster, FloatingQuote are layout siblings rendered before/after the wrapper.
- **Reduced-motion short-circuit:** if `prefers-reduced-motion: reduce`, the effect returns before any GSAP module loads — native scroll, zero JS.
- **Route changes:** the layout persists across client-side navigation, so a `usePathname()` effect calls `ScrollTrigger.refresh()` (rAF-deferred) after each route change so reveals re-measure.
- **Parallax is restrained:** one `data-speed="0.96"` on the hero figure only — a barely-there drift, consistent with the "subtle motion" law. No section-wide speed games.
- **Per-page headers removed:** `<Header />` renders once in the root layout, outside the wrapper.

## 8. What we will NOT do (anti-list, whole site)

No particles, no stars, no glow orbs, no aurora, no waves, no 3D tilt, no text scramble, no gradient text, no custom cursor, no confetti, no fake live indicators, no random lines, no AI-slop badges, no orange/blue truck-template anything.

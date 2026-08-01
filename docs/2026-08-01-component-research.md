# Component Research — ADOPT / AVOID Matrix & Borrowable Patterns
**Date:** 2026-08-01 (morning session, resumed)
**Topic:** Which components from the component marketplaces fit the Stellar design system, and which website designs to borrow from (a little) and improve.

---

## 1. Guiding filter (from user directive)

- Colors locked: **black, white, olive green** (anaconda). Everything else is secondary.
- Theme: **rocket / constellation / stars** as a *carefully articulated system* — never random AI-generated decoration.
- Whole-website scope: home, book-move, contact, all sections, header, footer.
- Every illustration concept must be **documented in the design system** and shown to the user while designing.
- The site must stay **premium, editorial, trust-first, CRO-first** (charcoal + olive, Apple/Linear restraint).

## 2. Component libraries — verdicts

### React Bits (reactbits.dev) — mostly AVOID, 1–2 conditional ADOPT
| Component | Verdict | Reasoning |
|---|---|---|
| Text Scramble | AVOID | Gimmick; reads as AI-playground, hurts trust |
| Tilted Card / 3D Tilt | AVOID | Distracts from CRO; touch-dead on mobile |
| Spotlight Card | **ADOPT (scoped)** | Radial olive glow following cursor on service cards / pricing — cheap, compositor-friendly, used by Linear-style sites |
| Magnet | AVOID | Magnetic buttons risk feeling toy-like; only acceptable on a single primary CTA |
| Split Text / word reveal | **ADOPT (scoped)** | Staggered serif-headline reveal on hero load — premium editorial feel, 40–60ms stagger, reduced-motion safe |
| Gradient Text | AVOID | Template cliché |
| Particles / Aurora / Waves | **AVOID** | The #1 AI-template trope; clashes with trust |
| Blob Cursor / custom cursor | AVOID | Gimmick; hide on touch |

### Aceternity UI (ui.aceternity.com) — 3 ADOPT, rest AVOID
| Component | Verdict | Where |
|---|---|---|
| Spotlight | **ADOPT** | Subtle radial olive light in hero background / final CTA (static fallback under reduced-motion) |
| Bento Grid | **ADOPT** | Rebuild "Why Stellar" + services as an asymmetric bento (wide feature card + metric cards) instead of equal pillars |
| Animated Beams | **ADOPT (refined)** | Replace the quote wizard's flat progress line with a route line that draws as steps complete — reinforces "guided move" DNA |
| Flip Words | AVOID | Gimmicky for a trust brand |
| 3D Cards / Tilt | AVOID | Same as React Bits |
| Particles / Sparkles | AVOID | AI-template |
| Wavy / Vortex backgrounds | AVOID | CPU-heavy, erratic, anti-trust |
| Grid patterns | **ADOPT (very low opacity)** | A *documented* hairline grid only in hero + map sections as blueprint texture — no random lines |

### Magic UI (magicui.design) — 4 ADOPT, rest AVOID
| Component | Verdict | Where |
|---|---|---|
| Number Ticker / Count-up | **REJECTED (user decision)** | Trust ribbon stats — user locked **static mono numerals** (no count-up animation); tabular mono figures read as engineering data, safer and more premium |
| Pixel Image | **ADOPT** | Gallery + hero progressive image loading (blur-up) — premium, tasteful |
| Marquee | **ADOPT (already have)** | Gallery rows + reviews marquee — keep paused-on-hover, reduced-motion safe |
| Shine Border / Border Beam | **ADOPT (scoped)** | Pricing card hover + the popular-plan card gets a slow olive border beam |
| Animated Beam | **ADOPT** | Quote wizard route drawing |
| Grid / Dot pattern | ADOPT (low opacity) | Same as Aceternity grid note |
| Tilt / Flip Text / Confetti / Orbiting Circles / Dock | AVOID | Gimmicks |

### shadcn/ui (ui.shadcn.com) — primitives to add
| Primitive | Value | Verdict |
|---|---|---|
| Sheet (mobile nav drawer) | Replaces the current inline mobile menu — smoother, focus-trapped | **ADOPT** |
| Tooltip | Move-size selectors, trust icons | **ADOPT** |
| Sonner (toasts) | Form feedback (quote wizard submit) | **ADOPT** |
| Dialog / Drawer | "Call us now" / quote summary confirm | ADOPT (scoped) |
| Progress | Wizard step progress (custom-styled) | ADOPT |
| Tabs | Move type selector (House/Apartment/Office) | ADOPT (scoped) |
| Calendar / DatePicker | Move-date picker — needs dark theme + min-date | ADOPT (scoped) |
| Form (react-hook-form) | Wizard validation — **only if** we adopt RHF; otherwise hand-rolled validation is fine at this size | CONSIDER |
| Command palette | Unnecessary for a removalist site | SKIP |
| Chart / DataTable | N/A | SKIP |

Tailwind v4 note: shadcn officially supports Tailwind v4 via the new CLI (`npx shadcn@latest init`); CSS-first `@theme` config — compatible with our tokens.

### 21st.dev & uiverse.io — verdict
- **21st.dev:** Curated shadcn-compatible components; quality is variable and many are AI-generated-looking. **Not worth adopting for a bespoke premium brand** — we have a stronger design direction. Skip.
- **uiverse.io:** Mostly CSS animation toys. **Skip entirely** — production quality concerns.

## 3. Borrowable patterns from design case studies

### footer.design — footer upgrades (borrow, then improve)
1. **Kinetic giant wordmark** — our "STELLAR" watermark gets a slow olive gradient + subtle parallax on scroll (opacity ~4%, GPU-only).
2. **Asymmetric column weighting** — brand column larger (mission + CTA), then nav clusters.
3. **Trust & credentials tier** — ABN / license / insurance line under the columns (real data only).
4. **Interactive micro-widget** — "Fleet active across Melbourne" live dot (real, not fake) or an instant-quote mini trigger.

### storefront.design — hero refinements (borrow)
1. Keep asymmetric editorial split (validated).
2. **Single primary CTA + low-friction secondary** (quote wizard primary; phone secondary) — confirmed.
3. **Inline micro-trust line** under CTAs — already have (4.9★ + police-checked + $20M).
4. **Photo caption bar as architectural caption** — already implemented (Hawthorn → South Yarra · STL-08 · Sat 08:00).
5. Scroll behavior: headline fade-up stagger on load (500–700ms, expo-out); image gentle scale 1.05→1.0 on scroll — no scroll-jacking.

### Awwwards / SiteInspire — 6 impactful dark-editorial patterns
1. **Oversized editorial serif with tight tracking** + one italic accent word (we have this).
2. **Asymmetric whitespace rhythm** — alternate full-width and contained sections (we do this).
3. **Staggered scroll reveals, ≤3 animation families total** (restraint principle).
4. **Real photography with consistent grading** (olive-tinged duotone/desaturation) — apply a subtle shared treatment to all Unsplash photos.
5. **Micro-hairline borders + mono metadata** (we have this).
6. **Map/flight-path as the brand's signature graphic** — our real MapLibre map with olive route is the differentiator; animate route drawing on scroll into view.

### Moving-industry case studies (Muval, Grace, Little Red Trucks, TAXI, CBD Movers)
- **Borrow:** transparent hourly pricing presented as a rate card ("what's included vs extra"); step-by-step quote calculator; suburb coverage lists; review counts with real numbers.
- **Avoid:** orange/blue truck-hero template; fake countdowns; "instant" claims without proof.
- **Improve:** all of it, in black/white/olive premium editorial.

## 4. Motion spec (from micro-interactions research)

| Component | Interaction | Timing / Easing |
|---|---|---|
| Hero headline | Staggered clip-path/fade-up reveal | 700ms expo-out, 40–60ms stagger |
| Primary buttons | Icon slide + subtle lift (no magnet) | 180–200ms, `cubic-bezier(0.16,1,0.3,1)` |
| Service/pricing cards | Scoped spotlight glow following cursor | 200ms fade, expo-out |
| Quote wizard | Route line draws between steps; FLIP step transition | 350ms spring |
| Trust ribbon stats | **Static mono numerals** (user decision — no count-up) | Tabular figures, mono font |
| Map | Route line draws + pulsing olive beacon at depot | 2000ms loop pulse; pause on reduced-motion |
| Gallery | Pixel-image blur-up + paused marquee | 400–700ms |

**Restraint rule:** max 3 animation families on any page. All motion disabled under `prefers-reduced-motion` (already globally handled).

## 5. Final ADOPT list for implementation (whole site)

1. Spotlight (hero + final CTA, static fallback)
2. Bento grid for Why-Stellar / services
3. Animated route beam in quote wizard + map route drawing
4. **Static mono trust stats** (user decision — no count-up animation)
5. Pixel-image (blur-up) for gallery + hero
6. Shine/border beam on pricing popular card
7. Sheet-based mobile nav + Sonner toasts + Tooltip + Dialog (shadcn primitives)
8. Photo grading treatment (consistent olive-tinted desaturation)
9. Hairline blueprint grid (documented, low opacity) in hero + map only
10. Kinetic footer watermark + credentials tier

**Everything else (particles, waves, aurora, tilt, scramble, gradient text, custom cursor, flip words, confetti, dock, orbits) = AVOID.**

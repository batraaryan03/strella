# Component Research — Wave 3: The Right Components for the Borderless System
**Date:** 2026-08-01 (evening session)
**Topic:** Which components are right NOW that the site is borderless (single grotesque type, tonal panels, no serif/no borders/no micro-labels)? Plus the named-site borrow list — what to copy a little and improve.
**Context:** Follows the whole-site redesign (borderless `.panel` system, Instrument Serif removed, serif-italic accents killed, ShineBorder/Eyebrow deleted). This doc re-evaluates every catalog against that system.

---

## 1. Where the site stands after the redesign (the filter)

| System rule | Status |
|---|---|
| Single grotesque type (Geist), real scale contrast | ✅ Done |
| Borderless tonal surfaces (`.panel`/`.panel-hover`) | ✅ Done |
| No serif accents, no border-line cards, no uppercase-mono eyebrows | ✅ Done |
| Mono ONLY for real data (prices, stats, truck codes, indexes) | ✅ Done |
| Olive = single accent (buttons, active states, route lines, data) | ✅ Done |
| Real MapLibre Melbourne map = signature graphic | ✅ Done |

So the question is no longer "which components exist" — it's **"which components respect this system."** Every recommendation below is filtered through that lens.

---

## 2. Re-evaluated component matrix (live catalogs, verified 2026-08-01)

### Magic UI (79 components inventoried live)
| Component | Verdict | Why, in the borderless system |
|---|---|---|
| `pixel-image` (blur-up) | ✅ **ADOPTED** | Already shipped in services + gallery. Perfect fit — no borders needed. |
| `marquee` | ✅ **ADOPTED** | Gallery rows + reviews. Already shipped. |
| `animated-beam` | ✅ **ADOPT (scoped)** | Our RouteBeam already does this (pathLength-normalized). Keep ours. |
| `shine-border` / `border-beam` | ❌ **AVOID** | Border effects — the redesign killed borders. Deleted. |
| `number-ticker` / count-up | ❌ **AVOID** | User locked static mono numerals. |
| `bento-grid` | ✅ **ADOPTED** | Our BentoGrid (borderless now). |
| `grid-pattern` / `dot-pattern` | ✅ **ADOPT (hero/map only)** | Chart-paper already does this at ≤7% with a mask. |
| `blur-fade` / `fade-text` | ⚠️ **CONSIDER** | Our ScrollReveal + SplitText already cover reveal needs. Redundant. |
| `progressive-blur` | ⚠️ **CONSIDER** | Could add depth on the map section edges — but decorative. Low priority. |
| `text-reveal`, `dia-text-reveal`, `morphing-text`, `kinetic-text`, `hyper-text`, `word-rotate`, `typing-animation`, `sparkles-text`, `aurora-text`, `comic-text`, `glyph-matrix`, `video-text`, `text-3d-flip`, `animated-gradient-text`, `animated-shiny-text`, `line-shadow-text`, `spinning-text` | ❌ **AVOID all** | Text theatrics = the exact template feel the redesign removed. |
| `particles`, `meteors`, `orbiting-circles`, `warp-background`, `light-rays`, `retro-grid`, `hexagon-pattern`, `flickering-grid`, `interactive-grid-pattern` | ❌ **AVOID all** | Decorative backgrounds / star-slop. Anti-list. |
| `rainbow-button`, `ripple-button`, `shimmer-button`, `pulsating-button`, `shiny-button`, `interactive-hover-button` | ❌ **AVOID all** | Our flat Button (no glow) is the right call. |
| `smooth-cursor`, `pointer`, `lens` | ❌ **AVOID** | Cursor effects + magnify = gimmicks. |
| `globe`, `dotted-map`, `icon-cloud`, `dock`, `avatar-circles`, `iphone`, `safari`, `terminal`, `file-tree`, `code-comparison`, `tweet-card` | ❌ **AVOID** | Not relevant to a removalist. |

### Aceternity UI (full catalog inventoried live)
| Component | Verdict | Why |
|---|---|---|
| `bento-grid` | ✅ **ADOPTED** | Ours, borderless. |
| `card-spotlight` | ⚠️ **CONSIDER** | Cursor-follow olive glow on cards — **but** the redesign removed glow orbs. Only acceptable if it's an extremely subtle tonal lift, not a glow. **Recommend: skip** — the panel-hover elevation already reads premium. |
| `direction-aware-hover` | ⚠️ **CONSIDER** | Border-side detection → but it's a *border* effect. Contradicts the system. **Skip.** |
| `hover-border-gradient` / `moving-border` | ❌ **AVOID** | Border effects. |
| `tracing-beam` / `timeline` | ⚠️ **CONSIDER** | Our RouteBeam already does the trace. Timeline (vertical) could fit the process section — but the horizontal waypoint version is better. **Keep ours.** |
| `spotlight`, `spotlight-new` | ✅ **ADOPTED** | Hero + final CTA (re-tuned to new olive). |
| `hero-parallax`, `parallax-scroll`, `sticky-scroll-reveal`, `container-scroll-animation`, `canvas-reveal-effect`, `lamp-effect` | ❌ **AVOID** | Heavy scroll theatrics; our GSAP ScrollReveal is enough. |
| `hero-highlight`, `hero-sections-free` | ❌ **AVOID** | Template heroes. |
| `flip-words`, `typewriter-effect`, `text-generate-effect`, `text-hover-effect`, `squiggly-text`, `encrypted-text`, `ascii-art`, `canvas-text`, `layout-text-flip`, `container-text-flip` | ❌ **AVOID all** | Text theatrics. |
| `aurora-background`, `background-beams`, `background-beams-with-collision`, `background-lines`, `background-boxes`, `vortex`, `wavy-background`, `meteors`, `shooting-stars-and-stars-background`, `glowing-stars-effect`, `dotted-glow-background`, `grid-and-dot-backgrounds` | ❌ **AVOID all** | Background decoration / star-slop. |
| `3d-card-effect`, `3d-pin`, `wobble-card`, `draggable-card`, `card-stack`, `evervault-card`, `comet-card`, `glare-card`, `focus-cards`, `expandable-card`, `apple-cards-carousel` | ❌ **AVOID all** | 3D/tilt/card toys. |
| `floating-dock`, `navbar-menu`, `floating-navbar`, `resizable-navbar`, `sidebar`, `notch`, `dynamic-island`-type | ❌ **AVOID** | Nav gimmicks; our fixed header + Sheet is right. |
| `magnetic-button` | ❌ **AVOID** | Magnet = toy. Flat buttons confirmed. |
| `placeholders-and-vanish-input`, `gooey-input`, `signup-form`, `animated-modal`, `multi-step-loader`, `file-upload`, `sticky-banner` | ❌ **AVOID** | Form theatrics / loaders. |
| `world-map`, `3d-globe`, `github-globe` | ❌ **AVOID** | We have the REAL Melbourne map. |

### shadcn/ui (v4 native — verified live)
| Primitive | Verdict | Why |
|---|---|---|
| Sheet / Dialog / Tooltip / Progress / Toaster | ✅ **ADOPTED** | Hand-authored radix + cva + cn + tokens. Matches v4 standard. |
| **Calendar / DatePicker** | ✅ **ADOPT NEXT** | Move-date in the wizard + book-move. Needs dark theme + min-date today + AU locale. Highest CRO value of anything left. |
| **Drawer** (bottom sheet) | ✅ **ADOPT NEXT** | Mobile suburb picker on book-move. |
| Carousel | ⚠️ SKIP | Marquee is better for reviews/gallery. |
| Tabs | ⚠️ CONSIDER | Move-type selector — but radio pills already work. Skip. |
| Command palette | ❌ SKIP | Irrelevant. |
| Form (react-hook-form) | ⚠️ CONSIDER | Hand-rolled validation is fine at this size. Skip. |

### 21st.dev & uiverse.io
- **21st.dev:** quality is variable, much is AI-generated-looking. **Skip** — we have a stronger bespoke direction.
- **uiverse.io:** CSS toys. **Skip entirely.**

### React Bits (reactbits.dev — SPA, not scrapable)
Wave-1 assessment stands: Spotlight Card + Split Text already adopted. Text Scramble / Magnet / Particles / Aurora / Waves / Blob Cursor — avoid.

---

## 3. Borrow list — website designs to copy a little and improve (named sites)

### Footers (footer.design + live research)
1. **Giant floating wordmark** — Stripe / Cuberto / Object & Archive: brand name at 80–100% viewport width, 4–10% opacity. **We have it.** *Improve:* subtle olive gradient + parallax on scroll (GPU-only, reduced-motion static).
2. **Trust & credentials tier** — dark-adapted licence/insurance line (ABN, $20M insured, police-checked + Google 4.9★ stroke badge). **We have the tier.** *Improve:* add the Google review stroke badge in the mono line.
3. **CTA bridge above the grid** — Cuberto-style "Moving soon? Lock in your crew today" with one primary action. **We have FinalCta + footer CTA.**
4. **Live state micro-widget** — "Crews active across Melbourne" pill — **only** as a static line tied to the map depot (never a fake animated pulse).

### Heroes (storefront.design + prior session)
Asymmetric editorial split, single primary CTA + phone secondary, inline micro-trust line, photo caption as move-record — **all implemented.** No change.

### Dark editorial (Awwwards/SiteInspire — 6 patterns)
1. **Oversized grotesque with tight tracking** + ONE olive accent word max — done (Geist, -0.04em).
2. **Asymmetric whitespace rhythm** — alternate full-width and contained sections — done.
3. **Staggered scroll reveals, ≤3 animation families** — done (SplitText, ScrollReveal, RouteBeam).
4. **Consistent photo grading** (olive desat) — done.
5. **Mono metadata as data, not decoration** — done post-redesign.
6. **Real map as the signature graphic** — done (MapLibre). *Improve:* draw the route on scroll into view + one static depot beacon.

### Moving-industry (Muval, Grace, Little Red Trucks, TAXI, CBD Movers)
- **Borrow:** transparent hourly rate-card with "included vs extra"; step-by-step quote calculator (ours: route → load → details, phone-last — matches Muval best practice); suburb coverage lists; real review counts.
- **Copy-a-little upgrades:**
  - **Muval's estimate honesty** — show an indicative range in the wizard step-3 summary (e.g. "$320–$420 based on similar moves").
  - **Grace's "what's included" checklist** — small "Included on every move" strip (blankets, ramp, two movers, insurance) beside pricing.
  - **Little Red Trucks' fleet photography** — real truck photos in pricing (we use real Unsplash photos — done).

---

## 4. The 5 highest-impact next moves (Wave 4 implementation)

1. **shadcn Calendar** (dark, min-date today, AU locale) → wizard + book-move move-date. *(CRO win #1.)*
2. **shadcn Drawer** (bottom sheet) → mobile suburb picker on book-move. *(CRO win #2.)*
3. **Footer polish** — olive gradient on the giant wordmark + Google stroke badge in credentials line + static "crews active" line. *(Premium close.)*
4. **Map scroll-linked route draw** + one static depot beacon. *(Signature graphic alive, no gimmick.)*
5. **Muval-style estimate range** in the quote wizard summary. *(Honesty = trust = conversion.)*

**Anti-list reminder (from live catalogs):** no particles/aurora/meteors/stars/sparkles/typewriter/flip-words/wavy/vortex/3D-tilt/rainbow/shimmer/spotlight-card-glow/border-beams anywhere. The borderless system is the brand. Navigation language (routes, waypoints, coordinates) is the only decoration allowed.

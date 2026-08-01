# Stellar Removals

**Melbourne's Precision Removalists** — a premium, dark-themed website for a Melbourne-based household & furniture removalist business.

Stellar is a marketing + conversion site with a **borderless editorial design system** (charcoal canvas, anaconda-olive accent), a real interactive **Leaflet Melbourne map**, a **multi-step quote wizard** with instant estimate ranges, full **Storybook** coverage for every component and section, and a documented research trail in `docs/`.

---

## Design language

The site intentionally avoids "space-themed" decoration. The constellation-inspired identity is expressed as *navigation, precision and guidance* — subtle geometry, route lines, and waypoint markers — never stars, planets or sci-fi imagery.

| Token | Value | Role |
|---|---|---|
| Canvas | `#0a0b08` | Page background (charcoal, not pure black) |
| Surface | `#12140e` → `#23271a` | Tonal panels — depth via contrast, **no borders** |
| Olive | `#97a75a` (`#b3c275` hover) | Single accent — buttons, routes, active states, data |
| Ink | `#f2f3ed` / `#a6ab9e` / `#757a6c` | Primary / secondary / muted text |
| Type | Instrument Sans + Instrument Serif + Geist Mono | Sans for UI/body, **serif display for headlines**, mono only for real data (prices, stats, truck codes, indexes) |

**Design law:** borderless tonal zoning · Instrument Sans body with Instrument Serif display accents · no glow · no uppercase-mono micro-label eyebrows · subtle motion (fade, elevation, opacity, inertial smoothing) · `prefers-reduced-motion` respected throughout.

**Smooth scroll:** the whole site runs through GSAP ScrollSmoother (`smooth-scroll.tsx`) — `#smooth-wrapper` > `#smooth-content` in the root layout. Fixed elements (Header, Toaster, FloatingQuote) live **outside** the wrapper, because the content transform breaks `position: fixed` descendants. Reduced-motion users get native scroll with zero GSAP loaded. One restrained `data-speed` parallax on the hero photo only.

---

## Tech stack

- **Next.js 16** (App Router, React 19, TypeScript 5) — static prerender for all pages
- **Tailwind CSS v4** (CSS-first config, `@theme inline` tokens, `tw-animate-css`)
- **Storybook 10** (`@storybook/nextjs-vite`) — every component + section has stories
- **Leaflet** + **OpenStreetMap** — real map, no API key (fully free, no usage limits); dark-graded via CSS filter on standard tiles
- **GSAP** (ScrollTrigger + ScrollSmoother) + **framer-motion** — inertial smooth scroll, scroll-linked reveals
- **react-day-picker** + **date-fns** — dark Calendar / DateField with AU formatting
- **Radix UI** primitives (Dialog, Tooltip, Progress, Slot) + **sonner** toasts
- **lucide-react** icons · **cva + clsx + tailwind-merge** for variants
- **Real component kit** (Magic UI / Aceternity / React Bits): PixelImage pixel-reveal, BentoGrid, NumberTicker, Highlighter (rough-notation), NoiseTexture, KineticText, AnimatedCircularProgressBar, Spotlight, RevealText
- **React Bits kit** (client-only): **Hyperspeed** (olive-tuned "Neon Waves" — the homepage backdrop on `/`), **LaserFlow** (olive laser wash), **ColorBends** (color-field bends; stock + olive), **Silk** (flowing silk, brand olive), **Grainient** (olive animated gradient, `ogl`), **Counter** (rolling digits, `motion`), **CountUp** (spring counter, `motion`), **DomeGallery** (drag-rotatable photo sphere, `@use-gesture/react`), **FluidGlass** (3D glass lens/bar/cube, drei + maath + GLB models), **GradualBlur** (layered edge blur overlay), **MagicBento** (GSAP bento card grid with spotlight/border-glow/tilt — olive `#636B2F` glow, `cards` prop for Stellar content), **ShinyText** (animated shine sweep via `motion`), **SplitText** (GSAP letter/word reveal via `@gsap/react` + `gsap/SplitText` — distinct from the Typography SplitText), **StaggeredMenu** (GSAP staggered fullscreen menu — olive underlays, project logo), **Stepper** (spring step wizard via `motion` — olive active/complete states) and **SpotlightCard** (cursor-following card spotlight, olive-tinted) — WebGL backgrounds on `three` + `postprocessing` (+ `@react-three/fiber`/`drei`/`maath`/`ogl` where needed)

---

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run storybook  # http://localhost:6006
```

| Script | Purpose |
|---|---|
| `npm run dev` | Next.js dev server |
| `npm run build` / `start` | Production build / serve |
| `npm run lint` | ESLint (0-error gate) |
| `npm run storybook` | Storybook dev server (port 6006) |
| `npm run build-storybook` | Static Storybook build → `storybook-static/` |

### Environment

No API keys are required to run. The map uses Leaflet + OpenStreetMap (no key), and the WebGL backgrounds + FluidGlass 3D models are fully self-hosted under `public/assets/`.

The contact endpoint (`/api/contact`) validates every submission, **logs it**, and — when `RESEND_API_KEY` is set — **emails the lead to the ops inbox via Resend**. Without the key it gracefully falls back to logging only (perfect for local dev). Copy `.env.example` → `.env.local` and add the key from [resend.com/api-keys](https://resend.com/api-keys):

```
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL="Stellar Removals <hello@stellarremovals.com.au>"
RESEND_TO_EMAIL=ops@stellarremovals.com.au
```

Until a sending domain is verified on Resend, the default `onboarding@resend.dev` from-address is used (test-mode friendly). If the key is configured but delivery fails, the route returns 502 rather than silently dropping a lead.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout: fonts, Header + SmoothScroll wrapper (fixed elems outside), Toaster, FloatingQuote
│   ├── page.tsx            # Homepage — all sections in CRO order
│   ├── globals.css         # Design tokens + utilities (.panel, .card-glare, noise, blur-in)
│   ├── book-move/          # Booking page (DateField, bottom-sheet SuburbPicker)
│   ├── contact/            # Contact page
│   └── api/contact/        # POST route → email to sales
├── components/
│   ├── ui/                 # Primitives (calendar, date-field, count-up, sheet, dialog, …)
│   ├── sections/           # Page sections (hero, trust-ribbon, services, pricing, …)
│   ├── map/                # Leaflet + OpenStreetMap Melbourne map (olive polygon, route, depot beacon)
│   └── ui/backgrounds/      # React Bits kit — Hyperspeed (homepage backdrop), LaserFlow, ColorBends, Silk, Grainient, Counter, CountUp, DomeGallery, FluidGlass, GradualBlur, MagicBento, ShinyText, SplitText, StaggeredMenu, Stepper, SpotlightCard (stories for all)
├── hooks/                  # use-media-query
└── lib/
    ├── content.ts          # Single source of truth for ALL copy + data
    └── utils.ts            # cn() helper
docs/                       # Research trail (design system, waves 1–5, user research)
```

---

## Pages & homepage sections

| Section | What it does |
|---|---|
| Header / nav | Sticky minimal header, mobile menu |
| Hero | Editorial split — display typography + real photo + floating quote card + move-record caption |
| Trust ribbon | **NumberTicker** animated stats ($20M, 100%, 5,000+, 4.9★) on hairline dividers |
| Quote wizard | 3 steps (Route → Load → Details) with **ballpark estimate on step 1**; contact last — sits high on the page as the primary conversion widget |
| Services | Borderless bento cards with real photography + restrained GlareHover |
| Process | **ScrollStack** — panels pile up on scroll, pure-CSS waypoint rail (RouteBeam removed) |
| Why choose | Vertical pillars with mono metrics |
| Reviews | Verified, suburb-attributed Google reviews |
| Service areas | **Real Leaflet map** — olive service polygon, animated route, depot beacon, suburb chips |
| Pricing | Truck tiers + **day-of-week toggle** (weekend same-rate trust statement) |
| Gallery | **Editorial masonry** + full-viewport lightbox (keyboard + touch) |
| Moving tips / FAQ | Large-typography accordion with **blur-in** answer reveals |
| Final CTA | Cinematic booking call-to-action panel |
| Footer | Giant wordmark, compliance tier (ABN, $20M liability), floating quote trigger |

**Pages:** `/` · `/book-move` · `/contact`

---

## The quote wizard (CRO core)

1. **Route** — moving from / to (suburb datalist)
2. **Load** — move size selector + preferred date (DateField) → **indicative estimate range shown here**, before any contact details
3. **Details** — name / phone / email → submits to `/api/contact` → sales team call-back within 60s

The price band is deliberately surfaced *before* the contact wall (Muval pattern) so the user sees a number first.

---

## Design system notes for contributors

- **Borderless**: use `.panel` / `.panel-hover` for surfaces. Do not add card borders or glow.
- **Mono discipline**: `font-mono` is reserved for real data (prices, stats, codes, indexes) — never for section labels.
- **No serif accents**: headlines are Geist Sans with tight tracking; the serif-accent look is banned.
- **Motion**: subtle only — `--ease-out-expo` / `--ease-snappy`, ~300–500ms. Respect `prefers-reduced-motion`.
- **Every component gets a story**: add `*.stories.tsx` alongside new `ui/` components.
- **Content lives in `lib/content.ts`** — update copy there, not in components.
- **Photography**: real Unsplash images only (credits rendered in the footer). No placeholders.

---

## Storybook

```bash
npm run storybook
```

Stories are organized as `Primitives/*` (ui components) and section stories in `components/sections/`. Includes a11y + docs addons.

---

## Research & design history

The `docs/` folder records the full research trail behind this design:

- `2026-08-01-design-direction.md` — brand direction (constellation as navigation, not space)
- `2026-08-01-design-system.md` — the borderless token system
- `2026-08-01-design-research.md` · `2026-08-01-user-research.md` — competitor + user research
- `2026-08-01-component-research.md` → `-wave2.md` → `-wave3.md` → `-wave4.md` → `-wave5.md` — catalog inventories (Magic UI, Aceternity, React Bits, 21st.dev), case studies (Awwwards, SiteInspire, Framer templates, footer.design), and the moving-industry conversion playbook (Muval, Man With A Van, Cheap Removals).
- `2026-08-01-gsap-motion-layer.md` — the ScrollSmoother smooth-scroll layer: architecture rule (fixed elements outside the wrapper), reduced-motion posture, and the two-element parallax budget.

---

## Deployment

Builds are fully static (`○`) except the contact API route (`ƒ`). Deploy to any Node host or static platform — see Next.js deployment docs for your host of choice.

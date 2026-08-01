# GSAP ScrollSmoother — Motion Layer Integration
**Date:** 2026-08-01 (evening session)
**Topic:** The site-wide smooth-scroll layer: what was researched, what was decided, how it is wired, and the rules that keep it within the design law.

---

## 1. Why ScrollSmoother (and why it is safe)

- **GSAP 3.13+ bundles ScrollSmoother free** in the public package — no Club GSAP membership, no extra dependency. The project already ships `gsap@^3.15.0`, so `ScrollSmoother.js` + `ScrollTrigger.js` are installed locally.
- The premium-dark tier we benchmarked (Waves 3–4: Muval, Man With A Van, Framer premium templates, Awwwards/SiteInspire selections) overwhelmingly uses **inertial scrolling** — the page eases, it does not snap. It reads as "expensive" without a single visual change.
- Alternative approaches rejected:
  - **Lenis + GSAP integration** — excellent, but adds a second library; ScrollSmoother is already in the bundle.
  - **CSS `scroll-behavior: smooth`** — no inertia, no scrubbed effects, dead-feeling; also interferes with ScrollTrigger measurements.
  - **No smoothing** — the site's reveals/CountUp/ScrollStack still work, but the whole page feels less deliberate.

## 2. The architecture rule (the important part)

ScrollSmoother applies a **transform to the content container**, which turns it into a containing block. Any `position: fixed` descendant then fixes to the **wrapper** instead of the viewport — the classic broken-fixed-header bug.

**Rule: fixed elements live OUTSIDE `#smooth-wrapper`.**

In the root layout (`src/app/layout.tsx`):

```
<body>
  <Header />                    ← fixed, OUTSIDE the wrapper
  <SmoothScroll>                ← #smooth-wrapper > #smooth-content
    <TooltipProvider>{children}</TooltipProvider>
  </SmoothScroll>
  <Toaster />                   ← fixed, OUTSIDE
  <FloatingQuote />             ← fixed, OUTSIDE
</body>
```

Per-page `<Header />` renders were removed (home, /book-move, /contact) — the header is layout-owned now.

## 3. The component (`src/components/ui/smooth-scroll.tsx`)

- `"use client"` wrapper rendering `#smooth-wrapper` > `#smooth-content` (ids are documentation + selector targets).
- **Dynamic imports** of `gsap`, `gsap/ScrollTrigger`, `gsap/ScrollSmoother` — no GSAP in the initial bundle.
- `ScrollSmoother.create({ wrapper, content, smooth: 1.2, effects: true, smoothTouch: 0.1 })` — gentle desktop inertia, near-native touch.
- `ScrollTrigger.refresh()` after `window.load` and `document.fonts.ready` — fonts/imagery shifting layout mid-scroll is the #1 cause of misaligned triggers.
- **Route-change safety:** the root layout persists across client-side navigation, so a `usePathname()` effect fires `ScrollTrigger.refresh()` (rAF-deferred) whenever the route changes — otherwise reveals on the next page would be measured against the old layout.
- **Cleanup:** `killed` flag + `smoother.kill()` + listener removal. No leaks across HMR/navigation.

## 4. Reduced motion — zero GSAP

The effect checks `prefers-reduced-motion: reduce` **before any import resolves** and returns — native scroll, zero GSAP bytes, no smoother, no transforms. This is the strongest possible reduced-motion posture (better than "play at reduced speed").

## 5. Parallax — exactly two elements, both barely-there

Per the design law ("subtle motion · restraint"), `data-speed` parallax is rationed:

| Element | data-speed | Why here |
|---|---|---|
| Hero photo (`hero-section.tsx`) | `0.96` | The hero is the first scroll interaction; a 4% drift reads as depth, not gimmick. |
| Pricing rate cards (`pricing-section.tsx`) | `0.98` | The section with the most visual mass — the slow drift separates the cards from the header above. |

Nothing else gets speed effects. No section-wide games, no scrub-linked reveals, no pinning.

## 6. Interaction with the existing motion vocabulary

- **ScrollReveal** (fade + translate, ScrollTrigger): unchanged — triggers re-measure via the refresh paths above.
- **CountUp** (IntersectionObserver, not ScrollTrigger): unaffected by the smoother — observer fires on geometry, which the transform does not break (the wrapper translates the same content the observer watches).
- **ScrollStack process** (sticky panels): sticky is computed against the scroll container; ScrollSmoother keeps native scrolling (it translates, not scrolls), so `position: sticky` continues to work — verified by review of the stacking math and the live route checks.

## 7. Anti-list additions

No pinning, no scrub-linked timelines, no section-wide speed fields, no scroll-jacking of the trackpad, no forced-scroll animations on touch. Parallax stays at ≤ 0.04 delta and is limited to the two elements above.

## 8. Validation state

- `tsc` clean · eslint 0 errors · `next build` (all static, `/api/contact` dynamic) · `build-storybook` clean.
- Live dev-server checks: server-rendered HTML contains `#smooth-wrapper`/`#smooth-content`; `<header>` is `position: fixed` and outside the wrapper; `data-speed="0.96"` present on the hero; `/`, `/contact`, and back-navigation all 200 with no errors in the dev log.
- Storybook: `Motion/SmoothScroll` story with an explicit `RouterContext` provider (the component calls `usePathname()`).
- Docs updated: `2026-08-01-design-system.md` § 9 (motion layer) and README (tech stack, structure comment, motion law).

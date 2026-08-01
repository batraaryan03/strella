# Component Research — Wave 5: Catalog Complete, Research Mature, Final Polish List
**Date:** 2026-08-01 (final session)
**Topic:** React Bits catalog now 100% inventoried (all four sections, verified live via GitHub API). Plus the moving-industry template/trend research. Ends with the honest conclusion: **the component research is mature — the site now implements the premium-tier playbook — and what remains is a short final-polish list.**

---

## 1. React Bits — COMPLETE catalog (finally verified, 2026-08-01)

The GitHub API rate limit cleared this session. Full inventory, all four sections:

### TextAnimations (23)
`ASCIIText` `BlurText` `CircularText` `CountUp` `CurvedLoop` `DecryptedText` `FallingText` `FuzzyText` `GlitchText` `GradientText` `RotatingText` `ScrambledText` `ScrollFloat` `ScrollReveal` `ScrollVelocity` `ShinyText` `Shuffle` `SplitText` `TextCursor` `TextPressure` `TextType` `TrueFocus` `VariableProximity`

### Backgrounds (45)
`Aurora` `Balatro` `Ballpit` `Beams` `ColorBends` `DarkVeil` `Dither` `DotField` `DotGrid` `EvilEye` `FaultyTerminal` `Ferrofluid` `FloatingLines` `Galaxy` `GradientBlinds` `Grainient` `GridDistortion` `GridMotion` `GridScan` `Hyperspeed` `Iridescence` `LetterGlitch` `LightPillar` `LightRays` `Lightfall` `Lightning` `LineWaves` `LiquidChrome` `LiquidEther` `Orb` `Particles` `PixelBlast` `PixelSnow` `Plasma` `PlasmaWave` `Prism` `PrismaticBurst` `Radar` `RippleGrid` `ShapeGrid` `SideRays` `Silk` `SoftAurora` `Threads` `Waves`

### Components (40)
`AnimatedList` `BorderGlow` `BounceCards` `BubbleMenu` `CardNav` `CardSwap` `Carousel` `ChromaGrid` `CircularGallery` `Counter` `CurvedInput` `DecayCard` `Dock` `DomeGallery` `ElasticSlider` `FlowingMenu` `FluidGlass` `FlyingPosters` `Folder` `GlassIcons` `GlassSurface` `GooeyNav` `InfiniteMenu` `Lanyard` `LineSidebar` `MagicBento` `Masonry` `ModelViewer` `OptionWheel` `PillNav` `PixelCard` `ProfileCard` `ReflectiveCard` `ScrollStack` `SpecularButton` `SpotlightCard` `Stack` `StaggeredMenu` `Stepper` `TiltedCard`

### Animations (31, verified last session)
`AnimatedContent` `Antigravity` `BlobCursor` `ClickSpark` `Crosshair` `Cubes` `CursorGrid` `ElectricBorder` `FadeContent` `GhostCursor` `GlareHover` `GradualBlur` `ImageTrail` `LaserFlow` `LogoLoop` `MagicRings` `Magnet` `MagnetLines` `MetaBalls` `MetallicPaint` `Noise` `OrbitImages` `PixelTrail` `PixelTransition` `Ribbons` `ShapeBlur` `SplashCursor` `StarBorder` `StickerPeel` `Strands` `TargetCursor`

**Total: 139 components inventoried.** The catalog is now fully mapped — no more gaps.

---

## 2. React Bits picks — filtered through the borderless system (final)

| Component | Verdict | Why, in our system |
|---|---|---|
| `CountUp` / `Counter` | ✅ **ADOPT — the ONE new pick** | Animated numeral counters for the trust ribbon + stats. Our mono numerals are real data; animating them on scroll (5,000+ moves, 4.9★, $20M) is the single most "expensive" craft detail available. No borders, no decoration — pure data. |
| `ScrollStack` | ⚠️ Optional | Stacked cards collapsing on scroll — could replace the process section's static columns with a kinetic route. Medium risk; only if user wants a wow moment. |
| `Masonry` | ⚠️ Optional | Editorial masonry for the gallery. We use dual marquee rows (verified better for asymmetry); only swap if user prefers a fixed grid. |
| `AnimatedList` | ⚠️ Optional | Staggered list reveal for the wizard's "what's included" — we already have scroll-reveal; low marginal value. |
| `Grainient` | ❌ AVOID | Animated grain — we already shipped static Noise; animation adds nothing. |
| `DotGrid` / `Threads` | ❌ AVOID | Constellation-adjacent line networks — the exact AI-tell the user rejected in Wave 1. |
| `Radar` | ❌ AVOID | Radar sweep on the map — novelty over craft. |
| `SpecularButton` / `TiltedCard` / `ReflectiveCard` / `LiquidChrome` / `Iridescence` / `Plasma` / `Silk` / `Ferrofluid` | ❌ AVOID | Show-off WebGL / shiny surfaces — our language is flat, flat, flat. |
| `GooeyNav` / `FlowingMenu` / `InfiniteMenu` / `StaggeredMenu` / `BubbleMenu` / `PillNav` | ❌ AVOID | Menu gimmicks. Our header is minimal by design. |
| `DecayCard` / `FallingText` / `LetterGlitch` / `GlitchText` / `TextPressure` / `Hyperspeed` | ❌ AVOID | Destruction/glitch/speed effects — wrong register for a trust business. |
| `BorderGlow` / `ElectricBorder` / `StarBorder` / `PixelCard` / `ChromaGrid` | ❌ AVOID | Border/neon effects — system is borderless. |
| `Carousel` | ❌ AVOID | Verified: marquee beats carousel for reviews/gallery. |
| `ModelViewer` | ❌ AVOID | 3D truck model — the Weekend Movers project has one; our direction is photography-led, not 3D. |

**Bottom line: of 139 React Bits components, exactly ONE is worth adopting (CountUp).** Everything else is either already shipped (SpotlightCard, GlareHover, GradualBlur, Noise, SplitText, AnimatedContent) or contradicts the design law. That is the verdict of a mature system.

---

## 3. Moving-industry sources (Colorlib / Dribbble / Behance / ThemeForest) — mined

### What the template tier shares (the "to avoid" list, confirmed by the sources)
- Hero = full-bleed stock truck photo + big orange/blue CTA ("Get a Free Quote").
- Stock photography of generic cardboard boxes and smiling white-glove movers in saturated color.
- 3-column services with icon-in-circle + title + paragraph (the exact card grid we killed).
- "Trust" = floating 5-star badge with no attribution.
- Orange/blue/red palettes everywhere; virtually none do dark charcoal + olive.
- Overused industry ideas: truck illustrations, moving-box iconography, "since 2005" banners.

### The 3 transferable ideas from the industry sources (all already shipped)
1. **Quote-first hero** — the top templates put the calculator in the hero; we have the floating quote card (Wave 1) + FloatingQuote trigger (Wave 4). ✅
2. **Transparent rate presentation** — MWAV's day-of-week rates; our pricing toggle (Wave 4). ✅
3. **Verified review attribution** — name + suburb on every review; our reviews-section already does this, plus the Google 4.9 badge. ✅

### The one NOT yet shipped (from the industry tier)
**Animated stat counters** — the strongest premium moving sites animate "moves completed / rating / years" on scroll. We have the static mono numerals. This is the last gap, and it's the same component as section 2's pick.

---

## 4. Post-Wave-4 state — what the research says is left

**Waves 1–4 shipped:** borderless system, calendar/date-field, drawer, map route animation, estimate range, noise, rate toggle, compliance footer, floating trigger, ballpark-first wizard, gradual blur, glare hover.

**Remaining gap per the combined research (industry + premium dark + catalog):**

| # | Move | Source | Effort | Value |
|---|---|---|---|---|
| 1 | **CountUp animated stats** — trust ribbon numerals + "5,000+ moves" tick up on scroll (IntersectionObserver, ~600ms ease-out, respects reduced-motion) | React Bits `CountUp` + industry tier | Small | High — the last "expensive" detail |
| 2 | **ScrollStack process** (optional wow) — process columns collapse into a kinetic stack on scroll | React Bits `ScrollStack` | Medium | Optional |
| 3 | **Masonry gallery** (optional swap) | React Bits `Masonry` | Medium | Optional |

**Everything else is confirmed AVOID or already shipped.** This is the honest end-state of the research thread: the design system is mature; only optional polish remains.

---

## 5. Verdict
The research question "which component is right" now has a definitive answer set: **139 React Bits components inventoried → 1 to adopt (CountUp), 2 optional (ScrollStack, Masonry), rest avoided.** The design-case-study question is likewise settled — the site already implements the premium-tier playbook from Muval/MWAV/Framer/premium-dark (verified in Waves 3–4). Recommend: **ship CountUp**, decide on the two optional wow-moves, and treat the component research as **closed**.

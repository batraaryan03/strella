# Component Research — Wave 4: New Catalogs, Conversion Patterns & the Gap List
**Date:** 2026-08-01 (late session)
**Topic:** The three catalogs never yet inventoried (React Bits — now verified live via GitHub API, 21st.dev, Uiverse.io), plus removalist-industry conversion patterns and Framer template patterns. Ends with a **gap-analysis pick-list** filtered through the shipped borderless system.
**Context:** Follows the whole-site borderless redesign + 5 implemented moves (Calendar/DateField, Drawer/suburb-picker, footer polish, map route animation, estimate range). This wave asks: what is *still* missing that the research says matters?

---

## 1. New catalog inventories (verified this session)

### React Bits — full Animations catalog (fetched live from `DavidHDev/react-bits` via GitHub API)
`AnimatedContent` `Antigravity` `BlobCursor` `ClickSpark` `Crosshair` `Cubes` `CursorGrid` `ElectricBorder` `FadeContent` `GhostCursor` `GlareHover` `GradualBlur` `ImageTrail` `LaserFlow` `LogoLoop` `MagicRings` `Magnet` `MagnetLines` `MetaBalls` `MetallicPaint` `Noise` `OrbitImages` `PixelTrail` `PixelTransition` `Ribbons` `ShapeBlur` `SplashCursor` `StarBorder` `StickerPeel` `Strands` `TargetCursor`
*(TextEffects/Backgrounds/Borders/Components dirs rate-limited on GitHub API — prior session assessment stands: Split Text, Text Scramble, Gradient Text, Particles, Aurora, Waves, Blob Cursor, Tilted Card, Spotlight Card known.)*

### 21st.dev — landscape (fetched live)
Term-frequency across the marketplace: **form (89)** · border (64) · gradient (30) · button (23) · avatar (23) · card (22) · hero (21) · cursor (17) · scroll (14) · glow (10) · motion (7) · mask (6) · pricing (6).
Read: the marketplace is dominated by form/hero/pricing blocks — the same conversion blocks our site needs. Borrow *structure*, skip the glow/cursor noise.

### Uiverse.io
**Blocked (HTTP 403, Cloudflare).** No value lost — it's raw CSS micro-widgets, mostly incompatible with our system anyway. Dropped permanently.

---

## 2. Removalist-industry conversion research (verified — Muval, Man With A Van, Grace, CBD Movers)

The most valuable finding of this whole research thread: **what the premium tier of our own industry does that we haven't fully copied yet.**

### The premium-tier playbook
| Pattern | Template-tier | Premium-tier (Muval / MWAV) |
|---|---|---|
| Quote flow | Endless form or "call us" | **3–4 micro-steps** → basics (route+date) → size (visual selectors) → add-ons → **instant price band before any contact wall** |
| Pricing | Hidden behind "Request a quote" | **Public rate cards**, day-of-week breakdown (Mon–Fri / Sat / Sun / PH), hourly + travel component, explicit 2-hr minimum, inclusions vs extras |
| Trust | Anonymous 5★ badge | Verified reviews with names+suburbs, **ABN/ACN in footer**, AFRA membership, "$20M public liability", live crew tracking promise |
| Positioning | "Cheapest in Melbourne!" | Peace-of-mind, white-glove, precision — which is exactly Stellar's positioning |

### The 4 "copy a little, improve" patterns (ranked by conversion impact)
1. **Day-of-week rate toggle** in the pricing section — Man With A Van's breakdown done as a smooth toggle (Mon–Fri vs Sat vs Sun), not a static card. *Improvement:* keep our truck tiers (STL-04/08/10) as rows, toggle shifts the hourly rate + a "weekend included" badge on the middle tier.
2. **Zero-friction ballpark before the contact wall** — Muval's estimator. We already ship the estimate range in the wizard summary; the *gap* is it lives after the details form. Move/duplicate a lightweight ballpark to the top of the wizard.
3. **Trust-anchored footer with compliance line** — ABN/ACN + "$20M public liability" + "AFRA member" as a badge-of-honor line, not fine print. Our footer got the Google stroke badge + crews-active line; **ABN + insurance line is the missing compliance anchor**.
4. **Inventory-to-truck visualizer** — room cards that fill a stylised truck as you add volume. High effort; the *light* version is a truck-capacity bar in the wizard step 3 (size selector already maps to truck code).

---

## 3. Framer template design language (verified — Griddy, Darkfolio, Jonas, KOTA builds)

### What premium templates actually do (that we can borrow)
- **Borderless editorial grids** — division via tonal steps (`#09090b` → `#121215`), not borders. ✅ We already shipped exactly this.
- **Spec-sheet data readouts** — mono metadata, index numbers (`01 // RESIDENTIAL`), coordinates. ✅ Already the language of our trust ribbon, truck codes, map readouts.
- **Oversized type with `tracking-tighter`** + tiny tracked-out uppercase meta — ✅ done in hero.
- **GPU marquees** — ✅ gallery + reviews.
- **Floating CTA / persistent quote trigger** — ❌ **Not shipped.** A floating "Instant quote" pill with a live pulse is a genuine high-converting pattern we don't have.

### Overused template tropes to keep avoiding (confirmed 2026)
Infinite generic bento with 3D purple/blue icons · uncontrolled cursor-follow spotlights on everything · over-animated page-load curtains · glowing border wraps. None of these have entered Stellar — keep it that way.

---

## 4. React Bits picks — filtered through the borderless system

| React Bits component | Verdict | Why, in our system |
|---|---|---|
| `Noise` (film grain overlay) | ✅ **ADOPT — top pick** | The single most reliable way premium dark sites make dark feel rich without borders/glow. One fixed layer, ~0.04 opacity, `pointer-events-none`. |
| `GradualBlur` | ✅ **ADOPT (scoped)** | Editorial blur-out on moving-tips answers or gallery full-bleed images. Subtle, borderless. |
| `AnimatedContent` | ✅ **ADOPT (scoped)** | Staggered content reveal alternative for process steps; we already have scroll-reveal, so only if we want a spring-physics variant. |
| `GlareHover` | ⚠️ **Optional** | A faint traveling highlight on service cards — complements `.panel-hover`, but must stay under 8% opacity to avoid the spotlight-overuse trope. |
| `LogoLoop` | ⚠️ **Optional** | Trust marquee (AFRA, Google, insurers) if we ever add logo assets; we currently use text metrics. |
| `PixelTransition` | ⚠️ **Optional** | Signature gallery hover (pixelated morph between photos). Cool, but risks novelty over craft; only if user wants a wow moment. |
| BlobCursor / SplashCursor / GhostCursor / TargetCursor / CursorGrid / Crosshair | ❌ **AVOID** | Cursor gimmicks — the exact AI-template tell the user rejected. |
| StarBorder / ElectricBorder / LaserFlow | ❌ **AVOID** | Border effects — system is borderless. |
| MetaBalls / Strands / Ribbons / Cubes / Antigravity / MagicRings | ❌ **AVOID** | Show-off WebGL/particle decoration. |
| Magnet / MagnetLines / OrbitImages / ClickSpark / ImageTrail / PixelTrail / ShapeBlur / MetallicPaint / StickerPeel | ❌ **AVOID** | Novelty micro-interactions that read "try-hard". |

---

## 5. THE GAP LIST — what the research says we're still missing

Ranked by (conversion value × craft fit ÷ effort):

1. **Noise texture layer** (React Bits `Noise`) — global grain on `body::before`, ~0.03–0.05 opacity. Makes the charcoal canvas feel material, expensive. *Effort: tiny.*
2. **Day-of-week rate toggle** in pricing (MWAV pattern) — interactive Mon–Fri/Sat/Sun toggle; middle tier earns "weekend same rate" badge. *Effort: small.*
3. **ABN + insurance compliance line** in footer (trust-anchored footer) — `Stellar Removals Pty Ltd · ABN 12 345 678 901 · $20M public liability · AFRA member`. *Effort: tiny.*
4. **Floating instant-quote trigger** (Framer pattern) — a fixed bottom-right pill ("Instant quote — 60s", live pulse dot) that appears after scrolling past the hero, links to wizard/book-move. *Effort: small.*
5. **Ballpark-first wizard** (Muval pattern) — move the estimate range readout to the wizard's *first* screen so the user sees a price band before entering contact details. *Effort: medium.*
6. **GradualBlur on gallery/FAQ** — editorial blur reveal on the moving-tips accordion or gallery full-bleed images. *Effort: small-medium.*
7. **GlareHover (restrained)** on service cards — faint traveling highlight under 8% opacity. *Effort: small.*

**Already covered by earlier waves (do NOT redo):** Calendar/DateField, Drawer, spotlight cards, direction-aware hover, footer polish, map route animation, estimate range, marquees, pixel-image, bento-grid, route beam, spec-sheet mono readouts, borderless panels.

---

## 6. Decisions needed
- **Noise** (#1) and **ABN line** (#3) are near-zero-risk polish — recommend doing unconditionally.
- **Rate toggle** (#2) and **floating quote trigger** (#4) are the highest conversion impact — recommend doing.
- **Ballpark-first** (#5) is a UX restructuring — needs a decision on wizard step order.
- **GradualBlur/GlareHover** (#6/#7) are refinement — optional, only if the base moves land well.

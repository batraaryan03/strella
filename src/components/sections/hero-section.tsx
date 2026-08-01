"use client";

import * as React from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/ui/star-rating";
import { Highlighter } from "@/components/ui/highlighter";
import ShinyText from "@/components/ui/backgrounds/ShinyText";
import ColorBends from "@/components/ui/backgrounds/ColorBends";
import QuoteWizard from "./quote-wizard";
import { BRAND } from "@/lib/content";

/**
 * Hero — ColorBends overlay (fresh react-bits reinstall, user-directed
 * exact props). Layers, bottom → top:
 *  1. site-wide Silk (root layout, z-0)
 *  2. ColorBends — full-hero transparent olive color-field wash that
 *     bends and warps over the silk, on top of it, full screen height
 * A faint left-edge scrim keeps the text column legible. Title
 * (ShinyText, olive) left, compact borderless quote wizard right,
 * professional buttons.
 */
export default function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden flex min-h-[100svh] items-center pt-[4.5rem]">
      {/* ── ColorBends — full hero overlay on top of the site-wide
          Silk. Exact react-bits usage props (user-directed). ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <ColorBends
          className="size-full"
          rotation={90}
          speed={0.4}
          colors={["#636B2F", "#98a68f", "#7cff67"]}
          transparent
          autoRotate={0}
          scale={1.20}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.15}
          iterations={1}
          intensity={0.9}
          bandWidth={6}
        />
      </div>
      {/* Very faint scrim — light enough that the ColorBends wash stays
          visible (user: "I am unable to see it — it might be hidden
          behind the gradient"). Just enough for text legibility. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-canvas/25 via-transparent to-transparent"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 md:py-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* ── Left: title, description, buttons ── */}
        <div className="flex flex-col items-start">
          <h1 className="text-balance text-[clamp(3rem,7vw,5.75rem)] font-bold leading-[0.98] tracking-[-0.035em] text-ink">
            <ShinyText
              text="Stellar Removals"
              speed={2.5}
              color="#97a75a"
              shineColor="#f2f3ed"
              spread={120}
              direction="left"
            />
          </h1>

          <p className="mt-7 max-w-[46ch] text-base leading-[1.7] text-ink-2 md:text-lg">
            Melbourne&apos;s precision movers.{" "}
            <Highlighter isView strokeWidth={5} color="#97a75a">
              <span className="font-semibold text-ink-dark">
                Transparent hourly pricing
              </span>
            </Highlighter>
            , professional crews, and weekend availability — so your
            belongings arrive exactly as they left.
          </p>

          {/* Trust row */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2.5">
              <StarRating value={5} />
              <span className="text-sm text-ink-2">
                <span className="font-semibold text-ink">4.9</span> from
                2,300+ Google reviews
              </span>
            </div>
            <span className="hidden h-4 w-px bg-line sm:block" />
            <span className="text-sm text-ink-2">
              Police-checked crew · $20M insurance
            </span>
          </div>

          {/* CTAs — professional, pure geometry */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#quote" className="w-full sm:w-auto">
              <Button size="lg" className="group w-full sm:w-auto">
                Get a free quote
                <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
              </Button>
            </a>
            <a href={`tel:${BRAND.phone}`} className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Phone className="h-4 w-4" />
                {BRAND.phoneDisplay}
              </Button>
            </a>
          </div>
        </div>

        {/* ── Right: compact borderless quote wizard ── */}
        <div className="lg:pl-4">
          <QuoteWizard bare />
        </div>
      </div>
    </section>
  );
}
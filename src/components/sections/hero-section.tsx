"use client";

import * as React from "react";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/ui/star-rating";
import { Spotlight } from "@/components/ui/spotlight";
import { SplitText } from "@/components/ui/split-text";
import { Highlighter } from "@/components/ui/highlighter";
import { BRAND, PHOTOS, HERO_CAPTION } from "@/lib/content";

/**
 * Hero — asymmetric editorial. Oversized grotesque headline left,
 * real photography right with a move-record caption bar. Subtle
 * olive spotlight + chart-paper backdrop. Borderless, no serif.
 */
export default function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-[4.25rem]">
      {/* Chart paper — documented blueprint texture (ILL-03), hero only */}
      <div className="chart-paper pointer-events-none absolute inset-0" aria-hidden />

      {/* Aceternity olive spotlight — entrance sweep, hero only */}
      <Spotlight className="hidden -top-40 left-0 opacity-0 md:block" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 pt-12 md:px-8 md:pb-24 md:pt-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        {/* ── Left: editorial content ── */}
        <div className="flex flex-col items-start">
          <p className="flex items-center gap-3 text-[0.8125rem] font-medium text-olive">
            <span className="h-px w-6 bg-olive/60" aria-hidden />
            Melbourne&apos;s precision removalists
          </p>

          <h1 className="mt-7 font-serif text-balance text-[clamp(3rem,7vw,5.5rem)] font-normal leading-[1.02] tracking-[-0.02em] text-ink">
            <SplitText>Your move, guided.</SplitText>
          </h1>

          <p className="mt-7 max-w-[46ch] text-base leading-[1.7] text-ink-2 md:text-lg">
            Stellar Removals are Melbourne&apos;s precision movers.{" "}
            <Highlighter isView>Transparent hourly pricing</Highlighter>,{" "}
            professional crews, and weekend availability — so your belongings
            arrive exactly as they left.
          </p>

          {/* Trust row */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2.5">
              <StarRating value={5} />
              <span className="text-sm text-ink-2">
                <span className="font-semibold text-ink">4.9</span> from 2,300+
                Google reviews
              </span>
            </div>
            <span className="hidden h-4 w-px bg-line sm:block" />
            <span className="text-sm text-ink-2">
              Police-checked crew · $20M insurance
            </span>
          </div>

          {/* CTAs */}
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

        {/* ── Right: real photography with move-record caption ── */}
        <figure className="relative" data-speed="0.96">
          <div className="panel relative overflow-hidden rounded-[var(--radius-lg)]">
            <img
              src={PHOTOS.hero}
              alt="Stellar crew unloading furniture at the kerb"
              className="photo-grade-hover aspect-[4/4.6] w-full object-cover"
            />
            {/* integrated caption bar — a real move record */}
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 border-t border-white/10 bg-canvas/70 px-5 py-4 backdrop-blur-md">
              <span className="text-[0.8125rem] text-ink-2">
                {HERO_CAPTION.route}
              </span>
              <span className="tnum font-mono text-[0.6875rem] text-olive-bright">
                {HERO_CAPTION.truck}
              </span>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}

"use client";

import * as React from "react";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/ui/star-rating";
import { BRAND, PHOTOS, HERO_CAPTION } from "@/lib/content";

/**
 * Hero — asymmetric editorial. Oversized serif headline left,
 * real photography right, no badge, no floating card, no geometry
 * lines. The caption bar on the photo is an integrated move record,
 * not a floating widget.
 */
export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-[4.25rem]">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 pt-12 md:px-8 md:pb-24 md:pt-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        {/* ── Left: editorial content ── */}
        <div className="flex flex-col items-start">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.24em] text-olive">
            Melbourne&apos;s precision removalists
          </p>

          <h1 className="mt-6 text-balance text-[clamp(2.75rem,6vw,4.75rem)] font-medium leading-[1.02] tracking-[-0.035em] text-ink">
            Your move,{" "}
            <span className="font-serif italic tracking-normal text-olive-bright">
              guided.
            </span>
          </h1>

          <p className="mt-6 max-w-[46ch] text-base leading-[1.7] text-ink-2 md:text-lg">
            Stellar Removals are Melbourne&apos;s precision movers.
            Transparent hourly pricing, professional crews, and weekend
            availability — so your belongings arrive exactly as they left.
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
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Phone className="h-4 w-4" />
                {BRAND.phoneDisplay}
              </Button>
            </a>
          </div>

          {/* Meta line */}
          <p className="mt-8 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-3">
            Fully insured · Melbourne, VIC
          </p>
        </div>

        {/* ── Right: real photography with move-record caption ── */}
        <figure className="relative">
          <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-line">
            <img
              src={PHOTOS.hero}
              alt="Stellar crew unloading furniture at the kerb"
              className="aspect-[4/4.6] w-full object-cover"
            />
            {/* integrated caption bar — a real move record */}
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 border-t border-white/10 bg-canvas/70 px-5 py-4 backdrop-blur-md">
              <span className="flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-2">
                {HERO_CAPTION.route}
              </span>
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-olive-bright">
                {HERO_CAPTION.truck}
              </span>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}

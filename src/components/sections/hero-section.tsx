"use client";

import * as React from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/ui/star-rating";
import ShinyText from "@/components/ui/backgrounds/ShinyText";
import QuoteWizard from "./quote-wizard";
import { BRAND } from "@/lib/content";

/**
 * Hero — full-viewport (100svh) brand statement. The background is the
 * full-bleed "home truck at night" photo (user-directed replacement for
 * the ColorBends animation — cheaper: one optimized image, no shader
 * quad, no rAF loop), with a soft left-weighted scrim keeping the copy
 * legible via the photo's own exposure. Left: ShinyText title +
 * professional buttons. Right: the quote wizard on a PURE WHITE card
 * with black text so it commands attention (user-directed).
 */
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-svh items-center overflow-hidden pt-[4.25rem]"
    >
      {/* ── Home truck at night — full-bleed photo background (plain <img>, no overlay) ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-80">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/home_truck_night.png"
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
          /* Mobile-only: the landscape photo fills the box height exactly,
             so object-position can't move it vertically. Instead we make it
             130% tall (aspect kept, centered) and slide it up 20% of its own
             height = ~26% of the frame — the truck sits higher behind the
             copy. Desktop keeps the centered cover. Section height unchanged. */
          className="opacity-80 size-full object-cover max-md:absolute max-md:left-1/2 max-md:top-0 max-md:h-[130%] max-md:w-auto max-md:max-w-none max-md:translate-x-[-42%] max-md:translate-y-[-25%]"
        />
      </div>

      {/* Desktop: left-anchored (no centered max-w) so the copy sits closer to the left edge */}
      <div className="relative grid w-full items-center gap-12 px-5 py-14 md:py-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-[6.5vw]">
        {/* ── Left: title, description, buttons ── */}
        <div className="flex flex-col items-start">
          <h1 className="text-balance text-[clamp(3.75rem,8.5vw,7.75rem)] font-bold leading-[0.98] tracking-[-0.035em] text-ink">
            <ShinyText
              text="Stellar Removals"
              speed={2.5}
              color="#97a75a"
              shineColor="#f2f3ed"
              spread={120}
              direction="left"
            />
          </h1>

          {/* Brand slogan — sans, matching the site type system (no serif) */}
          <p className="mt-5 text-2xl font-semibold tracking-tight text-olive md:text-3xl">
            Specialist in complete house removing
          </p>

          <p className="mt-5 max-w-[46ch] text-lg leading-[1.7] text-ink-2 md:text-xl">
            Melbourne&apos;s precision movers.{" "}
            <span className="rounded-md bg-[#97a75a] px-1.5 py-0.5 font-semibold text-ink-dark">
              Transparent hourly pricing
            </span>
            , professional crews, and weekend availability.
          </p>

          {/* Trust row */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2.5">
              <StarRating value={5} />
              <span className="text-base text-ink-2">
                Rated by
                Melbourne locals
              </span>
            </div>
            {/* <span className="hidden h-4 w-px bg-line sm:block" /> */}
            {/* <span className="text-base text-ink-2">
              Weekend &amp; same-day moves
            </span> */}
          </div>

          {/* CTAs — professional, pure geometry, big touch targets */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#quote" className="w-full sm:w-auto">
              <Button size="lg" className="group w-full sm:w-auto">
                Get a free quote
                <ArrowRight className="h-5 w-5 transition-transform duration-150 group-hover:translate-x-0.5" />
              </Button>
            </a>
            <a href={`tel:${BRAND.phone}`} className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Phone className="h-5 w-5" />
                {BRAND.phoneDisplay}
              </Button>
            </a>
          </div>
        </div>

        {/* ── Right: quote form on a pure-white card, black text ── */}
        <div className="lg:pl-4 xl:ml-auto xl:w-full xl:max-w-2xl">
          <QuoteWizard bare light />
        </div>
      </div>
    </section>
  );
}

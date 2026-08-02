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
 * Hero — full-viewport (100svh) brand statement. The olive ColorBends
 * color-field animation is the background (light, one shader quad —
 * mobile-friendly vs the old Hyperspeed highway), with a soft scrim
 * keeping the copy legible. Left: ShinyText title + professional
 * buttons. Right: the quote wizard on a PURE WHITE card with black
 * text so it commands attention (user-directed).
 */
export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-svh items-center overflow-hidden pt-[4.25rem]"
    >
      {/* ── ColorBends — olive color-field background (fast shader) ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <ColorBends
          rotation={90}
          speed={0.7}
          colors={["#636B2F", "#98a68f", "#7cff67"]}
          transparent
          autoRotate={0}
          scale={2}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0}
          parallax={0}
          noise={0.15}
          iterations={1}
          intensity={0.8}
          bandWidth={6}
          className="size-full"
        />
      </div>
      {/* Scrim — keeps text legible over the color field */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-canvas/85 via-canvas/55 to-canvas/25"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-14 md:py-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* ── Left: title, description, buttons ── */}
        <div className="flex flex-col items-start">
          <h1 className="text-balance text-[clamp(3.25rem,7vw,6rem)] font-bold leading-[0.98] tracking-[-0.035em] text-ink">
            <ShinyText
              text="Stellar Removals"
              speed={2.5}
              color="#97a75a"
              shineColor="#f2f3ed"
              spread={120}
              direction="left"
            />
          </h1>

          <p className="mt-7 max-w-[46ch] text-lg leading-[1.7] text-ink-2 md:text-xl">
            Melbourne&apos;s precision movers.{" "}
            <Highlighter isView strokeWidth={5} color="#97a75a">
              <span className="font-semibold text-ink-dark">
                Transparent hourly pricing
              </span>
            </Highlighter>
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
        <div className="lg:pl-4">
          <QuoteWizard bare light />
        </div>
      </div>
    </section>
  );
}

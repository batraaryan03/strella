"use client";

import * as React from "react";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/ui/star-rating";
import { ConstellationField } from "@/components/ui/constellation-field";
import { BRAND } from "@/lib/content";
import QuickQuoteForm from "./quick-quote-form";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-[4.25rem]"
    >
      {/* ── Atmosphere: constellation geometry + grid ── */}
      <div className="absolute inset-0 -z-10">
        <div className="constellation-grid absolute inset-0 opacity-70" />
        <ConstellationField
          density={20}
          seed={7}
          className="text-ink-3 opacity-30"
        />
        {/* soft olive glow, top-right */}
        <div
          className="absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full opacity-[0.13] blur-[120px]"
          style={{ background: "radial-gradient(circle, #8a9a52 0%, transparent 70%)" }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-12 md:px-8 md:pb-28 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
        {/* ── Left: editorial content panel ── */}
        <div className="flex flex-col items-start">
          <Badge variant="dot" className="mb-7">
            Same-day &amp; weekend availability
          </Badge>

          <h1 className="text-balance text-[clamp(2.75rem,6vw,4.75rem)] font-medium leading-[1.02] tracking-[-0.035em] text-ink">
            Your move,{" "}
            <span className="font-serif italic tracking-normal text-olive-bright">
              guided.
            </span>
          </h1>

          <p className="mt-6 max-w-[46ch] text-base leading-[1.7] text-ink-2 md:text-lg">
            Stellar Removals are Melbourne&apos;s precision movers. Transparent
            hourly pricing, professional crews, and weekend availability —
            so your belongings arrive exactly as they left.
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
            <div className="flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-3">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="ping-soft relative inline-flex h-1.5 w-1.5 rounded-full bg-olive" />
              </span>
              Crews across Melbourne today
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={`tel:${BRAND.phone}`}>
              <Button size="lg" className="w-full sm:w-auto">
                <Phone className="h-4 w-4" />
                {BRAND.phoneDisplay}
              </Button>
            </a>
            <a href="#pricing">
              <Button
                variant="outline"
                size="lg"
                className="group w-full sm:w-auto"
              >
                View transparent pricing
                <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
              </Button>
            </a>
          </div>

          {/* Meta line */}
          <p className="mt-8 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-3">
            ABN 00 000 000 000 · Fully insured · Melbourne, VIC
          </p>
        </div>

        {/* ── Right: premium photograph + floating quote card ── */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] border border-line md:aspect-[4/4.4]">
            <img
              src="/special/men-loading-item-to-truck.png"
              alt="Stellar crew carefully loading furniture into a moving truck"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-canvas/70 via-transparent to-canvas/20" />
          </div>

          {/* Floating quote card — overlaps the image edge */}
          <div className="absolute -bottom-8 -left-4 w-[calc(100%-2rem)] max-w-[24rem] sm:-left-8">
            <div className="rounded-[var(--radius-card)] border border-white/12 bg-canvas/70 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[0.8125rem] font-semibold text-ink">
                  Free quote in 60 seconds
                </p>
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-3">
                  STL · QTE
                </span>
              </div>
              <QuickQuoteForm />
            </div>
          </div>
        </div>
      </div>

      {/* bottom margin so the floating card isn't clipped */}
      <div className="h-10 md:h-14" />
    </section>
  );
}

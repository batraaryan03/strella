"use client";

import * as React from "react";
import { Phone, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Grainient from "@/components/ui/backgrounds/Grainient";
import { BRAND } from "@/lib/content";

/**
 * Final CTA — calm, borderless. The olive React Bits Grainient (the
 * user-favourite greenish gradient with rotating colors + noise
 * texture) backs a single strong headline — NO eyebrow label — and
 * two clear professional paths.
 */
export default function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Grainient — olive section background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
      >
        <Grainient
          timeSpeed={0.25}
          color1="#98a686"
          color2="#636B2F"
          color3="#808000"
          grainAmount={0.06}
          contrast={1.2}
          className="size-full"
        />
      </div>
      {/* Blend the gradient into the canvas at the edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_35%,rgba(10,11,8,0.85)_100%)]"
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <h2 className="text-balance text-[clamp(2.75rem,6.5vw,5.25rem)] font-bold leading-[1.0] tracking-[-0.035em] text-ink">
          Ready to move?{" "}
          <span className="text-olive-bright">We&apos;re on standby.</span>
        </h2>

        <p className="mx-auto mt-7 max-w-[52ch] text-base leading-[1.7] text-ink-2 md:text-lg">
          Get a free, no-obligation quote today. We&apos;re here to make
          your move as smooth as possible — weekends and same-day
          included.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="/book-move">
            <Button size="lg" className="w-full sm:w-auto">
              <CalendarCheck className="h-4 w-4" />
              Book your move
            </Button>
          </a>
          <a href={`tel:${BRAND.phone}`}>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Phone className="h-4 w-4" />
              {BRAND.phoneDisplay}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

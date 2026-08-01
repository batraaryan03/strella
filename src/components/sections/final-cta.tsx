"use client";

import * as React from "react";
import { Phone, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/content";

/**
 * Final CTA — calm, borderless, TRANSPARENT (user-directed: "have no
 * background, transparent"). No Grainient, no scrim — the site-wide
 * Silk shows through, and the copy breathes directly on it.
 */
export default function FinalCta() {
  return (
    <section className="relative py-20 md:py-28">
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

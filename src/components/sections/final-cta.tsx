"use client";

import * as React from "react";
import { Phone, CalendarCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { Highlighter } from "@/components/ui/highlighter";
import { BRAND } from "@/lib/content";

/**
 * Final CTA — calm, borderless tonal panel with a subtle olive
 * spotlight. One strong headline, two clear paths.
 */
export default function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="panel relative overflow-hidden rounded-[var(--radius-lg)]">
          <Spotlight className="-top-40 left-0 md:-top-24 md:left-1/4" />

          <div className="relative flex flex-col items-center px-6 py-16 text-center md:py-24">
            <p className="flex items-center gap-3 text-[0.8125rem] font-medium text-olive">
              <span className="h-px w-6 bg-olive/60" aria-hidden />
              Melbourne&apos;s precision removalists
            </p>

            <h2 className="mt-6 max-w-[20ch] font-serif text-balance text-[clamp(2.5rem,6vw,4.5rem)] font-normal leading-[1.05] tracking-[-0.02em] text-ink">
              Ready to move?{" "}
              <span className="italic">We&apos;re on standby.</span>
            </h2>

            <p className="mt-6 max-w-[52ch] text-base leading-[1.7] text-ink-2 md:text-lg">
              Get a <Highlighter isView>free, no-obligation quote</Highlighter>{" "}
              today. We&apos;re here to make your move as smooth as possible —
              weekends and same-day included.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
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

            <a
              href="#quote"
              className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-ink-3 transition-colors hover:text-olive-bright"
            >
              Or get a fixed quote above
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

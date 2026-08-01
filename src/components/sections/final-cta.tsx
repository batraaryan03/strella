"use client";

import * as React from "react";
import { Phone, CalendarCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConstellationField } from "@/components/ui/constellation-field";
import { BRAND } from "@/lib/content";

/**
 * Final CTA — cinematic dark container with soft gradients and
 * restrained olive highlights. One strong headline, calm booking path.
 */
export default function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-line bg-surface">
          {/* atmosphere */}
          <ConstellationField
            density={22}
            seed={13}
            className="text-ink-3 opacity-25"
          />
          <div className="constellation-grid pointer-events-none absolute inset-0 opacity-60" />
          <div
            className="pointer-events-none absolute -bottom-40 left-1/2 h-[28rem] w-[52rem] -translate-x-1/2 rounded-full opacity-[0.16] blur-[110px]"
            style={{ background: "radial-gradient(ellipse, #8a9a52 0%, transparent 70%)" }}
          />

          <div className="relative flex flex-col items-center px-6 py-16 text-center md:py-24">
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.24em] text-olive">
              Final waypoint
            </span>

            <h2 className="mt-6 max-w-[20ch] text-balance text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.035em] text-ink">
              Ready to move?{" "}
              <span className="font-serif italic text-olive-bright">
                We&apos;re on standby.
              </span>
            </h2>

            <p className="mt-6 max-w-[52ch] text-base leading-[1.7] text-ink-2 md:text-lg">
              Get a free, no-obligation quote today. We&apos;re here to make your
              move as smooth as possible — weekends and same-day included.
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
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-ink-3 transition-colors hover:text-olive-bright"
            >
              Or get a detailed quote below
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

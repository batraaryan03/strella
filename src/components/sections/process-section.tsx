"use client";

import * as React from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { PROCESS_STEPS } from "@/lib/content";

/**
 * Process — a guided journey rendered as a ScrollStack. On desktop
 * the three panels are sticky with staggered top offsets, so they
 * pile into a neat stack as the section scrolls. Waypoints are mono
 * numerals — no route-line chrome (RouteBeam was removed).
 * Reduced motion: static, fully drawn.
 */
export default function ProcessSection() {
  return (
    <section id="process" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="relative mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeader
          index="03"
          eyebrow="How it works"
          title="A move, routed step by step"
          description="Three simple steps to a stress-free move. Your move manager guides every waypoint from first call to final box."
          align="center"
          className="mb-16 md:mb-20"
        />

        {/* ScrollStack — panels pile up as the section scrolls */}
        <div className="flex flex-col gap-5 lg:gap-0">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.num}
              className="lg:sticky lg:pl-16"
              style={{ top: `${4 + i * 4}rem` }}
            >
              {/* Waypoint rail — hairline + olive node, pure CSS */}
              <div
                className="absolute bottom-0 left-[1.375rem] top-0 hidden w-px bg-line lg:block"
                aria-hidden
              >
                <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-olive" />
              </div>

              <div className="panel rounded-[var(--radius-lg)] p-7 md:p-9">
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-surface-2">
                    <span className="tnum font-mono text-sm text-olive">
                      {step.num}
                    </span>
                  </span>
                  <span className="tnum font-mono text-[0.6875rem] text-ink-3">
                    {step.meta}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-medium tracking-[-0.01em] text-ink md:text-[1.375rem]">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[52ch] text-sm leading-[1.7] text-ink-2">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

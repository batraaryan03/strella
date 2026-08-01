"use client";

import * as React from "react";
import { PROCESS_STEPS } from "@/lib/content";

/**
 * Process — how it works, kept simple (user: "the MagicBento is all
 * messed up — remove that component and start simple"). A calm
 * three-step row: number, title, description, meta. No animation
 * library, no WebGL — just clear editorial rhythm.
 */
export default function ProcessSection() {
  return (
    <section id="process" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive">
            How it works
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-ink">
            A move, routed step by step
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-base leading-[1.7] text-ink-2 md:text-lg">
            Three simple moments to a stress-free move — guided by your
            move manager from first call to final box.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.num}
              className="panel panel-hover flex flex-col rounded-[var(--radius-card)] p-8 md:p-10"
            >
              <span className="tnum font-mono text-[0.8125rem] tracking-[0.2em] text-olive">
                {step.num}
              </span>
              <h3 className="mt-5 text-2xl font-bold tracking-[-0.01em] text-ink">
                {step.title}
              </h3>
              <p className="mt-4 flex-1 text-base leading-[1.7] text-ink-2">
                {step.desc}
              </p>
              <p className="mt-7 border-t border-line pt-5 text-[0.8125rem] text-ink-3">
                {step.meta}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

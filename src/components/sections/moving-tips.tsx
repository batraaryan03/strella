"use client";

import * as React from "react";
import { Accordion } from "@/components/ui/accordion";
import Silk from "@/components/ui/backgrounds/Silk";
import { MOVING_TIPS, FAQS } from "@/lib/content";

/**
 * FAQ — sits just above the footer. Same green Silk background as the
 * footer but at a low opacity, with the accordions held in a translucent
 * glass panel (design-system glassmorphism). Single-column accordion
 * (user-directed), olive accents, quiet hairline dividers.
 */
export default function MovingTips() {
  const tips = MOVING_TIPS.map((t, i) => ({
    id: `tip-${i}`,
    q: t.q,
    a: t.a,
  }));
  const faqs = FAQS.map((f, i) => ({ id: `faq-${i}`, q: f.q, a: f.a }));

  return (
    <section id="faq" className="relative scroll-mt-24 overflow-hidden py-20 md:py-28">
      {/* ── Green Silk background — same as footer, LOW opacity ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-25">
        <Silk
          speed={4.5}
          scale={1.1}
          color="#556b2f"
          noiseIntensity={3.5}
          rotation={0}
        />
      </div>
      {/* Readability scrim over the silk */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-canvas via-canvas/70 to-canvas"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive">
              Advice &amp; answers
            </p>
            <h2 className="mt-4 text-balance text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-ink">
              Questions, answered
            </h2>
            <p className="mx-auto mt-5 max-w-[48ch] text-base leading-[1.7] text-ink-2 md:text-lg">
              The questions Melbourne movers ask us most — plus practical
              tips from the crew.
            </p>
          </div>

          {/* Translucent glass panel — single-column accordions */}
          <div className="glass-card rounded-[var(--radius-lg)] px-6 py-4 md:px-10">
            <Accordion items={faqs} defaultOpen={0} />
            <h3 className="mb-2 mt-10 border-b border-line pb-4 text-[0.8125rem] font-medium text-olive">
              From the crew
            </h3>
            <Accordion items={tips} defaultOpen={-1} />
          </div>
        </div>
      </div>
    </section>
  );
}

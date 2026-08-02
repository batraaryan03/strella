"use client";

import * as React from "react";
import { Accordion } from "@/components/ui/accordion";
import { MOVING_TIPS, FAQS } from "@/lib/content";

/**
 * FAQ — sits just above the (white) footer. WHITE section per the
 * user-directed black/white mix — flows straight into the white
 * footer (no gradient needed). Accordions held in a light glass
 * panel, dark ink text, olive-deep accents.
 */
export default function MovingTips() {
  const tips = MOVING_TIPS.map((t, i) => ({
    id: `tip-${i}`,
    q: t.q,
    a: t.a,
  }));
  const faqs = FAQS.map((f, i) => ({ id: `faq-${i}`, q: f.q, a: f.a }));

  return (
    <section id="faq" className="relative scroll-mt-24 overflow-hidden bg-white py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive-deep">
              FAQ
            </p>
            <h2 className="mt-4 text-balance text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-ink-dark">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-5 max-w-[48ch] text-base leading-[1.7] text-ink-dark/70 md:text-lg">
              Everything Melbourne movers ask us most — answered honestly,
              with no fine print.
            </p>
          </div>

          {/* Light glass panel — single-column accordions */}
          <div className="rounded-[var(--radius-lg)] border border-black/10 bg-white/80 p-6 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.15)] backdrop-blur-md md:px-10">
            <Accordion items={faqs} defaultOpen={0} light />
            <h3 className="mb-2 mt-10 border-b border-black/10 pb-4 text-[0.8125rem] font-medium text-olive-deep">
              From the crew
            </h3>
            <Accordion items={tips} defaultOpen={-1} light />
          </div>
        </div>
      </div>
    </section>
  );
}

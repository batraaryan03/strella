"use client";

import * as React from "react";
import { Accordion } from "@/components/ui/accordion";
import { MOVING_TIPS, FAQS } from "@/lib/content";

/**
 * Moving Tips + FAQ — a single-column FAQ (user-directed: remove the
 * left intro, "just put a FAQ section straight in a single one-column
 * layout"). Olive-tinted accordion, quiet hairline dividers.
 */
export default function MovingTips() {
  const tips = MOVING_TIPS.map((t, i) => ({
    id: `tip-${i}`,
    q: t.q,
    a: t.a,
  }));
  const faqs = FAQS.map((f, i) => ({ id: `faq-${i}`, q: f.q, a: f.a }));

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
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

          {/* Single-column accordion */}
          <Accordion items={faqs} defaultOpen={0} />
          <h3 className="mb-2 mt-12 border-b border-line pb-4 text-[0.8125rem] font-medium text-olive">
            From the crew
          </h3>
          <Accordion items={tips} defaultOpen={-1} />
        </div>
      </div>
    </section>
  );
}

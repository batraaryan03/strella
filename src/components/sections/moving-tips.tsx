"use client";

import * as React from "react";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeader } from "@/components/ui/section-header";
import { MOVING_TIPS, FAQS } from "@/lib/content";

/**
 * Moving Tips + FAQ — large typography accordion, minimal dividers.
 * Left: sticky description. Right: accordion.
 */
export default function MovingTips() {
  const tips = MOVING_TIPS.map((t, i) => ({
    id: `tip-${i}`,
    q: `${i + 1}. ${t.q}`,
    a: t.a,
  }));
  const faqs = FAQS.map((f, i) => ({ id: `faq-${i}`, q: f.q, a: f.a }));

  return (
    <section className="relative border-y border-line bg-surface/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* Left — sticky intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              index="08"
              eyebrow="Advice & answers"
              title={
                <>
                  Moving tips,{" "}
                  <span className="font-serif italic text-olive-bright">
                    straight
                  </span>{" "}
                  from the crew
                </>
              }
              description="Preparation is the key to a successful move. Expert packing advice from our seasoned professionals — plus the questions Melbourne movers ask us most."
            />
          </div>

          {/* Right — accordion */}
          <div className="flex flex-col gap-12">
            <Accordion items={tips} defaultOpen={0} />
            <div>
              <h3 className="mb-2 border-b border-line pb-4 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-olive">
                Pricing &amp; logistics
              </h3>
              <Accordion items={faqs} defaultOpen={-1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

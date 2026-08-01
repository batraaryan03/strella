"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PLANS } from "@/lib/content";

/**
 * Pricing — Apple-style product comparison. Each truck is a product.
 * Large clean cards on light surfaces embedded in the dark interface;
 * the middle option receives stronger elevation + olive accents.
 */
export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative scroll-mt-24 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="03"
          eyebrow="Transparent pricing"
          title={
            <>
              Per-hour rates,{" "}
              <span className="font-serif italic text-olive-bright">zero</span>{" "}
              surprises
            </>
          }
          description="No hidden fees, no call-out costs. Every price includes two professional movers and full equipment. You only pay for the hours we work."
          align="center"
          className="mb-14 md:mb-16"
        />

        <div className="grid items-stretch gap-5 lg:grid-cols-3 lg:gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.code}
              className={cn(
                "relative flex flex-col rounded-[var(--radius-lg)] border p-7 md:p-8",
                "transition-[border-color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1",
                plan.popular
                  ? "border-olive/50 bg-gradient-to-b from-olive-tint/60 to-surface shadow-[0_0_0_1px_var(--color-olive-glow),0_24px_60px_rgba(0,0,0,0.45)]"
                  : "border-line bg-surface hover:border-line-strong"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="olive">Most popular</Badge>
                </div>
              )}

              {/* product header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium tracking-[-0.01em] text-ink">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-[0.8125rem] leading-relaxed text-ink-3">
                    {plan.subtitle}
                  </p>
                </div>
                <span className="tnum font-mono text-[0.625rem] uppercase tracking-[0.14em] text-ink-3">
                  {plan.code}
                </span>
              </div>

              {/* price */}
              <div className="mt-7 flex items-baseline gap-1.5">
                <span
                  className={cn(
                    "tnum font-mono text-5xl font-medium tracking-[-0.03em]",
                    plan.popular ? "text-olive-bright" : "text-ink"
                  )}
                >
                  ${plan.price}
                </span>
                <span className="text-sm text-ink-3">/ hour</span>
              </div>

              {/* features */}
              <ul className="mt-7 flex-1 space-y-3 border-t border-line pt-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-olive-tint">
                      <Check className="h-3 w-3 text-olive" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm leading-relaxed text-ink-2">{f}</span>
                  </li>
                ))}
              </ul>

              <a href="/book-move" className="mt-8 block">
                <Button
                  className="w-full"
                  variant={plan.popular ? "primary" : "secondary"}
                >
                  Book {plan.name.replace(" Truck", "")}
                </Button>
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-ink-3">
          No deposit · Cancel free up to 24h before · Fully insured
        </p>
      </div>
    </section>
  );
}

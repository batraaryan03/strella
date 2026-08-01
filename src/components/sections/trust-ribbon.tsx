"use client";

import * as React from "react";
import { ShieldCheck, BadgeCheck, Truck, Star, ReceiptText } from "lucide-react";
import { cn } from "@/lib/utils";
import { TRUST_METRICS } from "@/lib/content";

const iconMap = {
  shield: ShieldCheck,
  badge: BadgeCheck,
  truck: Truck,
  star: Star,
  receipt: ReceiptText,
} as const;

/**
 * Trust ribbon — verified badges, not a metrics dashboard.
 * Real, verifiable claims with meaningful line icons: insurance,
 * police-checked crew, completed moves, rating, upfront pricing.
 */
export default function TrustRibbon() {
  return (
    <section
      aria-label="Why Stellar is trusted"
      className="border-y border-line bg-surface/50"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-8 px-5 py-10 md:grid-cols-3 md:px-8 lg:grid-cols-5 lg:py-12">
        {TRUST_METRICS.map((m, i) => {
          const Icon = iconMap[m.icon as keyof typeof iconMap];
          return (
            <div
              key={m.label}
              className={cn(
                "flex items-start gap-3.5",
                i > 0 && "lg:border-l lg:border-line lg:pl-6"
              )}
            >
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-olive/30 bg-olive-tint text-olive">
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </span>
              <div className="flex flex-col gap-1">
                <span className="flex items-baseline gap-1.5">
                  <span className="tnum font-mono text-[1.125rem] font-medium tracking-[-0.01em] text-ink">
                    {m.value}
                    {m.suffix && <span className="text-olive">{m.suffix}</span>}
                  </span>
                </span>
                <span className="text-[0.8125rem] font-medium text-ink-2">
                  {m.label}
                </span>
                <span className="text-xs text-ink-3">{m.sub}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

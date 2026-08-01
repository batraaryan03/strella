"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { TRUST_METRICS } from "@/lib/content";

/**
 * Horizontal trust ribbon — the "premium automotive dashboard" strip
 * directly beneath the hero. Mono numerals, hairline dividers.
 */
export default function TrustRibbon() {
  return (
    <section
      aria-label="Trusted by the numbers"
      className="border-y border-line bg-surface/50"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-8 px-5 py-10 md:grid-cols-3 md:px-8 lg:grid-cols-5 lg:py-12">
        {TRUST_METRICS.map((m, i) => (
          <div
            key={m.label}
            className={cn(
              "flex flex-col gap-1.5",
              i > 0 && "lg:border-l lg:border-line lg:pl-6"
            )}
          >
            <span className="tnum font-mono text-2xl font-medium tracking-[-0.02em] text-ink md:text-[1.75rem]">
              {m.value}
              <span className="text-olive">{m.suffix}</span>
            </span>
            <span className="text-[0.8125rem] font-medium text-ink-2">
              {m.label}
            </span>
            <span className="text-xs text-ink-3">{m.sub}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

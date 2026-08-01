"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { NumberTicker } from "@/components/ui/number-ticker";
import { TRUST_METRICS } from "@/lib/content";

/**
 * Trust ribbon — a data strip, not a badges dashboard. Large mono
 * numerals separated by hairlines. Numeric metrics animate up on
 * scroll (CountUp); text metrics stay static. Borderless, quiet,
 * engineering-accurate. No icons, no boxes.
 */
export default function TrustRibbon() {
  return (
    <section aria-label="Why Stellar is trusted" className="relative">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {TRUST_METRICS.map((m, i) => (
            <div
              key={m.label}
              className={cn(
                "flex flex-col gap-1.5",
                i > 0 && "lg:border-l lg:border-line lg:pl-6"
              )}
            >
              <span className="tnum font-mono text-3xl font-medium tracking-[-0.03em] text-ink md:text-[2rem]">
                {"num" in m ? (
                  <>
                    {"prefix" in m && m.prefix && (
                      <span aria-hidden>{m.prefix}</span>
                    )}
                    <NumberTicker
                      value={m.num}
                      decimalPlaces={"decimals" in m ? m.decimals : 0}
                      className="text-inherit"
                    />
                    {m.suffix && <span aria-hidden className="text-olive">{m.suffix}</span>}
                  </>
                ) : (
                  m.text
                )}
              </span>
              <span className="text-[0.875rem] font-medium text-ink">
                {m.label}
              </span>
              <span className="text-[0.8125rem] text-ink-3">{m.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

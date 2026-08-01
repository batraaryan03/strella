"use client";

import * as React from "react";
import CountUp from "@/components/ui/backgrounds/CountUp";
import { TRUST_METRICS } from "@/lib/content";

/**
 * Trust ribbon — a data strip, not a badges dashboard. Bigger, bolder
 * numerals (user-directed typography upgrade) animated up on scroll via
 * the React Bits CountUp. No vertical divider lines — open spacing.
 * Borderless, quiet, engineering-accurate.
 */
export default function TrustRibbon() {
  return (
    <section aria-label="Why Stellar is trusted" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-5">
          {TRUST_METRICS.map((m) => (
            <div key={m.label} className="flex flex-col gap-2">
              <span className="tnum text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none tracking-[-0.04em] text-ink">
                {"num" in m ? (
                  <>
                    {"prefix" in m && m.prefix && (
                      <span aria-hidden>{m.prefix}</span>
                    )}
                    <CountUp
                      to={m.num}
                      from={0}
                      duration={1.6}
                      separator=","
                      className="text-inherit"
                    />
                    {m.suffix && (
                      <span aria-hidden className="text-olive">
                        {m.suffix}
                      </span>
                    )}
                  </>
                ) : (
                  m.text
                )}
              </span>
              <span className="text-lg font-semibold tracking-[-0.01em] text-ink">
                {m.label}
              </span>
              <span className="text-[0.9375rem] text-ink-3">{m.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

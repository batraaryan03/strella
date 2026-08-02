"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Hyperspeed from "@/components/ui/backgrounds/Hyperspeed";
import { hyperspeedPresets } from "@/components/ui/backgrounds/HyperSpeedPresets";
import Grainient from "@/components/ui/backgrounds/Grainient";
import { GRAINIENT_OLIVE, PLANS } from "@/lib/content";

const DAYS = [
  { id: "weekday", label: "Mon – Fri" },
  { id: "weekend", label: "Sat – Sun" },
] as const;
type DayId = (typeof DAYS)[number]["id"];

/**
 * Pricing — sits right after the hero. User-directed:
 * - Hyperspeed roller coaster stays as the SECTION background (md+ only
 *   for mobile perf; phones get a static olive wash).
 * - Grainient is the PRICING CARDS' background only, with more opacity,
 *   and the cards are glassmorphism translucent so the gradient glows
 *   through them.
 * All three prices share the same olive-bright shade. No Badge, no
 * SectionHeader.
 */
export default function PricingSection() {
  const [day, setDay] = React.useState<DayId>("weekday");

  return (
    <section
      id="pricing"
      className="relative scroll-mt-24 overflow-hidden py-20 md:py-28"
    >
      {/* ── Roller coaster — Hyperspeed, hero→pricing (md+ only for perf) ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        <Hyperspeed effectOptions={hyperspeedPresets.stellar} />
      </div>
      {/* Mobile fallback — static olive wash (no WebGL on phones) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface via-canvas to-canvas md:hidden"
      />
      {/* Readability scrim over the highway */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden bg-gradient-to-b from-canvas/85 via-canvas/55 to-canvas/90 md:block"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Inline header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive">
            Transparent pricing
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-ink">
            Per-hour rates, zero surprises
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-base leading-[1.7] text-ink-2 md:text-lg">
            No hidden fees, no call-out costs. Every price includes two
            professional movers and full equipment. You only pay for the
            hours we work.
          </p>
        </div>

        {/* Day-of-week toggle — same rate, always (trust statement) */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <div
            role="group"
            aria-label="Rate by day of week"
            className="inline-flex items-center gap-1 rounded-full bg-surface-2 p-1"
          >
            {DAYS.map((d) => (
              <button
                key={d.id}
                type="button"
                aria-pressed={day === d.id}
                onClick={() => setDay(d.id)}
                className={cn(
                  "rounded-full px-6 py-2.5 text-[0.9375rem] font-medium transition-colors duration-200",
                  day === d.id
                    ? "bg-olive text-ink-dark"
                    : "text-ink-2 hover:text-ink"
                )}
              >
                {d.label}
              </button>
            ))}
          </div>
          <p
            className={cn(
              "flex items-center gap-1.5 text-[0.9375rem] transition-colors duration-300",
              day === "weekend" ? "text-olive-bright" : "text-ink-3"
            )}
          >
            <span className="h-1 w-1 rounded-full bg-olive" aria-hidden />
            {day === "weekend"
              ? "Weekend moves at weekday rates — always."
              : "Rates shown for all days of the week."}
          </p>
        </div>

        {/* Cards region — Grainient behind the cards, glass cards on top */}
        <div className="relative mt-12">
          {/* Grainient — the CARDS' background (not the section), more
              opacity so it clearly glows through the glass cards */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-4 opacity-80"
          >
            <Grainient {...GRAINIENT_OLIVE} />
          </div>

          <div className="relative grid items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
            {PLANS.map((plan) => (
              <div
                key={plan.code}
                className={cn(
                  "glass-card relative flex flex-col rounded-[var(--radius-lg)] p-8 transition-colors duration-250 hover:bg-white/[0.09] md:p-10",
                  plan.popular && "bg-white/[0.1]"
                )}
              >
                {plan.popular && (
                  <p className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-olive px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-dark">
                    Most popular
                  </p>
                )}

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold tracking-[-0.01em] text-ink">
                      {plan.name}
                    </h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2">
                      {plan.subtitle}
                    </p>
                  </div>
                  <span className="tnum font-mono text-[0.6875rem] text-ink-3">
                    {plan.code}
                  </span>
                </div>

                <div className="mt-8 flex items-baseline gap-2">
                  <span className="tnum text-[clamp(3rem,6vw,4.5rem)] font-bold leading-none tracking-[-0.04em] text-olive-bright">
                    ${plan.price}
                  </span>
                  <span className="text-base text-ink-2">/ hour</span>
                </div>

                <ul className="mt-8 flex-1 space-y-3.5 border-t border-white/10 pt-7">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-olive/25">
                        <Check className="h-3 w-3 text-olive-bright" strokeWidth={2.5} />
                      </span>
                      <span className="text-base leading-relaxed text-ink">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a href="/book-move" className="mt-9 block">
                  <Button
                    className="w-full"
                    size="lg"
                    variant={plan.popular ? "primary" : "secondary"}
                  >
                    Book {plan.name.replace(" Truck", "")}
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-[0.9375rem] text-ink-2">
          No deposit · Cancel free up to 24h before · Fully insured
        </p>
      </div>
    </section>
  );
}

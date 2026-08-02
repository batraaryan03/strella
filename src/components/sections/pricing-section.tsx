"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Hyperspeed from "@/components/ui/backgrounds/Hyperspeed";
import { hyperspeedPresets } from "@/components/ui/backgrounds/HyperSpeedPresets";
import SpotlightCard from "@/components/ui/backgrounds/SpotlightCard";
import { PLANS } from "@/lib/content";

const DAYS = [
  { id: "weekday", label: "Mon – Fri" },
  { id: "weekend", label: "Sat – Sun" },
] as const;
type DayId = (typeof DAYS)[number]["id"];

/**
 * Pricing — sits right after the hero. User-directed:
 * - Hyperspeed roller coaster stays as the SECTION background (md+ only
 *   for mobile perf; phones get a static olive wash).
 * - A static CSS olive mesh is each PRICING CARD's background (the
 *   WebGL Grainient was too heavy), with glassmorphism cards on top.
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
          <h2 className="mt-4 text-balance text-[clamp(2.25rem,5vw,3.5rem)] font-bold capitalize leading-[1.02] tracking-[-0.03em] text-ink">
            Transparent pricing
          </h2>
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

        {/* Cards region — static olive mesh INSIDE each card (pure CSS,
            no WebGL) */}
        <div className="relative mt-12">
          <div className="relative grid items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
            {PLANS.map((plan) => (
              <SpotlightCard
                key={plan.name}
                spotlightColor="rgba(151, 167, 90, 0.32)"
                className="glass-card group relative flex flex-col rounded-lg p-8 md:p-10"
              >
                {/* Olive mesh — this card's own background (static CSS) */}
                <div
                  aria-hidden
                  className="olive-mesh pointer-events-none absolute inset-0 overflow-hidden rounded-lg opacity-20"
                />

                {/* Frost tint over the gradient + hover lift (glass) */}
                <div
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute inset-0 z-10 rounded-lg transition-colors duration-250",
                    plan.popular
                      ? "bg-white/10 group-hover:bg-white/9"
                      : "group-hover:bg-white/9"
                  )}
                />

                {plan.popular && (
                  <p className="absolute -top-3 left-1/2 z-20 -translate-x-1/2 rounded-full bg-olive px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-dark">
                    Most popular
                  </p>
                )}

                <div className="relative z-20 flex flex-1 flex-col">
                  <div>
                    <h3 className="text-xl font-bold tracking-[-0.01em] text-ink">
                      {plan.name}
                    </h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2">
                      {plan.subtitle}
                    </p>
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
              </SpotlightCard>
            ))}
            
          </div>
        </div>
          <p className="mt-5 text-center text-base leading-[1.7] text-ink-2 md:text-lg">
            No hidden fees, no call-out costs. Every price includes two
            professional movers and full equipment. You only pay for the
            hours we work.
          </p>
      </div>
    </section>
  );
}

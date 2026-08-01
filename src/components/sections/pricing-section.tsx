"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PLANS } from "@/lib/content";

const DAYS = [
  { id: "weekday", label: "Mon – Fri" },
  { id: "weekend", label: "Sat – Sun" },
] as const;
type DayId = (typeof DAYS)[number]["id"];

/**
 * Pricing — clean tonal rate cards with a day-of-week toggle.
 * Stellar's promise is NO weekend surcharge, so the toggle keeps
 * the rate identical and surfaces it as a trust statement (the
 * MWAV day-breakdown pattern, flipped into our brand promise).
 */
export default function PricingSection() {
  const [day, setDay] = React.useState<DayId>("weekday");

  return (
    <section id="pricing" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="07"
          eyebrow="Transparent pricing"
          title="Per-hour rates, zero surprises"
          description="No hidden fees, no call-out costs. Every price includes two professional movers and full equipment. You only pay for the hours we work."
          align="center"
          className="mb-10 md:mb-12"
        />

        {/* Day-of-week toggle — same rate, always (trust statement) */}
        <div className="mb-12 flex flex-col items-center gap-3">
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
                  "rounded-full px-5 py-2 text-[0.8125rem] font-medium transition-colors duration-200",
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
              "flex items-center gap-1.5 text-[0.8125rem] transition-colors duration-300",
              day === "weekend" ? "text-olive-bright" : "text-ink-3"
            )}
          >
            <span className="h-1 w-1 rounded-full bg-olive" aria-hidden />
            {day === "weekend"
              ? "Weekend moves at weekday rates — always."
              : "Rates shown for all days of the week."}
          </p>
        </div>

        {/* Barely-there drift (0.98) — the second parallax element on
            the page (hero photo is the first). ScrollSmoother effects
            stay understated per the design law. */}
        <div className="relative" data-speed="0.98">
          <div className="grid items-stretch gap-5 lg:grid-cols-3 lg:gap-6">
            {PLANS.map((plan) => (
              <div
                key={plan.code}
                className={cn(
                  "panel panel-hover relative flex flex-col rounded-[var(--radius-lg)] p-7 md:p-8",
                  plan.popular && "bg-surface-2"
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
                <span className="tnum font-mono text-[0.6875rem] text-ink-3">
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
              </a>              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-[0.8125rem] text-ink-3">
          No deposit · Cancel free up to 24h before · Fully insured
        </p>
      </div>
    </section>
  );
}

"use client";

import * as React from "react";
import { Users, DollarSign, Shield, Calendar, Heart, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { WHY_CHOOSE } from "@/lib/content";

const iconMap = {
  users: Users,
  dollar: DollarSign,
  shield: Shield,
  calendar: Calendar,
  heart: Heart,
  map: MapPin,
} as const;

/**
 * Why Choose — vertical pillars aligned to a common baseline, with
 * thin divider lines subtly connecting them. No card boxes; the
 * breathing room is the design.
 */
export default function WhyChooseUs() {
  return (
    <section className="relative border-y border-line bg-surface/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="04"
          eyebrow="Why Stellar"
          title={
            <>
              Built on{" "}
              <span className="font-serif italic text-olive-bright">trust</span>,
              measured in care
            </>
          }
          description="Melbourne's trusted local movers with a commitment to excellence — backed by $20M insurance and a team that treats your home like their own."
          className="mb-16 md:mb-20"
        />

        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
          {WHY_CHOOSE.map((f, i) => {
            const Icon = iconMap[f.icon as keyof typeof iconMap];
            return (
              <div
                key={f.title}
                className="relative border-t border-line pt-7"
              >
                {/* index + icon row */}
                <div className="mb-5 flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-line text-olive">
                    <Icon className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.5} />
                  </span>
                  <span className="tnum font-mono text-[0.625rem] uppercase tracking-[0.18em] text-ink-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-[1.0625rem] font-medium tracking-[-0.01em] text-ink">
                  {f.title}
                </h3>
                <p className="mt-2.5 max-w-[40ch] text-sm leading-[1.7] text-ink-2">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

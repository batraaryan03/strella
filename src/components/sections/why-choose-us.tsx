"use client";

import * as React from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { AnimatedCircularProgressBar } from "@/components/ui/animated-circular-progress-bar";
import { WHY_CHOOSE } from "@/lib/content";

/**
 * Why Choose — the real Magic UI bento grid, no icons. The featured
 * card carries the guarantee-led headline and an olive satisfaction
 * gauge; the rest are quiet tonal pillars with mono metrics.
 */
export default function WhyChooseUs() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="04"
          eyebrow="Why Stellar"
          title="Built on trust, measured in care"
          description="Melbourne's trusted local movers with a commitment to excellence — backed by $20M insurance and a team that treats your home like their own."
          className="mb-16 md:mb-20"
        />

        <BentoGrid className="auto-rows-[minmax(16rem,auto)]">
          {WHY_CHOOSE.map((f, i) => {
            const featured = i === 0;
            return (
              <BentoCard
                key={f.title}
                name={f.title}
                description={f.desc}
                href="/book-move"
                cta={featured ? "Get a free quote" : "Explore pricing"}
                Icon={MetricIcon(f.metric)}
                className={featured ? "md:col-span-3" : ""}
                background={
                  featured ? (
                    <div className="relative h-full min-h-44 w-full">
                      <div className="absolute right-6 top-6">
                        <AnimatedCircularProgressBar
                          value={98}
                          gaugePrimaryColor="#97a75a"
                          gaugeSecondaryColor="#23271a"
                          className="size-28 md:size-32"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="h-full min-h-20 w-full" />
                  )
                }
              />
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}

/** Mono metric standing in as the card icon (no icon grid — data only). */
function MetricIcon(metric: string) {
  return function Icon({ className }: { className?: string }) {
    return (
      <span
        className={`tnum font-mono text-[0.8125rem] text-olive ${className ?? ""}`}
      >
        {metric}
      </span>
    );
  };
}

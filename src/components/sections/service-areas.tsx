"use client";

import * as React from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { SUBURB_POINTS, type SuburbPoint } from "@/lib/content";
import MelbourneMap from "@/components/map/melbourne-map";
import { cn } from "@/lib/utils";

/**
 * Service Areas — a REAL dark-styled Melbourne map (Leaflet +
 * OpenStreetMap, no API key) with an olive service-area highlight,
 * a sample route line, and suburb markers. Clicking a suburb chip
 * fly-to animates the map camera to that suburb.
 */
export default function ServiceAreas() {
  const [focus, setFocus] = React.useState<SuburbPoint | null>(null);

  return (
    <section className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="06"
          eyebrow="Coverage"
          title="Every postcode, covered"
          description="Finding reliable Melbourne removalists shouldn't be stressful. We navigate the busy CBD streets, the narrow laneways, and the sprawling outer suburbs with equal ease."
          className="mb-14 md:mb-20"
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          {/* ── Real map (fly-to driven by the chips) ── */}
          <MelbourneMap className="h-[360px] md:h-[480px]" focus={focus} />

          {/* ── Suburb chips ── */}
          <div className="flex flex-col">
            <p className="text-sm leading-[1.7] text-ink-2">
              We service 300+ postcodes across greater Melbourne — and
              specialise in office relocation with minimal downtime.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {SUBURB_POINTS.map((s) => {
                const active = focus?.name === s.name;
                return (
                  <button
                    key={s.name}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFocus(active ? null : s)}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[0.8125rem] transition-colors duration-150",
                      active
                        ? "border-olive bg-olive-tint text-olive-bright"
                        : "border-line text-ink-2 hover:border-olive/50 hover:bg-olive-tint hover:text-olive-bright"
                    )}
                  >
                    <span
                      className={cn(
                        "h-1 w-1 rounded-full",
                        active ? "bg-olive-bright" : "bg-olive/60"
                      )}
                    />
                    {s.name}
                  </button>
                );
              })}
            </div>
            <p className="mt-8 border-t border-line pt-6 text-[0.9375rem] font-medium leading-relaxed text-ink">
              No matter where you&apos;re located in Melbourne, Stellar is
              ready to deliver safe, efficient and professional moving
              services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

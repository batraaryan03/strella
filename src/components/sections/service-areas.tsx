"use client";

import * as React from "react";
import { SUBURB_POINTS, type SuburbPoint } from "@/lib/content";
import MelbourneMap from "@/components/map/melbourne-map";
import { cn } from "@/lib/utils";

/**
 * Service Areas — a REAL dark-styled Melbourne map (Leaflet +
 * OpenStreetMap, no API key) with an olive service-area highlight,
 * a sample route line, and suburb markers. Clicking a suburb chip
 * fly-to animates the map camera to that suburb. The map is BIG
 * (user-directed: "the map has to be big").
 */
export default function ServiceAreas() {
  const [focus, setFocus] = React.useState<SuburbPoint | null>(null);

  return (
    <section id="areas" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive">
            Coverage
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-ink">
            Every postcode, covered
          </h2>
          <p className="mt-5 text-base leading-[1.7] text-ink-2 md:text-lg">
            Finding reliable Melbourne removalists shouldn&apos;t be
            stressful. We navigate the busy CBD streets, the narrow
            laneways, and the sprawling outer suburbs with equal ease.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
          {/* ── Circular map — deterministic square so it's always a true circle ── */}
          <div className="relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden rounded-full lg:h-[560px] lg:w-[560px] lg:max-w-none">
            <MelbourneMap circle className="absolute inset-0" focus={focus} />
          </div>

          {/* ── Suburb grid — proper clickable cards (min-height
                 matches the map circle on lg). Every card is clearly a
                 button: hover fill + arrow so it reads as clickable. ── */}
          <div className="flex flex-col justify-center lg:min-h-[560px]">
            <p className="text-base leading-[1.7] text-ink-2">
              We service suburbs right across greater Melbourne — and
              specialise in office relocation with minimal downtime.
              Tap a suburb to find it on the map.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {SUBURB_POINTS.map((s) => {
                const active = focus?.name === s.name;
                return (
                  <button
                    key={s.name}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFocus(active ? null : s)}
                    className={cn(
                      "group relative flex items-center gap-2.5 rounded-[var(--radius-btn)] border px-3.5 py-3 text-left transition-all duration-150",
                      active
                        ? "border-olive bg-olive-tint text-olive-bright"
                        : "border-line bg-surface-2/40 text-ink-2 hover:border-olive/60 hover:bg-olive-tint hover:text-olive-bright"
                    )}
                  >
                    <span
                      className={cn(
                        "h-1.5 w-1.5 shrink-0 rounded-full",
                        active ? "bg-olive-bright" : "bg-olive/60 group-hover:bg-olive-bright"
                      )}
                    />
                    <span className="flex-1 truncate text-[0.9375rem] font-medium">
                      {s.name}
                    </span>
                    <span
                      aria-hidden
                      className={cn(
                        "text-sm transition-all duration-150",
                        active
                          ? "translate-x-0 text-olive-bright opacity-100"
                          : "-translate-x-1 text-olive/60 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      )}
                    >
                      ↳
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="mt-8 border-t border-line pt-6 text-base font-medium leading-relaxed text-ink">
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

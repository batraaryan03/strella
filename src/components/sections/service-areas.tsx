"use client";

import * as React from "react";
import { SUBURB_POINTS, type SuburbPoint } from "@/lib/content";
import MelbourneMap from "@/components/map/melbourne-map";
import { cn } from "@/lib/utils";

/**
 * Service Areas — WHITE section (user-directed black/white mix). A
 * REAL dark-styled Melbourne map (Leaflet + OpenStreetMap, no API key)
 * sits as a dark contrast stamp in the white section, with an olive
 * service-area highlight, a sample route line, and suburb markers.
 * Clicking a suburb chip fly-to animates the map camera to that
 * suburb. The map is BIG (user-directed: "the map has to be big").
 */
export default function ServiceAreas() {
  const [focus, setFocus] = React.useState<SuburbPoint | null>(null);

  return (
    <section id="areas" className="relative scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive-deep">
            Coverage
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-ink-dark">
            Every postcode, covered
          </h2>
          <p className="mt-5 text-base leading-[1.7] text-ink-dark/70 md:text-lg">
            Finding reliable Melbourne removalists shouldn&apos;t be
            stressful. We navigate the busy CBD streets, the narrow
            laneways, and the sprawling outer suburbs with equal ease.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
          {/* ── Circular map — deterministic square so it's always a true circle ── */}
          <div className="relative mx-auto aspect-square w-full max-w-130 overflow-hidden rounded-full lg:h-140 lg:w-140 lg:max-w-none">
            <MelbourneMap focus={focus} />
          </div>

          {/* ── Suburb grid — proper clickable cards (min-height
                 matches the map circle on lg). Every card is clearly a
                 button: hover fill + arrow so it reads as clickable. ── */}
          <div className="flex flex-col justify-center lg:min-h-140">
            <p className="text-base leading-[1.7] text-ink-dark/70">
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
                      "group relative flex items-center gap-2.5 rounded-btn border border-black/10 bg-black/[0.03] px-3.5 py-3 text-left transition-all duration-150",
                      active
                        ? " border-olive-deep/40 bg-olive/15 text-olive-deep"
                        : " text-ink-dark/70 hover:border-olive-deep/40 hover:bg-olive/10 hover:text-olive-deep"
                    )}
                  >
                    <span
                      className={cn(
                        "h-1.5 w-1.5 shrink-0 rounded-full",
                        active ? "bg-olive-deep" : "bg-olive/60 group-hover:bg-olive-deep"
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
                          ? "translate-x-0 text-olive-deep opacity-100"
                          : "-translate-x-1 text-olive/60 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      )}
                    >
                      ↳
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

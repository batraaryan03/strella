"use client";

import * as React from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { SUBURBS } from "@/lib/content";
import MelbourneMap from "@/components/map/melbourne-map";

/**
 * Service Areas — a REAL dark-styled Melbourne map (MapLibre +
 * OpenFreeMap, no API key) with an olive service-area highlight,
 * a sample route line, and suburb markers. Suburb chips beside.
 */
export default function ServiceAreas() {
  return (
    <section className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="06"
          eyebrow="Coverage"
          title={
            <>
              Every postcode,{" "}
              <span className="font-serif italic text-olive-bright">covered</span>
            </>
          }
          description="Finding reliable Melbourne removalists shouldn't be stressful. We navigate the busy CBD streets, the narrow laneways, and the sprawling outer suburbs with equal ease."
          className="mb-14 md:mb-20"
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          {/* ── Real map ── */}
          <MelbourneMap className="h-[360px] md:h-[480px]" />

          {/* ── Suburb chips ── */}
          <div className="flex flex-col">
            <p className="text-sm leading-[1.7] text-ink-2">
              We service 300+ postcodes across greater Melbourne — and
              specialise in office relocation with minimal downtime.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {SUBURBS.map((s) => (
                <a
                  key={s}
                  href={`#${s.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-2 text-[0.8125rem] text-ink-2 transition-colors duration-150 hover:border-olive/50 hover:bg-olive-tint hover:text-olive-bright"
                >
                  <span className="h-1 w-1 rounded-full bg-olive/60" />
                  {s}
                </a>
              ))}
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

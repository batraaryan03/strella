"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";
import { SUBURBS } from "@/lib/content";

/**
 * Service Areas — aviation-navigation aesthetic. A dark waypoint grid
 * with mono coordinates + suburb chips. Monochromatic, precise.
 */
export default function ServiceAreas() {
  return (
    <section className="relative scroll-mt-24 overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="05"
          eyebrow="Coverage"
          title={
            <>
              Every postcode,{" "}
              <span className="font-serif italic text-olive-bright">navigated</span>
            </>
          }
          description="Finding reliable Melbourne removalists shouldn't be stressful. We navigate the busy CBD streets, the narrow laneways, and the sprawling outer suburbs with equal ease."
          className="mb-14 md:mb-20"
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          {/* ── Waypoint grid panel ── */}
          <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-line bg-surface">
            <div className="constellation-grid absolute inset-0 opacity-50" />
            {/* ambient olive glow */}
            <div
              className="absolute -left-24 -top-24 h-72 w-72 rounded-full opacity-[0.1] blur-[90px]"
              style={{ background: "radial-gradient(circle, #8a9a52 0%, transparent 70%)" }}
            />

            <div className="relative flex h-full flex-col p-6 md:p-8">
              {/* header readout */}
              <div className="flex items-center justify-between border-b border-line pb-5">
                <div>
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-olive">
                    SYS.LOC // MELBOURNE METRO
                  </p>
                  <p className="mt-1.5 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-3">
                    LAT 37.8136° S · LON 144.9631° E
                  </p>
                </div>
                <span className="hidden items-center gap-1.5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-ink-3 sm:flex">
                  <span className="relative inline-flex h-1.5 w-1.5">
                    <span className="ping-soft relative inline-flex h-1.5 w-1.5 rounded-full bg-olive" />
                  </span>
                  Active fleet
                </span>
              </div>

              {/* route illustration — abstract map lines */}
              <div className="relative my-6 flex-1">
                <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden>
                  {/* waypoints */}
                  <g fill="#8a9a52">
                    {[
                      [60, 60], [150, 40], [240, 80], [320, 50], [360, 120],
                      [40, 150], [130, 130], [210, 170], [300, 150], [350, 190],
                    ].map(([x, y], i) => (
                      <g key={i}>
                        <circle cx={x} cy={y} r="3" />
                        <circle cx={x} cy={y} r="8" fill="none" stroke="#8a9a52" strokeOpacity="0.3" />
                      </g>
                    ))}
                  </g>
                  {/* route polylines */}
                  <g fill="none" stroke="#8a9a52" strokeOpacity="0.45" strokeWidth="1">
                    <path d="M60 60 L150 40 L240 80 L320 50 L360 120" strokeDasharray="4 4" />
                    <path d="M40 150 L130 130 L210 170 L300 150 L350 190" />
                  </g>
                  {/* grid ticks */}
                  <g stroke="#f4f5f0" strokeOpacity="0.06" strokeWidth="0.5">
                    <path d="M0 55 H400 M0 110 H400 M0 165 H400" />
                    <path d="M100 0 V220 M200 0 V220 M300 0 V220" />
                  </g>
                </svg>
              </div>

              <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-ink-3">
                300+ postcodes · 0 inaccessible
              </p>
            </div>
          </div>

          {/* ── Suburb chips ── */}
          <div className="flex flex-col">
            <p className="mb-6 text-sm leading-[1.7] text-ink-2">
              We also specialise in seamless office relocation services —
              minimising downtime so business never stops moving.
            </p>
            <div className="flex flex-wrap gap-2">
              {SUBURBS.map((s) => (
                <a
                  key={s}
                  href={`#${s.toLowerCase().replace(/\s+/g, "-")}`}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-2",
                    "text-[0.8125rem] text-ink-2 transition-all duration-150",
                    "hover:border-olive/50 hover:bg-olive-tint hover:text-olive-bright"
                  )}
                >
                  <span className="h-1 w-1 rounded-full bg-olive/60" />
                  {s}
                </a>
              ))}
            </div>
            <p className="mt-8 border-t border-line pt-6 text-[0.9375rem] font-medium leading-relaxed text-ink">
              No matter where you&apos;re located in Melbourne, Stellar is ready
              to deliver safe, efficient and professional moving services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

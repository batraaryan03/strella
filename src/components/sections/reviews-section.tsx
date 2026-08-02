"use client";

import * as React from "react";
import { MapPin } from "lucide-react";
import { StarRating } from "@/components/ui/star-rating";
import Silk from "@/components/ui/backgrounds/Silk";
import { REVIEWS } from "@/lib/content";

/**
 * Reviews — a single-strip auto-scrolling marquee (weekend-movers
 * style). Very light green Silk background (like the footer, faint),
 * glass review cards, olive theme. Infinite left scroll via
 * `animate-reviews-scroll`. Factual aggregate: rated by Melbourne
 * locals — no invented review counts.
 */
export default function ReviewsSection() {
  const doubled = [...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews" className="relative scroll-mt-24 overflow-hidden py-14 md:py-20">
      {/* ── Very light Silk — same green as footer, faint ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-15">
        <Silk
          speed={4.5}
          scale={1.1}
          color="#556b2f"
          noiseIntensity={3.5}
          rotation={0}
        />
      </div>
      {/* Readability scrim over the faint silk */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-canvas via-canvas/60 to-canvas"
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Compact header — aggregate + heading on one line */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive">
              Reviews
            </p>
            <h2 className="mt-3 text-balance text-[clamp(2.25rem,4.5vw,3.25rem)] font-bold leading-[1.02] tracking-[-0.03em] text-ink">
              Trusted by Melbourne locals
            </h2>
          </div>
          <div className="flex items-center gap-4 pb-1">
            <span className="tnum text-5xl font-bold tracking-[-0.04em] text-ink">
              5.0
            </span>
            <div>
              <StarRating value={5} size="md" />
              <p className="mt-1 text-sm text-ink-3">
                Rated by Melbourne locals
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Single strip — infinite marquee, glass review cards ── */}
      <div className="relative marquee-mask mt-10 overflow-hidden">
        <div className="flex w-max gap-6 animate-reviews-scroll">
          {doubled.map((r, i) => (
            <figure
              key={`${r.name}-${i}`}
              className="glass-card w-[26rem] shrink-0 rounded-[var(--radius-lg)] bg-white/[0.06] p-8"
            >
              <div className="mb-5 flex items-center justify-between">
                <StarRating value={5} size="lg" />
                <span className="inline-flex items-center gap-1.5 rounded-full bg-olive-tint px-3 py-1 text-xs font-medium text-olive-bright">
                  <MapPin className="h-4 w-4" />
                  Melbourne local
                </span>
              </div>
              <blockquote className="text-[1.0625rem] leading-[1.75] text-ink">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3.5 border-t border-line pt-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-olive-tint font-mono text-sm font-semibold text-olive-bright">
                  {r.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-[0.9375rem] font-semibold text-ink">
                    {r.name}
                  </span>
                  <span className="mt-0.5 block text-sm text-ink-3">
                    {r.location}, Melbourne
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-10 max-w-7xl px-5 md:px-8">
        <p className="text-center text-[0.9375rem] text-ink-3">
          Real words from Melbourne locals who moved with us.
        </p>
      </div>
    </section>
  );
}

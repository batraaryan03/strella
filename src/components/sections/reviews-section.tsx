"use client";

import * as React from "react";
import { BadgeCheck } from "lucide-react";
import { StarRating } from "@/components/ui/star-rating";
import { REVIEWS } from "@/lib/content";

/**
 * Reviews — a single-strip auto-scrolling marquee (weekend-movers
 * style), no background image, olive theme, less height. Infinite
 * left scroll via `animate-reviews-scroll`; cards are borderless
 * tonal panels with olive stars. Compact aggregate on the left.
 */
export default function ReviewsSection() {
  const doubled = [...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews" className="relative scroll-mt-24 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
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
              4.9
            </span>
            <div>
              <StarRating value={4.9} size="md" />
              <p className="mt-1 text-sm text-ink-3">
                2,300+ Google reviews
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Single strip — infinite marquee, glass review cards ── */}
      <div className="marquee-mask mt-10 overflow-hidden">
        <div className="flex w-max gap-6 animate-reviews-scroll">
          {doubled.map((r, i) => (
            <figure
              key={`${r.name}-${i}`}
              className="glass-card w-[26rem] shrink-0 rounded-[var(--radius-lg)] bg-white/[0.06] p-8"
            >
              <div className="mb-5 flex items-center justify-between">
                <StarRating value={5} size="lg" />
                <span className="inline-flex items-center gap-1.5 rounded-full bg-olive-tint px-3 py-1 text-xs font-medium text-olive-bright">
                  <BadgeCheck className="h-4 w-4" />
                  Verified
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

      <div className="mx-auto mt-10 max-w-7xl px-5 md:px-8">
        <div className="flex justify-center">
          <a
            href="https://www.google.com/search?q=stellar+removals+melbourne+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.9375rem] font-medium text-ink-2 transition-colors hover:text-olive-bright"
          >
            Read all 2,300+ reviews on Google
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

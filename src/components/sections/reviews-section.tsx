"use client";

import * as React from "react";
import { BadgeCheck } from "lucide-react";
import { StarRating } from "@/components/ui/star-rating";
import { REVIEWS } from "@/lib/content";

/**
 * Reviews — more reviews (user-directed: "we want to see more reviews,
 * it should look much more trustworthy"). A summary row establishes the
 * aggregate, then the full set of verified reviews in an editorial grid.
 */
export default function ReviewsSection() {
  return (
    <section id="reviews" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive">
            Reviews
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-ink">
            Trusted by Melbourne locals
          </h2>
          <p className="mt-5 text-base leading-[1.7] text-ink-2 md:text-lg">
            Real reviews from verified Google clients across greater
            Melbourne — 300+ postcodes, one standard of care.
          </p>
        </div>

        {/* Trustworthy summary row */}
        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6 border-y border-line py-7">
          <div className="flex items-center gap-3">
            <span className="tnum text-5xl font-bold tracking-[-0.04em] text-ink">
              4.9
            </span>
            <div>
              <StarRating value={4.9} size="md" />
              <p className="mt-1 text-sm text-ink-3">Average rating</p>
            </div>
          </div>
          <div>
            <p className="tnum text-2xl font-bold text-ink">2,300+</p>
            <p className="text-sm text-ink-3">Google reviews</p>
          </div>
          <div>
            <p className="flex items-center gap-1.5 text-2xl font-bold text-ink">
              <BadgeCheck className="h-5 w-5 text-olive" />
              100%
            </p>
            <p className="text-sm text-ink-3">Verified reviews</p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="panel panel-hover flex flex-col rounded-[var(--radius-card)] p-7 md:p-8"
            >
              <div className="mb-5 flex items-center justify-between">
                <StarRating value={5} />
                <span className="inline-flex items-center gap-1 text-[0.6875rem] text-ink-3">
                  <BadgeCheck className="h-3.5 w-3.5 text-olive" />
                  Verified
                </span>
              </div>

              <blockquote className="flex-1 text-[0.9375rem] leading-[1.7] text-ink-2">
                &ldquo;{r.text}&rdquo;
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-surface-2 font-mono text-xs text-olive">
                  {r.name.charAt(0)}
                </span>
                <span className="text-sm">
                  <span className="block font-medium text-ink">{r.name}</span>
                  <span className="block text-xs text-ink-3">
                    {r.location}, Melbourne
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
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

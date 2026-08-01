"use client";

import * as React from "react";
import { BadgeCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { StarRating } from "@/components/ui/star-rating";
import { REVIEWS } from "@/lib/content";

/**
 * Reviews — large borderless editorial cards with generous
 * whitespace. Fewer reviews at once, authenticity first.
 */
export default function ReviewsSection() {
  return (
    <section id="reviews" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="05"
          eyebrow="Reviews"
          title="Trusted by Melbourne locals"
          description="Real reviews from verified Google clients across Melbourne."
          align="center"
          className="mb-14 md:mb-16"
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
            className="inline-flex items-center gap-2 text-[0.8125rem] text-ink-3 transition-colors hover:text-olive-bright"
          >
            4.9 average across 2,300+ Google reviews
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

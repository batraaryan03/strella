"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/content";

/**
 * Services — a simple, image-forward grid. Each card leads with a
 * clearly visible photo (no bento overlay, no pixel effect — this
 * section renders on the homepage and must stay lightweight). Bold
 * title, short description, one professional CTA.
 */
export default function ServicesSection() {
  return (
    <section id="services" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Inline header — no SectionHeader component */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive">
            What we offer
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-ink">
            Moving services, engineered for precision
          </h2>
          <p className="mt-5 text-base leading-[1.7] text-ink-2 md:text-lg">
            Comprehensive moving solutions tailored to your needs in
            Melbourne — from single apartments to full office relocations.
          </p>
        </div>

        {/* Simple grid — images fully visible */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-surface"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="photo-grade-hover h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <h3 className="text-xl font-bold tracking-[-0.01em] text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.9375rem] leading-[1.7] text-ink-2">
                  {s.desc}
                </p>
                <a href="/book-move" className="mt-6 inline-flex w-fit">
                  <Button size="sm" className="group/btn">
                    Book this service
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover/btn:translate-x-0.5" />
                  </Button>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

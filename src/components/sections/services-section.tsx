"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";
import { SERVICES } from "@/lib/content";

/**
 * Services — photographic editorial modules. Real Unsplash imagery,
 * index numbers, clean typography. No icon tiles, no glow, no
 * pop-up hover cards. Hover is a restrained image scale + border.
 */
export default function ServicesSection() {
  return (
    <section id="services" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="02"
          eyebrow="What we offer"
          title={
            <>
              Moving services,{" "}
              <span className="font-serif italic text-olive-bright">
                engineered
              </span>{" "}
              for precision
            </>
          }
          description="Comprehensive moving solutions tailored to your needs in Melbourne — from single apartments to full office relocations."
          className="mb-14 md:mb-20"
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
          {SERVICES.map((s, i) => {
            // asymmetric spans: 3, 3, 2, 2, 2 → 12 cols
            const span =
              i < 2 ? "md:col-span-3" : "md:col-span-2 lg:col-span-2";
            return (
              <article
                key={s.title}
                className={cn(
                  "group flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-line bg-surface",
                  "transition-colors duration-300 hover:border-olive/35",
                  span
                )}
              >
                {/* Real photography */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-canvas/70 px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-2 backdrop-blur-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="text-lg font-medium tracking-[-0.01em] text-ink md:text-xl">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 max-w-[46ch] text-sm leading-[1.7] text-ink-2">
                    {s.desc}
                  </p>
                  <a
                    href="/book-move"
                    className="mt-auto inline-flex items-center gap-1 pt-6 text-[0.8125rem] font-medium text-ink-3 transition-colors duration-150 group-hover:text-olive-bright"
                  >
                    Book this service
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

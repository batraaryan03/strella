"use client";

import * as React from "react";
import { Home, Building2, Briefcase, Package, Wrench, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";
import { SERVICES } from "@/lib/content";

const iconMap = {
  home: Home,
  building: Building2,
  briefcase: Briefcase,
  package: Package,
  wrench: Wrench,
} as const;

/**
 * Services — architectural modules. Large rounded rectangles, subtle
 * borders, line icons. Hover: slight elevation + olive border brighten.
 * Asymmetric 12-col grid so each service feels individually important.
 */
export default function ServicesSection() {
  return (
    <section id="services" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="01"
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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
          {SERVICES.map((s, i) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            // asymmetric spans: 1, 1, 2, 1, 1 → 6 cols
            const span =
              i === 0 ? "md:col-span-3" :
              i === 1 ? "md:col-span-3" :
              i === 2 ? "md:col-span-6 lg:col-span-2" :
              "md:col-span-3 lg:col-span-2";
            return (
              <Card
                key={s.title}
                variant="surface"
                hover="lift"
                className={cn("group relative flex flex-col overflow-hidden p-6 md:p-8", span)}
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-olive-tint to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-8 flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-[var(--radius-btn)] border border-line bg-raised text-olive transition-colors duration-200 group-hover:border-olive/40">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-lg font-medium tracking-[-0.01em] text-ink md:text-xl">
                  {s.title}
                </h3>
                <p className="mt-2.5 max-w-[46ch] text-sm leading-[1.7] text-ink-2">
                  {s.desc}
                </p>

                <div className="mt-auto flex items-center justify-between pt-6">
                  <a
                    href="/book-move"
                    className="inline-flex items-center gap-1 text-[0.8125rem] font-medium text-ink-3 transition-colors duration-150 group-hover:text-olive-bright"
                  >
                    Book this service
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <img
                    src={s.img}
                    alt=""
                    aria-hidden
                    className="h-16 w-24 rounded-md object-cover opacity-70 saturate-[0.85] transition-opacity duration-300 group-hover:opacity-100 md:h-20 md:w-28"
                  />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

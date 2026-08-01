"use client";

import * as React from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { PixelImage } from "@/components/ui/pixel-image";
import { SERVICES } from "@/lib/content";

/**
 * Services — the real Magic UI bento grid with real photography.
 * Each card carries an image background, an index icon, and a
 * hover-reveal CTA.
 */
export default function ServicesSection() {
  return (
    <section id="services" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="02"
          eyebrow="What we offer"
          title="Moving services, engineered for precision"
          description="Comprehensive moving solutions tailored to your needs in Melbourne — from single apartments to full office relocations."
          className="mb-14 md:mb-20"
        />

        <BentoGrid className="auto-rows-[minmax(20rem,auto)]">
          {SERVICES.map((s, i) => (
            <BentoCard
              key={s.title}
              name={s.title}
              description={s.desc}
              href="/book-move"
              cta="Book this service"
              Icon={IndexIcon(i)}
              className={i === 0 || i === 3 ? "md:col-span-2" : ""}
              background={
                <div className="relative h-full min-h-[16rem] w-full overflow-hidden">
                  <PixelImage
                    src={s.img}
                    alt={s.title}
                    className="photo-grade absolute inset-0 h-full w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/40 to-transparent" />
                </div>
              }
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

/** Quiet mono index marker standing in as the card icon. */
function IndexIcon(index: number) {
  return function Icon({ className }: { className?: string }) {
    return (
      <span
        className={`tnum font-mono text-[0.6875rem] text-olive ${className ?? ""}`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    );
  };
}

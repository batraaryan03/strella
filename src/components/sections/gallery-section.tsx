"use client";

import * as React from "react";
import DomeGallery from "@/components/ui/backgrounds/DomeGallery";
import { GALLERY_LOCAL } from "@/lib/content";

/**
 * Gallery — the React Bits DomeGallery: a photo sphere that REVOLVES
 * automatically (autoRotateSpeed) and can still be dragged. Inline
 * header (no SectionHeader). Sits just before the moving-services
 * section per the user's sequence.
 */
export default function GallerySection() {
  return (
    <section id="gallery" className="relative scroll-mt-24 overflow-hidden py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 flex justify-center align-center">
        <div className="max-w-3xl flex-col">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] align-center justify-center flex text-olive">
            Gallery
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.25rem,5vw,3.5rem)] flex justify-center align-center font-bold leading-[1.02] tracking-[-0.03em] text-ink">
            Our Recent Moves
          </h2>
          <p className="mt-5 text-base leading-[1.7] flex justify-center align-center text-ink-2 md:text-lg">
            A selection of recent relocations across Melbourne — <br/>
            trucks, teams, and carefully wrapped furniture.
          </p>
        </div>
      </div>

      {/* ── Full-bleed dome — touches the entire screen width ── */}
      <div className="relative mt-10 h-110 w-full md:h-220">
        <React.Suspense fallback={null}>
          <DomeGallery
            images={GALLERY_LOCAL}
            fit={1}
            minRadius={480}
            maxRadius={2000}
            /* Perf + tighter tiles: 24 segments (was 30) = wider tiles,
               so the gaps between images shrink AND ~20% fewer DOM nodes. */
            segments={24}
            dragDampening={0}
            grayscale={false}
            openedImageWidth="400px"
            openedImageHeight="500px"
            imageBorderRadius="12px"
            openedImageBorderRadius="24px"
            autoRotateSpeed={1.25}
          />
        </React.Suspense>
      </div>
    </section>
  );
}

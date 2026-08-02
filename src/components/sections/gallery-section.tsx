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
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive">
            Gallery
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-ink">
            Recent moves, documented
          </h2>
          <p className="mt-5 text-base leading-[1.7] text-ink-2 md:text-lg">
            A selection of recent relocations across Melbourne — trucks,
            teams, and carefully wrapped furniture. The dome revolves on
            its own — drag it anytime to explore.
          </p>
        </div>

        <div className="mt-10 h-[400px] md:h-[640px]">
          <React.Suspense fallback={null}>
            <DomeGallery
              images={GALLERY_LOCAL}
              fit={1}
              minRadius={480}
              maxRadius={1200}
              segments={30}
              dragDampening={3.6}
              grayscale={false}
              openedImageWidth="300px"
              openedImageHeight="400px"
              imageBorderRadius="16px"
              openedImageBorderRadius="16px"
              autoRotateSpeed={5}
            />
          </React.Suspense>
        </div>
      </div>
    </section>
  );
}

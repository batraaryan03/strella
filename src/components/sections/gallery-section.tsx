"use client";

import * as React from "react";
import DomeGallery from "@/components/ui/backgrounds/DomeGallery";
import { GALLERY_IMAGES } from "@/lib/content";

/**
 * Gallery — the React Bits DomeGallery: a drag-rotatable sphere of
 * real Melbourne move photography. Inline header (no SectionHeader).
 * The dome is interactive: drag to spin, click a tile to enlarge.
 */
export default function GallerySection() {
  return (
    <section id="gallery" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive">
            Gallery
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-ink">
            Recent moves, documented
          </h2>
          <p className="mt-5 text-base leading-[1.7] text-ink-2 md:text-lg">
            A selection of recent relocations across Melbourne — trucks,
            teams, and carefully wrapped furniture. Drag to explore.
          </p>
        </div>

        <div className="mt-10 h-[520px] md:h-[680px]">
          <React.Suspense fallback={null}>
            <DomeGallery
              images={GALLERY_IMAGES.map((src, i) => ({
                src,
                alt: `Melbourne move — photo ${i + 1}`,
              }))}
              fit={1}
              minRadius={600}
              maxRadius={1200}
              segments={30}
              dragDampening={3.6}
              grayscale={false}
              openedImageWidth="300px"
              openedImageHeight="400px"
              imageBorderRadius="16px"
              openedImageBorderRadius="16px"
            />
          </React.Suspense>
        </div>
      </div>
    </section>
  );
}

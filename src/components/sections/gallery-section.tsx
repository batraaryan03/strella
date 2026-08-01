"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { PixelImage } from "@/components/ui/pixel-image";
import { GALLERY_IMAGES } from "@/lib/content";

/** Art-directed aspect rhythm for the masonry columns. */
const ASPECTS = [
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[4/5]",
];

/**
 * Gallery — borderless editorial masonry (CSS columns) with varied
 * aspect ratios for visual rhythm, and a full-viewport dark
 * lightbox (keyboard + touch navigation).
 */
export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);
  const touchX = React.useRef(0);

  const close = React.useCallback(() => setLightboxIndex(null), []);
  const prev = React.useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null ? (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null
      ),
    []
  );
  const next = React.useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i + 1) % GALLERY_IMAGES.length : null)),
    []
  );

  React.useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, close, prev, next]);

  return (
    <section id="gallery" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="08"
          eyebrow="Gallery"
          title="Recent moves, documented"
          description="A selection of recent relocations across Melbourne — trucks, teams, and carefully wrapped furniture."
          className="mb-14 md:mb-16"
        />

        {/* ── Editorial masonry ── */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {GALLERY_IMAGES.map((src, i) => (
            <button
              key={src}
              onClick={() => setLightboxIndex(i)}
              className="group relative block w-full overflow-hidden rounded-[var(--radius-card)] break-inside-avoid"
              aria-label={`View move photo ${i + 1}`}
            >
              <PixelImage
                src={src}
                alt={`Move ${i + 1}`}
                className={`w-full ${ASPECTS[i % ASPECTS.length]}`}
              />
              <span className="absolute inset-0 bg-gradient-to-t from-canvas/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 font-mono text-[0.6875rem] text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {String(i + 1).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-canvas/95 backdrop-blur-sm"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Move photo lightbox"
          >
            <button
              onClick={close}
              aria-label="Close lightbox"
              className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full text-ink-2 transition-colors hover:bg-white/5 hover:text-ink"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="tnum absolute left-5 top-5 font-mono text-sm text-ink-3">
              {String(lightboxIndex + 1).padStart(2, "0")} /{" "}
              {String(GALLERY_IMAGES.length).padStart(2, "0")}
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/5 text-ink transition-colors hover:bg-white/10 md:left-8"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <img
              src={GALLERY_IMAGES[lightboxIndex]}
              alt={`Move ${lightboxIndex + 1}`}
              onClick={(e) => e.stopPropagation()}
              onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
              onTouchEnd={(e) => {
                const d = touchX.current - e.changedTouches[0].clientX;
                if (Math.abs(d) > 50) {
                  if (d > 0) next();
                  else prev();
                }
              }}
              className="max-h-[82vh] max-w-[88vw] select-none rounded-lg object-contain"
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/5 text-ink transition-colors hover:bg-white/10 md:right-8"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>,
          document.body
        )}
    </section>
  );
}

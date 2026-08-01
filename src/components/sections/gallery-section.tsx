"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { GALLERY_IMAGES } from "@/lib/content";

const half = Math.ceil(GALLERY_IMAGES.length / 2);
const row1 = GALLERY_IMAGES.slice(0, half);
const row2 = GALLERY_IMAGES.slice(half);

/**
 * Gallery — editorial asymmetric rows scrolling in opposite
 * directions (pause on hover), with a full-viewport dark lightbox.
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

  const renderRow = (images: string[], base: number, dir: "left" | "right") => (
    <div className={`gallery-row ${dir === "left" ? "mb-4" : ""} overflow-hidden`}>
      <div
        className={`flex w-max gap-4 ${
          dir === "left" ? "gallery-track-left" : "gallery-track-right"
        }`}
      >
        {[...images, ...images].map((src, i) => (
          <button
            key={`${dir}-${i}`}
            onClick={() => setLightboxIndex((i % images.length) + base)}
            className="group relative block h-[200px] w-[280px] shrink-0 cursor-pointer overflow-hidden rounded-[var(--radius-card)] border border-line md:h-[260px] md:w-[380px]"
            aria-label={`View move photo ${(i % images.length) + base + 1}`}
          >
            <img
              src={src}
              alt={`Move ${(i % images.length) + base + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-canvas/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute bottom-3 left-3 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {String((i % images.length) + base + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <section id="gallery" className="relative scroll-mt-24 overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="08"
          eyebrow="Gallery"
          title={
            <>
              Recent moves,{" "}
              <span className="font-serif italic text-olive-bright">documented</span>
            </>
          }
          description="A selection of recent relocations across Melbourne — trucks, teams, and carefully wrapped furniture."
          className="mb-14 md:mb-20"
        />
      </div>

      <div className="relative">
        {renderRow(row1, 0, "left")}
        {renderRow(row2, 15, "right")}
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

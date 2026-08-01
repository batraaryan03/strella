"use client";

import CircularGallery from "@/components/ui/backgrounds/CircularGallery";

/** Real move photography from /public/gallery (01.jpg … 30.jpg). */
const GALLERY_SRC = Array.from({ length: 30 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return `/gallery/${n}.jpg`;
});

/** Short suburb-style captions under each card. */
const GALLERY_CAPTIONS = [
  "Hawthorn", "Richmond", "Southbank", "Carlton", "St Kilda",
  "Docklands", "Footscray", "Dandenong", "Werribee", "Point Cook",
  "Craigieburn", "Preston", "Sunshine", "Essendon", "Northcote",
  "Fitzroy", "Toorak", "Glen Waverley", "Box Hill", "Brunswick",
  "Prahran", "Collingwood", "Kensington", "Elwood", "Malvern",
  "Moonee Ponds", "Port Melbourne", "Camberwell", "Balwyn", "Kew",
];

/**
 * Stable module-scope items — a fresh array identity on every render
 * would make CircularGallery's effect (deps include `items`) destroy
 * and recreate the entire WebGL app on any parent re-render.
 */
const GALLERY_ITEMS = GALLERY_SRC.map((src, i) => ({
  image: src,
  text: GALLERY_CAPTIONS[i % GALLERY_CAPTIONS.length],
}));

/**
 * Gallery — the React Bits CircularGallery: a curved, auto-scrolling
 * reel of real Melbourne move photography from /public/gallery
 * (user-directed: replace the DomeGallery with this one, real images).
 * Scroll / drag / arrow keys to glide; no pixel-animation, simple and
 * performant on the homepage.
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
            teams, and carefully wrapped furniture. Scroll or drag to
            glide through the reel.
          </p>
        </div>

        <div className="mt-10 h-[520px] md:h-[680px]">
          <CircularGallery
            items={GALLERY_ITEMS}
            bend={3}
            textColor="#f2f3ed"
            borderRadius={0.12}
            scrollSpeed={2.8}
            scrollEase={0.02}
          />
        </div>
      </div>
    </section>
  );
}

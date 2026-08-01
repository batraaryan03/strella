"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

/** Olive-tuned "Neon Waves" — same geometry/motion as preset six, but the
    light colors are re-tuned to the anaconda-olive + ink palette so the
    background sits inside the design system. */
const OLIVE_EFFECT_OPTIONS = {
  onSpeedUp: () => {},
  onSlowDown: () => {},
  distortion: "deepDistortion",
  length: 400,
  roadWidth: 18,
  islandWidth: 2,
  lanesPerRoad: 3,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  carLightsFade: 0.4,
  totalSideLightSticks: 50,
  lightPairsPerRoadWay: 50,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],
  movingAwaySpeed: [60, 80],
  movingCloserSpeed: [-120, -160],
  carLightsLength: [400 * 0.05, 400 * 0.15],
  carLightsRadius: [0.05, 0.14],
  carWidthPercentage: [0.3, 0.5],
  carShiftX: [-0.2, 0.2],
  carFloorSeparation: [0.05, 1],
  colors: {
    roadColor: 0x0a0b08,
    islandColor: 0x12140e,
    background: 0x0a0b08,
    shoulderLines: 0x23271a,
    brokenLines: 0x23271a,
    leftCars: [0x97a75a, 0x5c6b3a, 0x6d7c46],
    rightCars: [0xb3c275, 0x8a9a52, 0x757a6c],
    sticks: 0xb3c275,
  },
};

const Hyperspeed = dynamic(() => import("./Hyperspeed"), {
  ssr: false,
});

/**
 * HyperspeedHomepage — React Bits Hyperspeed as the site's animated
 * backdrop, olive-tuned ("Neon Waves" geometry, anaconda lights).
 * Client-only (WebGL — `ssr: false`), lazy-mounted once the page is
 * in view, and skipped entirely for reduced-motion users (the static
 * NoiseTexture underlay remains in the layout).
 */
export default function HyperspeedHomepage() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [ready, setReady] = React.useState(false);
  const pathname = usePathname();

  // All hooks run unconditionally (early returns would violate hook order
  // on route changes); the effect + render are both gated by pathname.
  React.useEffect(() => {
    // User directive: the Hyperspeed backdrop belongs to the homepage only.
    if (pathname !== "/") return;
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        setReady(true);
      },
      { rootMargin: "1200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [pathname]);

  // User directive: homepage only — no WebGL backdrop on /book-move, /contact.
  if (pathname !== "/") return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {ready && (
        <>
          <div className="absolute inset-0">
            <Hyperspeed effectOptions={OLIVE_EFFECT_OPTIONS} />
          </div>
          {/* Calm the backdrop so content stays readable */}
          <div className="absolute inset-0 bg-canvas/60" />
        </>
      )}
    </div>
  );
}

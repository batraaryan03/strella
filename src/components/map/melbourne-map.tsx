"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import type { SuburbPoint } from "@/lib/content";

/**
 * Real Melbourne map — Leaflet + OpenStreetMap (fully free, no API
 * key). Real coordinates: Docklands depot, Docklands → CBD → Hawthorn
 * route, olive service-area hull, and markers at 20 real suburbs.
 *
 * leaflet accesses `window` at module evaluation, which breaks Next
 * static prerendering — so the map module is loaded dynamically with
 * `ssr: false` and only mounts once this section is scrolled into view.
 */
const MelbourneMapInner = dynamic(
  () => import("./melbourne-map-inner"),
  {
    ssr: false,
    loading: () => (
      <div className="pointer-events-none absolute inset-0 grid place-items-center bg-surface">
        <span className="flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-3">
          <span className="h-1.5 w-1.5 rounded-full bg-olive" />
          Loading Melbourne Map
        </span>
      </div>
    ),
  }
);

export default function MelbourneMap({
  className,
  focus
}: {
  className?: string;
  /** Suburb to fly to (from the Service Areas chips); null clears the focus. */
  focus?: SuburbPoint | null;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        setLoaded(true);
      },
      { rootMargin: "400px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-surface rounded-xl",
        className ?? "absolute inset-0 h-115 md:h-140"
      )}
    >
      <div ref={containerRef} className="absolute inset-0">
        {loaded && <MelbourneMapInner focus={focus} />}
      </div>

      {!loaded && (
        <div className="pointer-events-none absolute inset-0 grid place-items-center bg-surface">
          <span className="flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-3">
            <span className="h-1.5 w-1.5 rounded-full bg-olive" />
            Loading Melbourne Map
          </span>
        </div>
      )}

    </div>
  );
}

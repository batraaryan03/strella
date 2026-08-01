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
          Loading Melbourne…
        </span>
      </div>
    ),
  }
);

export default function MelbourneMap({
  className,
  focus,
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
        "relative overflow-hidden rounded-[var(--radius-lg)] border border-line bg-surface",
        className ?? "h-[380px] md:h-[460px]"
      )}
    >
      <div ref={containerRef} className="absolute inset-0">
        {loaded && <MelbourneMapInner focus={focus} />}
      </div>

      {!loaded && (
        <div className="pointer-events-none absolute inset-0 grid place-items-center bg-surface">
          <span className="flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-3">
            <span className="h-1.5 w-1.5 rounded-full bg-olive" />
            Loading Melbourne…
          </span>
        </div>
      )}

      {/* Header readout — reflects the focused suburb when one is selected */}
      <div className="pointer-events-none absolute left-4 top-4 z-[500] flex items-center gap-2 rounded-md border border-white/10 bg-canvas/70 px-3 py-1.5 backdrop-blur-md">
        <span
          className={cn("h-1.5 w-1.5 rounded-full", focus ? "bg-olive-bright" : "bg-olive")}
        />
        <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-ink-2">
          {focus ? `${focus.name} — in focus` : "Melbourne Metro"}
        </span>
      </div>

      {/* Depot readout */}
      <div className="pointer-events-none absolute bottom-4 left-4 z-[500] flex items-center gap-2 rounded-md border border-white/10 bg-canvas/70 px-3 py-1.5 backdrop-blur-md">
        <span className="depot-dot" aria-hidden />
        <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-ink-2">
          Depot · Docklands — STL-08 on route
        </span>
      </div>
    </div>
  );
}

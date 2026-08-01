"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import "maplibre-gl/dist/maplibre-gl.css";
import type { Map as MapLibreMap } from "maplibre-gl";
import {
  MELBOURNE_CENTER,
  SERVICE_AREA_POLYGON,
  ROUTE_PATH,
  SUBURB_POINTS,
} from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Real Melbourne map — MapLibre GL with the free OpenFreeMap dark
 * style (no API key). Lazy-loaded when scrolled into view. Olive
 * service-area polygon, a sample route line, and suburb markers.
 */
export default function MelbourneMap({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let disposed = false;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        void init();
      },
      { rootMargin: "400px" }
    );
    observer.observe(el);

    async function init() {
      const maplibregl = await import("maplibre-gl");
      if (disposed || !containerRef.current) return;

      const map = new maplibregl.Map({
        container: containerRef.current,
        style: "https://tiles.openfreemap.org/styles/dark",
        center: MELBOURNE_CENTER,
        zoom: 9.2,
        attributionControl: { compact: true },
      });
      mapRef.current = map;

      map.on("load", () => {
        if (disposed) return;

        // Service area
        map.addSource("service-area", {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Polygon",
              coordinates: [SERVICE_AREA_POLYGON],
            },
          },
        });
        map.addLayer({
          id: "sa-fill",
          type: "fill",
          source: "service-area",
          paint: { "fill-color": "#8a9a52", "fill-opacity": 0.12 },
        });
        map.addLayer({
          id: "sa-outline",
          type: "line",
          source: "service-area",
          paint: {
            "line-color": "#aebd75",
            "line-width": 1.5,
            "line-opacity": 0.55,
            "line-dasharray": [3, 3],
          },
        });

        // Sample route: depot → CBD → Hawthorn
        map.addSource("route", {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: { type: "LineString", coordinates: ROUTE_PATH },
          },
        });
        map.addLayer({
          id: "route-line",
          type: "line",
          source: "route",
          paint: { "line-color": "#aebd75", "line-width": 2.5, "line-opacity": 0.9 },
        });

        // Suburb markers
        SUBURB_POINTS.forEach((p) => {
          const markerEl = document.createElement("div");
          markerEl.className = "map-pin";
          const popup = new maplibregl.Popup({ offset: 12, closeButton: false }).setText(
            p.name
          );
          const marker = new maplibregl.Marker({ element: markerEl })
            .setLngLat([p.lng, p.lat])
            .setPopup(popup)
            .addTo(map);
          // Close popup when the pointer leaves the marker
          markerEl.addEventListener("mouseleave", () => popup.remove());
          markerEl.addEventListener("mouseenter", () => {
            if (!popup.isOpen()) popup.addTo(map);
          });
        });

        setLoaded(true);
      });
    }

    return () => {
      disposed = true;
      observer.disconnect();
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-lg)] border border-line bg-surface",
        className ?? "h-[380px] md:h-[460px]"
      )}
    >
      <div ref={containerRef} className="absolute inset-0" />
      {!loaded && (
        <div className="pointer-events-none absolute inset-0 grid place-items-center bg-surface">
          <span className="flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-ink-3">
            <span className="h-1.5 w-1.5 rounded-full bg-olive" />
            Loading Melbourne…
          </span>
        </div>
      )}
      {/* Header readout */}
      <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-md border border-white/10 bg-canvas/70 px-3 py-1.5 backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-olive" />
        <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-ink-2">
          Melbourne Metro
        </span>
      </div>
    </div>
  );
}

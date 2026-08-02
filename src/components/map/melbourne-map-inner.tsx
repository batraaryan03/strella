"use client";

import * as React from "react";
import {
  MapContainer,
  TileLayer,
  Polygon,
  Polyline,
  Marker,
  Tooltip,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  MELBOURNE_CENTER,
  SERVICE_AREA_POLYGON,
  ROUTE_PATH,
  SUBURB_POINTS,
  type SuburbPoint,
} from "@/lib/content";

/** Real coordinates for the depot + destination waypoints (lng, lat). */
const DEPOT = ROUTE_PATH[0]; // Docklands
const DESTINATION = ROUTE_PATH[ROUTE_PATH.length - 1]; // Hawthorn

/** Leaflet wants [lat, lng]; our content store is [lng, lat]. */
const toLatLng = (p: [number, number]): [number, number] => [p[1], p[0]];

const depotIcon = L.divIcon({
  className: "",
  html: '<div class="depot-beacon" aria-label="Stellar depot, Docklands"></div>',
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

const destinationIcon = L.divIcon({
  className: "",
  html: '<div class="map-pin map-pin-lg" aria-label="Destination — Hawthorn"></div>',
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

const suburbIcon = L.divIcon({
  className: "",
  html: '<div class="map-pin"></div>',
  iconSize: [10, 10],
  iconAnchor: [5, 5],
});

const suburbIconActive = L.divIcon({
  className: "",
  html: '<div class="map-pin map-pin-active"></div>',
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

/** Re-fits bounds after the container mounts, and after tiles load. */
function MapController({ bounds }: { bounds: L.LatLngBoundsExpression }) {
  const map = useMap();
  React.useEffect(() => {
    map.fitBounds(bounds, { padding: [28, 28] });
    const t = setTimeout(() => map.invalidateSize(), 300);
    return () => clearTimeout(t);
  }, [map, bounds]);
  return null;
}

/**
 * Fly-to controller — animates the map to a suburb when the user picks
 * a chip in the Service Areas section. Respects prefers-reduced-motion
 * (instant jump instead of animation). A null focus with a previous
 * focus returns the camera to the full coverage view.
 */
function FlyToController({
  focus,
  bounds,
}: {
  focus?: SuburbPoint | null;
  bounds: L.LatLngBoundsExpression;
}) {
  const map = useMap();
  const prevFocusRef = React.useRef<SuburbPoint | null | undefined>(undefined);

  React.useEffect(() => {
    const prev = prevFocusRef.current;
    prevFocusRef.current = focus;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (focus) {
      const target: [number, number] = [focus.lat, focus.lng];
      if (reduceMotion) {
        map.setView(target, 13);
      } else {
        map.flyTo(target, 13, { duration: 1.4, easeLinearity: 0.25 });
      }
      return;
    }

    // Focus cleared → return to the coverage overview (only if we flew
    // somewhere before, so the initial mount doesn't fight fitBounds).
    if (prev) {
      if (reduceMotion) {
        map.fitBounds(bounds, { padding: [28, 28] });
      } else {
        map.flyToBounds(bounds, { padding: [28, 28], duration: 1.1, easeLinearity: 0.25 });
      }
    }
  }, [map, focus, bounds]);

  return null;
}

/**
 * iOS Safari guard — pinch must zoom the MAP, not the whole page.
 * `touch-action: none` (in globals.css) covers most browsers; Safari
 * also fires `gesturestart`/`gesturechange` before deciding to zoom
 * the viewport, so we block those on the map container directly.
 */
function PinchZoomGuard() {
  const map = useMap();
  React.useEffect(() => {
    const el = map.getContainer();
    const prevent = (e: Event) => e.preventDefault();
    const opts: AddEventListenerOptions = { passive: false };
    el.addEventListener("gesturestart", prevent, opts);
    el.addEventListener("gesturechange", prevent, opts);
    el.addEventListener("gestureend", prevent, opts);
    return () => {
      el.removeEventListener("gesturestart", prevent);
      el.removeEventListener("gesturechange", prevent);
      el.removeEventListener("gestureend", prevent);
    };
  }, [map]);
  return null;
}

/**
 * Leaflet map body — loaded client-only (see melbourne-map.tsx).
 * Standard OSM tiles, dark-graded via the `.dark-map-tiles` filter.
 * `focus` (from the suburb chips) fly-to animates the camera to a suburb.
 */
export default function MelbourneMapInner({ focus }: { focus?: SuburbPoint | null }) {
  const bounds: L.LatLngBoundsExpression = React.useMemo(
    () => [
      toLatLng(SERVICE_AREA_POLYGON[0]),
      toLatLng(SERVICE_AREA_POLYGON[4]),
      toLatLng(ROUTE_PATH[0]),
      toLatLng(ROUTE_PATH[ROUTE_PATH.length - 1]),
    ],
    []
  );

  return (
    <MapContainer
      center={MELBOURNE_CENTER}
      zoom={9}
      scrollWheelZoom={false}
      touchZoom
      doubleClickZoom
      className="dark-map-tiles h-full w-full"
      attributionControl={true}
    >
      <PinchZoomGuard />
      <MapController bounds={bounds} />
      <FlyToController focus={focus} bounds={bounds} />

      {/* Standard OSM tiles — dark-graded via CSS (`.dark-map-tiles`) */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Olive service-area hull */}
      <Polygon
        positions={SERVICE_AREA_POLYGON.map(toLatLng)}
        pathOptions={{
          color: "#b3c275",
          weight: 1.5,
          opacity: 0.55,
          dashArray: "3 3",
          fillColor: "#97a75a",
          fillOpacity: 0.12,
        }}
      />

      {/* Route: Docklands → CBD → Hawthorn */}
      <Polyline
        positions={ROUTE_PATH.map(toLatLng)}
        pathOptions={{
          color: "#b3c275",
          weight: 3,
          opacity: 0.9,
        }}
      />

      {/* Depot + destination waypoints */}
      <Marker position={toLatLng(DEPOT)} icon={depotIcon}>
        <Tooltip direction="top" offset={[0, -8]} opacity={1}>
          Stellar Depot · Docklands
        </Tooltip>
      </Marker>
      <Marker position={toLatLng(DESTINATION)} icon={destinationIcon}>
        <Tooltip direction="top" offset={[0, -8]} opacity={1}>
          Hawthorn
        </Tooltip>
      </Marker>

      {/* 20 real Melbourne suburbs — the focused one gets the active pin */}
      {SUBURB_POINTS.map((p) => (
        <Marker
          key={p.name}
          position={[p.lat, p.lng]}
          icon={focus?.name === p.name ? suburbIconActive : suburbIcon}
        >
          <Tooltip direction="top" offset={[0, -6]} opacity={1}>
            {p.name}
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
}

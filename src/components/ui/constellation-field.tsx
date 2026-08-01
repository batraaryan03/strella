import * as React from "react";
import { cn } from "@/lib/utils";

interface ConstellationFieldProps extends React.SVGAttributes<SVGSVGElement> {
  /** Number of nodes in the network. */
  density?: number;
  seed?: number;
}

/** Deterministic hash → [0,1) from (seed, index, channel). No mutable state. */
function hash01(seed: number, i: number, channel: number) {
  let h = (seed * 374761393 + i * 668265263 + channel * 2246822519) >>> 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}

/**
 * The brand's underlying geometry: a fine constellation line network.
 * Thin 1px lines + precise nodes at very low opacity — blueprint /
 * cartographic texture, never a literal "space theme". Deterministic.
 */
export function ConstellationField({
  density = 14,
  seed = 7,
  className,
  ...props
}: ConstellationFieldProps) {
  const points = React.useMemo(() => {
    const pts: { x: number; y: number }[] = [];
    for (let i = 0; i < density; i++) {
      pts.push({
        x: Math.round(hash01(seed, i, 0) * 1000) / 10,
        y: Math.round(hash01(seed, i, 1) * 1000) / 10,
      });
    }
    return pts;
  }, [density, seed]);

  const edges = React.useMemo(() => {
    const lines: { x1: number; y1: number; x2: number; y2: number }[] = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        if (Math.hypot(dx, dy) < 34) {
          lines.push({
            x1: points[i].x,
            y1: points[i].y,
            x2: points[j].x,
            y2: points[j].y,
          });
        }
      }
    }
    return lines;
  }, [points]);

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeWidth="0.12">
        {edges.map((e, i) => (
          <line key={`l${i}`} {...e} />
        ))}
      </g>
      <g fill="currentColor">
        {points.map((p, i) => (
          <circle key={`p${i}`} cx={p.x} cy={p.y} r="0.28" />
        ))}
      </g>
    </svg>
  );
}

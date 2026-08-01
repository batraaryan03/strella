/**
 * Typings for the vendored React Bits GlassSurface.jsx component
 * (untyped upstream source). Sibling of the .jsx file, so TypeScript
 * uses it as the module's type declaration.
 */
import type { CSSProperties, ReactNode, JSX } from "react";

export type GlassSurfaceChannel = "R" | "G" | "B";

export type GlassSurfaceBlendMode =
  | "normal"
  | "multiply"
  | "screen"
  | "overlay"
  | "darken"
  | "lighten"
  | "color-dodge"
  | "color-burn"
  | "hard-light"
  | "soft-light"
  | "difference"
  | "exclusion"
  | "hue"
  | "saturation"
  | "color"
  | "luminosity";

export interface GlassSurfaceProps {
  children?: ReactNode;
  /** Width of the glass surface (pixels or CSS value like "100%"). */
  width?: number | string;
  /** Height of the glass surface (pixels or CSS value like "auto"). */
  height?: number | string;
  /** Border radius in pixels. */
  borderRadius?: number;
  /** Border width factor for the displacement map. */
  borderWidth?: number;
  /** Brightness percentage for the displacement map. */
  brightness?: number;
  /** Opacity of displacement map elements. */
  opacity?: number;
  /** Input blur amount in pixels. */
  blur?: number;
  /** Output blur (stdDeviation). */
  displace?: number;
  /** Background frost opacity (0-1). */
  backgroundOpacity?: number;
  /** Backdrop filter saturation factor. */
  saturation?: number;
  /** Main displacement scale. */
  distortionScale?: number;
  /** Red channel extra displacement offset. */
  redOffset?: number;
  /** Green channel extra displacement offset. */
  greenOffset?: number;
  /** Blue channel extra displacement offset. */
  blueOffset?: number;
  /** X displacement channel selector. */
  xChannel?: GlassSurfaceChannel;
  /** Y displacement channel selector. */
  yChannel?: GlassSurfaceChannel;
  /** Mix blend mode for the displacement map. */
  mixBlendMode?: GlassSurfaceBlendMode;
  /** Additional CSS class names. */
  className?: string;
  /** Inline styles object. */
  style?: CSSProperties;
}

declare const GlassSurface: (props: GlassSurfaceProps) => JSX.Element;

export default GlassSurface;

/**
 * Typings for the vendored React Bits CircularGallery.jsx component
 * (untyped upstream source, ogl-based). Sibling of the .jsx file so
 * TypeScript uses it as the module's type declaration.
 */
import type { JSX } from "react";

export interface CircularGalleryItem {
  image: string;
  text: string;
}

export interface CircularGalleryProps {
  items?: CircularGalleryItem[];
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  font?: string;
  fontUrl?: string;
  scrollSpeed?: number;
  scrollEase?: number;
  /** Continuous auto-drift in scroll-units/sec (0 = off). */
  autoScroll?: number;
  /** Card size multiplier (< 1 = smaller cards). */
  imageScale?: number;
}

declare const CircularGallery: (props: CircularGalleryProps) => JSX.Element;

export default CircularGallery;

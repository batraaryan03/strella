/**
 * Typings for the vendored React Bits ColorBends.jsx component
 * (untyped upstream source). The untyped `colors = []` default infers
 * `never[]`, which broke typed args in stories — this declaration makes
 * the props explicit so consumers typecheck. Sibling of the .jsx file,
 * so TypeScript uses it as the module's type declaration.
 */
import type { CSSProperties, JSX } from "react";

export interface ColorBendsProps {
  className?: string;
  style?: CSSProperties;
  rotation?: number;
  speed?: number;
  colors?: string[];
  transparent?: boolean;
  autoRotate?: number;
  scale?: number;
  frequency?: number;
  warpStrength?: number;
  mouseInfluence?: number;
  parallax?: number;
  noise?: number;
  iterations?: number;
  intensity?: number;
  bandWidth?: number;
}

declare const ColorBends: (props: ColorBendsProps) => JSX.Element;

export default ColorBends;

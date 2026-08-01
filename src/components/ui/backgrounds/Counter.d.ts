/**
 * Typings for the vendored React Bits Counter.jsx component (untyped
 * upstream source). The untyped defaults infer `fontWeight` as string
 * (rejecting the `{900}` usage example) — this declaration makes the
 * props explicit so consumers typecheck.
 */
import type { CSSProperties, JSX } from "react";

export interface CounterProps {
  value: number;
  fontSize?: number;
  padding?: number;
  places?: (string | number)[];
  gap?: number;
  borderRadius?: number;
  horizontalPadding?: number;
  textColor?: string;
  fontWeight?: string | number;
  containerStyle?: CSSProperties;
  counterStyle?: CSSProperties;
  digitStyle?: CSSProperties;
  gradientHeight?: number;
  gradientFrom?: string;
  gradientTo?: string;
  topGradientStyle?: CSSProperties;
  bottomGradientStyle?: CSSProperties;
}

declare const Counter: (props: CounterProps) => JSX.Element;

export default Counter;

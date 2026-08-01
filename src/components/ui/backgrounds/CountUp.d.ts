/**
 * Typings for the vendored React Bits CountUp.jsx component (untyped
 * upstream source). `onStart`/`onEnd` have no defaults, so the untyped
 * file infers them as REQUIRED — this declaration makes them optional
 * so consumers (stories) typecheck.
 */
import type { JSX } from "react";

export interface CountUpProps {
  to: number;
  from?: number;
  direction?: string;
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

declare const CountUp: (props: CountUpProps) => JSX.Element;

export default CountUp;

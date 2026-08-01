/**
 * Typings for the vendored React Bits SplitText.jsx component (untyped
 * upstream source). `onLetterAnimationComplete` has no default, so the
 * untyped file infers it as REQUIRED — this declaration makes it optional
 * so consumers (stories) typecheck. Sibling of the .jsx file, so
 * TypeScript uses it as the module's type declaration.
 */
import type { JSX } from "react";

export interface SplitTextProps {
  tag?: string;
  text?: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: string;
  from?: Record<string, unknown>;
  to?: Record<string, unknown>;
  threshold?: number;
  rootMargin?: string;
  textAlign?: string;
  onLetterAnimationComplete?: () => void;
}

declare const SplitText: (props: SplitTextProps) => JSX.Element;

export default SplitText;

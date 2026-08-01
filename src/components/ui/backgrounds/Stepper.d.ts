/**
 * Typings for the vendored React Bits Stepper.jsx component (untyped
 * upstream source). `renderStepIndicator` has no default, so the untyped
 * file infers it as REQUIRED — this declaration makes it optional so
 * consumers (stories) typecheck. Also covers the named `Step` export.
 * Sibling of the .jsx file, so TypeScript uses it as the module's type
 * declaration.
 */
import type { JSX, ReactNode } from "react";

export interface StepperProps {
  children: ReactNode;
  initialStep?: number;
  onStepChange?: (step: number) => void;
  onFinalStepCompleted?: () => void;
  stepCircleContainerClassName?: string;
  stepContainerClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
  backButtonProps?: Record<string, unknown>;
  nextButtonProps?: Record<string, unknown>;
  backButtonText?: string;
  nextButtonText?: string;
  disableStepIndicators?: boolean;
  renderStepIndicator?: (args: {
    step: number;
    currentStep: number;
    onStepClick: (clicked: number) => void;
  }) => ReactNode;
}

export declare function Step(props: { children?: ReactNode }): JSX.Element;

declare const Stepper: (props: StepperProps) => JSX.Element;

export default Stepper;

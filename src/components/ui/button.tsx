import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button — user-directed redesign. Pure geometry: no border (not even on
 * hover), no radius, no shadows, no curves, no corners. Professional.
 *
 * Default (primary): olive #636B2F fill with white text/icon. On hover it
 * flips — text turns olive, the fill becomes *pure black* (user: "it
 * should be pure black, that way it will be better").
 */
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 rounded-full", // pill curve — matches the navbar GlassSurface
    "text-[0.875rem] font-semibold tracking-[-0.01em] whitespace-nowrap select-none",
    "transition-[background-color,color] duration-200 ease-out",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive-bright",
    "disabled:opacity-45 disabled:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-olive-btn text-white",
          "hover:bg-[#000] hover:text-olive-bright",
        ],
        secondary: ["bg-surface-2 text-ink", "hover:bg-raised"],
        ghost: ["bg-transparent text-ink-2", "hover:text-olive-bright"],
        outline: [
          "bg-transparent text-ink",
          "hover:bg-white/5 hover:text-olive-bright",
        ],
        light: ["bg-paper text-ink-dark", "hover:bg-white"],
      },
      size: {
        sm: "h-10 px-4 text-[0.8125rem]",
        md: "h-12 px-6",
        lg: "h-[3.5rem] px-8 text-[0.9375rem]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };

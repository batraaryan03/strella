import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-btn)]",
    "text-[0.875rem] font-medium tracking-[-0.01em] whitespace-nowrap select-none",
    "transition-[background-color,border-color,color,box-shadow,transform] duration-150",
    "ease-[cubic-bezier(0.16,1,0.3,1)]",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive",
    "disabled:opacity-45 disabled:pointer-events-none",
    "active:translate-y-px",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-olive text-ink-dark",
          "hover:bg-olive-bright",
          "shadow-[0_1px_2px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.25)]",
          "hover:shadow-[0_4px_14px_var(--color-olive-glow),inset_0_1px_0_rgba(255,255,255,0.3)]",
          "hover:-translate-y-px",
        ],
        secondary: [
          "bg-raised text-ink border border-line",
          "hover:bg-raised-2 hover:border-line-strong",
          "shadow-[0_1px_2px_rgba(0,0,0,0.2)]",
          "hover:-translate-y-px",
        ],
        ghost: [
          "bg-transparent text-ink-2",
          "hover:bg-white/5 hover:text-ink",
        ],
        outline: [
          "bg-transparent text-ink border border-line-strong",
          "hover:border-olive hover:text-olive-bright hover:bg-olive-tint",
        ],
        light: [
          "bg-paper text-ink-dark",
          "hover:bg-white",
          "shadow-[0_1px_2px_rgba(0,0,0,0.15)]",
          "hover:-translate-y-px",
        ],
      },
      size: {
        sm: "h-9 px-3.5 text-[0.8125rem]",
        md: "h-11 px-5",
        lg: "h-[3.25rem] px-7 text-[0.9375rem]",
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

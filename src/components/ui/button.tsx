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
    "active:scale-[0.98]",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-olive text-ink-dark",
          "hover:bg-olive-bright",
          "shadow-[0_1px_2px_rgba(0,0,0,0.3)]",
        ],
        secondary: [
          "bg-surface-2 text-ink",
          "hover:bg-raised",
          "shadow-[inset_0_1px_0_rgba(244,245,240,0.06),0_1px_2px_rgba(0,0,0,0.3)]",
        ],
        ghost: ["bg-transparent text-ink-2", "hover:bg-white/5 hover:text-ink"],
        outline: [
          "bg-transparent text-ink",
          "shadow-[inset_0_0_0_1px_var(--color-line-strong)]",
          "hover:shadow-[inset_0_0_0_1px_var(--color-olive)] hover:text-olive-bright",
        ],
        light: [
          "bg-paper text-ink-dark",
          "hover:bg-white",
          "shadow-[0_1px_2px_rgba(0,0,0,0.25)]",
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

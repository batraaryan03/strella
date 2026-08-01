import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Calm, minimal input — labels sit above, generous spacing,
 * olive focus ring on dark backgrounds.
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-11 w-full rounded-[var(--radius-btn)] border border-line bg-raised/60 px-3.5",
          "text-[0.875rem] text-ink placeholder:text-ink-3",
          "transition-[border-color,background-color,box-shadow] duration-150",
          "hover:border-line-strong",
          "focus:outline-none focus:border-olive/60 focus:ring-2 focus:ring-olive/20 focus:bg-raised",
          "disabled:opacity-45 disabled:pointer-events-none",
          "[color-scheme:dark]",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

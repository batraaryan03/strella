import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Calm, minimal input — borderless tonal field, olive focus ring.
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-13 w-full rounded-[var(--radius-btn)] bg-surface-2 px-4",
          "text-base text-ink placeholder:text-ink-3",
          "shadow-[inset_0_1px_0_rgba(244,245,240,0.05),0_1px_2px_rgba(0,0,0,0.3)]",
          "transition-[background-color,box-shadow] duration-150",
          "hover:bg-raised",
          "focus:outline-none focus:bg-raised focus:ring-2 focus:ring-olive/30",
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

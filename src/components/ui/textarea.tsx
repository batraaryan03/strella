import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-[96px] w-full resize-none rounded-[var(--radius-btn)] bg-surface-2 px-3.5 py-2.5",
          "text-[0.875rem] text-ink placeholder:text-ink-3",
          "shadow-[inset_0_1px_0_rgba(244,245,240,0.05),0_1px_2px_rgba(0,0,0,0.3)]",
          "transition-[background-color,box-shadow] duration-150",
          "hover:bg-raised",
          "focus:outline-none focus:bg-raised focus:ring-2 focus:ring-olive/30",
          "disabled:opacity-45 disabled:pointer-events-none",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };

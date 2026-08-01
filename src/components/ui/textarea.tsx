import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-[96px] w-full resize-none rounded-[var(--radius-btn)] border border-line bg-raised/60 px-3.5 py-2.5",
          "text-[0.875rem] text-ink placeholder:text-ink-3",
          "transition-[border-color,background-color,box-shadow] duration-150",
          "hover:border-line-strong",
          "focus:outline-none focus:border-olive/60 focus:ring-2 focus:ring-olive/20 focus:bg-raised",
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

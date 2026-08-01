import * as React from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Optional index — rendered as mono "01" style waypoint. */
  index?: string;
}

/**
 * Small editorial kicker above section headings.
 * Uses the serif italic accent for the brand's editorial voice.
 */
export function Eyebrow({ className, index, children, ...props }: EyebrowProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-olive",
        className
      )}
      {...props}
    >
      {index && (
        <span className="font-mono text-[0.625rem] tracking-[0.12em] text-ink-3">
          {index}
        </span>
      )}
      <span className="font-serif italic normal-case text-[0.9375rem] tracking-normal text-ink-2">
        {children}
      </span>
    </p>
  );
}

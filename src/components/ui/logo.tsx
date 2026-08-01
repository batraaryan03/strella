import * as React from "react";
import { cn } from "@/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLAnchorElement> {
  /** Compact = wordmark only; default = wordmark + olive subline. */
  compact?: boolean;
  href?: string;
}

/**
 * Stellar — pure typographic wordmark in the grotesque voice.
 * No icon, no mark: the name carries the brand.
 */
export function Logo({ className, compact, href = "/", ...props }: LogoProps) {
  const inner = (
    <span className="flex items-baseline gap-2 leading-none">
      <span className="text-[1.375rem] font-semibold tracking-[-0.03em] text-ink">
        Stellar
      </span>
      {!compact && (
        <span className="font-mono text-[0.625rem] uppercase tracking-[0.24em] text-olive">
          Removals
        </span>
      )}
    </span>
  );

  const classes = cn("flex items-center", className);

  if (href) {
    return (
      <a href={href} className={classes} {...props} aria-label="Stellar Removals home">
        {inner}
      </a>
    );
  }
  return (
    <span className={classes} {...props}>
      {inner}
    </span>
  );
}

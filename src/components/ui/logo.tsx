import * as React from "react";
import { cn } from "@/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLAnchorElement> {
  /** Compact = mark only; default = mark + wordmark. */
  compact?: boolean;
  href?: string;
}

/**
 * Stellar mark — a four-point compass/star geometry that reads as
 * navigation + precision. The brand's constellation DNA, distilled.
 */
export function Logo({ className, compact, href = "/", ...props }: LogoProps) {
  const inner = (
    <>
      <span className="relative grid h-8 w-8 shrink-0 place-items-center">
        <svg
          viewBox="0 0 32 32"
          className="h-8 w-8"
          aria-hidden="true"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1.4">
            {/* 4-point star / compass */}
            <path d="M16 3 L18.6 13.4 L29 16 L18.6 18.6 L16 29 L13.4 18.6 L3 16 L13.4 13.4 Z" />
            {/* diagonal ticks */}
            <path d="M3 3 L29 29 M29 3 L3 29" opacity="0.35" strokeDasharray="2 3" />
          </g>
          <circle cx="16" cy="16" r="2" fill="currentColor" />
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="text-[1.0625rem] font-semibold tracking-[-0.02em] text-ink">
            Stellar
          </span>
          <span className="mt-0.5 font-mono text-[0.5625rem] uppercase tracking-[0.28em] text-olive">
            Removals · MEL
          </span>
        </span>
      )}
    </>
  );

  const classes = cn("flex items-center gap-2.5 text-olive", className);

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

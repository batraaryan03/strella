import * as React from "react";
import { cn } from "@/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLAnchorElement> {
  /** Compact = wordmark only; default = wordmark + mono subline. */
  compact?: boolean;
  href?: string;
}

/**
 * Stellar — pure typographic wordmark. No icon, no mark: the name
 * carries the brand. "Stellar" in the editorial serif with a mono
 * metadata line beneath, per the confirmed design direction.
 */
export function Logo({ className, compact, href = "/", ...props }: LogoProps) {
  const inner = (
    <>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.375rem] font-normal tracking-[-0.01em] text-ink">
          Stellar
        </span>
        {!compact && (
          <span className="mt-1.5 font-mono text-[0.5625rem] uppercase tracking-[0.3em] text-olive">
            Removals · MEL
          </span>
        )}
      </span>
    </>
  );

  const classes = cn("flex items-center text-olive", className);

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

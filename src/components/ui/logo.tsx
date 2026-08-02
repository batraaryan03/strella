import * as React from "react";
import { cn } from "@/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLAnchorElement> {
  /** Compact = wordmark only; default = wordmark + olive subline. */
  compact?: boolean;
  /**
   * Display scale. `sm` fits a slim header; `md` is the default site
   * wordmark; `xl` is the oversized brand moment (hero/footer).
   */
  size?: "sm" | "md" | "xl";
  /** Render on a LIGHT background (white footer): dark ink wordmark. */
  onLight?: boolean;
  href?: string;
}

const SIZES = {
  sm: { word: "text-xl md:text-2xl", sub: "text-[0.625rem]" },
  md: { word: "text-3xl md:text-4xl", sub: "text-[0.6875rem]" },
  xl: { word: "text-5xl md:text-6xl", sub: "text-[0.8125rem]" },
} as const;

/**
 * Stellar — pure typographic wordmark in the grotesque voice.
 * No icon, no mark: the name carries the brand. Oversized by design.
 */
export function Logo({
  className,
  compact,
  size = "md",
  onLight = false,
  href = "/",
  ...props
}: LogoProps) {
  const t = SIZES[size];
  const inner = (
    <span className="flex items-baseline gap-2 leading-none">
      <span
        className={cn(
          "font-semibold tracking-[-0.03em]",
          onLight ? "text-ink-dark" : "text-ink",
          t.word
        )}
      >
        Stellar
      </span>
      {!compact && (
        <span
          className={cn(
            "font-mono uppercase tracking-[0.24em]",
            onLight ? "text-olive-deep" : "text-olive",
            t.sub
          )}
        >
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

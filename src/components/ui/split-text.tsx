"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SplitTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: string;
  /** Reveal on mount vs on scroll. */
  trigger?: "mount" | "scroll";
  /** Delay per word in ms. */
  stagger?: number;
}

/**
 * SplitText — editorial staggered word reveal (React Bits style). Each
 * word is a masked span that slides up with a staggered delay when the
 * block enters the viewport (or immediately on mount). Reduced-motion
 * users see static text instantly. No layout shift (words are inline).
 */
export function SplitText({
  children,
  trigger = "scroll",
  stagger = 60,
  className,
  ...props
}: SplitTextProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [revealed, setRevealed] = React.useState(false);

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = requestAnimationFrame(() => setRevealed(true));
      return () => cancelAnimationFrame(t);
    }
    if (trigger === "mount") {
      const t = requestAnimationFrame(() => setRevealed(true));
      return () => cancelAnimationFrame(t);
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [trigger]);

  const words = children.split(" ");

  return (
    <span ref={ref} className={cn("inline-block", className)} {...props}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom"
        >
          <span
            className={cn(
              "inline-block transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
              revealed ? "translate-y-0 opacity-100" : "translate-y-[0.35em] opacity-0"
            )}
            style={{ transitionDelay: revealed ? `${i * stagger}ms` : "0ms" }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </span>
  );
}

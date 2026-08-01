"use client";

import * as React from "react";

interface CountUpProps {
  /** Numeric target. */
  value: number;
  prefix?: string;
  suffix?: React.ReactNode;
  /** Decimal places (default 0). */
  decimals?: number;
  /** Animation duration in ms (default 1400). */
  duration?: number;
  className?: string;
}

/** Settled display string — the value we land on after the count. */
function settled(value: number, decimals: number) {
  return decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString("en-AU");
}

/**
 * CountUp — animated numerals (React Bits `CountUp` adapted).
 * Ticks 0 → value with an ease-out curve when the element scrolls
 * into view (IntersectionObserver). Renders the final value
 * instantly under `prefers-reduced-motion`. The animated span is
 * aria-hidden; an sr-only span carries the settled value so screen
 * readers announce the result once, not every frame. Pure data.
 */
export function CountUp({
  value,
  prefix = "",
  suffix,
  decimals = 0,
  duration = 1400,
  className,
}: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = React.useState(() =>
    decimals ? value.toFixed(decimals) : "0"
  );

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      // Deferred so the effect body never sets state synchronously.
      const id = requestAnimationFrame(() => setDisplay(settled(value, decimals)));
      return () => cancelAnimationFrame(id);
    }

    let raf = 0;
    let started = false;

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || started) return;
        started = true;
        io.disconnect();

        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 4); // ease-out quart
          setDisplay(settled(value * eased, decimals));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, decimals, duration]);

  return (
    <span className={className}>
      <span aria-hidden="true">
        {prefix}
        {display}
        {suffix}
      </span>
      <span className="sr-only">
        {prefix}
        {settled(value, decimals)}
        {suffix}
      </span>
    </span>
  );
}

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Vertical offset in px. */
  y?: number;
  delay?: number;
  duration?: number;
  stagger?: number;
  /** Animate children individually (staggered). */
  asGroup?: boolean;
  /** Skip the effect entirely (e.g. SSR contexts / reduced motion). */
  disabled?: boolean;
}

let gsapPromise: Promise<typeof import("gsap")> | null = null;
let stPromise: Promise<typeof import("gsap/ScrollTrigger")> | null = null;

function loadGsap() {
  if (!gsapPromise) gsapPromise = import("gsap");
  return gsapPromise;
}
function loadSt() {
  if (!stPromise) stPromise = import("gsap/ScrollTrigger");
  return stPromise;
}

/**
 * ScrollReveal — section-level fade + translate reveal on scroll, driven
 * by GSAP ScrollTrigger. Wraps whole sections (page composition).
 * Headline word-splitting lives in `RevealText` (React Bits). Transform
 * /opacity only; respects prefers-reduced-motion; fails open.
 */
export function ScrollReveal({
  children,
  className,
  y = 28,
  delay = 0,
  duration = 0.8,
  stagger = 0.12,
  asGroup = false,
  disabled = false,
  ...props
}: ScrollRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || disabled) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets: Element[] = asGroup ? Array.from(el.children) : [el];

    // Reduced-motion users: keep content visible, no need to load GSAP.
    if (reduce) return;

    // Hide synchronously BEFORE the async GSAP import resolves,
    // preventing a visible flash-then-hide when GSAP snaps to opacity 0.
    targets.forEach((t) => ((t as HTMLElement).style.opacity = "0"));

    let tween: { kill: () => void } | null = null;
    let killed = false;

    (async () => {
      const [gsapMod, stMod] = await Promise.all([loadGsap(), loadSt()]);
      const gsap = gsapMod.gsap;
      gsap.registerPlugin(stMod.ScrollTrigger);
      if (killed) return;

      tween = gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger: asGroup ? stagger : 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 86%",
            toggleActions: "play none none none",
          },
        }
      );
    })().catch(() => {
      // Fail open: if the dynamic GSAP import rejects (offline, etc.),
      // restore visibility rather than leaving content hidden.
      if (!killed) {
        targets.forEach((t) => ((t as HTMLElement).style.opacity = "1"));
      }
    });

    return () => {
      killed = true;
      tween?.kill();
      loadSt().then((stMod) => {
        stMod.ScrollTrigger.getAll().forEach((t) => {
          if (t.trigger === el) t.kill();
        });
      });
    };
  }, [y, delay, duration, stagger, asGroup, disabled]);

  return (
    <div ref={ref} className={cn(className)} {...props}>
      {children}
    </div>
  );
}

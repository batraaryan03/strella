"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

/**
 * SmoothScroll — GSAP ScrollSmoother (free since 3.13).
 *
 * Wraps all page content in `#smooth-wrapper` > `#smooth-content` and
 * initialises ScrollSmoother via dynamic import. Reduced-motion users
 * get native scroll (no plugin loaded).
 *
 * IMPORTANT — fixed elements must live OUTSIDE this wrapper:
 * ScrollSmoother applies a transform to the content, turning it into a
 * containing block and breaking `position: fixed` descendants. The
 * Header, Toaster, and FloatingQuote are therefore rendered in the
 * root layout as siblings of this component.
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  React.useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let smoother: { kill: () => void } | null = null;
    let killed = false;
    let onLoad = () => {};

    (async () => {
      const [gsapMod, stMod, smMod] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("gsap/ScrollSmoother"),
      ]);
      const gsap = gsapMod.gsap;
      const ScrollTrigger = stMod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger, smMod.ScrollSmoother);
      if (killed) return;

      smoother = smMod.ScrollSmoother.create({
        wrapper: el,
        content: el.firstElementChild as HTMLElement,
        smooth: 1.2,
        effects: true,
        smoothTouch: 0.1,
      });

      // Recalculate after fonts/images settle so any ScrollTriggers
      // created before the smoother existed align to the new scroller.
      onLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onLoad);
      document.fonts?.ready?.then(() => {
        if (!killed) onLoad();
      });
    })();

    return () => {
      killed = true;
      window.removeEventListener("load", onLoad);
      smoother?.kill();
    };
  }, []);

  // The root layout persists across client-side navigations, so the
  // smoother (and its ScrollTriggers) must re-measure when the route
  // changes — otherwise reveals on the next page land offset.
  const prevPath = React.useRef(pathname);
  React.useEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;
    let raf = 0;
    (async () => {
      const stMod = await import("gsap/ScrollTrigger");
      raf = requestAnimationFrame(() => stMod.ScrollTrigger.refresh());
    })();
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return (
    <div ref={wrapperRef} id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}

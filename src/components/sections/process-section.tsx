"use client";

import * as React from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { PROCESS_STEPS } from "@/lib/content";

/**
 * Process — a horizontal guided journey. A thin engineered line
 * routes across the page between waypoints, reinforcing the brand's
 * navigation DNA. Each step is a waypoint node with coordinates.
 */
export default function ProcessSection() {
  const [progress, setProgress] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let last = -1;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress from section entering (bottom) to leaving (top)
      const start = vh * 0.85;
      const end = -vh * 0.25;
      const p = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
      if (Math.abs(p - last) > 0.004) {
        last = p;
        setProgress(p);
      }
    };

    const onScroll = () => {
      if (reduce) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    if (!reduce) {
      measure();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
    }
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="process"
      className="relative scroll-mt-24 border-y border-line bg-surface/40 py-20 md:py-28"
    >
      <div ref={ref} className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          index="03"
          eyebrow="How it works"
          title={
            <>
              A move,{" "}
              <span className="font-serif italic text-olive-bright">routed</span>{" "}
              step by step
            </>
          }
          description="Three simple steps to a stress-free move. Your move manager guides every waypoint from first call to final box."
          align="center"
          className="mb-16 md:mb-24"
        />

        <div className="relative">
          {/* connecting line — engineered route (transform-only) */}
          <div
            className="absolute left-0 right-0 top-[1.375rem] hidden h-px lg:block"
            aria-hidden
          >
            <div className="absolute inset-0 bg-line" />
            <div
              className="absolute inset-y-0 left-0 origin-left bg-gradient-to-r from-olive via-olive-bright to-olive transition-transform duration-150 ease-out"
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>

          <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.num} className="relative flex flex-col">
                {/* waypoint node */}
                <div className="mb-6 flex items-center gap-4">
                  <span className="relative grid h-11 w-11 shrink-0 place-items-center">
                    <svg viewBox="0 0 44 44" className="h-11 w-11" aria-hidden>
                      <circle
                        cx="22"
                        cy="22"
                        r="18"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-line-strong"
                      />
                      <circle
                        cx="22"
                        cy="22"
                        r="4"
                        fill="currentColor"
                        className="text-olive"
                      />
                      <path
                        d="M22 0 V8 M22 36 V44 M0 22 H8 M36 22 H44"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-olive/50"
                      />
                    </svg>
                  </span>
                  <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-ink-3">
                    WP-{step.num} · {step.meta}
                  </span>
                </div>

                <h3 className="text-xl font-medium tracking-[-0.01em] text-ink md:text-[1.375rem]">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[40ch] text-sm leading-[1.7] text-ink-2">
                  {step.desc}
                </p>

                {i < PROCESS_STEPS.length - 1 && (
                  <span
                    className="absolute -right-4 top-[1.375rem] hidden font-mono text-xs text-olive/70 lg:block"
                    aria-hidden
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

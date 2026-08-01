"use client";

import { useEffect, useRef, useMemo, type ReactNode, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type RevealAs = "h1" | "h2" | "h3" | "h4" | "p" | "span";

interface RevealTextProps {
  children: ReactNode;
  /** Heading/type level to render (default h2). Use within any container. */
  as?: RevealAs;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

/**
 * RevealText — the real React Bits scroll reveal, for HEADLINES: splits
 * a string into words and, as the block scrolls through the viewport,
 * un-rotates the container and staggers the words from blurred/faint to
 * sharp/crisp (scrubbed to scroll). Reduced-motion users get static
 * text: the effect exits before GSAP mutates anything.
 */
const RevealText = ({
  children,
  as: Tag = "h2",
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}: RevealTextProps) => {
  const containerRef = useRef<HTMLElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    // Fail open: if the GSAP work throws (offline, import edge case),
    // restore full visibility rather than leaving words at 0.1 opacity.
    const restore = () => {
      el.querySelectorAll<HTMLElement>(".word").forEach((w) => {
        w.style.opacity = "1";
        w.style.filter = "blur(0px)";
      });
    };

    try {
      gsap.fromTo(
        el,
        { transformOrigin: "0% 50%", rotate: baseRotation },
        {
          ease: "none",
          rotate: 0,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom",
            end: rotationEnd,
            scrub: true,
          },
        }
      );

      const wordElements = el.querySelectorAll(".word");

      gsap.fromTo(
        wordElements,
        { opacity: baseOpacity, willChange: "opacity" },
        {
          ease: "none",
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom-=20%",
            end: wordAnimationEnd,
            scrub: true,
          },
        }
      );

      if (enableBlur) {
        gsap.fromTo(
          wordElements,
          { filter: `blur(${blurStrength}px)` },
          {
            ease: "none",
            filter: "blur(0px)",
            stagger: 0.05,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: "top bottom-=20%",
              end: wordAnimationEnd,
              scrub: true,
            },
          }
        );
      }
    } catch {
      // Fail-open: never leave the headline stuck at 0.1 opacity.
      restore();
    }

    return () => {
      // Kill only this element's triggers — never the global list,
      // which would break the smoother / other sections.
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === el) trigger.kill();
      });
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ]);

  return (
    <Tag
      // The polymorphic Tag's ref type varies; the container is only used
      // for GSAP measurement, so a loose HTMLElement ref is safe here.
      ref={containerRef as never}
      className={cn("scroll-reveal", containerClassName)}
    >
      <p className={cn("scroll-reveal-text", textClassName)}>{splitText}</p>
    </Tag>
  );
};

export default RevealText;

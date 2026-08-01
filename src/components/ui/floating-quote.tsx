"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * FloatingQuote — a persistent instant-quote trigger (Framer
 * pattern). Appears after the user scrolls past the hero, stays
 * bottom-right, hides on /book-move (it IS the destination).
 * Live pulse dot + "60s" honesty. Fade/slide in via CSS only.
 */
export function FloatingQuote() {
  const [visible, setVisible] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    if (pathname === "/book-move" || pathname === "/contact") return;
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (pathname === "/book-move" || pathname === "/contact") return null;

  return (
    <a
      href="/book-move"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={cn(
        "fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-surface-2 py-2.5 pl-3.5 pr-4",
        "shadow-[0_18px_44px_-12px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(244,245,240,0.07)]",
        "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:bg-raised hover:shadow-[0_22px_52px_-12px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(244,245,240,0.09)]",
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-olive opacity-60" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-olive" />
      </span>
      <span className="text-[0.8125rem] font-medium text-ink">
        Instant quote
        <span className="ml-1.5 text-ink-3">· 60s</span>
      </span>
      <ArrowRight className="h-3.5 w-3.5 text-olive-bright" aria-hidden />
    </a>
  );
}

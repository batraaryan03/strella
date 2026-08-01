"use client";

import * as React from "react";
import { Phone, CalendarCheck, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { NAV_LINKS, BRAND } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string, isPage?: boolean) => {
    if (isPage || href === "/") return;
    e.preventDefault();
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-canvas/85 backdrop-blur-xl shadow-[0_1px_0_rgba(244,245,240,0.06)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-5 md:px-8">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, "isPage" in link ? link.isPage : undefined)}
              className="rounded-[var(--radius-btn)] px-3.5 py-2 text-[0.8125rem] font-medium text-ink-2 transition-colors duration-150 hover:bg-white/5 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <a
            href={`tel:${BRAND.phone}`}
            className="hidden items-center gap-2 px-3 py-2 text-[0.8125rem] font-medium text-ink-2 transition-colors hover:text-ink md:inline-flex"
          >
            <Phone className="h-4 w-4 text-olive" />
            {BRAND.phoneDisplay}
          </a>
          <a href="/book-move" className="hidden md:block">
            <Button size="sm" className="gap-1.5">
              <CalendarCheck className="h-3.5 w-3.5" />
              Get a Quote
            </Button>
          </a>

          {/* Mobile nav — Sheet (shadcn) */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="grid h-10 w-10 place-items-center rounded-[var(--radius-btn)] text-ink transition-colors hover:bg-white/5 lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader className="mt-10">
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Navigate Stellar Removals.
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href, "isPage" in link ? link.isPage : undefined)}
                      className="rounded-[var(--radius-btn)] px-3 py-2.5 text-sm font-medium text-ink-2 transition-colors hover:bg-white/5 hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-2.5 border-t border-line pt-5">
                <SheetClose asChild>
                  <a href="/book-move">
                    <Button className="w-full" size="sm">
                      <CalendarCheck className="h-3.5 w-3.5" />
                      Get a Quote
                    </Button>
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a href={`tel:${BRAND.phone}`}>
                    <Button variant="secondary" className="w-full" size="sm">
                      <Phone className="h-3.5 w-3.5" />
                      Call Now
                    </Button>
                  </a>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

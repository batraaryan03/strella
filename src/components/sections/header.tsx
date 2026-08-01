"use client";

import * as React from "react";
import { Menu, X, Phone, CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, BRAND } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string, isPage?: boolean) => {    setMenuOpen(false);
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
          ? "border-b border-line bg-canvas/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      {/* hairline accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-olive/60 to-transparent" />

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
              Book a Move
            </Button>
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-[var(--radius-btn)] text-ink transition-colors hover:bg-white/5 lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-line bg-canvas/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-5 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, "isPage" in link ? link.isPage : undefined)}
                className="block rounded-[var(--radius-btn)] px-3 py-2.5 text-sm font-medium text-ink-2 transition-colors hover:bg-white/5 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2.5 pt-3">
              <a href="/book-move" className="flex-1">
                <Button className="w-full" size="sm">
                  <CalendarCheck className="h-3.5 w-3.5" />
                  Book a Move
                </Button>
              </a>
              <a href={`tel:${BRAND.phone}`} className="flex-1">
                <Button variant="secondary" className="w-full" size="sm">
                  <Phone className="h-3.5 w-3.5" />
                  Call Now
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

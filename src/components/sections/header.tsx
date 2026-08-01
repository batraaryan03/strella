"use client";

import * as React from "react";
import { Phone, CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import StaggeredMenu from "@/components/ui/backgrounds/StaggeredMenu";
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

  const menuItems = NAV_LINKS.map((l) => ({
    label: l.label,
    link: l.href,
    ariaLabel: `Go to ${l.label}`,
  }));

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
        <Logo size="md" />

        {/* Desktop nav — bigger, bolder typography */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) =>
                handleNavClick(e, link.href, "isPage" in link ? link.isPage : undefined)
              }
              className="rounded-[var(--radius-btn)] px-4 py-2 text-base font-semibold text-ink-2 transition-colors duration-150 hover:bg-white/5 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${BRAND.phone}`}
            className="hidden items-center gap-2 px-3 py-2 text-base font-semibold text-ink-2 transition-colors hover:text-ink lg:inline-flex"
          >
            <Phone className="h-4 w-4 text-olive" />
            {BRAND.phoneDisplay}
          </a>
          <a href="/book-move" className="hidden lg:block">
            <Button size="md" className="gap-1.5">
              <CalendarCheck className="h-4 w-4" />
              Get a Quote
            </Button>
          </a>
        </div>
      </div>

      {/* Mobile nav — StaggeredMenu (olive, no logo), mobile only */}
      <div className="lg:hidden">
        <StaggeredMenu
          position="right"
          items={menuItems}
          displaySocials={false}
          displayItemNumbering={true}
          menuButtonColor="#f2f3ed"
          openMenuButtonColor="#f2f3ed"
          accentColor="#97a75a"
          colors={["#97A75A", "#636B2F"]}
          isFixed
        />
      </div>
    </header>
  );
}

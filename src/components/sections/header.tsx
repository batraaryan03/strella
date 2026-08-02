"use client";

import * as React from "react";
import { Phone, CalendarCheck } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import GlassSurface from "@/components/ui/backgrounds/GlassSurface";
import StaggeredMenu from "@/components/ui/backgrounds/StaggeredMenu";
import { NAV_LINKS, BRAND } from "@/lib/content";

export default function Header() {
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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      {/* ── Glass navbar — React Bits GlassSurface, glossy + translucent,
             no borders (borderless override). Rounded 0 per user. ── */}
      <div className="h-[4.25rem]">
        <GlassSurface
          width="100%"
          height="100%"
          borderRadius={0}
          borderWidth={0.1}
          brightness={50}
          opacity={0.93}
          blur={12}
          displace={1.1}
          backgroundOpacity={0.12}
          saturation={1}
          distortionScale={20}
          className="glass-surface--borderless"
        >
          <div className="flex h-full w-full items-center justify-between px-5 md:px-8">
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
        </GlassSurface>
      </div>

      {/* Mobile nav — StaggeredMenu (olive, no logo), mobile only.
          Toggle sits on the RIGHT of the bar so it never overlaps the logo. */}
      <div className="lg:hidden">
        <StaggeredMenu
          className="sm-nav-right"
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

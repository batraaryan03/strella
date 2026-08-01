"use client";

import * as React from "react";
import { Phone, CalendarCheck, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import StaggeredMenu from "@/components/ui/backgrounds/StaggeredMenu";
import GlassSurface from "@/components/ui/backgrounds/GlassSurface";
import { NAV_LINKS, BRAND } from "@/lib/content";

/**
 * Header — floating glass pill built on the React Bits GlassSurface
 * (user-directed: "use this for the navbar header"). Rounded-full,
 * centered, never touches the left/right edges. The GlassSurface SVG
 * displacement frost sits over the site-wide Silk. Desktop shows nav +
 * phone + CTA inside the pill; mobile collapses to logo + hamburger,
 * with the pill hamburger controlling the full-screen StaggeredMenu.
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleNavClick = (
    e: React.MouseEvent,
    href: string,
    isPage?: boolean
  ) => {
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
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      {/* ── Floating glass pill — GlassSurface displacement frost.
          z-50 keeps the pill (and its X button) above the open
          full-screen StaggeredMenu panel on mobile. ── */}
      <GlassSurface
        width="100%"
        height="auto"
        borderRadius={999}
        borderWidth={0.1}
        blur={25}
        backgroundOpacity={0.15}
        distortionScale={0}
        className="glass-surface--header relative z-50 w-full max-w-5xl"
      >
        <Logo compact size="sm" className="shrink-0" />

        {/* Desktop nav — bigger, bolder typography. min-w-0 makes it the
            shrinkable element when the pill gets tight; links are nowrap
            so they never wrap into stacked text. Secondary links hide
            below xl so the phone + CTA never overlap on lg screens. */}
        <nav className="hidden min-w-0 items-center gap-1 overflow-hidden lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) =>
                handleNavClick(e, link.href, "isPage" in link ? link.isPage : undefined)
              }
              className={`whitespace-nowrap rounded-full px-3 py-2 text-base font-semibold text-ink-2 transition-colors duration-150 hover:bg-white/5 hover:text-ink xl:px-4 ${
                link.label === "Process" || link.label === "Gallery"
                  ? "hidden xl:inline-flex"
                  : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions — shrink-0 keeps the phone/CTA at natural width; the
            phone number is nowrap so it can never stack digit-by-digit. */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href={`tel:${BRAND.phone}`}
            className="hidden shrink-0 items-center gap-2 whitespace-nowrap px-3 py-2 text-base font-semibold text-ink-2 transition-colors hover:text-ink lg:inline-flex"
          >
            <Phone className="h-4 w-4 shrink-0 text-olive" />
            {BRAND.phoneDisplay}
          </a>
          <a href="/book-move" className="hidden shrink-0 lg:block">
            <Button size="md" className="gap-1.5">
              <CalendarCheck className="h-4 w-4" />
              Get a Quote
            </Button>
          </a>

          {/* Mobile hamburger — owns the StaggeredMenu. onMouseDown
              stopPropagation prevents the menu's document-mousedown
              click-away from firing before the click toggle (which would
              close then instantly reopen the menu). */}
          <button
            type="button"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="grid h-11 w-11 place-items-center rounded-full bg-surface-2 text-ink transition-colors duration-150 hover:bg-raised hover:text-olive-bright lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </GlassSurface>

      {/* Mobile menu — StaggeredMenu (olive, controlled by the pill) */}
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
          open={menuOpen}
          onOpenChange={setMenuOpen}
        />
      </div>
    </header>
  );
}

"use client";

import * as React from "react";
import { Phone, Mail, Clock, MapPin, CalendarCheck } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { BRAND, PHOTO_CREDITS } from "@/lib/content";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#process" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "/contact" },
  { label: "Book a Move", href: "/book-move" },
] as const;

const socials = [
  {
    label: "Instagram",
    href: BRAND.instagram,
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "Facebook",
    href: BRAND.facebook,
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "WhatsApp",
    href: BRAND.whatsapp,
    path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
  },
] as const;

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface/50">
      {/* ── Giant brand typography ── */}
      <div className="pointer-events-none select-none px-2 pt-16 md:pt-20" aria-hidden>
        <p className="whitespace-nowrap text-center text-[clamp(4rem,17vw,15rem)] font-semibold leading-[0.85] tracking-[-0.04em] text-white/[0.035]">
          STELLAR
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-10 md:px-8">
        {/* ── Main columns ── */}
        <div className="grid gap-12 border-b border-line py-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-8">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-[34ch] text-sm leading-[1.7] text-ink-2">
              Melbourne&apos;s precision removalists. Transparent pricing,
              professional crews, and weekend availability — guided moves,
              every time.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink-2 transition-all duration-200 hover:border-olive/50 hover:text-olive-bright"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-5 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-ink-3">
              Navigate
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-ink-2 transition-colors duration-150 hover:text-olive-bright"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-ink-3">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-ink-2">
              <li>
                <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2.5 font-medium text-ink transition-colors hover:text-olive-bright">
                  <Phone className="h-4 w-4 text-olive" />
                  {BRAND.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2.5 transition-colors hover:text-olive-bright">
                  <Mail className="h-4 w-4 text-olive" />
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-olive" />
                <span>{BRAND.hoursWeekday} · {BRAND.hoursWeekend}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-olive" />
                {BRAND.location}
              </li>
            </ul>
          </div>

          {/* Book CTA */}
          <div className="flex flex-col justify-between gap-6">
            <p className="text-sm leading-[1.7] text-ink-2">
              Moving soon? Lock in your crew and your price today.
            </p>
            <a
              href="/book-move"
              className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-btn)] bg-olive px-5 py-3 text-sm font-medium text-ink-dark transition-colors duration-150 hover:bg-olive-bright"
            >
              <CalendarCheck className="h-4 w-4" />
              Book your move
            </a>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-3 md:flex-row">
          <p>© {new Date().getFullYear()} Stellar Removals. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-ink-2">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-ink-2">Terms of Service</a>
          </div>
          <p className="font-mono uppercase tracking-[0.14em]">MEL · AU</p>
        </div>

        {/* ── Photography credits (Unsplash API terms) ── */}
        <div className="border-t border-line/60 py-4">
          <p className="text-center text-[0.6875rem] leading-relaxed text-ink-3">
            Photography by{" "}
            {PHOTO_CREDITS.map((c, i) => (
              <React.Fragment key={c.name}>
                {i > 0 && <span> · </span>}
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-ink-2"
                >
                  {c.name}
                </a>
              </React.Fragment>
            ))}{" "}
            on Unsplash
          </p>
        </div>
      </div>
    </footer>
  );
}

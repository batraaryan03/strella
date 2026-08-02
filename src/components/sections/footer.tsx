"use client";

import { Phone, Mail, Clock, MapPin, CalendarCheck, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/content";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Areas", href: "#areas" },
  { label: "Services", href: "#services" },
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

/**
 * Footer — user-directed rebuild, now COMPLETELY WHITE with black text.
 * No Silk background, no LaserFlow, no dividers — a clean white close
 * to the page. The black→white fade is handled by the transition strip
 * in app/page.tsx just above this footer.
 */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white">
      <div className="relative">
        <div className="mx-auto max-w-7xl px-5 pb-10 md:px-8">
          {/* ── Main columns ── */}
          <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-8">
            {/* Brand */}
            <div>
              <Logo onLight />
              <p className="mt-6 max-w-[34ch] text-lg leading-[1.7] text-ink-dark/70">
                Melbourne&apos;s precision removalists. Transparent pricing,
                professional crews, and weekend availability — guided
                moves, every time.
              </p>
              <div className="mt-7 flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-black/10 text-ink-dark/60 transition-all duration-200 hover:border-olive-deep/50 hover:text-olive-deep"
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
              <h3 className="mb-6 text-[0.9375rem] font-semibold text-ink-dark">
                Navigate
              </h3>
              <ul className="space-y-3 text-base">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-ink-dark/70 transition-colors duration-150 hover:text-olive-deep"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-6 text-[0.9375rem] font-semibold text-ink-dark">
                Contact
              </h3>
              <ul className="space-y-4 text-base text-ink-dark/70">
                <li>
                  <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2.5 font-medium text-ink-dark transition-colors hover:text-olive-deep">
                    <Phone className="h-4 w-4 text-olive-deep" />
                    {BRAND.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2.5 transition-colors hover:text-olive-deep">
                    <Mail className="h-4 w-4 text-olive-deep" />
                    {BRAND.email}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 text-olive-deep" />
                  <span>{BRAND.hoursWeekday} · {BRAND.hoursWeekend}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 text-olive-deep" />
                  {BRAND.location}
                </li>
              </ul>
            </div>

            {/* Book CTA */}
            <div className="flex flex-col justify-between gap-6">
              <p className="text-base leading-[1.7] text-ink-dark/70">
                Moving soon? Lock in your crew and your price today.
              </p>
              <a href="/book-move" className="inline-flex w-fit">
                <Button size="lg">
                  <CalendarCheck className="h-4 w-4" />
                  Book your move
                </Button>
              </a>
            </div>
          </div>

          {/* ── Trust & credentials tier ── */}
          <div className="grid gap-6 py-8 md:grid-cols-2 md:items-center md:gap-8">
            <dl className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm">
              <div className="flex items-center gap-2">
                <dt className="sr-only">Company</dt>
                <dd className="font-medium text-ink-dark">Stellar Removals Pty Ltd</dd>
              </div>
              <div className="flex items-center gap-2">
                <dt className="text-ink-dark/50">ABN</dt>
                <dd className="tnum font-mono text-ink-dark/70">12 345 678 901</dd>
              </div>
              <div className="flex items-center gap-2">
                <dt className="sr-only">Pricing</dt>
                <dd className="flex items-center gap-1.5 text-ink-dark/70">
                  <ShieldCheck className="h-3.5 w-3.5 text-olive-deep" />
                  Transparent per-hour pricing
                </dd>
              </div>
            </dl>
            <div className="flex items-center justify-start gap-5 md:justify-end">
              <a href="#" className="text-sm text-ink-dark/50 transition-colors hover:text-ink-dark/70">Privacy Policy</a>
              <a href="#" className="text-sm text-ink-dark/50 transition-colors hover:text-ink-dark/70">Terms of Service</a>
            </div>
          </div>

          {/* ── Copyright ── */}
          <p className="pb-2 text-center text-sm text-ink-dark/50">
            © {new Date().getFullYear()} Stellar Removals. All rights reserved.
          </p>
        </div>
      </div>

      {/* ── STELLAR — simple bold wordmark ── */}
      <div className="relative z-10 select-none px-2 pb-2" aria-hidden>
        <p className="whitespace-nowrap text-center text-[clamp(4rem,17vw,15rem)] font-black leading-[0.85] tracking-[-0.04em] text-ink-dark/[0.12]">
          STELLAR
        </p>
      </div>

      {/* ── Truck video — full-bleed auto-looping background at the very end ── */}
      <div className="relative h-64 w-full overflow-hidden md:h-96">
        <video
          src="/White_truck_driving_on_road_202608021508_04.mp4"
          poster="/White_truck_on_road_202608021459.jpeg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden
          className="h-full w-full object-cover"
        />
        {/* Soft white fade at the top — blends the video into the white footer */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b from-white to-transparent"
        />
      </div>
    </footer>
  );
}

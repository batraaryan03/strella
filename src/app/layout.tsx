import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Instrument_Serif, Geist_Mono } from "next/font/google";
import Header from "@/components/sections/header";
import SmoothScroll from "@/components/ui/smooth-scroll";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { FloatingQuote } from "@/components/ui/floating-quote";
import { NoiseTexture } from "@/components/ui/noise-texture";
import HyperspeedHomepage from "@/components/ui/backgrounds/hyperspeed-homepage";
import "./globals.css";

/* Typography (user-directed upgrade): Instrument Sans for UI/body,
   Instrument Serif 400 for display headlines (the editorial serif
   accent), Geist Mono retained for data. */
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0c0a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://stellarremovals.com.au"),
  title: "Stellar Removals — Melbourne's Precision Removalists",
  description:
    "Melbourne local movers and removalists. Transparent hourly pricing, same-day & weekend availability, fully insured. Rated 5★ by Melbourne locals. Get a free quote in 60 seconds.",
  keywords:
    "Melbourne movers, local movers Melbourne, removalists Melbourne, weekend movers, same-day movers, furniture movers Melbourne, house moving Melbourne, office relocation Melbourne",
  openGraph: {
    title: "Stellar Removals",
    description:
      "Melbourne local movers and removalists. Transparent pricing, same-day & weekend availability.",
    siteName: "Stellar Removals",
    locale: "en_AU",
    type: "website",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stellar Removals",
    description: "Melbourne local movers and removalists.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        {/* React Bits Hyperspeed as the homepage backdrop (olive-tuned
            "Neon Waves", client-only WebGL). Renders only on `/` — placed
            BEFORE the grain so the NoiseTexture film grain sits on top.
            Skipped entirely for reduced-motion users. */}
        <HyperspeedHomepage />

        {/* Olive-tinted film grain across the whole canvas (real Magic
            UI NoiseTexture, brand-tuned). Sits under content. */}
        <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
          <NoiseTexture
            className="size-full opacity-[0.05]"
            frequency={0.7}
            octaves={3}
            noiseOpacity={1}
          />
        </div>

        {/* Fixed elements live OUTSIDE the smooth wrapper (Header,
            Toaster, FloatingQuote) — ScrollSmoother transforms the
            content, which breaks position:fixed descendants. */}
        <Header />
        <SmoothScroll>
          <TooltipProvider delayDuration={300}>
            {children}
          </TooltipProvider>
        </SmoothScroll>
        <Toaster />
        <FloatingQuote />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Instrument_Serif, Geist_Mono } from "next/font/google";
import Header from "@/components/sections/header";
import GlassCursor from "@/components/ui/glass-cursor";
import { NoiseTexture } from "@/components/ui/noise-texture";
import GradualBlur from "@/components/ui/backgrounds/GradualBlur";
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
        {/* Olive-tinted film grain across the whole canvas (real Magic
            UI NoiseTexture, brand-tuned, lighter olive per directive).
            Sits under content. */}
        <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
          <NoiseTexture
            className="size-full opacity-[0.05]"
            frequency={0.7}
            octaves={3}
            noiseOpacity={1}
          />
        </div>

        <Header />

        {children}

        {/* GradualBlur - kept for the ENTIRE site, performance-native:
            low div count, no animation, pointer-transparent, fixed
            bottom veil so the gradual fade is always present. */}
        <GradualBlur
          position="bottom"
          target="page"
          height="10rem"
          strength={1}
          divCount={3}
          opacity={0.5}
          animated={false}
          zIndex={1}
        />

        {/* FluidGlass lens as the pointer (desktop fine-pointer only) */}
        {/* <GlassCursor /> */}
      </body>
    </html>
  );
}

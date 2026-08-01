import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        {children}
      </body>
    </html>
  );
}

import HeroSection from "@/components/sections/hero-section";
import ReviewsSection from "@/components/sections/reviews-section";
import PricingSection from "@/components/sections/pricing-section";
import GallerySection from "@/components/sections/gallery-section";
import ServiceAreas from "@/components/sections/service-areas";
import ServicesSection from "@/components/sections/services-section";
import MovingTips from "@/components/sections/moving-tips";
import QuoteWizard from "@/components/sections/quote-wizard";
import Footer from "@/components/sections/footer";

/**
 * Home — section order per the user-directed rebuild:
 * Hero → Reviews marquee → Pricing (Hyperspeed roller-coaster bg)
 * → Gallery (auto-revolving) → Service areas (circular map) →
 * Moving services (3-col) → FAQ → Contact form → Footer.
 *
 * TrustRibbon, ProcessSection ("how it works") and FinalCta are
 * removed from the homepage per the latest sequence. GradualBlur
 * fixed veil dropped for mobile performance (90% mobile users).
 */
export default function Home() {
  return (
    <>
      <main className="flex-1">
        <HeroSection />
        <ReviewsSection />
        <PricingSection />
        <GallerySection />
        <ServiceAreas />
        <ServicesSection />
        <MovingTips />
        <QuoteWizard />
      </main>
      <Footer />
    </>
  );
}

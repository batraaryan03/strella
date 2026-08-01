import HeroSection from "@/components/sections/hero-section";
import TrustRibbon from "@/components/sections/trust-ribbon";
import QuoteWizard from "@/components/sections/quote-wizard";
import ServicesSection from "@/components/sections/services-section";
import ProcessSection from "@/components/sections/process-section";
import ReviewsSection from "@/components/sections/reviews-section";
import ServiceAreas from "@/components/sections/service-areas";
import PricingSection from "@/components/sections/pricing-section";
import GallerySection from "@/components/sections/gallery-section";
import MovingTips from "@/components/sections/moving-tips";
import FinalCta from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

/**
 * Home — section order per the user-directed rebuild:
 * Hero (ColorBends field over Silk) → Trust ribbon → Quote wizard →
 * Services → Process (simple steps) → Reviews → Service areas (big map)
 * → Pricing → Gallery (CircularGallery) → FAQ → Final CTA → Footer.
 *
 * WhyChooseUs is removed (user: "completely remove it"). GradualBlur
 * is removed too — the persistent fixed blur was a performance
 * liability on mobile, and the site-wide Silk background replaces it.
 */
export default function Home() {
  return (
    <>
      <main className="flex-1">
        <HeroSection />
        <TrustRibbon />
        <QuoteWizard />
        <ServicesSection />
        <ProcessSection />
        <ReviewsSection />
        <ServiceAreas />
        <PricingSection />
        <GallerySection />
        <MovingTips />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

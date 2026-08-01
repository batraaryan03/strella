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
import GradualBlur from "@/components/ui/backgrounds/GradualBlur";

/**
 * Home — section order per the user-directed rebuild:
 * Hero (Hyperspeed highway) → Trust ribbon → Quote wizard →
 * Services → Process (MagicBento) → Reviews → Service areas (big map)
 * → Pricing → Gallery (DomeGallery) → FAQ → Final CTA → Footer.
 *
 * WhyChooseUs is removed (user: "completely remove it"). A fixed
 * GradualBlur veil sits at the bottom of the viewport across the
 * whole homepage — always present as you scroll.
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

      {/* GradualBlur — persistent bottom veil over the entire homepage */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 bottom-0 z-[30] h-56"
      >
        <GradualBlur
          target="parent"
          position="bottom"
          height="10rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential={true}
          opacity={1}
        />
      </div>
    </>
  );
}

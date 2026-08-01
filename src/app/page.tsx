import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero-section";
import TrustRibbon from "@/components/sections/trust-ribbon";
import QuoteWizard from "@/components/sections/quote-wizard";
import ServicesSection from "@/components/sections/services-section";
import ProcessSection from "@/components/sections/process-section";
import WhyChooseUs from "@/components/sections/why-choose-us";
import ReviewsSection from "@/components/sections/reviews-section";
import ServiceAreas from "@/components/sections/service-areas";
import PricingSection from "@/components/sections/pricing-section";
import GallerySection from "@/components/sections/gallery-section";
import MovingTips from "@/components/sections/moving-tips";
import FinalCta from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustRibbon />

        <QuoteWizard />

        <ScrollReveal>
          <ServicesSection />
        </ScrollReveal>

        <ProcessSection />

        <ScrollReveal>
          <WhyChooseUs />
        </ScrollReveal>

        <ReviewsSection />

        <ScrollReveal>
          <ServiceAreas />
        </ScrollReveal>

        <ScrollReveal>
          <PricingSection />
        </ScrollReveal>

        <ScrollReveal>
          <GallerySection />
        </ScrollReveal>

        <MovingTips />

        <ScrollReveal>
          <FinalCta />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}

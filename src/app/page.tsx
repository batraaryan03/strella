import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero-section";
import TrustRibbon from "@/components/sections/trust-ribbon";
import ServicesSection from "@/components/sections/services-section";
import ProcessSection from "@/components/sections/process-section";
import PricingSection from "@/components/sections/pricing-section";
import WhyChooseUs from "@/components/sections/why-choose-us";
import ServiceAreas from "@/components/sections/service-areas";
import ReviewsSection from "@/components/sections/reviews-section";
import GallerySection from "@/components/sections/gallery-section";
import MovingTips from "@/components/sections/moving-tips";
import FinalCta from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";
import BookingForm from "@/components/sections/booking-form";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustRibbon />

        <ScrollReveal>
          <ServicesSection />
        </ScrollReveal>

        <ProcessSection />

        <ScrollReveal>
          <PricingSection />
        </ScrollReveal>

        <WhyChooseUs />

        <ScrollReveal>
          <ServiceAreas />
        </ScrollReveal>

        <ReviewsSection />

        <ScrollReveal>
          <GallerySection />
        </ScrollReveal>

        <MovingTips />

        <ScrollReveal>
          <FinalCta />
        </ScrollReveal>

        {/* Detailed booking — anchored as #contact */}
        <section id="contact" className="scroll-mt-24 border-t border-line py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <ScrollReveal asGroup stagger={0.1}>
              <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
                <div className="flex flex-col items-start">
                  <p className="flex items-center gap-3 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-olive">
                    <span className="font-mono text-[0.625rem] tracking-[0.12em] text-ink-3">09</span>
                    <span className="font-serif italic normal-case text-[0.9375rem] tracking-normal text-ink-2">
                      Lock it in
                    </span>
                  </p>
                  <h2 className="mt-5 text-balance text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.03em] text-ink">
                    Ready to lock in your{" "}
                    <span className="font-serif italic text-olive-bright">move?</span>
                  </h2>
                  <p className="mt-5 max-w-[46ch] text-base leading-[1.7] text-ink-2">
                    Provide your details below and our move manager will confirm
                    your booking within 60 seconds. No deposit required.
                  </p>
                  <ul className="mt-8 space-y-3 text-sm text-ink-2">
                    {[
                      "Fixed hourly pricing, confirmed upfront",
                      "Cancel or reschedule free up to 24h before",
                      "$20M transit insurance on every move",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <span className="h-1 w-1 rounded-full bg-olive" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <BookingForm />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

"use client";

/**
 * Services — editorial index list (user-directed: no cards, no images,
 * no icons, no numerals). Each service is a full-width row split by a
 * hairline, with a giant bold title on the left and the description on
 * the right. Hover: a soft olive wash across the row + the title
 * brightens and nudges right. Borderless tonal zoning — the design law.
 */
const services = [
  {
    title: "Local House Moves",
    desc: "Complete residential moving services across Melbourne. We handle everything from small apartments to large family homes with care and professionalism.",
  },
  {
    title: "Apartment Moves",
    desc: "Specialised in apartment and unit relocations. We navigate stairs, elevators, and tight spaces with ease to ensure a smooth move.",
  },
  {
    title: "Office Relocations",
    desc: "Professional office moving services that minimise downtime. We handle furniture, equipment, and documents with efficiency and care.",
  },
  {
    title: "Packing & Unpacking",
    desc: "Full packing services available with quality materials. We pack, move, and unpack your belongings, saving you time and stress.",
  },
  {
    title: "Furniture Assembly",
    desc: "Expert furniture disassembly and reassembly included. We handle complex furniture pieces to ensure safe transport and proper setup.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative scroll-mt-24 overflow-hidden bg-canvas py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive">
            What We Offer
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-ink">
            Our Moving Services
          </h2>
          <p className="mt-5 text-base leading-[1.7] text-ink-2 md:text-lg">
            Moving house or office in Melbourne? We&apos;ve got the crew,
            the truck, and the care to make it easy.
          </p>
        </div>

        {/* Editorial index — hairline rows, no cards */}
        <ul className="mt-14 md:mt-20">
          {services.map((s) => (
            <li
              key={s.title}
              className="group grid gap-3 border-t border-line py-9 transition-colors duration-200 hover:bg-olive-tint/50 first:border-t-0 md:grid-cols-[0.85fr_1.15fr] md:items-baseline md:gap-16 md:py-12 lg:py-14"
            >
              <h3 className="text-[clamp(1.75rem,3.4vw,2.75rem)] font-bold leading-[1.05] tracking-[-0.02em] text-ink transition-all duration-200 ease-out group-hover:translate-x-1.5 group-hover:text-olive-bright">
                {s.title}
              </h3>
              <p className="max-w-[54ch] text-base leading-[1.7] text-ink-2 transition-colors duration-200 group-hover:text-ink md:text-lg">
                {s.desc}
              </p>
            </li>
          ))}
        </ul>

        {/* Closing line — text CTA, no card */}
        <div className="mt-6 border-t border-line py-8 md:py-10">
          <p className="text-base leading-[1.7] text-ink-2 md:text-lg">
            Not sure which service you need?{" "}
            <a
              href="#quote"
              className="font-semibold text-olive-bright underline-offset-4 transition-colors duration-150 hover:text-olive hover:underline"
            >
              Get a free quote
            </a>{" "}
            and we&apos;ll work it out together.
          </p>
        </div>
      </div>
    </section>
  );
}

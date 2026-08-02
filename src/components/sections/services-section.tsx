"use client";

/**
 * Services — clean 3-column card layout (weekend-movers style),
 * blended with the Stellar design system. User-directed: real photos
 * fully visible, big text, NO icons, no index numerals, no hover
 * border — just a quiet image zoom. Generous spacing on mobile &
 * desktop. No 3D truck model.
 */
const services = [
  {
    title: "Local House Moves",
    desc: "Complete residential moving services across Melbourne. We handle everything from small apartments to large family homes with care and professionalism.",
    img: "/services/01-local-house-moves.png",
  },
  {
    title: "Apartment Moves",
    desc: "Specialised in apartment and unit relocations. We navigate stairs, elevators, and tight spaces with ease to ensure a smooth move.",
    img: "/services/02-apartment-moves.png",
  },
  {
    title: "Office Relocations",
    desc: "Professional office moving services that minimise downtime. We handle furniture, equipment, and documents with efficiency and care.",
    img: "/services/03-office-relocations.png",
  },
  {
    title: "Packing & Unpacking",
    desc: "Full packing services available with quality materials. We pack, move, and unpack your belongings, saving you time and stress.",
    img: "/services/04-packing-unpacking.png",
  },
  {
    title: "Furniture Assembly",
    desc: "Expert furniture disassembly and reassembly included. We handle complex furniture pieces to ensure safe transport and proper setup.",
    img: "/services/05-furniture-assembly.png",
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

        {/* Cards — 3 col on desktop, stacked on mobile, generous spacing */}
        <div className="mt-14 grid gap-x-8 gap-y-14 md:mt-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-16">
          {services.map((s) => (
            <article key={s.title} className="group flex flex-col">
              <div className="relative overflow-hidden rounded-[var(--radius-card)]">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  className="aspect-video w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <h3 className="mt-6 text-2xl font-bold leading-tight tracking-[-0.01em] text-ink transition-colors duration-200 group-hover:text-olive-bright md:text-3xl">
                {s.title}
              </h3>
              <p className="mt-4 text-base leading-[1.7] text-ink-2 md:text-lg">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

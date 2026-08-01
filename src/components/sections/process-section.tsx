"use client";

import * as React from "react";
import MagicBento from "@/components/ui/backgrounds/MagicBento";

/** Process cards — the six Stellar "how it works" moments. */
const PROCESS_CARDS = [
  {
    color: "#10120A",
    title: "Request your move",
    description: "Tell us the route and the load in under two minutes.",
    label: "01 · 2 min",
  },
  {
    color: "#10120A",
    title: "Receive a fixed quote",
    description: "Transparent, no-hidden-fees pricing confirmed on the spot.",
    label: "02 · 60 sec",
  },
  {
    color: "#10120A",
    title: "Crew arrives on time",
    description: "Police-checked movers with the truck, shoes off, on schedule.",
    label: "03 · on time",
  },
  {
    color: "#10120A",
    title: "Careful packing",
    description: "Every item wrapped and secured with pro-grade materials.",
    label: "04 · protected",
  },
  {
    color: "#10120A",
    title: "We execute the move",
    description: "Belongings loaded, driven and unloaded exactly as left.",
    label: "05 · precise",
  },
  {
    color: "#10120A",
    title: "Unpack & settle in",
    description: "Optional unpacking and furniture assembly to finish the job.",
    label: "06 · done",
  },
];

/**
 * Process — how it works, rendered as the olive React Bits MagicBento
 * (spotlight + border glow + tilt + magnetism). Stellar-branded cards.
 */
export default function ProcessSection() {
  return (
    <section id="process" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive">
            How it works
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-ink">
            A move, routed step by step
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-base leading-[1.7] text-ink-2 md:text-lg">
            Six simple moments to a stress-free move — guided by your move
            manager from first call to final box.
          </p>
        </div>

        <div className="mt-14">
          <MagicBento
            textAutoHide={true}
            enableStars={false}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={false}
            spotlightRadius={300}
            particleCount={12}
            glowColor="99, 107, 47"
            cards={PROCESS_CARDS}
          />
        </div>
      </div>
    </section>
  );
}

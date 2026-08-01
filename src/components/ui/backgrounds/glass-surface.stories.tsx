import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import GlassSurface from "./GlassSurface";

const meta: Meta<typeof GlassSurface> = {
  title: "Backgrounds/GlassSurface",
  component: GlassSurface,
  parameters: {
    layout: "padded",
    backgrounds: { default: "canvas" },
  },
  tags: ["autodocs"],
};

export default meta;

/** Stock usage — a plain glass panel over the canvas. */
export const Default: StoryObj = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center p-12">
      <GlassSurface width={360} height={200} borderRadius={24} backgroundOpacity={0.3} saturation={1.1}>
        <h3 className="text-xl font-semibold text-[#f2f3ed]">Glass surface</h3>
        <p className="mt-2 max-w-[28ch] text-center text-sm text-[#a6ab9e]">
          Frosted backdrop with per-channel chromatic displacement.
        </p>
      </GlassSurface>
    </div>
  ),
};

/** Header pill usage — the floating nav, space-between layout. */
export const HeaderPill: StoryObj = {
  render: () => (
    <div className="flex min-h-64 items-start justify-center bg-[radial-gradient(circle_at_20%_20%,rgba(151,167,90,0.35),transparent_55%)] p-12">
      <GlassSurface
        width="100%"
        height="auto"
        borderRadius={999}
        borderWidth={0.08}
        brightness={48}
        opacity={0.9}
        blur={9}
        backgroundOpacity={0.32}
        saturation={1.1}
        distortionScale={-150}
        greenOffset={12}
        blueOffset={22}
        className="glass-surface--header max-w-2xl"
      >
        <span className="text-lg font-semibold tracking-[-0.03em] text-[#f2f3ed]">
          Stellar
        </span>
        <span className="hidden text-sm text-[#a6ab9e] sm:block">
          Services · Pricing · Reviews
        </span>
        <span className="rounded-none bg-[#636b2f] px-4 py-2 text-sm font-semibold text-white">
          Get a Quote
        </span>
      </GlassSurface>
    </div>
  ),
};

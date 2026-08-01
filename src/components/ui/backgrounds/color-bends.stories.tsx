import { Meta, StoryObj } from "@storybook/nextjs-vite";
import ColorBends from "./ColorBends";

const meta: Meta<typeof ColorBends> = {
  title: "Backgrounds/ColorBends",
  component: ColorBends,
  parameters: { layout: "centered", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof ColorBends>;

/**
 * React Bits ColorBends — layered colour fields that bend and warp
 * (THREE shader). Exact stock look from the docs usage example.
 */
export const Default: Story = {
  render: () => (
    <div
      className="relative overflow-hidden rounded-[var(--radius-lg)] border border-line"
      style={{ width: 640, height: 640 }}
    >
      <ColorBends
        rotation={90}
        speed={0.2}
        colors={["#5227FF", "#FF9FFC", "#7cff67", "#98A869"]}
        transparent
        autoRotate={1}
        scale={1.6}
        frequency={1}
        warpStrength={1}
        mouseInfluence={1}
        parallax={0.5}
        noise={0}
        iterations={1}
        intensity={0.9}
        bandWidth={5}
      />
    </div>
  ),
};

/** Brand-tuned — the anaconda-olive + charcoal palette. */
export const Olive: Story = {
  render: () => (
    <div
      className="relative overflow-hidden rounded-[var(--radius-lg)] border border-line"
      style={{ width: 640, height: 640 }}
    >
      <ColorBends
        rotation={90}
        speed={0.2}
        colors={["#0a0b08", "#556b2f", "#97a75a", "#23271a"]}
        transparent
        autoRotate={1}
        scale={1.6}
        frequency={1}
        warpStrength={1}
        mouseInfluence={1}
        parallax={0.5}
        noise={0.15}
        iterations={1}
        intensity={0.9}
        bandWidth={5}
      />
    </div>
  ),
};

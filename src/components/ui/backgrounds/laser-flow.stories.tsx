import { Meta, StoryObj } from "@storybook/nextjs-vite";
import LaserFlow from "./LaserFlow";

const meta: Meta<typeof LaserFlow> = {
  title: "Backgrounds/LaserFlow",
  component: LaserFlow,
  parameters: { layout: "centered", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof LaserFlow>;

/**
 * React Bits LaserFlow — dynamic laser light flowing onto a surface
 * (THREE shader). Brand-tuned to olive (`#636B2F`).
 */
export const Olive: Story = {
  args: {
    color: "#636B2F",
    wispDensity: 1.5,
    flowSpeed: 0.3,
    verticalSizing: 1.5,
    horizontalSizing: 3,
    fogIntensity: 0.5,
    fogScale: 0.1,
    wispSpeed: 10,
    wispIntensity: 8,
    flowStrength: 0.4,
    decay: 1.8,
    horizontalBeamOffset: 0,
    verticalBeamOffset: -0.5,
  },
  render: (args) => (
    <div
      className="relative overflow-hidden rounded-[var(--radius-lg)] border border-line"
      style={{ width: 640, height: 640 }}
    >
      <LaserFlow {...args} />
    </div>
  ),
};

import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Silk from "./Silk";

const meta: Meta<typeof Silk> = {
  title: "Backgrounds/Silk",
  component: Silk,
  parameters: { layout: "centered", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof Silk>;

/**
 * React Bits Silk — flowing silk texture (r3f shader). The color is
 * already the brand anaconda-olive (`#556b2f`).
 */
export const Default: Story = {
  render: () => (
    <div
      className="relative overflow-hidden rounded-[var(--radius-lg)] border border-line"
      style={{ width: 640, height: 640 }}
    >
      <Silk speed={4.5} scale={1.1} color="#556b2f" noiseIntensity={3.5} rotation={0} />
    </div>
  ),
};

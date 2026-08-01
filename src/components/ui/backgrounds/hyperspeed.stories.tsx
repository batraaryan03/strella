import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Hyperspeed from "./Hyperspeed";
import { hyperspeedPresets } from "./HyperSpeedPresets";

const meta: Meta<typeof Hyperspeed> = {
  title: "Backgrounds/Hyperspeed",
  component: Hyperspeed,
  parameters: { layout: "centered", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof Hyperspeed>;

/** The exact "Neon Waves" preset (hyperspeedPresets.six). */
export const NeonWaves: Story = {
  render: () => (
    <div
      className="relative overflow-hidden rounded-[var(--radius-lg)] border border-line"
      style={{ width: 640, height: 640 }}
    >
      <Hyperspeed effectOptions={hyperspeedPresets.six} />
    </div>
  ),
};

/** Default effect options (neon too — the component's stock look). */
export const Default: Story = {
  render: () => (
    <div
      className="relative overflow-hidden rounded-[var(--radius-lg)] border border-line"
      style={{ width: 640, height: 640 }}
    >
      <Hyperspeed />
    </div>
  ),
};

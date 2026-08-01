import { Meta, StoryObj } from "@storybook/nextjs-vite";
import CountUp from "./CountUp";

const meta: Meta<typeof CountUp> = {
  title: "Backgrounds/CountUp",
  component: CountUp,
  parameters: { layout: "centered", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof CountUp>;

/** Exact stock look from the docs usage example. */
export const Default: Story = {
  render: () => (
    <div className="flex min-h-[240px] items-center justify-center rounded-[var(--radius-lg)] border border-line bg-surface px-10 py-14">
      <CountUp from={0} to={100} separator="," direction="up" duration={1} className="font-mono text-7xl text-ink" />
    </div>
  ),
};

/** Monetary — the trust-ribbon style count (thousands separator, olive). */
export const Monetary: Story = {
  render: () => (
    <div className="flex min-h-[240px] items-center justify-center rounded-[var(--radius-lg)] border border-line bg-surface px-10 py-14">
      <CountUp from={0} to={5000} separator="," duration={1.8} className="font-mono text-6xl text-olive-bright" />
    </div>
  ),
};

import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CountUp } from "./count-up";

const meta: Meta<typeof CountUp> = {
  title: "Primitives/CountUp",
  component: CountUp,
  parameters: { layout: "padded", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof CountUp>;

export const Default: Story = {
  render: () => (
    <div className="space-y-6">
      <p className="font-mono text-4xl">
        <CountUp value={5000} suffix="+" />
      </p>
      <p className="font-mono text-4xl">
        <CountUp value={4.9} decimals={1} suffix={<span className="text-olive">★</span>} />
      </p>
      <p className="font-mono text-4xl">
        <CountUp value={20} prefix="$" suffix={<span className="text-olive">M</span>} />
      </p>
    </div>
  ),
};

export const Slow: Story = {
  render: () => (
    <p className="font-mono text-4xl">
      <CountUp value={2300} suffix="+" duration={2600} />
    </p>
  ),
};

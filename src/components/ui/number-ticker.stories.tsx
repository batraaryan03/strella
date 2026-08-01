import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { NumberTicker } from "./number-ticker";

const meta: Meta<typeof NumberTicker> = {
  title: "Data/NumberTicker",
  component: NumberTicker,
  parameters: { layout: "centered", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof NumberTicker>;

export const Whole: Story = {
  args: { value: 5000, className: "font-mono text-4xl text-ink" },
};

export const Decimal: Story = {
  args: {
    value: 4.9,
    decimalPlaces: 1,
    className: "font-mono text-4xl text-ink",
  },
};

import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FloatingQuote } from "./floating-quote";

const meta: Meta<typeof FloatingQuote> = {
  title: "Primitives/FloatingQuote",
  component: FloatingQuote,
  parameters: { layout: "padded", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof FloatingQuote>;

export const Default: Story = {
  render: () => (
    <div className="flex min-h-[60vh] items-end justify-end pb-6 pr-6">
      <FloatingQuote />
    </div>
  ),
};

import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Highlighter } from "./highlighter";

const meta: Meta<typeof Highlighter> = {
  title: "Typography/Highlighter",
  component: Highlighter,
  parameters: { layout: "padded", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof Highlighter>;

export const Highlight: Story = {
  args: { action: "highlight", color: "#97a75a", isView: true },
  render: (args) => (
    <div className="flex min-h-[120vh] items-center justify-center">
      <p className="max-w-xl font-serif text-3xl leading-snug text-ink">
        Moving is about{" "}
        <Highlighter {...args}>precision, trust, and care</Highlighter> — from
        the first call to the last box.
      </p>
    </div>
  ),
};

export const Underline: Story = {
  args: { action: "underline", color: "#b3c275", iterations: 1, isView: true },
  render: (args) => (
    <div className="flex min-h-[120vh] items-center justify-center">
      <p className="max-w-xl text-lg leading-relaxed text-ink-2">
        Every quote is{" "}
        <Highlighter {...args}>transparent, hourly, no surprises</Highlighter>.
      </p>
    </div>
  ),
};

import { Meta, StoryObj } from "@storybook/nextjs-vite";
import RevealText from "./reveal-text";

const meta: Meta<typeof RevealText> = {
  title: "Motion/RevealText",
  component: RevealText,
  parameters: {
    layout: "padded",
    backgrounds: { default: "canvas" },
  },
};

export default meta;
type Story = StoryObj<typeof RevealText>;

export const WordSplit: Story = {
  args: {
    children: "Your move, guided by precision.",
    enableBlur: true,
    baseRotation: 2,
    blurStrength: 5,
  },
  render: (args) => (
    <div className="flex min-h-[200vh] flex-col justify-center">
      <RevealText
        {...args}
        containerClassName="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-[-0.02em] text-ink"
      />
    </div>
  ),
};

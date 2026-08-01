import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SplitText } from "./split-text";

const meta: Meta<typeof SplitText> = {
  title: "Typography/SplitText",
  component: SplitText,
  parameters: { layout: "padded", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof SplitText>;

export const Scroll: Story = {
  args: { trigger: "scroll", stagger: 60 },
  render: (args) => (
    <div className="flex min-h-[160vh] items-center">
      <p className="max-w-3xl font-serif text-5xl font-normal leading-tight tracking-[-0.02em] text-ink">
        <SplitText {...args}>Your move, guided by precision.</SplitText>
      </p>
    </div>
  ),
};

export const Mount: Story = {
  args: { trigger: "mount", stagger: 45 },
  render: (args) => (
    <p className="max-w-3xl font-serif text-5xl font-normal leading-tight tracking-[-0.02em] text-ink">
      <SplitText {...args}>Your move, guided by precision.</SplitText>
    </p>
  ),
};

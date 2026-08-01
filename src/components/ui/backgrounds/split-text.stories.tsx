import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import SplitText from "./SplitText";

const meta: Meta<typeof SplitText> = {
  title: "Backgrounds/SplitText",
  component: SplitText,
  parameters: {
    layout: "padded",
    backgrounds: { default: "canvas" },
  },
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center p-12">
      <SplitText
        text="Guided moves, plotted to the point."
        className="text-4xl font-semibold"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />
    </div>
  ),
};

export const Words: StoryObj = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center p-12">
      <SplitText
        text="Stellar Removals — Melbourne"
        className="text-5xl font-medium tracking-tight text-[#b3c275]"
        delay={120}
        duration={0.5}
        ease="power3.out"
        splitType="words"
        from={{ opacity: 0, y: 60 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="left"
        tag="h2"
      />
    </div>
  ),
};

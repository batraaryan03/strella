import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ShinyText from "./ShinyText";

const meta: Meta<typeof ShinyText> = {
  title: "Backgrounds/ShinyText",
  component: ShinyText,
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
      <ShinyText
        text="Stellar Removals"
        speed={2}
        delay={0}
        color="#a6ab9e"
        shineColor="#f2f3ed"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover={false}
        className="text-5xl font-semibold tracking-tight"
      />
    </div>
  ),
};

export const Olive: StoryObj = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center p-12">
      <ShinyText
        text="Precision moving, by the stars"
        speed={3}
        delay={0.4}
        color="#757a6c"
        shineColor="#b3c275"
        spread={160}
        direction="left"
        yoyo
        pauseOnHover
        className="text-3xl font-medium tracking-tight"
      />
    </div>
  ),
};

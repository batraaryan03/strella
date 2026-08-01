import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Spotlight } from "./spotlight";

const meta: Meta<typeof Spotlight> = {
  title: "Effects/Spotlight",
  component: Spotlight,
  parameters: { layout: "fullscreen", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof Spotlight>;

export const Olive: Story = {
  args: { fill: "#97a75a", className: "-top-40 left-0 md:-top-20 md:left-60" },
  render: (args) => (
    <div className="relative flex h-[32rem] w-full items-center justify-center overflow-hidden">
      <Spotlight {...args} />
      <p className="font-serif text-3xl text-ink/80">The olive sweep</p>
    </div>
  ),
};

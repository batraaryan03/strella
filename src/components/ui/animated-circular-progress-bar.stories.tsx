import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AnimatedCircularProgressBar } from "./animated-circular-progress-bar";

const meta: Meta<typeof AnimatedCircularProgressBar> = {
  title: "Data/AnimatedCircularProgressBar",
  component: AnimatedCircularProgressBar,
  parameters: { layout: "centered", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof AnimatedCircularProgressBar>;

export const Satisfaction: Story = {
  args: {
    value: 98,
    gaugePrimaryColor: "#97a75a",
    gaugeSecondaryColor: "#23271a",
  },
};

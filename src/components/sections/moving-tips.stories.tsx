import { Meta, StoryObj } from "@storybook/nextjs-vite";
import MovingTips from "./moving-tips";

const meta: Meta<typeof MovingTips> = {
  title: "Sections/MovingTips",
  component: MovingTips,
  parameters: { layout: "fullscreen", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof MovingTips>;

export const Default: Story = {};

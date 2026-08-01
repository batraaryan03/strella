import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { KineticText } from "./kinetic-text";

const meta: Meta<typeof KineticText> = {
  title: "Typography/KineticText",
  component: KineticText,
  parameters: { layout: "centered", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof KineticText>;

export const HoverWeight: Story = {
  args: {
    text: "Stellar Removals",
    className: "text-5xl font-medium text-ink",
  },
};

import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card } from "./card";

const meta: Meta<typeof Card> = {
  title: "Primitives/Card",
  component: Card,
  parameters: { layout: "centered", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof Card>;

const Content = (
  <div className="p-6">
    <p className="text-sm font-medium text-ink">Card title</p>
    <p className="mt-2 text-sm leading-relaxed text-ink-2">
      A premium surface for grouping content. Borders and luminance do the
      heavy lifting on dark interfaces.
    </p>
  </div>
);

export const Surface: Story = {
  args: { variant: "surface", children: Content },
};

export const Raised: Story = {
  args: { variant: "raised", children: Content },
};

export const Glass: Story = {
  parameters: {
    backgrounds: {
      default: "image",
      values: [
        { name: "canvas", value: "#0b0c0a" },
        { name: "image", value: "#3d4a2a" },
      ],
    },
  },
  args: { variant: "glass", children: Content },
};

export const Light: Story = {
  parameters: { backgrounds: { default: "paper" } },
  args: { variant: "light", children: Content },
};

export const HoverLift: Story = {
  args: { variant: "surface", hover: "lift", children: Content },
};

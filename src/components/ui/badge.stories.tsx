import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "Primitives/Badge",
  component: Badge,
  parameters: { layout: "centered", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Olive: Story = {
  args: { children: "Most popular", variant: "olive" },
};

export const Neutral: Story = {
  args: { children: "2 movers included", variant: "neutral" },
};

export const Outline: Story = {
  args: { children: "Verified", variant: "outline" },
};

export const WithDot: Story = {
  args: { children: "Available today", variant: "dot" },
};

export const Row: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="olive">Popular</Badge>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="dot">Live</Badge>
    </div>
  ),
};

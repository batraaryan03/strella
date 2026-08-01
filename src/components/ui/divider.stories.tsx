import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Divider } from "./divider";

const meta: Meta<typeof Divider> = {
  title: "Primitives/Divider",
  component: Divider,
  parameters: { layout: "padded", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {};

export const WithLabel: Story = { args: { label: "// Melbourne metro" } };

export const Wide: Story = {
  args: { label: "STL-01", className: "max-w-3xl" },
};

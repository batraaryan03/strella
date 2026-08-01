import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Eyebrow } from "./eyebrow";

const meta: Meta<typeof Eyebrow> = {
  title: "Primitives/Eyebrow",
  component: Eyebrow,
  parameters: { layout: "centered", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof Eyebrow>;

export const Default: Story = {
  args: { children: "What we offer" },
};

export const WithIndex: Story = {
  args: { index: "01", children: "Services" },
};

export const ConstellationKicker: Story = {
  args: { index: "// SYS", children: "Guided moving" },
};

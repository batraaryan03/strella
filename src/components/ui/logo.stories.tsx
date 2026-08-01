import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Logo } from "./logo";

const meta: Meta<typeof Logo> = {
  title: "Brand/Logo",
  component: Logo,
  parameters: { layout: "centered", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = { args: { href: undefined } };

export const Compact: Story = { args: { compact: true, href: undefined } };

export const OnPaper: Story = {
  parameters: { backgrounds: { default: "paper" } },
  args: { href: undefined },
};

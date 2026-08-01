import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Header from "./header";

const meta: Meta<typeof Header> = {
  title: "Sections/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "canvas" },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};

export const Scrolled: Story = {
  parameters: { viewport: { defaultViewport: "desktop" } },
};

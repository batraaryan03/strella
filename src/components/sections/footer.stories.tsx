import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Footer from "./footer";

const meta: Meta<typeof Footer> = {
  title: "Sections/Footer",
  component: Footer,
  parameters: { layout: "fullscreen", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};

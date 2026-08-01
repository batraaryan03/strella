import { Meta, StoryObj } from "@storybook/nextjs-vite";
import HeroSection from "./hero-section";

const meta: Meta<typeof HeroSection> = {
  title: "Sections/HeroSection",
  component: HeroSection,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "canvas" },
  },
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {};

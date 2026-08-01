import { Meta, StoryObj } from "@storybook/nextjs-vite";
import ServicesSection from "./services-section";

const meta: Meta<typeof ServicesSection> = {
  title: "Sections/ServicesSection",
  component: ServicesSection,
  parameters: { layout: "fullscreen", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof ServicesSection>;

export const Default: Story = {};

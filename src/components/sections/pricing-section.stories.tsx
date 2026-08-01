import { Meta, StoryObj } from "@storybook/nextjs-vite";
import PricingSection from "./pricing-section";

const meta: Meta<typeof PricingSection> = {
  title: "Sections/PricingSection",
  component: PricingSection,
  parameters: { layout: "fullscreen", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof PricingSection>;

export const Default: Story = {};

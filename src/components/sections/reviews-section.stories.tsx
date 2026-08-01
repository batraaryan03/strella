import { Meta, StoryObj } from "@storybook/nextjs-vite";
import ReviewsSection from "./reviews-section";

const meta: Meta<typeof ReviewsSection> = {
  title: "Sections/ReviewsSection",
  component: ReviewsSection,
  parameters: { layout: "fullscreen", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof ReviewsSection>;

export const Default: Story = {};

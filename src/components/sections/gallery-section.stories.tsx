import { Meta, StoryObj } from "@storybook/nextjs-vite";
import GallerySection from "./gallery-section";

const meta: Meta<typeof GallerySection> = {
  title: "Sections/GallerySection",
  component: GallerySection,
  parameters: { layout: "fullscreen", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof GallerySection>;

export const Default: Story = {};

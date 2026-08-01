import { Meta, StoryObj } from "@storybook/nextjs-vite";
import ProcessSection from "./process-section";

const meta: Meta<typeof ProcessSection> = {
  title: "Sections/ProcessSection",
  component: ProcessSection,
  parameters: { layout: "fullscreen", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof ProcessSection>;

export const Default: Story = {};

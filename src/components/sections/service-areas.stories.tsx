import { Meta, StoryObj } from "@storybook/nextjs-vite";
import ServiceAreas from "./service-areas";

const meta: Meta<typeof ServiceAreas> = {
  title: "Sections/ServiceAreas",
  component: ServiceAreas,
  parameters: { layout: "fullscreen", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof ServiceAreas>;

export const Default: Story = {};

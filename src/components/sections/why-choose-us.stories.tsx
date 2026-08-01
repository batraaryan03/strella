import { Meta, StoryObj } from "@storybook/nextjs-vite";
import WhyChooseUs from "./why-choose-us";

const meta: Meta<typeof WhyChooseUs> = {
  title: "Sections/WhyChooseUs",
  component: WhyChooseUs,
  parameters: { layout: "fullscreen", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof WhyChooseUs>;

export const Default: Story = {};

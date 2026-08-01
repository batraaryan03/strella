import { Meta, StoryObj } from "@storybook/nextjs-vite";
import FinalCta from "./final-cta";

const meta: Meta<typeof FinalCta> = {
  title: "Sections/FinalCta",
  component: FinalCta,
  parameters: { layout: "fullscreen", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof FinalCta>;

export const Default: Story = {};

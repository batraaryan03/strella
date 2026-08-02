import { Meta, StoryObj } from "@storybook/nextjs-vite";
import QuoteWizard from "./quote-wizard";

const meta: Meta<typeof QuoteWizard> = {
  title: "Sections/QuoteWizard",
  component: QuoteWizard,
  parameters: { layout: "fullscreen", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof QuoteWizard>;

export const Default: Story = {};

/** The hero's high-contrast white card with black text. */
export const Light: Story = {
  args: { bare: true, light: true },
};

import { Meta, StoryObj } from "@storybook/nextjs-vite";
import TrustRibbon from "./trust-ribbon";

const meta: Meta<typeof TrustRibbon> = {
  title: "Sections/TrustRibbon",
  component: TrustRibbon,
  parameters: { layout: "fullscreen", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof TrustRibbon>;

export const Default: Story = {};

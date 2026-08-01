import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SectionHeader } from "./section-header";
import { Button } from "./button";

const meta: Meta<typeof SectionHeader> = {
  title: "Primitives/SectionHeader",
  component: SectionHeader,
  parameters: { layout: "padded", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {
  args: {
    index: "01",
    eyebrow: "What we offer",
    title: "Moving services, engineered for precision",
    description:
      "Comprehensive moving solutions tailored to your needs in Melbourne — from single apartments to full office relocations.",
  },
};

export const Centered: Story = {
  args: {
    index: "02",
    eyebrow: "Pricing",
    title: "Transparent hourly rates",
    description: "No hidden fees, no surprises. Choose the right truck for your move.",
    align: "center",
  },
};

export const WithAction: Story = {
  args: {
    index: "03",
    eyebrow: "Gallery",
    title: "Recent moves across Melbourne",
    description: "A selection of recent relocations handled by the Stellar crew.",
    action: <Button variant="outline" size="sm">View all →</Button>,
  },
};

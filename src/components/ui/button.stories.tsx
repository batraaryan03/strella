import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./button";
import { Phone, ArrowRight } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Primitives/Button",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: { default: "canvas" },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "outline", "light"],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: "Get a Free Quote", variant: "primary", size: "lg" },
};

export const Secondary: Story = {
  args: { children: "View Pricing", variant: "secondary" },
};

export const Outline: Story = {
  args: { children: "Explore Services", variant: "outline" },
};

export const Ghost: Story = {
  args: { children: "Learn more", variant: "ghost" },
};

export const OnLight: Story = {
  parameters: { backgrounds: { default: "paper" } },
  args: { children: "Book Your Move", variant: "light" },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Phone className="w-4 h-4" />
        Call Now
      </>
    ),
    variant: "primary",
  },
};

export const WithArrow: Story = {
  args: {
    children: (
      <>
        Book This Truck
        <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
      </>
    ),
    variant: "outline",
  },
};

export const Disabled: Story = {
  args: { children: "Submitting…", variant: "primary", disabled: true },
};

export const Row: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="light">Light</Button>
    </div>
  ),
};

import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { StarRating } from "./star-rating";

const meta: Meta<typeof StarRating> = {
  title: "Primitives/StarRating",
  component: StarRating,
  parameters: { layout: "centered", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Default: Story = { args: { value: 5 } };

export const FourStars: Story = { args: { value: 4 } };

export const Large: Story = { args: { value: 5, size: "md" } };

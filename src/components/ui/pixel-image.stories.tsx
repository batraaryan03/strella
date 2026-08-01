import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PixelImage } from "./pixel-image";

const SRC =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80";

const meta: Meta<typeof PixelImage> = {
  title: "Media/PixelImage",
  component: PixelImage,
  parameters: { layout: "centered", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof PixelImage>;

export const Default: Story = {
  args: {
    src: SRC,
    alt: "A bright modern home",
    grid: "8x8",
    className: "aspect-[16/10] w-[36rem] max-w-full",
  },
};

export const Coarse: Story = {
  args: {
    src: SRC,
    alt: "A bright modern home",
    grid: "6x4",
    grayscaleAnimation: false,
    pixelFadeInDuration: 800,
    className: "aspect-square w-80 max-w-full",
  },
};

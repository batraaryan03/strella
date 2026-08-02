import { Meta, StoryObj } from "@storybook/nextjs-vite";
import DomeGallery from "./DomeGallery";
import { GALLERY_LOCAL } from "@/lib/content";

const meta: Meta<typeof DomeGallery> = {
  title: "Backgrounds/DomeGallery",
  component: DomeGallery,
  parameters: { layout: "fullscreen", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof DomeGallery>;

/**
 * React Bits DomeGallery — drag-rotatable sphere of real Melbourne
 * photos. Exact stock props from the docs usage example, with all 30
 * real photos from /public/gallery instead of the upstream defaults.
 */
export const Default: Story = {
  render: () => (
    <div className="relative h-[720px] w-full overflow-hidden">
      <DomeGallery
        images={GALLERY_LOCAL}
        fit={1}
        minRadius={850}
        segments={30}
        dragDampening={3.6}
        grayscale={false}
      />
    </div>
  ),
};

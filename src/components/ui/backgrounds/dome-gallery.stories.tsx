import { Meta, StoryObj } from "@storybook/nextjs-vite";
import DomeGallery from "./DomeGallery";
import { GALLERY_IMAGES } from "@/lib/content";

const meta: Meta<typeof DomeGallery> = {
  title: "Backgrounds/DomeGallery",
  component: DomeGallery,
  parameters: { layout: "fullscreen", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof DomeGallery>;

/**
 * React Bits DomeGallery — drag-rotatable sphere of real Melbourne
 * photos. Exact stock props from the docs usage example, with the
 * project's real Unsplash photography instead of the upstream defaults.
 */
export const Default: Story = {
  render: () => (
    <div className="relative h-[720px] w-full overflow-hidden">
      <DomeGallery
        images={GALLERY_IMAGES.map((src, i) => ({ src, alt: `Melbourne move — photo ${i + 1}` }))}
        fit={1}
        minRadius={850}
        segments={30}
        dragDampening={3.6}
        grayscale={false}
      />
    </div>
  ),
};

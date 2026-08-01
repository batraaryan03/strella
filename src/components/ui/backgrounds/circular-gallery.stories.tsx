import { Meta, StoryObj } from "@storybook/nextjs-vite";
import CircularGallery from "./CircularGallery";

const meta: Meta<typeof CircularGallery> = {
  title: "Backgrounds/CircularGallery",
  component: CircularGallery,
  parameters: { layout: "fullscreen", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof CircularGallery>;

/**
 * React Bits CircularGallery — a curved, scrollable reel of cards
 * (ogl). Without `items` it falls back to its built-in demo set.
 */
export const Default: Story = {
  render: () => (
    <div style={{ height: 600, position: "relative" }}>
      <CircularGallery
        bend={3}
        textColor="#f2f3ed"
        borderRadius={0.12}
        scrollSpeed={2.8}
        scrollEase={0.02}
      />
    </div>
  ),
};

/** Real move photography from /public/gallery (01.jpg … 06.jpg). */
export const RealGallery: Story = {
  render: () => (
    <div style={{ height: 600, position: "relative" }}>
      <CircularGallery
        items={[
          { image: "/gallery/01.jpg", text: "Hawthorn" },
          { image: "/gallery/02.jpg", text: "Richmond" },
          { image: "/gallery/03.jpg", text: "Southbank" },
          { image: "/gallery/04.jpg", text: "Carlton" },
          { image: "/gallery/05.jpg", text: "St Kilda" },
          { image: "/gallery/06.jpg", text: "Docklands" },
        ]}
        bend={3}
        textColor="#f2f3ed"
        borderRadius={0.12}
        scrollSpeed={2.8}
        scrollEase={0.02}
      />
    </div>
  ),
};

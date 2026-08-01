import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import MagicBento from "./MagicBento";

const meta: Meta<typeof MagicBento> = {
  title: "Backgrounds/MagicBento",
  component: MagicBento,
  parameters: {
    layout: "padded",
    backgrounds: { default: "canvas" },
  },
  tags: ["autodocs"],
};

export default meta;

const stellarCards = [
  {
    color: "#10120A",
    title: "House Moves",
    description: "Careful furniture and box removal, door to door.",
    label: "Residential",
  },
  {
    color: "#10120A",
    title: "Office Relocations",
    description: "After-hours fit-outs that don't stop your work day.",
    label: "Commercial",
  },
  {
    color: "#10120A",
    title: "Packing & Crating",
    description: "Pro-grade materials and trained packers.",
    label: "Packing",
  },
  {
    color: "#10120A",
    title: "Secure Storage",
    description: "Short and long-term container storage, monitored.",
    label: "Storage",
  },
  {
    color: "#10120A",
    title: "Truck & Crew",
    description: "From 2 to 8 movers with a truck, booked by the hour.",
    label: "Crew",
  },
  {
    color: "#10120A",
    title: "Furniture Assembly",
    description: "Dismantle, transport and rebuild with care.",
    label: "Assembly",
  },
];

export const Default: StoryObj = {
  render: () => (
    <MagicBento
      textAutoHide={true}
      enableStars={false}
      enableSpotlight={true}
      enableBorderGlow={true}
      enableTilt={true}
      enableMagnetism={true}
      clickEffect={false}
      spotlightRadius={300}
      particleCount={12}
      glowColor="99, 107, 47"
      cards={stellarCards}
    />
  ),
};

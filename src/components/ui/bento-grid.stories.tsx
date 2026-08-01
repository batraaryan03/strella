import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Truck, Boxes, Building2, Sofa } from "lucide-react";
import { BentoGrid, BentoCard } from "./bento-grid";

const meta: Meta<typeof BentoGrid> = {
  title: "Layout/BentoGrid",
  component: BentoGrid,
  parameters: { layout: "padded", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof BentoGrid>;

export const Services: Story = {
  render: () => (
    <BentoGrid>
      <BentoCard
        name="Local moves"
        className="md:col-span-2"
        background={<div className="bg-olive-tint" />}
        Icon={Truck}
        description="Two movers, one truck, zero surprises — across every Melbourne suburb."
        href="/book-move"
        cta="Book this service"
      />
      <BentoCard
        name="Packing & unpacking"
        className=""
        background={<div className="bg-surface-2" />}
        Icon={Boxes}
        description="Full-service packing with premium materials and careful labelling."
        href="/book-move"
        cta="Book this service"
      />
      <BentoCard
        name="Office relocation"
        className=""
        background={<div className="bg-surface-2" />}
        Icon={Building2}
        description="After-hours commercial moves that keep your business running."
        href="/book-move"
        cta="Book this service"
      />
      <BentoCard
        name="Furniture removal"
        className="md:col-span-2"
        background={<div className="bg-olive-tint" />}
        Icon={Sofa}
        description="Single items to full homes — wrapped, padded, and protected."
        href="/book-move"
        cta="Book this service"
      />
    </BentoGrid>
  ),
};

import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ScrollReveal } from "./scroll-reveal";
import { Card } from "./card";

const meta: Meta<typeof ScrollReveal> = {
  title: "Motion/ScrollReveal",
  component: ScrollReveal,
  parameters: { layout: "padded", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof ScrollReveal>;

export const Single: Story = {
  args: { y: 28 },
  render: (args) => (
    <div className="space-y-[60vh]">
      <ScrollReveal {...args}>
        <Card className="p-8">
          <p className="text-ink">Scroll down — this block reveals on entry.</p>
        </Card>
      </ScrollReveal>
      <div />
    </div>
  ),
};

export const Group: Story = {
  args: { asGroup: true, stagger: 0.12 },
  render: (args) => (
    <div className="space-y-[60vh]">
      <ScrollReveal {...args} className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="p-8">
            <p className="text-ink">Card {i}</p>
          </Card>
        ))}
      </ScrollReveal>
      <div />
    </div>
  ),
};

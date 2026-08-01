import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ConstellationField } from "./constellation-field";

const meta: Meta<typeof ConstellationField> = {
  title: "Brand/ConstellationField",
  component: ConstellationField,
  parameters: { layout: "fullscreen", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof ConstellationField>;

export const Default: Story = {
  args: { density: 16, className: "text-ink-3 opacity-40" },
  decorators: [
    (Story) => (
      <div className="relative h-[400px] w-full overflow-hidden">
        <Story />
      </div>
    ),
  ],
};

export const Sparse: Story = {
  args: { density: 10, seed: 3, className: "text-ink-3 opacity-30" },
  decorators: [
    (Story) => (
      <div className="relative h-[400px] w-full overflow-hidden">
        <Story />
      </div>
    ),
  ],
};

export const OliveTint: Story = {
  args: { density: 18, seed: 11, className: "text-olive opacity-25" },
  decorators: [
    (Story) => (
      <div className="relative h-[400px] w-full overflow-hidden">
        <Story />
      </div>
    ),
  ],
};

import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Progress } from "./progress";

const meta: Meta<typeof Progress> = {
  title: "Primitives/Progress",
  component: Progress,
  parameters: { layout: "padded", backgrounds: { default: "canvas" } },
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 5 } },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: { value: 66 },
  render: (args) => (
    <div className="max-w-md">
      <Progress value={args.value} />
    </div>
  ),
};

export const Complete: Story = {
  args: { value: 100 },
  render: (args) => (
    <div className="max-w-md">
      <Progress value={args.value} />
    </div>
  ),
};

import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { NoiseTexture } from "./noise-texture";

const meta: Meta<typeof NoiseTexture> = {
  title: "Effects/NoiseTexture",
  component: NoiseTexture,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof NoiseTexture>;

export const OliveTint: Story = {
  args: { noiseOpacity: 0.6, className: "opacity-60" },
  render: (args) => (
    <div className="relative h-[24rem] w-full overflow-hidden bg-canvas">
      <NoiseTexture {...args} />
    </div>
  ),
};

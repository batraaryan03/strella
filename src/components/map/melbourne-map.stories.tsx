import { Meta, StoryObj } from "@storybook/nextjs-vite";
import MelbourneMap from "./melbourne-map";

const meta: Meta<typeof MelbourneMap> = {
  title: "Map/MelbourneMap",
  component: MelbourneMap,
  parameters: { layout: "padded", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof MelbourneMap>;

export const Default: Story = {
  render: () => <MelbourneMap className="h-[460px]" />,
};

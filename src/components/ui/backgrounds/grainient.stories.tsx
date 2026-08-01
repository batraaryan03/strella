import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Grainient from "./Grainient";

const meta: Meta<typeof Grainient> = {
  title: "Backgrounds/Grainient",
  component: Grainient,
  parameters: { layout: "centered", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof Grainient>;

/** Exact stock look from the docs usage example — already brand olive. */
export const Default: Story = {
  render: () => (
    <div
      className="relative overflow-hidden rounded-[var(--radius-lg)] border border-line"
      style={{ width: 640, height: 640 }}
    >
      <Grainient
        color1="#98a686"
        color2="#636B2F"
        color3="#808000"
        timeSpeed={0.25}
        colorBalance={0.0}
        warpStrength={1.0}
        warpFrequency={5.0}
        warpSpeed={2.0}
        warpAmplitude={50.0}
        blendAngle={0.0}
        blendSoftness={0.1}
        rotationAmount={1000}
        noiseScale={2.0}
        grainAmount={0.1}
        grainScale={2.0}
        grainAnimated={false}
        contrast={1.5}
        gamma={1.0}
        saturation={1.0}
        centerX={0.0}
        centerY={0.0}
        zoom={0.9}
      />
    </div>
  ),
};

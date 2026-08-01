import * as React from "react";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import FluidGlass from "./FluidGlass";

const meta: Meta<typeof FluidGlass> = {
  title: "Backgrounds/FluidGlass",
  component: FluidGlass,
  parameters: { layout: "fullscreen", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj<typeof FluidGlass>;

/** Suspense is required — useGLTF suspends while the model streams in. */
const Frame = ({ children }: { children: React.ReactNode }) => (
  <div className="relative h-[600px] w-full overflow-hidden">
    <React.Suspense fallback={null}>{children}</React.Suspense>
  </div>
);

/** Lens mode — exact props from the docs usage example. */
export const Lens: Story = {
  render: () => (
    <Frame>
      <FluidGlass
        mode="lens"
        lensProps={{
          scale: 0.25,
          ior: 1.15,
          thickness: 5,
          chromaticAberration: 0.1,
          anisotropy: 0.01,
        }}
      />
    </Frame>
  ),
};

/** Bar mode — full-width bottom bar. */
export const Bar: Story = {
  render: () => (
    <Frame>
      <FluidGlass
        mode="bar"
        barProps={{
          transmission: 1,
          roughness: 0,
          thickness: 10,
          ior: 1.15,
          color: "#ffffff",
          attenuationColor: "#b3c275",
          attenuationDistance: 0.25,
        }}
      />
    </Frame>
  ),
};

/** Cube mode. */
export const Cube: Story = {
  render: () => (
    <Frame>
      <FluidGlass
        mode="cube"
        cubeProps={{
          scale: 0.18,
          ior: 1.2,
          thickness: 6,
          chromaticAberration: 0.08,
          anisotropy: 0.02,
        }}
      />
    </Frame>
  ),
};

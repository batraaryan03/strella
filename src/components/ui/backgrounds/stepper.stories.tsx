import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Stepper, { Step } from "./Stepper";

const meta: Meta<typeof Stepper> = {
  title: "Backgrounds/Stepper",
  component: Stepper,
  parameters: {
    layout: "padded",
    backgrounds: { default: "canvas" },
  },
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Stepper
      initialStep={1}
      backButtonText="Previous"
      nextButtonText="Next"
      disableStepIndicators={false}
    >
      <Step>
        <h2 className="text-2xl font-semibold text-[#f2f3ed]">Tell us your route</h2>
        <p className="mt-2 text-[#a6ab9e]">
          Where are you moving from, and where in Melbourne are you heading?
        </p>
      </Step>
      <Step>
        <h2 className="text-2xl font-semibold text-[#f2f3ed]">How big is the move?</h2>
        <p className="mt-2 text-[#a6ab9e]">
          Studio, 2-bed, 4-bed or a full house — we size the truck and crew to match.
        </p>
      </Step>
      <Step>
        <h2 className="text-2xl font-semibold text-[#f2f3ed]">When suits you?</h2>
        <p className="mt-2 text-[#a6ab9e]">
          Pick a date and we&apos;ll hold the crew. Weekends available at the same rate.
        </p>
      </Step>
      <Step>
        <h2 className="text-2xl font-semibold text-[#f2f3ed]">All set</h2>
        <p className="mt-2 text-[#a6ab9e]">
          You&apos;re done — our team confirms the booking within the hour.
        </p>
      </Step>
    </Stepper>
  ),
};

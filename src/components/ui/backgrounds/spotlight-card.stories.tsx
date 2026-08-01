import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import SpotlightCard from "./SpotlightCard";

const meta: Meta<typeof SpotlightCard> = {
  title: "Backgrounds/SpotlightCard",
  component: SpotlightCard,
  parameters: {
    layout: "padded",
    backgrounds: { default: "canvas" },
  },
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <div className="flex min-h-64 items-center justify-center p-12">
      <div className="w-full max-w-sm">
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(151, 167, 90, 0.35)"
        >
          <h3 className="text-xl font-semibold text-[#f2f3ed]">Fully insured moves</h3>
          <p className="mt-2 text-sm text-[#a6ab9e]">
            Every Stellar move is covered by $20M liability insurance — your home is in
            safe hands, tracked door to door.
          </p>
        </SpotlightCard>
      </div>
    </div>
  ),
};

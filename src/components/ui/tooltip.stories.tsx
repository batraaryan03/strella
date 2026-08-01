import { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "./tooltip";

const meta: Meta = {
  title: "Overlays/Tooltip",
  parameters: { layout: "centered", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="rounded-[var(--radius-btn)] border border-line bg-surface px-4 py-2 text-sm text-ink transition-colors hover:border-line-strong">
          $20M insured
        </TooltipTrigger>
        <TooltipContent>
          Transit insurance on every move — $20M cover, no extra cost.
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

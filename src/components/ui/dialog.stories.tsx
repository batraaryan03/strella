import { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./dialog";

const meta: Meta = {
  title: "Overlays/Dialog",
  parameters: { layout: "centered", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger className="rounded-[var(--radius-btn)] border border-line bg-surface px-4 py-2 text-sm text-ink transition-colors hover:border-line-strong">
        Open dialog
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Quote confirmed</DialogTitle>
          <DialogDescription>
            Your fixed quote has been emailed to you. We&apos;ll call within 60
            seconds to confirm your move.
          </DialogDescription>
        </DialogHeader>
        <p className="text-sm leading-relaxed text-ink-2">
          No deposit · Cancel free up to 24h before · Fully insured.
        </p>
      </DialogContent>
    </Dialog>
  ),
};

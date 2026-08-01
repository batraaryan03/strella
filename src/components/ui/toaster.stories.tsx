import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { toast } from "sonner";
import { Toaster } from "./toaster";

const meta: Meta = {
  title: "Feedback/Toaster",
  parameters: { layout: "padded", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div>
      <Toaster />
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() =>
            toast.success("Quote request received", {
              description: "We'll call you within 60 seconds.",
            })
          }
          className="rounded-[var(--radius-btn)] border border-line bg-surface px-4 py-2 text-sm text-ink transition-colors hover:border-line-strong"
        >
          Fire success toast
        </button>
        <button
          type="button"
          onClick={() =>
            toast.error("Something went wrong", {
              description: "Please try again or call us directly.",
            })
          }
          className="rounded-[var(--radius-btn)] border border-line bg-surface px-4 py-2 text-sm text-ink transition-colors hover:border-line-strong"
        >
          Fire error toast
        </button>
      </div>
    </div>
  ),
};

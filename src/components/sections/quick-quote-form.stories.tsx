import * as React from "react";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import QuickQuoteForm from "./quick-quote-form";

const meta: Meta<typeof QuickQuoteForm> = {
  title: "Sections/QuickQuoteForm",
  component: QuickQuoteForm,
  parameters: {
    layout: "centered",
    backgrounds: { default: "canvas" },
    decorators: [
      (Story: () => React.ReactNode) => (
        <div className="w-[24rem] rounded-[var(--radius-card)] border border-white/10 bg-canvas/70 p-5 backdrop-blur-xl">
          <Story />
        </div>
      ),
    ],
  },
};

export default meta;
type Story = StoryObj<typeof QuickQuoteForm>;

export const Default: Story = {};

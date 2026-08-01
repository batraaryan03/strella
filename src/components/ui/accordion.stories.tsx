import * as React from "react";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Accordion } from "./accordion";

const meta: Meta<typeof Accordion> = {
  title: "Primitives/Accordion",
  component: Accordion,
  parameters: {
    layout: "padded",
    backgrounds: { default: "canvas" },
    decorators: [
      (Story: () => React.ReactNode) => (
        <div className="mx-auto max-w-3xl">
          <Story />
        </div>
      ),
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const items = [
  { id: "1", q: "Start planning early", a: "Begin your preparations at least 4–6 weeks in advance. Create a moving checklist, sort through your belongings, and declutter." },
  { id: "2", q: "Label your boxes clearly", a: "Use a clear labelling system for all your boxes. Mark each box with its contents and the room it belongs in." },
  { id: "3", q: "Protect fragile items properly", a: "Wrap fragile items individually in packing paper or bubble wrap. Use sturdy boxes and fill any gaps with packing material." },
];

export const Default: Story = { args: { items, defaultOpen: 0 } };

export const AllClosed: Story = { args: { items, defaultOpen: -1 } };

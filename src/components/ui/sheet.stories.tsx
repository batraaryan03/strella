import { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./sheet";

const meta: Meta = {
  title: "Overlays/Sheet",
  parameters: { layout: "centered", backgrounds: { default: "canvas" } },
};

export default meta;
type Story = StoryObj;

export const RightDrawer: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger className="rounded-[var(--radius-btn)] border border-line bg-surface px-4 py-2 text-sm text-ink transition-colors hover:border-line-strong">
        Open menu
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>Mobile navigation for Stellar Removals.</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-3 text-sm text-ink-2">
          {["Services", "Pricing", "Coverage", "Book a move"].map((item) => (
            <span key={item} className="transition-colors hover:text-ink">
              {item}
            </span>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  ),
};

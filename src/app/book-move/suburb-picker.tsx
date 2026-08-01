"use client";

import * as React from "react";
import { ListChecks } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { SUBURBS } from "@/lib/content";

/**
 * SuburbPicker — a bottom-sheet suburb picker for mobile booking.
 * Tapping a suburb fills the field and closes. Borderless chips.
 */
export function SuburbPicker({ onPick }: { onPick: (suburb: string) => void }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Pick a suburb"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-[var(--radius-btn)] bg-surface-2 text-olive transition-colors duration-150 hover:bg-raised"
        >
          <ListChecks className="h-4 w-4" />
        </button>
      </SheetTrigger>
      <SheetContent side="bottom" className="gap-0">
        <SheetHeader className="mb-5">
          <SheetTitle>Pick a suburb</SheetTitle>
          <SheetDescription>
            {SUBURBS.length} suburbs across greater Melbourne.
          </SheetDescription>
        </SheetHeader>
        <div className="overflow-y-auto pb-6">
          <div className="flex flex-wrap gap-2">
            {SUBURBS.map((s) => (
              <SheetClose asChild key={s}>
                <button
                  type="button"
                  onClick={() => onPick(s)}
                  className="rounded-full bg-surface-2 px-4 py-2 text-[0.8125rem] text-ink-2 transition-colors duration-150 hover:bg-raised hover:text-ink"
                >
                  {s}
                </button>
              </SheetClose>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

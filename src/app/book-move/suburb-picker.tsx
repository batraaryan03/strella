"use client";

import * as React from "react";
import { ListChecks } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { SUBURBS } from "@/lib/content";

/**
 * SuburbPicker — a Dialog-based suburb picker for mobile booking.
 * Tapping a suburb fills the field and closes. Borderless chips.
 * (Sheet was removed per the component audit; Dialog remains.)
 */
export function SuburbPicker({ onPick }: { onPick: (suburb: string) => void }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label="Pick a suburb"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-[var(--radius-btn)] bg-surface-2 text-olive transition-colors duration-150 hover:bg-raised"
        >
          <ListChecks className="h-4 w-4" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>Pick a suburb</DialogTitle>
          <DialogDescription>
            {SUBURBS.length} suburbs across greater Melbourne.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 overflow-y-auto pr-1">
          <div className="flex flex-wrap gap-2">
            {SUBURBS.map((s) => (
              <DialogClose asChild key={s}>
                <button
                  type="button"
                  onClick={() => onPick(s)}
                  className="rounded-full bg-surface-2 px-4 py-2 text-[0.8125rem] text-ink-2 transition-colors duration-150 hover:bg-raised hover:text-ink"
                >
                  {s}
                </button>
              </DialogClose>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

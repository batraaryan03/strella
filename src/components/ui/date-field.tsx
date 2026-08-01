"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

interface DateFieldProps {
  id?: string;
  /** yyyy-MM-dd string, or empty. */
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  /** Disable dates before this (defaults to today). */
  minDate?: Date;
  required?: boolean;
  className?: string;
}

/** Parse a yyyy-MM-dd string (server-safe). */
function parseDate(value: string): Date | undefined {
  if (!value) return undefined;
  const [y, m, d] = value.split("-").map(Number);
  if (!y || !m || !d) return undefined;
  return new Date(y, m - 1, d);
}

/**
 * DateField — borderless tonal trigger that opens the dark Calendar
 * in a Dialog. Min-date defaults to today. AU date formatting.
 */
export function DateField({
  id,
  value = "",
  onChange,
  placeholder = "Select a date",
  minDate,
  required,
  className,
}: DateFieldProps) {
  const selected = parseDate(value);
  const [open, setOpen] = React.useState(false);
  const today = React.useMemo(
    () => (minDate ?? new Date()),
    [minDate]
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          id={id}
          aria-required={required || undefined}
          className={cn(
            "flex h-11 w-full items-center justify-between gap-2 rounded-[var(--radius-btn)] bg-surface-2 px-3.5 text-left",
            "text-[0.875rem] text-ink",
            "shadow-[inset_0_1px_0_rgba(244,245,240,0.05),0_1px_2px_rgba(0,0,0,0.3)]",
            "transition-[background-color,box-shadow] duration-150",
            "hover:bg-raised",
            "focus:outline-none focus:bg-raised focus:ring-2 focus:ring-olive/30",
            className
          )}
        >
          <span className={cn(value ? "text-ink" : "text-ink-3")}>
            {value
              ? format(selected as Date, "EEE d MMM yyyy")
              : placeholder}
          </span>
          <CalendarDays className="h-4 w-4 shrink-0 text-olive" aria-hidden />
        </button>
      </DialogTrigger>
      <DialogContent className="w-fit max-w-none p-0">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={(date) => {
            if (date) onChange?.(format(date, "yyyy-MM-dd"));
            setOpen(false);
          }}
          minDate={today}
          autoFocus
        />
      </DialogContent>
    </Dialog>
  );
}

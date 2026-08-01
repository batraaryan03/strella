"use client";

import * as React from "react";
import { DayPicker, type DayPickerProps } from "react-day-picker";
import { enAU } from "date-fns/locale";
import { cn } from "@/lib/utils";

/**
 * Calendar — shadcn-style date picker on react-day-picker, styled
 * for the dark borderless system. Use with a Dialog/Popover.
 */
export type CalendarProps = DayPickerProps & {
  /** Disable dates before this (defaults to today). */
  minDate?: Date;
};

export function Calendar({
  className,
  minDate,
  locale = enAU,
  ...props
}: CalendarProps) {
  const disabled =
    props.disabled ?? (minDate ? { before: minDate } : undefined);

  return (
    <DayPicker
      locale={locale}
      showOutsideDays
      disabled={disabled}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-4",
        month: "flex flex-col gap-3",
        month_caption: "flex items-center justify-between px-1",
        caption_label: "text-[0.875rem] font-medium text-ink",
        nav: "flex items-center gap-1",
        button_previous: "grid h-8 w-8 place-items-center rounded-[var(--radius-btn)] text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink",
        button_next: "grid h-8 w-8 place-items-center rounded-[var(--radius-btn)] text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink",
        month_grid: "mt-2 w-full border-collapse",
        weekday: "w-9 pb-2 text-center font-mono text-[0.625rem] uppercase tracking-[0.12em] text-ink-3",
        week: "flex w-full",
        day: "grid h-9 w-9 place-items-center rounded-[var(--radius-btn)] text-[0.8125rem] text-ink-2 transition-colors duration-150 hover:bg-surface-2 hover:text-ink",
        day_button: "grid h-9 w-9 place-items-center rounded-[var(--radius-btn)]",
        selected: "!bg-olive !text-ink-dark font-medium",
        today: "text-olive-bright font-medium",
        outside: "text-ink-3 opacity-40",
        disabled: "text-ink-3 opacity-30 hover:bg-transparent hover:text-ink-3",
        hidden: "invisible",
      }}
      {...props}
    />
  );
}

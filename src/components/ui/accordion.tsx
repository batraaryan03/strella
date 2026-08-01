"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  id: string;
  q: string;
  a: React.ReactNode;
}

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[];
  /** Index of the item open by default. */
  defaultOpen?: number;
  /** Allow multiple open items. */
  multiple?: boolean;
}

/**
 * Large-typography, minimal-divider accordion. Interaction is
 * lightweight: chevron rotation + smooth height transition.
 */
export function Accordion({
  items,
  defaultOpen = 0,
  multiple = false,
  className,
  ...props
}: AccordionProps) {
  const [open, setOpen] = React.useState<number[]>(
    defaultOpen >= 0 ? [defaultOpen] : []
  );

  const toggle = (i: number) => {
    setOpen((prev) => {
      if (multiple) {
        return prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i];
      }
      return prev.includes(i) ? [] : [i];
    });
  };

  return (
    <div className={cn("divide-y divide-line", className)} {...props}>
      {items.map((item, i) => {
        const isOpen = open.includes(i);
        return (
          <div key={item.id} className="py-1">
            <button
              id={`${item.id}-trigger`}
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              aria-controls={`${item.id}-panel`}
              className={cn(
                "group flex w-full items-center justify-between gap-6 py-5 text-left",
                "transition-colors duration-150"
              )}
            >
              <span
                className={cn(
                  "text-base md:text-lg font-medium tracking-[-0.01em] transition-colors duration-150",
                  isOpen ? "text-ink" : "text-ink-2 group-hover:text-ink"
                )}
              >
                {item.q}
              </span>
              <span
                className={cn(
                  "grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  isOpen
                    ? "border-olive/40 bg-olive-tint text-olive"
                    : "border-line text-ink-3 group-hover:border-line-strong group-hover:text-ink-2"
                )}
              >
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-300",
                    isOpen && "rotate-180"
                  )}
                />
              </span>
            </button>
            <div
              id={`${item.id}-panel`}
              role="region"
              aria-labelledby={`${item.id}-trigger`}
              className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="max-w-[62ch] pb-6 pr-10 text-[0.9375rem] leading-[1.7] text-ink-2">
                  {item.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

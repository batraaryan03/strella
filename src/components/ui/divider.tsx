import * as React from "react";
import { cn } from "@/lib/utils";

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

/** Hairline divider with optional clean label. */
export function Divider({ className, label, ...props }: DividerProps) {
  return (
    <div
      className={cn("flex items-center gap-4", className)}
      role="separator"
      {...props}
    >
      <span className="h-px flex-1 bg-line" />
      {label && (
        <span className="text-[0.8125rem] font-medium text-ink-3">{label}</span>
      )}
      {label && <span className="h-px flex-1 bg-line" />}
    </div>
  );
}

import * as React from "react";
import { cn } from "@/lib/utils";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn(
        "mb-2 block text-sm font-medium leading-none text-ink-2",
        className
      )}
      {...props}
    />
  );
}

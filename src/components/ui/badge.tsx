import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  [
    "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1",
    "text-[0.6875rem] font-medium uppercase tracking-[0.08em] whitespace-nowrap",
  ],
  {
    variants: {
      variant: {
        olive: "border-olive/30 bg-olive-tint text-olive-bright",
        neutral: "border-line bg-raised text-ink-2",
        outline: "border-line-strong text-ink-2",
        dot: [
          "border-line bg-raised text-ink-2",
          "before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-olive before:relative",
        ],
      },
    },
    defaultVariants: { variant: "neutral" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-[var(--radius-card)] transition-[background-color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
  {
    variants: {
      variant: {
        surface: [
          "bg-surface",
          "shadow-[inset_0_1px_0_rgba(244,245,240,0.045),0_1px_2px_rgba(0,0,0,0.35)]",
        ],
        raised: [
          "bg-surface-2",
          "shadow-[inset_0_1px_0_rgba(244,245,240,0.06),0_1px_2px_rgba(0,0,0,0.35)]",
        ],
        light: "bg-paper",
      },
      hover: {
        none: "",
        lift: [
          "hover:-translate-y-1",
          "hover:bg-surface-2",
          "hover:shadow-[inset_0_1px_0_rgba(244,245,240,0.07),0_20px_44px_-18px_rgba(0,0,0,0.65)]",
        ],
      },
    },
    defaultVariants: { variant: "surface", hover: "none" },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export function Card({ className, variant, hover, ...props }: CardProps) {
  return (
    <div className={cn(cardVariants({ variant, hover }), className)} {...props} />
  );
}

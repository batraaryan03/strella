import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-[var(--radius-card)] border transition-[border-color,background-color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
  {
    variants: {
      variant: {
        surface: "border-line bg-surface",
        raised: "border-line bg-raised",
        glass: [
          "border-white/10 bg-white/[0.04]",
          "backdrop-blur-md",
          "shadow-[0_16px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.12)]",
        ],
        light: "border-paper-2 bg-paper",
      },
      hover: {
        none: "",
        lift: [
          "hover:-translate-y-1",
          "hover:border-olive/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]",
        ],
        glow: [
          "hover:border-olive/50",
          "hover:shadow-[0_0_0_1px_var(--color-olive-glow),0_20px_50px_rgba(0,0,0,0.45)]",
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

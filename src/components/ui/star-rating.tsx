import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  size?: "sm" | "md";
}

export function StarRating({
  value = 5,
  max = 5,
  size = "sm",
  className,
  ...props
}: StarRatingProps) {
  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      role="img"
      aria-label={`Rated ${value} out of ${max} stars`}
      {...props}
    >
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "fill-olive text-olive",
            size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"
          )}
          strokeWidth={1.5}
          aria-hidden
        />
      ))}
    </div>
  );
}

import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Rating value — supports half/partial values (e.g. 4.6). */
  value?: number;
  max?: number;
  size?: "sm" | "md" | "lg";
}

/**
 * StarRating — realistic rating display with partial-star fills. Each
 * star is an olive gradient that fills left-to-right by value; the
 * remainder is a quiet outline. Accessible via aria-label with the
 * exact value.
 */
export function StarRating({
  value = 5,
  max = 5,
  size = "md",
  className,
  ...props
}: StarRatingProps) {
  const clamped = Math.max(0, Math.min(max, value));
  const dims =
    size === "sm" ? "h-4 w-4" : size === "lg" ? "h-6 w-6" : "h-5 w-5";

  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      role="img"
      aria-label={`Rated ${clamped.toFixed(1)} out of ${max} stars`}
      {...props}
    >
      {Array.from({ length: max }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, clamped - i));
        const isFull = fill >= 1;
        const isPartial = fill > 0 && fill < 1;
        return (
          <span
            key={i}
            className={cn("relative inline-block", dims)}
            aria-hidden
          >
            {/* Quiet outline base */}
            <Star
              className={cn(
                "absolute inset-0",
                dims,
                isFull
                  ? "fill-olive-bright text-olive-bright"
                  : "fill-transparent text-ink-3"
              )}
              strokeWidth={1.5}
            />
            {/* Partial fill overlay */}
            {isPartial && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <Star
                  className={cn(
                    "fill-olive-bright text-olive-bright",
                    dims
                  )}
                  strokeWidth={1.5}
                />
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}

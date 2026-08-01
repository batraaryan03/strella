import * as React from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";

interface SectionHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow?: string;
  index?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  /** Optional action slot (button / link) pinned to the far right. */
  action?: React.ReactNode;
}

/**
 * Editorial section header — the "eyebrow + headline + copy" pattern
 * used across Apple / Stripe / Linear style pages.
 */
export function SectionHeader({
  eyebrow,
  index,
  title,
  description,
  align = "left",
  action,
  className,
  ...props
}: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        action && "lg:flex-row lg:items-end lg:justify-between",
        className
      )}
      {...props}
    >
      <div className={cn("flex flex-col gap-5", centered && "items-center text-center")}>
        {eyebrow && <Eyebrow index={index}>{eyebrow}</Eyebrow>}
        <h2
          className={cn(
            "text-balance text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.03em] text-ink",
            centered && "mx-auto"
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "max-w-[540px] text-base md:text-[1.0625rem] leading-[1.6] text-ink-2",
              centered && "mx-auto"
            )}
          >
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

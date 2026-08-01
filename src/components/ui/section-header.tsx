import * as React from "react";
import { cn } from "@/lib/utils";
import RevealText from "@/components/ui/reveal-text";

interface SectionHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow?: string;
  index?: string;
  /** String titles get the RevealText word-split; JSX renders as-is. */
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  /** Skip the word-split reveal for the title (plain h2). */
  plainTitle?: boolean;
  /** Optional action slot (button / link) pinned to the far right. */
  action?: React.ReactNode;
}

/**
 * Section header — clean grotesque headline with real scale,
 * a quiet sans kicker, and generous air. No serif accents,
 * no uppercase-mono micro-labels.
 */
export function SectionHeader({
  eyebrow,
  index,
  title,
  description,
  align = "left",
  plainTitle = false,
  action,
  className,
  ...props
}: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        action && "lg:flex-row lg:items-end lg:justify-between",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex flex-col gap-5",
          centered && "items-center text-center"
        )}
      >
        {(eyebrow || index) && (
          <p
            className={cn(
              "flex items-center gap-3 text-[0.8125rem] font-medium text-olive",
              centered && "justify-center"
            )}
          >
            {index && (
              <span className="font-mono text-[0.6875rem] text-ink-3">
                {index}
              </span>
            )}
            {eyebrow && (
              <>
                <span className="h-px w-6 bg-olive/60" aria-hidden />
                {eyebrow}
              </>
            )}
          </p>
        )}
        <h2
          className={cn(
            "text-balance font-serif text-[clamp(2.125rem,4.5vw,3.5rem)] font-normal leading-[1.05] tracking-[-0.02em] text-ink",
            centered && "mx-auto max-w-[22ch]"
          )}
        >
          {plainTitle || typeof title !== "string" ? (
            title
          ) : (
            <RevealText
              enableBlur
              baseRotation={2}
              blurStrength={4}
              containerClassName="font-inherit"
            >
              {title}
            </RevealText>
          )}
        </h2>
        {description && (
          <p
            className={cn(
              "max-w-[560px] text-base leading-[1.65] text-ink-2 md:text-[1.0625rem]",
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

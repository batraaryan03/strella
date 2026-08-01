import { type ComponentPropsWithoutRef, type ComponentType, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: ComponentType<{ className?: string }>;
  description: string;
  href: string;
  cta: string;
}

/**
 * BentoGrid — the real Magic UI bento layout.
 */
const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * BentoCard — the real Magic UI card: background layer, content that
 * lifts on hover, and a CTA that slides up from the bottom (desktop).
 */
const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-[var(--radius-card)]",
      "panel",
      className
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="p-4">
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10">
        <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
        <h3 className="text-xl font-medium text-neutral-700 dark:text-ink">
          {name}
        </h3>
        <p className="max-w-lg text-sm text-neutral-400 dark:text-ink-2">
          {description}
        </p>
      </div>

      <div className="pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:hidden">
        <a
          href={href}
          className="pointer-events-auto inline-flex items-center gap-1 p-0 text-sm font-medium text-olive-bright"
        >
          {cta}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>

    <div className="pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex">
      <a
        href={href}
        className="pointer-events-auto inline-flex items-center gap-1 p-0 text-sm font-medium text-olive-bright"
      >
        {cta}
        <ArrowUpRight className="h-4 w-4 rtl:rotate-180" />
      </a>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/5" />
  </div>
);

export { BentoCard, BentoGrid };

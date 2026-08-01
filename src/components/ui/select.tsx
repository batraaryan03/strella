import * as React from "react";
import { cn } from "@/lib/utils";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "flex h-11 w-full appearance-none rounded-[var(--radius-btn)] bg-surface-2 px-3.5 pr-9",
          "text-[0.875rem] text-ink",
          "shadow-[inset_0_1px_0_rgba(244,245,240,0.05),0_1px_2px_rgba(0,0,0,0.3)]",
          "transition-[background-color,box-shadow] duration-150",
          "hover:bg-raised",
          "focus:outline-none focus:bg-raised focus:ring-2 focus:ring-olive/30",
          "disabled:opacity-45 disabled:pointer-events-none",
          "bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2397a75a%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_0.9rem_center]",
          className
        )}
        {...props}
      >
        {children}
      </select>
    );
  }
);
Select.displayName = "Select";

export { Select };

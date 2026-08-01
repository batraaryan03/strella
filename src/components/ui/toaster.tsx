"use client";

import { Toaster as Sonner } from "sonner";

export function Toaster() {
  return (
    <Sonner
      theme="dark"
      position="bottom-center"
      toastOptions={{
        style: {
          background: "var(--color-raised)",
          border: "1px solid var(--color-line-strong)",
          color: "var(--color-ink)",
          borderRadius: "var(--radius-btn)",
          boxShadow: "0 12px 32px rgba(0,0,0,0.45)",
        },
        classNames: {
          title: "text-sm font-medium",
          description: "text-xs text-ink-2",
        },
      }}
    />
  );
}

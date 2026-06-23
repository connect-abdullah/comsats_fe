import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark" | "stat";
}

export function GlassCard({
  children,
  className,
  tone = "dark",
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-card p-6 shadow-soft",
        tone === "stat"
          ? "glass-stat"
          : tone === "dark"
            ? "glass"
            : "glass-light",
        className,
      )}
    >
      {children}
    </div>
  );
}

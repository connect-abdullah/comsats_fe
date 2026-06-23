import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
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
        tone === "dark" ? "glass" : "glass-light",
        className,
      )}
    >
      {children}
    </div>
  );
}

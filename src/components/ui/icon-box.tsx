import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconBoxProps {
  icon: LucideIcon;
  className?: string;
  variant?: "gradient" | "soft";
  size?: "md" | "lg";
}

export function IconBox({
  icon: Icon,
  className,
  variant = "soft",
  size = "md",
}: IconBoxProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-2xl",
        size === "lg" ? "h-16 w-16" : "h-12 w-12",
        variant === "gradient"
          ? "brand-gradient text-white shadow-glow"
          : "bg-purple/10 text-purple",
        className,
      )}
    >
      <Icon className={size === "lg" ? "h-7 w-7" : "h-6 w-6"} aria-hidden="true" />
    </span>
  );
}

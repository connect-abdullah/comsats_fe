import { cn } from "@/lib/utils";
import type { IconType } from "@/types";

interface SocialButtonProps {
  href: string;
  label: string;
  icon: IconType;
  variant?: "solid" | "glass";
  className?: string;
}

export function SocialButton({
  href,
  label,
  icon: Icon,
  variant = "solid",
  className,
}: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple/50 focus-visible:ring-offset-2",
        variant === "solid"
          ? "bg-white/90 text-purple shadow-soft hover:bg-white"
          : "glass text-white",
        className,
      )}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}

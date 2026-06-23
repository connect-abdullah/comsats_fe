import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonTone = "default" | "onDark" | "onPhoto";

interface PrimaryButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  type?: "button" | "submit";
  tone?: ButtonTone;
  onClick?: () => void;
  ariaLabel?: string;
}

const toneClasses: Record<ButtonTone, string> = {
  default:
    "bg-purple text-white shadow-[0_8px_24px_-4px_rgba(76,34,123,0.45)] hover:bg-purple-600 hover:shadow-[0_12px_32px_-4px_rgba(76,34,123,0.55)]",
  onDark:
    "bg-white text-purple shadow-[0_8px_24px_-4px_rgba(0,0,0,0.25)] hover:bg-white/95 hover:shadow-[0_12px_32px_-4px_rgba(0,0,0,0.3)]",
  onPhoto:
    "bg-white text-purple shadow-[0_8px_32px_-4px_rgba(0,0,0,0.35)] hover:bg-white/95",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-pill px-8 py-4 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple/50 focus-visible:ring-offset-2";

export function PrimaryButton({
  children,
  href,
  className,
  type = "button",
  tone = "default",
  onClick,
  ariaLabel,
}: PrimaryButtonProps) {
  const classes = cn(baseClasses, toneClasses[tone], className);

  if (href) {
    const isExternal = href.startsWith("http");
    const linkProps: ComponentProps<typeof Link> = { href };
    if (isExternal) {
      linkProps.target = "_blank";
      linkProps.rel = "noopener noreferrer";
    }
    return (
      <Link {...linkProps} aria-label={ariaLabel} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={classes}
    >
      {children}
    </button>
  );
}

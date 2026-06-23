import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonTone = "default" | "onDark" | "onPhoto" | "ghost";

interface SecondaryButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  tone?: ButtonTone;
  onClick?: () => void;
  ariaLabel?: string;
}

const toneClasses: Record<ButtonTone, string> = {
  default:
    "border-2 border-purple/30 bg-transparent text-purple hover:border-purple hover:bg-purple/5",
  onDark:
    "border-2 border-white/50 bg-transparent text-white hover:border-white hover:bg-white/10",
  onPhoto:
    "border-2 border-white/60 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 hover:border-white",
  ghost:
    "border border-line bg-white text-ink hover:border-purple/30 hover:bg-surface hover:text-purple",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-pill px-8 py-4 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple/40 focus-visible:ring-offset-2";

export function SecondaryButton({
  children,
  href,
  className,
  tone = "default",
  onClick,
  ariaLabel,
}: SecondaryButtonProps) {
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
    <button type="button" onClick={onClick} aria-label={ariaLabel} className={classes}>
      {children}
    </button>
  );
}

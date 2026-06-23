import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SecondaryButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "outline" | "ghost" | "light";
  onClick?: () => void;
  ariaLabel?: string;
}

const variants = {
  outline:
    "border border-purple/25 bg-white text-purple hover:border-purple/50 hover:bg-purple/5",
  ghost:
    "border border-line bg-surface text-ink hover:bg-white hover:shadow-soft",
  light:
    "border border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-pill px-7 py-3.5 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple/40 focus-visible:ring-offset-2";

export function SecondaryButton({
  children,
  href,
  className,
  variant = "outline",
  onClick,
  ariaLabel,
}: SecondaryButtonProps) {
  const classes = cn(baseClasses, variants[variant], className);

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

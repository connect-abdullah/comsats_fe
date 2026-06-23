import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  ariaLabel?: string;
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-pill brand-gradient px-7 py-3.5 text-base font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-10px_rgba(76,34,123,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple/60 focus-visible:ring-offset-2";

export function PrimaryButton({
  children,
  href,
  className,
  type = "button",
  onClick,
  ariaLabel,
}: PrimaryButtonProps) {
  if (href) {
    const isExternal = href.startsWith("http");
    const linkProps: ComponentProps<typeof Link> = { href };
    if (isExternal) {
      linkProps.target = "_blank";
      linkProps.rel = "noopener noreferrer";
    }
    return (
      <Link
        {...linkProps}
        aria-label={ariaLabel}
        className={cn(baseClasses, className)}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(baseClasses, className)}
    >
      {children}
    </button>
  );
}

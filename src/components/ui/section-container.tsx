import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
  innerClassName?: string;
  fullWidth?: boolean;
}

export function SectionContainer({
  children,
  id,
  className,
  innerClassName,
  fullWidth = false,
}: SectionContainerProps) {
  return (
    <section id={id} className={cn("section-pad scroll-mt-24", className)}>
      <div className={cn(fullWidth ? "w-full" : "container-cui", innerClassName)}>
        {children}
      </div>
    </section>
  );
}

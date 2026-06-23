import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  /** Animation duration in seconds (higher = slower). */
  duration?: number;
  /** Gap between items, e.g. "1.5rem". */
  gap?: string;
  className?: string;
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  duration = 40,
  gap = "1.5rem",
  className,
  pauseOnHover = true,
}: MarqueeProps) {
  const style = {
    "--marquee-duration": `${duration}s`,
    "--marquee-gap": gap,
  } as CSSProperties;

  return (
    <div
      className={cn(
        "w-full overflow-hidden",
        pauseOnHover && "marquee-paused",
        className,
      )}
    >
      <div className="marquee-track" style={{ ...style, gap }}>
        <div className="flex shrink-0" style={{ gap }}>
          {children}
        </div>
        <div className="flex shrink-0" style={{ gap }} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

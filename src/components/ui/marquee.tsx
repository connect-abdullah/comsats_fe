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
  /** Scroll direction: left = content moves right-to-left, right = left-to-right. */
  direction?: "left" | "right";
}

export function Marquee({
  children,
  duration = 40,
  gap = "1rem",
  className,
  pauseOnHover = true,
  direction = "left",
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
      style={style}
    >
      <div
        className={cn(
          "marquee-track",
          direction === "right" && "marquee-track-reverse",
        )}
        style={{ gap }}
      >
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

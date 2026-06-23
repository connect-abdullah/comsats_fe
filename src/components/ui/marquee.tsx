import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  duration?: number;
  gap?: string;
  className?: string;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  fade?: boolean;
}

export function Marquee({
  children,
  duration = 40,
  gap = "1.5rem",
  className,
  pauseOnHover = true,
  direction = "left",
  fade = false,
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
        fade && "marquee-fade",
        className,
      )}
    >
      <div
        className={cn(
          "marquee-track",
          direction === "right" && "marquee-track-reverse",
        )}
        style={{ ...style, gap }}
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

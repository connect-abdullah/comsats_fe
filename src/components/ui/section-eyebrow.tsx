import { cn } from "@/lib/utils";

interface SectionEyebrowProps {
  children: React.ReactNode;
  className?: string;
  tone?: "blue" | "light" | "purple";
}

export function SectionEyebrow({
  children,
  className,
  tone = "blue",
}: SectionEyebrowProps) {
  return (
    <span
      className={cn(
        "text-eyebrow block",
        tone === "light" && "text-white/75",
        tone === "blue" && "text-blue",
        tone === "purple" && "text-purple",
        className,
      )}
    >
      {children}
    </span>
  );
}

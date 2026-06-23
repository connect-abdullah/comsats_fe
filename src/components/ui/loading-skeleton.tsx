import { cn } from "@/lib/utils";

interface LoadingSkeletonProps {
  className?: string;
}

export function LoadingSkeleton({ className }: LoadingSkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-card bg-surface", className)}
      aria-hidden="true"
    />
  );
}

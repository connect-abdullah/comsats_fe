"use client";

import { useSyncExternalStore } from "react";
import CountUp from "@/components/CountUp";

interface StatCountUpProps {
  value: string;
  className?: string;
  duration?: number;
}

function parseStatValue(value: string) {
  const match = value.match(/^([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return null;

  const numericPart = match[1].replace(/,/g, "");
  const num = Number.parseFloat(numericPart);
  if (Number.isNaN(num)) return null;

  return {
    to: num,
    separator: match[1].includes(",") ? "," : "",
    suffix: match[2] ?? "",
  };
}

function subscribeToReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function StatCountUp({
  value,
  className,
  duration = 2,
}: StatCountUpProps) {
  const reduceMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  const parsed = parseStatValue(value);
  if (!parsed || reduceMotion) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span className={className}>
      <CountUp
        to={parsed.to}
        duration={duration}
        separator={parsed.separator}
      />
      {parsed.suffix}
    </span>
  );
}

"use client";

import { useEffect, useState } from "react";
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

export function StatCountUp({
  value,
  className,
  duration = 2,
}: StatCountUpProps) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

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

"use client";

import { useMemo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { PublicationMetric } from "@/types";

const CHART_COLORS = ["#4C227B", "#0F5EA6", "#6A3AA3", "#2D7CC4"];

interface PublicationBarChartProps {
  data: PublicationMetric[];
  className?: string;
}

interface ChartTooltipProps {
  active?: boolean;
  payload?: Array<{ payload: PublicationMetric & { shortName: string } }>;
}

function ChartTooltip({ active, payload }: ChartTooltipProps) {
  if (!active || !payload?.length) return null;
  const item = payload[0].payload;
  return (
    <div className="rounded-xl border border-line/60 bg-white px-4 py-3 shadow-lift">
      <p className="text-sm font-semibold text-ink">{item.department}</p>
      <p className="mt-1 text-lg font-bold text-purple">
        {item.count.toLocaleString()} publications
      </p>
    </div>
  );
}

function shortenDepartment(name: string) {
  return name.length > 22 ? `${name.slice(0, 20)}…` : name;
}

export function PublicationBarChart({
  data,
  className,
}: PublicationBarChartProps) {
  const chartData = useMemo(
    () =>
      [...data]
        .sort((a, b) => b.count - a.count)
        .map((item) => ({
          ...item,
          shortName: shortenDepartment(item.department),
        })),
    [data],
  );

  return (
    <div
      className={className}
      role="img"
      aria-label="Department publication output bar chart"
    >
      <ResponsiveContainer width="100%" height={420}>
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 8, right: 16, left: 8, bottom: 8 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            horizontal={false}
            stroke="var(--color-line)"
          />
          <XAxis
            type="number"
            tick={{ fill: "#5b5670", fontSize: 12 }}
            axisLine={{ stroke: "var(--color-line)" }}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="shortName"
            width={120}
            tick={{ fill: "#14111c", fontSize: 12, fontWeight: 500 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            content={<ChartTooltip />}
            cursor={{ fill: "rgba(76, 34, 123, 0.06)" }}
          />
          <Bar dataKey="count" radius={[0, 8, 8, 0]} animationDuration={1200}>
            {chartData.map((entry, index) => (
              <Cell
                key={entry.department}
                fill={CHART_COLORS[index % CHART_COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

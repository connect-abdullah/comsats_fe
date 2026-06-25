import type { Department, DegreeLevel } from "@/types";

export const departmentAccentStyles: Record<
  Department["accent"],
  { icon: string; badge: string; border: string }
> = {
  purple: {
    icon: "bg-purple/10 text-purple",
    badge: "bg-purple/10 text-purple",
    border: "border-purple/20",
  },
  blue: {
    icon: "bg-blue/10 text-blue",
    badge: "bg-blue/10 text-blue",
    border: "border-blue/20",
  },
  amber: {
    icon: "bg-amber-500/10 text-amber-700",
    badge: "bg-amber-500/10 text-amber-700",
    border: "border-amber-500/20",
  },
  emerald: {
    icon: "bg-emerald-500/10 text-emerald-700",
    badge: "bg-emerald-500/10 text-emerald-700",
    border: "border-emerald-500/20",
  },
  rose: {
    icon: "bg-rose-500/10 text-rose-700",
    badge: "bg-rose-500/10 text-rose-700",
    border: "border-rose-500/20",
  },
  indigo: {
    icon: "bg-indigo-500/10 text-indigo-700",
    badge: "bg-indigo-500/10 text-indigo-700",
    border: "border-indigo-500/20",
  },
  cyan: {
    icon: "bg-cyan-500/10 text-cyan-700",
    badge: "bg-cyan-500/10 text-cyan-700",
    border: "border-cyan-500/20",
  },
  teal: {
    icon: "bg-teal-500/10 text-teal-700",
    badge: "bg-teal-500/10 text-teal-700",
    border: "border-teal-500/20",
  },
};

export const degreeLevelCapsuleStyles: Record<DegreeLevel, string> = {
  BS: "bg-purple/10 text-purple",
  MS: "bg-blue/10 text-blue",
  PhD: "bg-ink/10 text-ink",
};

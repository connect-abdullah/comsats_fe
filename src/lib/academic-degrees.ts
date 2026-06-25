import type { AcademicDegree, DegreeLevel } from "@/types";

const LEVEL_ORDER: DegreeLevel[] = ["BS", "MS", "PhD"];

const MS_ABBREVIATIONS = new Set(["MS", "MBA", "MSPM"]);

function isAccreditationBadge(abbreviation: string) {
  return abbreviation.includes("Accredited") || abbreviation.includes("NBEAC");
}

export function getDegreeLevel(degree: AcademicDegree): DegreeLevel {
  const name = degree.name.toLowerCase();
  const rawAbbr = degree.abbreviation?.trim() ?? "";
  const abbr = isAccreditationBadge(rawAbbr) ? "" : rawAbbr.toUpperCase();

  if (name.includes("doctor") || name.includes("ph.d") || abbr === "PHD") {
    return "PhD";
  }

  if (name.includes("master") || MS_ABBREVIATIONS.has(abbr)) {
    return "MS";
  }

  return "BS";
}

export function getDepartmentLevels(degrees: AcademicDegree[]): DegreeLevel[] {
  const levels = new Set(degrees.map(getDegreeLevel));
  return LEVEL_ORDER.filter((level) => levels.has(level));
}

export function formatDepartmentShortName(name: string) {
  return name.replace(/^Department of /i, "");
}

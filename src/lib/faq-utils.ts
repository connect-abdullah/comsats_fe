import type { FaqItem, FaqSection, FaqTabId } from "@/types";

export function slugifyFaqId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

export function filterFaqs(items: FaqItem[], query: string): FaqItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return items;
  return items.filter(
    (item) =>
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q),
  );
}

export function filterFaqSections(
  sections: FaqSection[],
  query: string,
  sectionId?: string,
): FaqSection[] {
  const filtered = sections
    .filter((section) => !sectionId || section.id === sectionId)
    .map((section) => ({
      ...section,
      items: filterFaqs(section.items, query),
    }))
    .filter((section) => section.items.length > 0);
  return filtered;
}

export function getAllFaqIds(items: FaqItem[]): string[] {
  return items.map((item) => item.id);
}

export function getSectionFaqIds(sections: FaqSection[]): string[] {
  return sections.flatMap((section) => section.items.map((item) => item.id));
}

export function buildFaqShareUrl(
  basePath: string,
  tab: FaqTabId,
  faqId?: string,
): string {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const url = new URL(basePath, origin || "http://localhost");
  url.searchParams.set("tab", tab);
  if (faqId) url.hash = faqId;
  return url.toString();
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export function parseFaqTab(value: string | null): FaqTabId {
  if (value === "admission" || value === "scholarships") return value;
  return "general";
}

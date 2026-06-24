"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FAQAccordion } from "@/components/admissions/faq/faq-accordion";
import { FAQSearch } from "@/components/admissions/faq/faq-search";
import { FAQTabs } from "@/components/admissions/faq/faq-tabs";
import { ScholarshipCard } from "@/components/admissions/scholarship-card";
import { SectionContainer } from "@/components/ui/section-container";
import {
  ADMISSION_RELATED_FAQS,
  GENERAL_FAQS,
} from "@/constants/admissions/faq";
import { FAQ_TABS, SCHOLARSHIPS } from "@/constants/admissions/page";
import {
  filterFaqs,
  filterFaqSections,
  getAllFaqIds,
  getSectionFaqIds,
  parseFaqTab,
} from "@/lib/faq-utils";
import type { FaqTabId } from "@/types";

export function FaqContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [activeSection, setActiveSection] = useState("");
  const [openId, setOpenId] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    const hash = window.location.hash.slice(1);
    return hash || null;
  });
  const [openIds, setOpenIds] = useState<string[]>([]);

  const activeTab = parseFaqTab(searchParams.get("tab"));

  const updateTab = useCallback(
    (tab: FaqTabId) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", tab);
      router.replace(`/admissions/faq?${params.toString()}`, { scroll: false });
      setQuery("");
      setActiveSection("");
      setOpenId(null);
      setOpenIds([]);
    },
    [router, searchParams],
  );

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      setTimeout(
        () => el.scrollIntoView({ behavior: "smooth", block: "start" }),
        100,
      );
    }
  }, [activeTab]);

  const filteredGeneral = useMemo(
    () => filterFaqs(GENERAL_FAQS, query),
    [query],
  );

  const filteredSections = useMemo(
    () =>
      filterFaqSections(
        ADMISSION_RELATED_FAQS,
        query,
        activeSection || undefined,
      ),
    [query, activeSection],
  );

  const sectionFilters = ADMISSION_RELATED_FAQS.map((s) => ({
    id: s.id,
    label: s.title,
  }));

  const resultCount =
    activeTab === "general"
      ? filteredGeneral.length
      : activeTab === "admission"
        ? filteredSections.reduce((acc, s) => acc + s.items.length, 0)
        : SCHOLARSHIPS.length;

  const handleExpandAll = () => {
    if (activeTab === "general") {
      setOpenIds(getAllFaqIds(filteredGeneral));
      setOpenId(null);
    } else if (activeTab === "admission") {
      setOpenIds(getSectionFaqIds(filteredSections));
      setOpenId(null);
    }
  };

  const handleCollapseAll = () => {
    setOpenIds([]);
    setOpenId(null);
  };

  return (
    <>
      <FAQTabs tabs={FAQ_TABS} activeTab={activeTab} onTabChange={updateTab} />

      <SectionContainer className="bg-white">
        {activeTab !== "scholarships" && (
          <FAQSearch
            query={query}
            onQueryChange={setQuery}
            onExpandAll={handleExpandAll}
            onCollapseAll={handleCollapseAll}
            sectionFilters={
              activeTab === "admission" ? sectionFilters : undefined
            }
            activeSection={activeSection}
            onSectionChange={setActiveSection}
            resultCount={query ? resultCount : undefined}
            className="mb-10"
          />
        )}

        {activeTab === "general" && (
          <>
            {filteredGeneral.length === 0 ? (
              <EmptyState onReset={() => setQuery("")} />
            ) : (
              <FAQAccordion
                items={filteredGeneral}
                openId={openId}
                openIds={openIds}
                onOpenChange={(id) => {
                  setOpenIds([]);
                  setOpenId(id);
                  if (id) {
                    window.history.replaceState(null, "", `#${id}`);
                  }
                }}
                tab="general"
              />
            )}
          </>
        )}

        {activeTab === "admission" && (
          <>
            {filteredSections.length === 0 ? (
              <EmptyState
                onReset={() => {
                  setQuery("");
                  setActiveSection("");
                }}
              />
            ) : (
              <div className="space-y-12">
                {filteredSections.map((section) => (
                  <div key={section.id}>
                    <h2 className="mb-6 text-2xl font-bold text-ink">
                      {section.title}
                    </h2>
                    <FAQAccordion
                      items={section.items}
                      openId={openId}
                      openIds={openIds}
                      onOpenChange={(id) => {
                        setOpenIds([]);
                        setOpenId(id);
                        if (id) {
                          window.history.replaceState(null, "", `#${id}`);
                        }
                      }}
                      tab="admission"
                    />
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {activeTab === "scholarships" && (
          <div className="grid gap-8 lg:grid-cols-2">
            {SCHOLARSHIPS.map((scholarship) => (
              <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
            ))}
          </div>
        )}
      </SectionContainer>
    </>
  );
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="rounded-card border border-line/60 bg-surface px-8 py-16 text-center">
      <p className="text-lg font-semibold text-ink">No results found</p>
      <p className="mt-2 text-muted">
        Try adjusting your search or filter to find what you are looking for.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 rounded-pill bg-purple px-6 py-3 text-sm font-semibold text-white hover:bg-blue"
      >
        Reset search
      </button>
    </div>
  );
}

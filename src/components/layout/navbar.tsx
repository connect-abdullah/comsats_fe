"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Search, Menu, ChevronDown } from "lucide-react";
import { NAV_ITEMS } from "@/constants/navigation";
import { BrandLogo } from "@/components/ui/brand-logo";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";
import { MobileMenu } from "./mobile-menu";

function NavLink({ item, scrolled }: { item: NavItem; scrolled: boolean }) {
  const linkClass = cn(
    "rounded-pill px-3.5 py-2 text-sm font-medium transition-colors",
    scrolled
      ? "text-ink/80 hover:bg-purple/10 hover:text-purple"
      : "text-white/90 hover:bg-white/15 hover:text-white",
  );

  if (item.children) {
    return null;
  }

  return (
    <Link href={item.href ?? "#"} className={linkClass}>
      {item.label}
    </Link>
  );
}

function AboutDropdown({
  item,
  scrolled,
}: {
  item: NavItem;
  scrolled: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <li ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "inline-flex items-center gap-1 rounded-pill px-3.5 py-2 text-sm font-medium transition-colors",
          scrolled
            ? "text-ink/80 hover:bg-purple/10 hover:text-purple"
            : "text-white/90 hover:bg-white/15 hover:text-white",
        )}
      >
        {item.label}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>
      {open && item.children && (
        <ul
          role="menu"
          className="absolute left-0 top-full mt-2 min-w-[200px] overflow-hidden rounded-card border border-line bg-white py-2 shadow-lift"
        >
          {item.children.map((child) => (
            <li key={child.label} role="none">
              <Link
                href={child.href ?? "#"}
                role="menuitem"
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-purple/5 hover:text-purple"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center">
        <nav
          aria-label="Primary"
          className={cn(
            "flex items-center justify-between transition-all duration-[400ms] ease-out",
            scrolled
              ? "mt-3 w-[94%] rounded-pill border border-white/50 bg-white/50 px-4 py-2.5 shadow-lift backdrop-blur-2xl lg:w-[85%] lg:px-6"
              : "mt-0 w-full max-w-[1440px] border-b border-white/10 bg-transparent px-6 py-5 backdrop-blur-sm lg:px-12",
          )}
        >
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="COMSATS University Islamabad home"
          >
            <BrandLogo size={44} priority />
            <span className="flex flex-col leading-tight">
              <span
                className={cn(
                  "text-sm font-bold tracking-tight transition-colors sm:text-base",
                  scrolled ? "text-ink" : "text-white",
                )}
              >
                COMSATS <span className="max-[319px]:hidden">University </span>
                <span className="max-[424px]:hidden">Islamabad</span>
              </span>
              <span
                className={cn(
                  "text-[11px] font-medium transition-colors",
                  scrolled ? "text-muted" : "text-white/70",
                )}
              >
                Islamabad Campus
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 xl:flex">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <AboutDropdown
                  key={item.label}
                  item={item}
                  scrolled={scrolled}
                />
              ) : (
                <li key={item.label}>
                  <NavLink item={item} scrolled={scrolled} />
                </li>
              ),
            )}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Search"
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                scrolled
                  ? "bg-purple/10 text-purple hover:bg-purple/20"
                  : "border border-white/30 text-white hover:bg-white/10",
              )}
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full transition-colors xl:hidden",
                scrolled
                  ? "bg-purple/10 text-purple hover:bg-purple/20"
                  : "border border-white/30 text-white hover:bg-white/10",
              )}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

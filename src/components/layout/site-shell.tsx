import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { cn } from "@/lib/utils";

interface SiteShellProps {
  children: ReactNode;
  mainClassName?: string;
}

export function SiteShell({ children, mainClassName }: SiteShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className={cn("flex-1 overflow-x-hidden", mainClassName)}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://islamabad.comsats.edu.pk"),
  title: {
    default: "COMSATS University Islamabad — Islamabad Campus",
    template: "%s | COMSATS University Islamabad",
  },
  description:
    "COMSATS University Islamabad (Islamabad Campus) — empowering future leaders through innovation, research and world-class education. Explore programs, admissions, research and campus life.",
  keywords: [
    "COMSATS University Islamabad",
    "CUI Islamabad Campus",
    "university Pakistan",
    "admissions",
    "research",
    "engineering",
    "computer science",
  ],
  openGraph: {
    title: "COMSATS University Islamabad — Islamabad Campus",
    description:
      "Empowering future leaders through innovation, research and world-class education.",
    type: "website",
    locale: "en_US",
    siteName: "COMSATS University Islamabad",
  },
  twitter: {
    card: "summary_large_image",
    title: "COMSATS University Islamabad",
    description:
      "Empowering future leaders through innovation, research and world-class education.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${cormorant.variable} antialiased`}>
      <body className="min-h-screen bg-white text-ink">{children}</body>
    </html>
  );
}

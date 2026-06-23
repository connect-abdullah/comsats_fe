import {
  YoutubeIcon,
  InstagramIcon,
  FacebookIcon,
  XIcon,
} from "@/components/ui/brand-icons";
import type { NavDropdownItem, NavItem, SocialLink } from "@/types";

export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Academics", href: "#academics" },
  { label: "Admissions", href: "#admissions" },
];

export const ABOUT_DROPDOWN: NavDropdownItem[] = [
  { label: "News", href: "#news", description: "Latest university announcements" },
  { label: "Research", href: "#departments", description: "Faculty research and innovation" },
  { label: "Library", href: "#library", description: "Junaid Zaidi Library resources" },
  { label: "Healthcare", href: "#campus-life", description: "Campus wellness services" },
  { label: "Campus Life", href: "#campus-life", description: "Student life and community" },
];

/** Legacy flat list for mobile menu grouping */
export const MOBILE_NAV_SECTIONS = [
  { title: "Main", items: PRIMARY_NAV },
  { title: "About", items: ABOUT_DROPDOWN.map(({ label, href }) => ({ label, href })) },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "YouTube", href: "https://www.youtube.com", icon: YoutubeIcon },
  { label: "Instagram", href: "https://www.instagram.com", icon: InstagramIcon },
  { label: "Facebook", href: "https://www.facebook.com", icon: FacebookIcon },
  { label: "Twitter / X", href: "https://twitter.com", icon: XIcon },
];

export const CREDIBILITY_MARKERS = [
  "7 Campuses Nationwide",
  "HEC Recognized",
  "Research Excellence",
];

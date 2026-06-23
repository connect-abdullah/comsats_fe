import {
  YoutubeIcon,
  InstagramIcon,
  FacebookIcon,
  XIcon,
} from "@/components/ui/brand-icons";
import type { NavItem, SocialLink } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Academics", href: "#academics" },
  { label: "Admissions", href: "#admissions" },
  {
    label: "About",
    children: [
      { label: "News", href: "#news" },
      { label: "Research", href: "#departments" },
      { label: "Library", href: "#library" },
      { label: "Healthcare", href: "#campus-life" },
      { label: "Campus Life", href: "#campus-life" },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "YouTube", href: "https://www.youtube.com", icon: YoutubeIcon },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: InstagramIcon,
  },
  { label: "Facebook", href: "https://www.facebook.com", icon: FacebookIcon },
  { label: "Twitter / X", href: "https://twitter.com", icon: XIcon },
];

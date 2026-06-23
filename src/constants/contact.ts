import { MapPin, Mail, Phone, GraduationCap } from "lucide-react";
import type { ContactCard } from "@/types";

export const CONTACT_CARDS: ContactCard[] = [
  {
    icon: MapPin,
    label: "Location",
    value: "Park Road, Tarlai Kalan, Islamabad, Pakistan",
    href: "https://maps.google.com/?q=COMSATS+University+Islamabad",
  },
  {
    icon: Mail,
    label: "Email",
    value: "admissions@comsats.edu.pk",
    href: "mailto:admissions@comsats.edu.pk",
  },
  {
    icon: Phone,
    label: "Phone Number",
    value: "+92 51 90495032-5",
    href: "tel:+925190495032",
  },
  {
    icon: GraduationCap,
    label: "Admissions Contact",
    value: "+92 51 9247000-3",
    href: "tel:+9251924700",
  },
];

export const MAPS_EMBED_SRC =
  "https://www.google.com/maps?q=COMSATS%20University%20Islamabad%2C%20Park%20Road%2C%20Islamabad&output=embed";

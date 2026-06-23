import { MapPin, Mail, Phone, PhoneCall } from "lucide-react";
import type { ContactCard } from "@/types";

export const CONTACT_CARDS: ContactCard[] = [
  {
    icon: MapPin,
    title: "Campus Location",
    label: "Location",
    value: "Park Road, Chathha Bakhtawar, Islamabad, Capital Territory, Pakistan",
    href: "https://maps.google.com/?q=COMSATS+University+Islamabad",
    accent: "purple",
  },
  {
    icon: Mail,
    title: "Admissions Email",
    label: "Email",
    value: "admissions@comsats.edu.pk",
    meta: "Response SLA: 24 Hours",
    href: "mailto:admissions@comsats.edu.pk",
    accent: "blue",
  },
  {
    icon: Phone,
    title: "Registrar / General",
    label: "Phone",
    value: "+92 51 90495032-5",
    meta: "Mon to Fri, 8:30 AM - 4:30 PM",
    href: "tel:+925190495032",
    accent: "emerald",
  },
  {
    icon: PhoneCall,
    title: "Admissions Hotline",
    label: "Admissions",
    value: "+92 51 9247000-3",
    meta: "Dedicated candidate assistance desk",
    href: "tel:+9251924700",
    accent: "amber",
  },
];

export const MAPS_EMBED_SRC =
  "https://www.google.com/maps?q=COMSATS%20University%20Islamabad%2C%20Park%20Road%2C%20Islamabad&output=embed";

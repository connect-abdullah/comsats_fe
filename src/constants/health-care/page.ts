import {
  Activity,
  Ambulance,
  BedDouble,
  Brain,
  Droplets,
  Flame,
  HeartPulse,
  Pill,
  ShieldAlert,
  Stethoscope,
  Syringe,
  TestTube,
  Users,
  UserRound,
  Wind,
  Zap,
} from "lucide-react";
import type {
  AdmissionStat,
  CollaborationFeature,
  ResearchOpportunity,
  WhyChooseFeature,
} from "@/types";

export const HEALTH_CARE_HERO = {
  label: "Health Care",
  heading: "Your Trusted Medical Partner",
  description:
    "COMSATS University Islamabad is committed to the health, wellbeing, and safety of its students, faculty, and staff through accessible healthcare services, emergency support, wellness programs, and professional medical assistance.",
  primaryCta: { label: "Medical Services", href: "#healthcare-services" },
  secondaryCta: { label: "Emergency Support", href: "#emergency-support" },
};

export const HEALTH_CARE_STATS: AdmissionStat[] = [
  {
    value: "7069+",
    label: "Patients Served",
    helper: "Number of patients served during Fall 2023.",
    icon: HeartPulse,
  },
  {
    value: "2767+",
    label: "Faculty & Staff Patients",
    icon: UserRound,
  },
  {
    value: "4032+",
    label: "Student Patients",
    icon: Users,
  },
];

export const MEDICAL_CENTER = {
  label: "Medical Center",
  heading: "Inam-ul-Haq Medical Center",
  imageAlt: "Inam-ul-Haq Medical Center at COMSATS University Islamabad",
  paragraphs: [
    "The CUI Islamabad Campus Medical Centre was established in 2007 as a first-aid facility dedicated to serving students, faculty members, and employees.",
    "The center's mission is to provide effective healthcare services while ensuring the availability of essential and life-saving medical support for the university community.",
    "Essential medicines and emergency healthcare services are provided free of cost to students and employees, ensuring immediate medical assistance whenever needed.",
    "Over the years, the facility has expanded significantly and now operates with a dedicated healthcare team comprising medical officers, trained nursing staff, and paramedical professionals.",
  ],
};

export const MEDICAL_CENTER_CAPACITY: WhyChooseFeature[] = [
  {
    title: "3 Medical Officers",
    description:
      "Qualified healthcare professionals providing consultation and medical support.",
  },
  {
    title: "3 Trained Nurses",
    description: "Professional nursing support and patient care.",
  },
  {
    title: "2 Paramedical Staff",
    description: "Operational and emergency medical assistance.",
  },
  {
    title: "3 Observation Beds",
    description: "Short-term patient monitoring and observation.",
  },
  {
    title: "2 Ambulances",
    description:
      "Emergency transportation to tertiary-care hospitals when required.",
  },
];

export const HEALTHCARE_SERVICES: CollaborationFeature[] = [
  {
    title: "Consultation & Emergency Medication",
    description: "Medical consultation and essential emergency medicines.",
    icon: Stethoscope,
  },
  {
    title: "Vitals Monitoring",
    description: "Routine health monitoring and assessments.",
    icon: Activity,
  },
  {
    title: "Antiseptic Dressing",
    description: "Minor wound care and dressing services.",
    icon: Syringe,
  },
  {
    title: "ECG",
    description: "Electrocardiogram services for cardiac assessment.",
    icon: HeartPulse,
  },
  {
    title: "Trauma Management",
    description: "Support for minor trauma and injuries.",
    icon: ShieldAlert,
  },
  {
    title: "Burn Management",
    description: "Immediate first-aid treatment for burns.",
    icon: Flame,
  },
  {
    title: "Anaphylaxis Management",
    description: "Emergency response for allergic reactions.",
    icon: Pill,
  },
  {
    title: "Insect Bite Management",
    description: "Assessment and treatment of insect-related reactions.",
    icon: Zap,
  },
  {
    title: "Blood Sugar Testing (BSR)",
    description: "Random blood sugar testing using glucometer devices.",
    icon: TestTube,
  },
  {
    title: "Nebulization",
    description: "Respiratory support and breathing treatments.",
    icon: Wind,
  },
  {
    title: "Intravenous Rehydration (IV)",
    description: "Fluid replacement and hydration support.",
    icon: Droplets,
  },
];

export const EMERGENCY_SUPPORT = {
  heading: "Emergency Medical Support",
  description:
    "The Medical Centre is equipped to handle a variety of minor medical emergencies before referral to tertiary-care hospitals when necessary.",
  cases: [
    "Fainting & Unconsciousness",
    "Shortness of Breath (SOB)",
    "Minor Road Traffic Accidents",
    "Chest Pain (Initial First Aid)",
    "Dehydration",
    "Vomiting",
    "Allergic Reactions",
    "Minor Trauma Cases",
  ],
};

export const COUNSELLING_WELLNESS = {
  heading: "Counselling & Wellness Centre (CWC)",
  description:
    "The Counselling & Wellness Centre supports the emotional, psychological, and overall wellbeing of students and staff by promoting mental health awareness, personal development, and wellness initiatives.",
  futurePrograms: [
    "Student counselling",
    "Wellness workshops",
    "Mental health resources",
    "Personal development programs",
  ],
};

export const DENTAL_SERVICES: ResearchOpportunity = {
  title: "Dental Care Services",
  description:
    "Dental services are available to support the oral healthcare needs of the COMSATS community and provide access to basic dental consultation and treatment services.",
  icon: Stethoscope,
  accent: "blue",
};

export const AWARENESS_PROGRAMS = {
  heading: "Health Education & Awareness",
  description:
    "The Medical Centre regularly conducts healthcare awareness activities aimed at promoting healthy lifestyles and preventive healthcare practices.",
  programs: [
    "Health Awareness Campaigns",
    "Epidemic Prevention Sessions",
    "First Aid Training",
    "Student Health Workshops",
    "Staff Health Education Programs",
  ],
};

export const FACILITIES_RESOURCES: CollaborationFeature[] = [
  {
    title: "Emergency Medical Support",
    description: "Immediate response for campus medical emergencies.",
    icon: ShieldAlert,
  },
  {
    title: "Ambulance Services",
    description: "Emergency transportation when advanced care is required.",
    icon: Ambulance,
  },
  {
    title: "Observation Beds",
    description: "Short-term monitoring and recovery support on campus.",
    icon: BedDouble,
  },
  {
    title: "Preventive Healthcare",
    description: "Health screenings and preventive care initiatives.",
    icon: HeartPulse,
  },
  {
    title: "Wellness Programs",
    description: "Counselling, wellness, and mental health support.",
    icon: Brain,
  },
  {
    title: "First Aid Training",
    description: "Hands-on training for students and staff.",
    icon: Syringe,
  },
  {
    title: "Professional Medical Team",
    description: "Qualified doctors, nurses, and paramedical staff.",
    icon: Users,
  },
  {
    title: "Free Essential Medication",
    description: "Essential medicines provided at no cost to eligible members.",
    icon: Pill,
  },
];

export const HEALTH_CARE_FINAL_CTA = {
  heading: "Your Health Matters",
  description:
    "COMSATS University Islamabad remains committed to providing accessible healthcare services, wellness support, and emergency medical assistance to ensure a safe and healthy campus environment.",
  primaryCta: { label: "Explore Campus Life", href: "/campus-life" },
  secondaryCta: { label: "Contact Medical Center", href: "#" },
};

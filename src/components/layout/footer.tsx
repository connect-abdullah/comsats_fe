import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { FOOTER_COLUMNS, UNIVERSITY_INFO, COPYRIGHT } from "@/constants/shared/footer";
import { SOCIAL_LINKS } from "@/constants/shared/navigation";
import { BrandLogo } from "@/components/ui/brand-logo";
import { SocialButton } from "@/components/ui/social-button";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-x-0 top-0 h-1 brand-gradient" />
      <div className="container-cui py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* University info */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <BrandLogo size={48} />
              <span className="text-base font-bold leading-tight">
                {UNIVERSITY_INFO.name}
              </span>
            </div>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-blue-400"
                  aria-hidden="true"
                />
                <span>{UNIVERSITY_INFO.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-blue-400"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${UNIVERSITY_INFO.phone}`}
                  className="hover:text-white"
                >
                  {UNIVERSITY_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-blue-400"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${UNIVERSITY_INFO.admissionsEmail}`}
                  className="hover:text-white"
                >
                  {UNIVERSITY_INFO.admissionsEmail}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-blue-400"
                  aria-hidden="true"
                />
                <span>Admissions: {UNIVERSITY_INFO.admissionsPhone}</span>
              </li>
            </ul>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-2.5 text-sm text-white/70">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Follow Us
          </h3>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <SocialButton
                key={social.label}
                href={social.href}
                label={social.label}
                icon={social.icon}
                variant="glass"
                className="border-white/20 bg-white/10"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-cui py-6">
          <p className="text-center text-sm text-white/60">{COPYRIGHT}</p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import company from "@/data/company.json";
import { NAV_LINKS } from "@/lib/site";
import { PRODUCTS } from "@/lib/products";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink-900 text-bone-200">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-sun-gradient" aria-hidden />

      <div className="container-page grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <div className="lg:col-span-4">
          <Logo inverted static />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-bone-200/65">
            {company.description}
          </p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/12 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-sun-300">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
            ISO 9001:2015
          </p>
        </div>

        <div className="lg:col-span-2">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-200/45">
            Navigate
          </h3>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="focus-ring rounded text-sm text-bone-200/75 transition-colors hover:text-sun-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-200/45">
            Products
          </h3>
          <ul className="mt-4 space-y-2.5">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/products/${p.slug}`}
                  className="focus-ring rounded text-sm text-bone-200/75 transition-colors hover:text-sun-300"
                >
                  {p.name}
                  <span className="ml-1.5 text-bone-200/35">— {p.subtitle}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-200/45">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-4 text-sm">
            {company.addresses.map((a) => (
              <li key={a.type} className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sun-400" aria-hidden />
                <span className="text-bone-200/70">
                  <span className="block text-[11px] uppercase tracking-wider text-bone-200/40">
                    {a.type}
                  </span>
                  {a.line1}, {a.line2}, {a.city} — {a.postal}, {a.state}
                </span>
              </li>
            ))}
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sun-400" aria-hidden />
              <span className="flex flex-col gap-1">
                <a
                  href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
                  className="focus-ring rounded text-bone-200/75 hover:text-sun-300"
                >
                  {company.contact.phone}
                </a>
                <a
                  href={`tel:${company.contact.phoneAlt.replace(/\s/g, "")}`}
                  className="focus-ring rounded text-bone-200/75 hover:text-sun-300"
                >
                  {company.contact.phoneAlt}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sun-400" aria-hidden />
              <a
                href={`mailto:${company.contact.email}`}
                className="focus-ring break-all rounded text-bone-200/75 hover:text-sun-300"
              >
                {company.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-[12px] text-bone-200/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.1em]">
            GSTIN {company.registration.gstin}
          </p>
        </div>
      </div>
    </footer>
  );
}

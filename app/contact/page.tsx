import type { Metadata } from "next";
import { Suspense } from "react";
import { Building2, Factory, Mail, Phone, Printer } from "lucide-react";
import company from "@/data/company.json";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { EnquiryForm } from "@/components/contact/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact — Request a quote or a sample",
  description:
    "Request a quote, a sample or a batch certificate of analysis from Sunshine Agro Products — offices in Chennai and a manufacturing unit at Erode.",
};

export default function ContactPage() {
  const [office, plant] = company.addresses;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you are formulating."
        lead="Pricing, samples, certificates of analysis or a plant visit — the fastest route is the form below or a WhatsApp message. We answer in Tamil or English."
        image="/images/facility/container-stuffing.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="bg-bone-100 py-16 dark:bg-ink-900 sm:py-24">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16">
          <div className="min-w-0">
            <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink-900 dark:text-bone-100">
              Send an enquiry
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-500 dark:text-bone-200/70">
              The more you tell us about species, inclusion rate and pack size, the more
              useful the first reply will be.
            </p>
            <div className="mt-8">
              <Suspense
                fallback={
                  <div className="card h-[560px] animate-pulse bg-bone-200/60 dark:bg-ink-800" />
                }
              >
                <EnquiryForm />
              </Suspense>
            </div>
          </div>

          <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <Reveal className="card p-6">
              <p className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-sun-600 dark:text-sun-300">
                <Phone className="h-3.5 w-3.5" aria-hidden />
                Speak to us
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  { label: "Mobile", value: company.contact.phone },
                  { label: "Mobile", value: company.contact.phoneAlt },
                  { label: "Mobile", value: company.contact.phoneAlt2 },
                  { label: "Landline", value: company.contact.landline },
                  { label: "Landline", value: company.contact.landlineAlt },
                ].map((row, i) => (
                  <li key={`${row.value}-${i}`} className="flex items-baseline gap-3">
                    <span className="w-16 shrink-0 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-400 dark:text-bone-200/40">
                      {row.label}
                    </span>
                    <a
                      href={`tel:${row.value.replace(/\s/g, "")}`}
                      className="focus-ring rounded font-medium text-ink-800 transition-colors hover:text-sun-600 dark:text-bone-100 dark:hover:text-sun-300"
                    >
                      {row.value}
                    </a>
                  </li>
                ))}
                <li className="flex items-baseline gap-3 border-t border-ink-100 pt-3 dark:border-ink-700">
                  <span className="w-16 shrink-0 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-400 dark:text-bone-200/40">
                    Email
                  </span>
                  <a
                    href={`mailto:${company.contact.email}`}
                    className="focus-ring break-all rounded font-medium text-ink-800 transition-colors hover:text-sun-600 dark:text-bone-100 dark:hover:text-sun-300"
                  >
                    {company.contact.email}
                  </a>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.06} className="card p-6">
              <p className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-sun-600 dark:text-sun-300">
                <Building2 className="h-3.5 w-3.5" aria-hidden />
                {office.type}
              </p>
              <address className="mt-3 not-italic text-sm leading-relaxed text-ink-600 dark:text-bone-200/70">
                {office.line1}
                <br />
                {office.line2}
                <br />
                {office.city} — {office.postal}
                <br />
                {office.state}, {office.country}
              </address>
            </Reveal>

            <Reveal delay={0.12} className="card p-6">
              <p className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-sun-600 dark:text-sun-300">
                <Factory className="h-3.5 w-3.5" aria-hidden />
                {plant.type}
              </p>
              <address className="mt-3 not-italic text-sm leading-relaxed text-ink-600 dark:text-bone-200/70">
                {plant.line1}
                <br />
                {plant.line2}
                <br />
                {plant.city} — {plant.postal}
                <br />
                {plant.state}, {plant.country}
              </address>
            </Reveal>

            <Reveal delay={0.18} className="rounded-2xl bg-ink-900 p-6 text-bone-200">
              <p className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-sun-300">
                <Printer className="h-3.5 w-3.5" aria-hidden />
                Registration
              </p>
              <dl className="mt-4 space-y-3 text-[13px]">
                <div>
                  <dt className="text-bone-200/45">GSTIN</dt>
                  <dd className="font-mono text-bone-100">{company.registration.gstin}</dd>
                </div>
                <div>
                  <dt className="text-bone-200/45">Quality system</dt>
                  <dd className="text-bone-100">{company.registration.iso}</dd>
                </div>
                <div>
                  <dt className="text-bone-200/45">Trade mark</dt>
                  <dd className="text-bone-100">{company.registration.trademark}</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.24} className="card overflow-hidden">
              <iframe
                title="Map showing the Sunshine Agro Products registered office at Tondiarpet, Chennai"
                src="https://www.openstreetmap.org/export/embed.html?bbox=80.2650%2C13.1150%2C80.3050%2C13.1450&layer=mapnik&marker=13.13%2C80.285"
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex items-center justify-between gap-3 p-4">
                <p className="text-[12.5px] text-ink-400 dark:text-bone-200/50">
                  Registered office, Tondiarpet, Chennai
                </p>
                <a
                  href="https://www.openstreetmap.org/?mlat=13.13&mlon=80.285#map=15/13.13/80.285"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="focus-ring shrink-0 rounded text-[12.5px] font-medium text-sun-600 underline underline-offset-4 dark:text-sun-300"
                >
                  Open map
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-ink-100 bg-bone-200 py-14 dark:border-ink-700 dark:bg-ink-800">
        <div className="container-page flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-xl font-bold text-ink-900 dark:text-bone-100">
              Prefer to just write to us?
            </h2>
            <p className="mt-1.5 text-sm text-ink-500 dark:text-bone-200/65">
              We read every message that reaches this address.
            </p>
          </div>
          <a
            href={`mailto:${company.contact.email}`}
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-bone-100 transition-colors hover:bg-ink-700 dark:bg-bone-100 dark:text-ink-900 dark:hover:bg-bone-300"
          >
            <Mail className="h-4 w-4" aria-hidden />
            {company.contact.email}
          </a>
        </div>
      </section>
    </>
  );
}

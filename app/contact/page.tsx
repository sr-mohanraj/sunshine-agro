import type { Metadata } from "next";
import { Suspense } from "react";
import company from "@/data/company.json";
import { telHref } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { EnquiryForm } from "@/components/contact/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Contact Sunshine Agro Products in Chennai or at our Erode unit. Phone numbers, email, addresses and an enquiry form.",
};

const mapsLink = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export default function ContactPage() {
  const { addresses, contact } = company;

  return (
    <>
      <PageHeader
        title="Contact us"
        lead="For prices, orders and product details, call us or send an enquiry."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-12">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="min-w-0">
            <h2 className="mb-4 text-xl font-semibold">Send an enquiry</h2>
            <Suspense fallback={<div className="h-[440px] rounded-md border border-ink-100 bg-bone-200" />}>
              <EnquiryForm />
            </Suspense>
          </div>

          <div className="space-y-6 text-sm text-ink-700">
            <div>
              <h2 className="mb-2 text-xl font-semibold">Phone and email</h2>
              <p className="text-ink-400">Mobile</p>
              <ul>
                {contact.mobiles.map((n) => (
                  <li key={n}>
                    <a href={telHref(n)} className="link inline-block py-1.5">
                      {n}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-ink-400">Email</p>
              <a href={`mailto:${contact.email}`} className="link inline-block break-all py-1.5">
                {contact.email}
              </a>
            </div>

            {[addresses.office, addresses.plant].map((a) => (
              <address key={a.label} className="not-italic">
                <h2 className="mb-2 text-xl font-semibold">{a.label}</h2>
                {a.lines.map((l) => (
                  <p key={l}>{l}</p>
                ))}
                <a
                  href={mapsLink(`${a.street}, ${a.city} ${a.postal}`)}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link inline-block py-1.5"
                >
                  View on Google Maps
                </a>
              </address>
            ))}

            <p className="text-ink-400">GSTIN {company.gstin}</p>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { CertificateCard } from "@/components/CertificateCard";
import { PageHeader } from "@/components/PageHeader";
import { CERTIFICATES } from "@/lib/products";

export const metadata: Metadata = {
  title: "Quality and certificates",
  description:
    "Certificates held by Sunshine Agro Products: ISO 9001:2015, GMP+, FAMI-QS, GMP, HACCP and Halal, with the trade mark registration and a lab report.",
};

export default function QualityPage() {
  return (
    <>
      <PageHeader
        title="Quality and certificates"
        lead="Copies of the certificates held by Sunshine Agro Products. Select a certificate image to open the PDF."
        crumbs={[{ label: "Home", href: "/" }, { label: "Quality" }]}
      />

      <section className="py-12">
        <div className="container-page">
          <h2 className="text-2xl font-semibold md:text-3xl">Certificates</h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {CERTIFICATES.map((c) => (
              <CertificateCard key={c.id} cert={c} />
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm text-ink-500">
            Each certificate stays valid subject to the surveillance audits stated on it. The certificate
            numbers can be checked with the issuing bodies at the addresses shown on each certificate.
          </p>
        </div>
      </section>

      <section className="bg-bone-200 py-12">
        <div className="container-page">
          <h2 className="text-2xl font-semibold md:text-3xl">Other documents</h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <article id="trade-mark" className="flex scroll-mt-24 gap-4 rounded-md border border-ink-100 bg-white p-4">
              <a
                href="/docs/trade-mark-registration.pdf"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Open the trade mark registration certificate as a PDF"
                className="focus-ring block w-28 shrink-0 self-start sm:w-36"
              >
                <Image
                  src="/images/certificates/trade-mark.jpg"
                  alt="Trade mark registration certificate"
                  width={550}
                  height={778}
                  sizes="144px"
                  className="h-auto w-full border border-ink-100"
                />
              </a>
              <div className="min-w-0 text-sm">
                <h3 className="text-lg font-semibold">Trade mark registration</h3>
                <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
                  <dt className="text-ink-400">Trade mark</dt>
                  <dd>Nutrimins (DMM) Dried Minerals Mix, with logo</dd>
                  <dt className="text-ink-400">Number</dt>
                  <dd>4064646, Class 31 (certificate no. 2228525)</dd>
                  <dt className="text-ink-400">Application date</dt>
                  <dd>23 January 2019</dd>
                  <dt className="text-ink-400">Certificate sealed</dt>
                  <dd>16 July 2019, Trade Marks Registry, Mumbai</dd>
                  <dt className="text-ink-400">Registered in the name of</dt>
                  <dd>S N Senthil Kumar (single firm)</dd>
                </dl>
                <p className="mt-3">
                  <a href="/docs/trade-mark-registration.pdf" target="_blank" rel="noreferrer noopener" className="link inline-block py-1.5">
                    Open PDF
                  </a>
                </p>
              </div>
            </article>

            <article id="lab-report" className="flex scroll-mt-24 gap-4 rounded-md border border-ink-100 bg-white p-4">
              <a
                href="/images/certificates/tanuvas-coa-2019.jpg"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Open the TANUVAS certificate of analysis"
                className="focus-ring block w-28 shrink-0 self-start sm:w-36"
              >
                <Image
                  src="/images/certificates/tanuvas-coa-2019.jpg"
                  alt="TANUVAS certificate of analysis for Nutrimins (DMM)"
                  width={550}
                  height={762}
                  sizes="144px"
                  className="h-auto w-full border border-ink-100"
                />
              </a>
              <div className="min-w-0 text-sm">
                <h3 className="text-lg font-semibold">Certificate of analysis</h3>
                <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
                  <dt className="text-ink-400">Laboratory</dt>
                  <dd>Animal Feed Analytical and Quality Assurance Laboratory, Veterinary College and Research Institute, TANUVAS, Namakkal</dd>
                  <dt className="text-ink-400">Lab ref. no.</dt>
                  <dd>21772</dd>
                  <dt className="text-ink-400">Report date</dt>
                  <dd>29 January 2019</dd>
                  <dt className="text-ink-400">Sample</dt>
                  <dd>Nutrimins (DMM), cattle feed</dd>
                </dl>
                <p className="mt-3">
                  The laboratory states that its results relate only to the item tested. Aflatoxins B1, B2, G1
                  and G2, ochratoxin, T-2 toxin, citrinin and zearalenone were not detected in this sample.
                </p>
                <p className="mt-3">
                  <a href="/images/certificates/tanuvas-coa-2019.jpg" target="_blank" rel="noreferrer noopener" className="link inline-block py-1.5">
                    Open full report
                  </a>
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

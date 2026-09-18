import Image from "next/image";
import type { Certificate } from "@/lib/types";

export function CertificateCard({ cert }: { cert: Certificate }) {
  return (
    <article id={cert.id} className="flex scroll-mt-24 gap-4 rounded-md border border-ink-100 bg-white p-4">
      <a
        href={cert.pdf}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`Open the ${cert.title} certificate as a PDF`}
        className="focus-ring block w-28 shrink-0 self-start sm:w-36"
      >
        <Image
          src={cert.image}
          alt={`${cert.title} certificate`}
          width={550}
          height={771}
          sizes="144px"
          className="h-auto w-full border border-ink-100"
        />
      </a>

      <div className="min-w-0 text-sm">
        <h3 className="text-lg font-semibold">{cert.title}</h3>
        {cert.subtitle && <p className="text-ink-500">{cert.subtitle}</p>}

        <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
          <dt className="text-ink-400">Issued by</dt>
          <dd>{cert.issuer}</dd>
          <dt className="text-ink-400">Number</dt>
          <dd className="break-all">{cert.number}</dd>
          <dt className="text-ink-400">Issued</dt>
          <dd>{cert.issued}</dd>
          <dt className="text-ink-400">Valid until</dt>
          <dd>{cert.validUntil}</dd>
        </dl>

        <p className="mt-3">
          <span className="font-semibold text-ink-900">Scope: </span>
          {cert.scope}
        </p>

        <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
          <a href={cert.pdf} target="_blank" rel="noreferrer noopener" className="link inline-block py-1.5">
            Open PDF
          </a>
          <a href={cert.verify.url} target="_blank" rel="noreferrer noopener" className="link inline-block py-1.5">
            Verify at {cert.verify.label}
          </a>
        </p>
      </div>
    </article>
  );
}

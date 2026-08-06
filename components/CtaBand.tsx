import { ArrowRight, Mail, Phone } from "lucide-react";
import company from "@/data/company.json";
import { Button } from "./ui/Button";
import { Reveal } from "./Reveal";

export function CtaBand({
  title = "Send us your target analysis. We will send back a sample.",
  lead = "Tell us the species, the inclusion rate you are working to and your pack size. We will quote against it and ship a trial quantity from the Erode plant.",
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <section className="grain relative overflow-hidden bg-ink-900 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-sun-radial" aria-hidden />

      <div className="container-page relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(1.75rem,4.2vw,2.9rem)] font-extrabold leading-[1.08] tracking-[-0.025em] text-bone-100">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-bone-200/70">
            {lead}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact?intent=enquiry" size="lg">
              Request a quote
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button
              href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
              size="lg"
              variant="outlineOnDark"
              external
            >
              <Phone className="h-4 w-4" aria-hidden />
              {company.contact.phone}
            </Button>
          </div>

          <a
            href={`mailto:${company.contact.email}`}
            className="focus-ring mt-6 inline-flex items-center gap-2 rounded text-sm text-bone-200/55 transition-colors hover:text-sun-300"
          >
            <Mail className="h-4 w-4" aria-hidden />
            {company.contact.email}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

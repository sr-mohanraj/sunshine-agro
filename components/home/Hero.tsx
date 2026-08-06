import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import company from "@/data/company.json";
import { Button } from "@/components/ui/Button";

const MARKERS = [
  { k: "Est.", v: "2003" },
  { k: "Capacity", v: "100 MT / day" },
  { k: "Crude protein", v: "40 % min" },
  { k: "S. cerevisiae", v: "35 × 10³ cfu/g" },
];

export function Hero() {
  return (
    <section className="grain relative isolate overflow-hidden bg-ink-900">
      {/* Production-floor photograph, heavily darkened so it reads as texture
          behind the type rather than competing with it. */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/facility/blending-hall.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="animate-ken-burns object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-900/85 to-ink-900/55" />
        <div className="absolute inset-0 bg-sun-radial" />
      </div>

      <div className="container-page relative flex min-h-[92svh] flex-col justify-end pb-14 pt-36 sm:min-h-[88svh] sm:pb-20 sm:pt-40 lg:pb-24">
        <div className="max-w-4xl animate-fade-up">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-sun-300 backdrop-blur-sm">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
            ISO 9001:2015 certified manufacturer
          </p>

          <h1 className="font-display text-[clamp(2.4rem,7vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.035em] text-bone-100">
            Inactive dried yeast,
            <br />
            <span className="text-gradient-sun">grown on molasses.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-bone-200/75 sm:text-lg">
            Since 2003 we have manufactured specialised feed supplements for aqua,
            poultry, swine and livestock nutrition — <em className="not-italic text-bone-100">100%
            Saccharomyces cerevisiae</em>, spray-dried at our Erode plant and shipped in
            25 kg lined bags to feed millers and farms across India.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="/products" size="lg">
              View the product range
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button href="/contact?intent=enquiry" size="lg" variant="outlineOnDark">
              Talk to us
            </Button>
          </div>
        </div>

        {/* Spec markers: the numbers a feed formulator actually scans for. */}
        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:mt-16 lg:grid-cols-4">
          {MARKERS.map((m) => (
            <div key={m.k} className="bg-ink-900/70 px-5 py-5 backdrop-blur-sm sm:px-6 sm:py-6">
              <dt className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-bone-200/45">
                {m.k}
              </dt>
              <dd className="mt-1.5 font-display text-lg font-bold text-bone-100 sm:text-xl">
                {m.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <p className="sr-only">{company.positioning}</p>
    </section>
  );
}

"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, MessageCircle, Send } from "lucide-react";
import company from "@/data/company.json";
import { PRODUCTS } from "@/lib/products";

const SPECIES_OPTIONS = [
  "Shrimp / Prawns",
  "Fish",
  "Poultry",
  "Swine",
  "Cattle",
  "Pet food",
  "Other",
];

/**
 * The site is statically hosted, so the form has no server to post to. Instead
 * it composes a complete, well-formatted enquiry and hands it to the visitor's
 * own mail client or WhatsApp — nothing is silently dropped, and the sender
 * keeps a copy in their sent items.
 */
export function EnquiryForm() {
  const params = useSearchParams();
  const [product, setProduct] = useState(params.get("product") ?? "");
  const [name, setName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [species, setSpecies] = useState("");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");

  const selectedProduct = PRODUCTS.find((p) => p.slug === product);
  const subject = selectedProduct
    ? `Enquiry — ${selectedProduct.name} (${selectedProduct.subtitle})`
    : "Product enquiry — Sunshine Agro Products";

  const body = [
    `Name: ${name || "—"}`,
    `Organisation: ${organisation || "—"}`,
    `Phone: ${phone || "—"}`,
    `Email: ${email || "—"}`,
    "",
    `Product of interest: ${selectedProduct?.name ?? "Not specified"}`,
    `Species / application: ${species || "—"}`,
    `Indicative quantity: ${quantity || "—"}`,
    "",
    "Message:",
    message || "—",
  ].join("\n");

  const mailto = `mailto:${company.contact.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  const whatsapp = `https://wa.me/${company.contact.whatsapp}?text=${encodeURIComponent(
    `${subject}\n\n${body}`
  )}`;

  return (
    <form
      className="card p-6 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailto;
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" required>
          <input
            className="form-input"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            placeholder="Full name"
          />
        </Field>

        <Field label="Organisation">
          <input
            className="form-input"
            value={organisation}
            onChange={(e) => setOrganisation(e.target.value)}
            autoComplete="organization"
            placeholder="Feed mill, farm or trading company"
          />
        </Field>

        <Field label="Phone" required>
          <input
            className="form-input"
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
            placeholder="+91 …"
          />
        </Field>

        <Field label="Email">
          <input
            className="form-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            placeholder="you@company.com"
          />
        </Field>

        <Field label="Product of interest">
          <select
            className="form-input"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          >
            <option value="">Not sure yet — advise me</option>
            {PRODUCTS.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name} — {p.subtitle}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Species / application">
          <select
            className="form-input"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
          >
            <option value="">Select…</option>
            {SPECIES_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Indicative quantity" className="sm:col-span-2">
          <input
            className="form-input"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="e.g. 5 MT per month, or 20 × 25 kg bags for a trial"
          />
        </Field>

        <Field label="Message" className="sm:col-span-2">
          <textarea
            className="form-input min-h-[120px] resize-y py-3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Target inclusion rate, pack size, delivery location, or anything else we should know."
          />
        </Field>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="submit"
          className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-sun-gradient px-6 py-3 text-sm font-semibold text-ink-900 shadow-[0_6px_20px_-6px_rgba(242,106,33,0.6)] transition-[filter] hover:brightness-105"
        >
          <Send className="h-4 w-4" aria-hidden />
          Send enquiry by email
        </button>
        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer noopener"
          className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-ink-900/20 px-6 py-3 text-sm font-semibold text-ink-800 transition-colors hover:border-sun-500 hover:text-sun-600 dark:border-white/25 dark:text-bone-200 dark:hover:border-sun-400 dark:hover:text-sun-300"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          Send on WhatsApp
        </a>
      </div>

      {/* Normal flow, not flex: as a flex row the trailing link became its own
          column and jumped ahead of the sentence it belongs to. */}
      <p className="mt-4 text-[12.5px] leading-relaxed text-ink-400 dark:text-bone-200/50">
        <Mail className="mr-1.5 inline h-3.5 w-3.5 -translate-y-px" aria-hidden />
        Both buttons open your own mail app or WhatsApp with this enquiry filled in, so
        you keep a copy of what you sent. Prefer to write directly?{" "}
        <a
          href={`mailto:${company.contact.email}`}
          className="focus-ring rounded font-medium text-sun-600 underline underline-offset-4 dark:text-sun-300"
        >
          {company.contact.email}
        </a>
      </p>
    </form>
  );
}

function Field({
  label,
  children,
  required,
  className,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-1.5 block font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-400 dark:text-bone-200/45">
        {label}
        {required && <span className="ml-1 text-sun-600 dark:text-sun-300">*</span>}
      </span>
      {children}
    </label>
  );
}

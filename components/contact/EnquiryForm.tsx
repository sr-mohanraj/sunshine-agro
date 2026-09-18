"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import company from "@/data/company.json";
import { PRODUCTS } from "@/lib/products";

/**
 * The site has no server, so the form builds the enquiry text and opens the
 * visitor's own email app or WhatsApp with it filled in.
 */
export function EnquiryForm() {
  const params = useSearchParams();
  const [name, setName] = useState("");
  const [company_, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState(params.get("product") ?? "");
  const [message, setMessage] = useState("");

  const selected = PRODUCTS.find((p) => p.slug === product);
  const subject = selected ? `Enquiry about ${selected.name}` : "Enquiry from the website";
  const body = [
    `Name: ${name}`,
    `Company: ${company_}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Product: ${selected ? selected.name : "Not selected"}`,
    "",
    message,
  ].join("\n");

  const mailto = `mailto:${company.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const whatsapp = `https://wa.me/${company.contact.whatsapp}?text=${encodeURIComponent(`${subject}\n\n${body}`)}`;

  return (
    <form
      className="rounded-md border border-ink-100 bg-white p-5 sm:p-6"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailto;
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" required>
          <input className="form-input" required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        </Field>
        <Field label="Company">
          <input className="form-input" value={company_} onChange={(e) => setCompany(e.target.value)} autoComplete="organization" />
        </Field>
        <Field label="Phone" required>
          <input className="form-input" required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" />
        </Field>
        <Field label="Email">
          <input className="form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
        </Field>
        <Field label="Product" className="sm:col-span-2">
          <select className="form-input" value={product} onChange={(e) => setProduct(e.target.value)}>
            <option value="">Select a product</option>
            {PRODUCTS.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Message" className="sm:col-span-2">
          <textarea
            className="form-input min-h-[120px] resize-y"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Quantity, pack size, delivery location"
          />
        </Field>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <button type="submit" className="btn btn-primary">
          Send by email
        </button>
        <a href={whatsapp} target="_blank" rel="noreferrer noopener" className="btn btn-outline">
          Send on WhatsApp
        </a>
      </div>
      <p className="mt-3 text-sm text-ink-400">
        These buttons open your email app or WhatsApp with the enquiry filled in. You can also write to{" "}
        <a href={`mailto:${company.contact.email}`} className="link">
          {company.contact.email}
        </a>
        .
      </p>
    </form>
  );
}

function Field({
  label,
  required,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-1 block text-sm font-medium text-ink-800">
        {label}
        {required && <span className="text-sun-700"> *</span>}
      </span>
      {children}
    </label>
  );
}

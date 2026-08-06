# Sunshine Agro Products — website

Marketing and product-catalogue site for Sunshine Agro Products, an ISO 9001:2015
certified manufacturer of inactive dried yeast and specialised feed supplements
for aqua, poultry, swine and livestock nutrition.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS and Framer Motion —
the same stack as the United Enterprises site, so the two projects stay
maintainable side by side.

## Running it

```bash
npm install
```

```bash
npm run dev
```

The dev server runs at http://localhost:3000. For a production build:

```bash
npm run build && npm run start
```

## How it is organised

| Path | What lives there |
| --- | --- |
| `app/` | Routes. One folder per page, plus `sitemap.ts` and `robots.ts`. |
| `app/products/[slug]/` | Product spec sheets, statically generated from `data/products.json`. |
| `components/` | Shared UI. `home/` holds homepage sections, `products/` the catalogue pieces. |
| `data/` | All copy that is really *data*: company details, the product range. |
| `lib/` | Site config, fonts, the product accessor and the category/species taxonomy. |
| `public/images/` | Product photography, plant photography, certificates, brand marks. |

### Editing content

Almost everything a non-developer would want to change lives in two JSON files:

- **`data/company.json`** — addresses, phone numbers, GSTIN, ISO certificate
  number, the proprietor's details, the homepage stat tiles.
- **`data/products.json`** — the product range. Each entry drives its card, its
  sidebar row, and its whole spec-sheet page: typical composition tables, amino
  acid profile, dosage rates, packing, shelf life and analytical results.

Adding a product means adding one object to `data/products.json` and dropping its
photograph into `public/images/products/`. Its detail page, catalogue card,
sidebar entry, footer link and sitemap entry all appear automatically. Set
`category` to one of the ids in `lib/taxonomy.ts` and `species` to any of the
species ids there.

### The product column

`components/products/ProductColumn.tsx` is the standing catalogue sidebar. It
renders on `/products` and on every product page, grouped by category with the
current product highlighted, so the full range is always one click away.

## Notes on the build

- **The enquiry form has no backend.** The site is fully static, so
  `components/contact/EnquiryForm.tsx` composes the enquiry and hands it to the
  visitor's own mail client or WhatsApp. Nothing is silently dropped and the
  sender keeps a copy. If a server-side inbox is wanted later, replace the
  submit handler with a POST to an API route.
- **Deployment** produces a fully static export from `npm run build` — any static
  host or Node host will serve it. Set `NEXT_PUBLIC_SITE_URL` to the live domain
  so canonical URLs, the sitemap and Open Graph tags point at the right host.
- **Colour tokens** in `tailwind.config.ts` are tuned for contrast, not just for
  brand match: `sun-600` and `ink-400` are the light-mode text shades and both
  clear WCAG AA on the bone background. Change them and re-check contrast.
- Light and dark themes are both supported via `next-themes`.

## Source material

Product data is transcribed from the company's own documents — the Nutriments-MDY
brochure, the method-of-analysis sheet, bag artwork, the ISO 9001:2015
certificate, the trade mark registration, and the TANUVAS certificate of analysis
for Nutrimins-DMM. Scans of those documents are in `public/images/certificates/`
and `public/docs/`.

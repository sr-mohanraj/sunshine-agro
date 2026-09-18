# Sunshine Agro Products website

Website for Sunshine Agro Products, Chennai and Erode. Built with Next.js 14, TypeScript and Tailwind CSS. It is a static site: every page is generated at build time.

## Run it

```bash
npm install
```

```bash
npm run dev
```

The site opens at http://localhost:3000. To check a production build:

```bash
npm run build
```

```bash
npm run start
```

## Where things are

| Folder | Contents |
| --- | --- |
| `app/` | One folder per page (home, products, about, manufacturing, quality, contact). |
| `data/company.json` | Addresses, phone numbers, email, GSTIN, capacity, industries served. |
| `data/products.json` | Every product: composition tables, dosage, packing, meta description. |
| `data/certificates.json` | Every certificate on the Quality page. |
| `components/` | Header, footer, product cards and other shared pieces. |
| `public/images/` | Product, plant and certificate images. |
| `public/docs/` | PDF copies of the certificates. |

## Changing content

Most edits are made in the three files in `data/`. No code changes are needed.

**Add a product:** add an entry to `data/products.json` and put its photos in `public/images/products/`. The product page, the product list, the sidebar and the footer link are all created from that one entry. Give it a `metaDescription` of about 150 characters.

**Add or renew a certificate:** put the PDF in `public/docs/`, save a JPEG of the first page in `public/images/certificates/`, and add or edit its entry in `data/certificates.json`. The home page table and the Quality page both read from that file.

**Change a phone number or address:** edit `data/company.json`.

## Before it goes live

- Set `NEXT_PUBLIC_SITE_URL` to the real domain. Until then the sitemap and share tags use a placeholder address (`https://sunshineagroproducts.com`).
- The enquiry form has no server behind it. The buttons open the visitor's email app or WhatsApp with the enquiry filled in. If enquiries should land in an inbox directly, the form needs a form service or an API route.
- Certificates carry their own expiry dates. The ISO 9001:2015 certificate has surveillance audits due by 5 February 2026 and 5 February 2027, and the others have their own. Update `data/certificates.json` when a certificate is renewed.

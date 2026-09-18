import type { Metadata, Viewport } from "next";
import "./globals.css";
import { inter, serif } from "@/lib/fonts";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE_URL } from "@/lib/site";
import company from "@/data/company.json";

const TITLE = "Sunshine Agro Products | Inactive Dried Yeast and Feed Supplements";
const DESCRIPTION =
  "Feed supplements for aqua, poultry and livestock nutrition, made by Sunshine Agro Products at Erode, Tamil Nadu. Established 2003 in Chennai.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s | Sunshine Agro Products" },
  description: DESCRIPTION,
  applicationName: company.name,
  openGraph: {
    type: "website",
    siteName: company.name,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const postal = (a: { street: string; city: string; postal: string }) => ({
  "@type": "PostalAddress",
  streetAddress: a.street,
  addressLocality: a.city,
  addressRegion: "Tamil Nadu",
  postalCode: a.postal,
  addressCountry: "IN",
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  foundingDate: String(company.founded),
  email: company.contact.email,
  telephone: company.contact.mobiles[0],
  address: [postal(company.addresses.office), postal(company.addresses.plant)],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <TopBar />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

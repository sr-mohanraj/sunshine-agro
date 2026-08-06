import type { Metadata, Viewport } from "next";
import "./globals.css";
import { inter, jetbrainsMono, sora } from "@/lib/fonts";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE_URL } from "@/lib/site";
import company from "@/data/company.json";

const TITLE = "Sunshine Agro Products | Inactive Dried Yeast & Feed Supplements";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Sunshine Agro Products",
  },
  description: company.description,
  keywords: [
    "inactive dried yeast",
    "molasses dried yeast",
    "Saccharomyces cerevisiae feed",
    "aqua feed supplement India",
    "shrimp feed additive",
    "poultry feed supplement",
    "cattle mineral mix",
    "Sunshine Agro Products",
  ],
  authors: [{ name: company.name }],
  applicationName: company.name,
  openGraph: {
    type: "website",
    siteName: company.name,
    title: TITLE,
    description: company.description,
    url: SITE_URL,
    locale: "en_IN",
    images: [
      {
        url: "/images/brand/logomark-square.jpg",
        width: 1155,
        height: 1600,
        alt: "Sunshine Agro Products logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: company.description,
  },
  formatDetection: { telephone: true },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF7F1" },
    { media: "(prefers-color-scheme: dark)", color: "#0C0A08" },
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: SITE_URL,
  logo: `${SITE_URL}/images/brand/logomark-square.jpg`,
  description: company.description,
  foundingDate: String(company.founded),
  address: company.addresses.map((a) => ({
    "@type": "PostalAddress",
    streetAddress: `${a.line1}, ${a.line2}`,
    addressLocality: a.city,
    addressRegion: a.state,
    postalCode: a.postal,
    addressCountry: "IN",
  })),
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: company.contact.phone,
      email: company.contact.email,
      areaServed: "IN",
      availableLanguage: ["en", "ta"],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="flex min-h-screen flex-col font-sans">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ThemeProvider>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}

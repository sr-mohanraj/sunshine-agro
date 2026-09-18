// Set NEXT_PUBLIC_SITE_URL to the live domain when deploying. It feeds the
// canonical links, sitemap and social-share tags. The fallback is a placeholder.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://sunshineagroproducts.com";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About us" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/quality", label: "Quality" },
  { href: "/contact", label: "Contact" },
] as const;

export const telHref = (n: string) => `tel:${n.replace(/[^+\d]/g, "")}`;

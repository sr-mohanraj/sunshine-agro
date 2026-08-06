export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://sunshineagroproducts.com";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/quality", label: "Quality" },
  { href: "/contact", label: "Contact" },
] as const;

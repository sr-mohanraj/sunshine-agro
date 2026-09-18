import raw from "@/data/products.json";
import certs from "@/data/certificates.json";
import type { Certificate, Product } from "./types";

export const PRODUCTS = (raw as unknown as Product[])
  .slice()
  .sort((a, b) => a.order - b.order);

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);

export const CERTIFICATES = certs as unknown as Certificate[];

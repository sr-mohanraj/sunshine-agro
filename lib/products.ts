import raw from "@/data/products.json";
import type { Product } from "./types";

export const PRODUCTS = (raw as Product[]).slice().sort((a, b) => a.order - b.order);

export const getProduct = (slug: string) =>
  PRODUCTS.find((p) => p.slug === slug);

export const productsByCategory = (categoryId: string) =>
  PRODUCTS.filter((p) => p.category === categoryId);

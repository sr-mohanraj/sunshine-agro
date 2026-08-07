import raw from "@/data/products.json";
import { CATEGORIES, SPECIES } from "./taxonomy";
import type { Product } from "./types";

export const PRODUCTS = (raw as Product[]).slice().sort((a, b) => a.order - b.order);

export const getProduct = (slug: string) =>
  PRODUCTS.find((p) => p.slug === slug);

export const productsByCategory = (categoryId: string) =>
  PRODUCTS.filter((p) => p.category === categoryId);

/**
 * Categories and species are a fixed taxonomy, but only the ones a live product
 * actually belongs to should reach the UI. Deriving them means retiring a
 * product can never leave an empty section or a filter chip that returns
 * nothing — the taxonomy entry can stay put for whenever the line comes back.
 */
export const ACTIVE_CATEGORIES = CATEGORIES.filter((c) =>
  PRODUCTS.some((p) => p.category === c.id)
);

export const ACTIVE_SPECIES = SPECIES.filter((s) =>
  PRODUCTS.some((p) => p.species.includes(s.id))
);

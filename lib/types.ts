export type Row = { k: string; v: string };
export type SpecGroup = { title: string; unit?: string; rows: Row[] };

export type Product = {
  slug: string;
  name: string;
  trademark?: boolean;
  subtitle: string;
  /** Short product type shown on cards, e.g. "Inactive dried yeast". */
  type: string;
  species: string[];
  order: number;
  image: string;
  imageAlt: string;
  gallery: { src: string; alt: string }[];
  summary: string;
  /** Text for <meta name="description">. Kept separate from `summary`. */
  metaDescription: string;
  description?: string[];
  benefits?: string[];
  specs?: SpecGroup[];
  aminoAcids?: { columns: string[]; rows: string[][]; footnote?: string };
  aboutYeast?: string[];
  dosageTitle?: string;
  dosage?: Row[];
  methods?: string[];
  storage?: string;
  shelfLife?: string;
  packing?: string;
  conditions?: string[];
  analysis?: { k: string; v: string; m: string }[];
  analysisNote?: string;
  cautions?: string[];
  documents?: { label: string; href: string }[];
};

export type Certificate = {
  id: string;
  title: string;
  subtitle?: string;
  issuer: string;
  number: string;
  issued: string;
  validUntil: string;
  scope: string;
  image: string;
  pdf: string;
  verify: { label: string; url: string };
};

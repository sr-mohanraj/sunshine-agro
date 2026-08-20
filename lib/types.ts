export type SpecRow = { k: string; v: string };
export type SpecGroup = { group: string; unit?: string; rows: SpecRow[] };
export type GalleryImage = { src: string; alt: string };
export type AnalysisRow = { k: string; v: string; m: string };

export type Product = {
  slug: string;
  name: string;
  trademark?: boolean;
  subtitle: string;
  descriptor: string;
  category: string;
  species: string[];
  featured?: boolean;
  order: number;
  image: string;
  imageAlt: string;
  gallery?: GalleryImage[];
  summary: string;
  /** Dedicated <meta name="description"> text — shorter and more literal than
   * `summary`, which is written for on-page reading and runs long for a search
   * snippet. Falls back to `summary` if omitted. */
  metaDescription?: string;
  pitch?: string;
  appearance?: string;
  ingredients?: string;
  microbial?: string;
  benefits?: string[];
  /** Conditions the label positions the product around, e.g. for an oral gel. */
  indications?: string[];
  claims?: string[];
  specs?: SpecGroup[];
  aminoAcids?: {
    columns: string[];
    rows: string[][];
    footnote?: string;
  };
  dosage?: SpecRow[];
  inclusionAlt?: string[];
  applicationMethods?: string[];
  application?: string;
  storage?: string;
  shelfLife?: string;
  packing?: string;
  analysis?: AnalysisRow[];
  analysisNote?: string;
  documents?: { label: string; href: string }[];
  specSheetOnRequest?: boolean;
  animalUseOnly?: boolean;
};

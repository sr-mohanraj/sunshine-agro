export const CATEGORIES = [
  {
    id: "inactive-dried-yeast",
    label: "Inactive Dried Yeast",
    short: "Dried Yeast",
    blurb:
      "Whole Saccharomyces cerevisiae cells, spray-dried on molasses media. Protein, nucleotides and β-glucan cell wall in one ingredient.",
  },
  {
    id: "yeast-culture",
    label: "Yeast Culture",
    short: "Yeast Culture",
    blurb:
      "Yeast delivered with its fermentation media intact — metabolites included — for aquaculture gut and pond performance.",
  },
  {
    id: "probiotics",
    label: "Probiotics & Gut Health",
    short: "Probiotics",
    blurb:
      "Defined multi-strain consortia of Bacillus, Lactobacillus and Saccharomyces, formulated to survive feed processing.",
  },
  {
    id: "mineral-mix",
    label: "Mineral Mixes",
    short: "Mineral Mix",
    blurb:
      "Macro and trace mineral supplements for ruminants, assayed by an accredited government feed laboratory.",
  },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

export const SPECIES = [
  { id: "shrimp", label: "Shrimp & Prawns" },
  { id: "fish", label: "Fish" },
  { id: "poultry", label: "Poultry" },
  { id: "swine", label: "Swine" },
  { id: "cattle", label: "Cattle" },
  { id: "pet", label: "Pet Food" },
] as const;

export type SpeciesId = (typeof SPECIES)[number]["id"];

export const categoryLabel = (id: string) =>
  CATEGORIES.find((c) => c.id === id)?.label ?? id;

export const categoryShort = (id: string) =>
  CATEGORIES.find((c) => c.id === id)?.short ?? id;

export const speciesLabel = (id: string) =>
  SPECIES.find((s) => s.id === id)?.label ?? id;

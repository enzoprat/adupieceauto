import type { ProductIcon } from "@/data/productCategories";

export type BrandFamily = {
  /** Besoin / famille de pièces. */
  title: string;
  icon: ProductIcon;
  /** Marques référencées pour ce besoin. */
  brands: string[];
};

/**
 * Marques référencées par Adu Pièce Auto, regroupées par besoin.
 * Le fournisseur sélectionne l'équipementier adapté selon la pièce,
 * la disponibilité et le véhicule.
 */
export const brandFamilies: BrandFamily[] = [
  {
    title: "Freinage",
    icon: "brake",
    brands: ["TRW", "Brembo", "Bosch", "Ferodo", "Requal"],
  },
  {
    title: "Distribution",
    icon: "timing",
    brands: ["Gates", "SKF", "Requal"],
  },
  {
    title: "Embrayage",
    icon: "clutch",
    brands: ["LUK", "Valeo", "Sachs"],
  },
  {
    title: "Suspension",
    icon: "suspension",
    brands: ["Monroe", "TRW", "Requal"],
  },
  {
    title: "Filtration",
    icon: "filter",
    brands: ["Purflux", "Cooper Fiaam", "Requal"],
  },
  {
    title: "Essuie-glace",
    icon: "wiper",
    brands: ["Bosch", "Valeo", "Requal"],
  },
  {
    title: "Éclairage",
    icon: "light",
    brands: ["Osram", "Philips", "Requal"],
  },
  {
    title: "Batterie",
    icon: "battery",
    brands: ["Techpower", "Fiamm"],
  },
  {
    title: "Pneumatique",
    icon: "tire",
    brands: ["Michelin", "Kléber"],
  },
  {
    title: "Huile & lubrifiants",
    icon: "oil",
    brands: ["Ardeca"],
  },
  {
    title: "Consommables & outillage",
    icon: "consumable",
    brands: ["KS Tools", "Sonic", "Restagraf", "TechMax"],
  },
];

/** Liste unique et triée de toutes les marques (pour un bandeau défilant). */
export const allBrands: string[] = Array.from(
  new Set(brandFamilies.flatMap((f) => f.brands))
).sort((a, b) => a.localeCompare(b, "fr"));

/**
 * Logos disponibles localement (public/logos/). Clé = nom exact de la marque.
 * Les marques absentes de cette table s'affichent en wordmark typographique.
 */
export const brandLogos: Record<string, string> = {
  Bosch: "bosch.png",
  TRW: "trw.png",
  Brembo: "brembo.png",
  SKF: "skf.png",
  Valeo: "valeo.svg",
  Osram: "osram.png",
  Philips: "philips.png",
  Fiamm: "fiamm.png",
  Michelin: "michelin.png",
};

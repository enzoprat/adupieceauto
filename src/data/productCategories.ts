export type ProductCategory = {
  /** Identifiant stable, utilisé pour le préremplissage du formulaire. */
  slug: string;
  title: string;
  description: string;
  tags: string[];
  icon: ProductIcon;
  ctaLabel: string;
};

export type ProductIcon =
  | "brake"
  | "filter"
  | "battery"
  | "light"
  | "oil"
  | "consumable"
  | "wiper"
  | "clutch"
  | "suspension"
  | "timing"
  | "tire"
  | "utility"
  | "care"
  | "custom";

export const productCategories: ProductCategory[] = [
  {
    slug: "freinage",
    title: "Freinage",
    description:
      "Plaquettes, disques, kits de freinage et consommables associés pour garages automobiles.",
    tags: ["plaquettes", "disques", "liquide de frein"],
    icon: "brake",
    ctaLabel: "Demander un prix",
  },
  {
    slug: "filtration",
    title: "Filtration",
    description:
      "Filtres à huile, à air, à carburant et d'habitacle pour l'entretien courant.",
    tags: ["filtre à huile", "filtre à air", "filtre habitacle"],
    icon: "filter",
    ctaLabel: "Demander un prix",
  },
  {
    slug: "batterie",
    title: "Batterie",
    description:
      "Batteries de démarrage et solutions d'énergie pour véhicules légers et utilitaires.",
    tags: ["batterie", "démarrage", "utilitaire"],
    icon: "battery",
    ctaLabel: "Vérifier disponibilité",
  },
  {
    slug: "eclairage",
    title: "Éclairage",
    description:
      "Ampoules, optiques et signalisation pour la remise en conformité et l'entretien.",
    tags: ["ampoules", "optiques", "signalisation"],
    icon: "light",
    ctaLabel: "Demander un prix",
  },
  {
    slug: "huiles-lubrifiants",
    title: "Huiles & lubrifiants",
    description:
      "Huiles moteur, boîte, graisses et lubrifiants techniques pour l'atelier.",
    tags: ["huile moteur", "lubrifiants", "graisse"],
    icon: "oil",
    ctaLabel: "Demander un prix",
  },
  {
    slug: "consommables-atelier",
    title: "Consommables atelier",
    description:
      "Produits et consommables du quotidien : nettoyants, gants, chiffons, sprays techniques.",
    tags: ["nettoyants", "gants", "sprays"],
    icon: "consumable",
    ctaLabel: "Demander un prix",
  },
  {
    slug: "essuie-glaces",
    title: "Essuie-glaces",
    description:
      "Balais d'essuie-glaces avant et arrière, toutes dimensions et montages.",
    tags: ["balais", "essuie-glaces", "arrière"],
    icon: "wiper",
    ctaLabel: "Vérifier disponibilité",
  },
  {
    slug: "embrayage",
    title: "Embrayage",
    description:
      "Kits d'embrayage, butées et volants moteur pour les interventions courantes.",
    tags: ["kit embrayage", "butée", "volant moteur"],
    icon: "clutch",
    ctaLabel: "Demander un prix",
  },
  {
    slug: "suspension",
    title: "Suspension",
    description:
      "Amortisseurs, rotules, biellettes et pièces de liaison au sol.",
    tags: ["amortisseurs", "rotules", "biellettes"],
    icon: "suspension",
    ctaLabel: "Demander un prix",
  },
  {
    slug: "distribution",
    title: "Distribution",
    description:
      "Kits de distribution, galets et pompes à eau pour l'entretien moteur.",
    tags: ["kit distribution", "galets", "pompe à eau"],
    icon: "timing",
    ctaLabel: "Demander un prix",
  },
  {
    slug: "pneumatiques",
    title: "Pneumatiques",
    description:
      "Pneumatiques tourisme et utilitaire selon disponibilité et demande.",
    tags: ["pneus", "tourisme", "utilitaire"],
    icon: "tire",
    ctaLabel: "Vérifier disponibilité",
  },
  {
    slug: "accessoires-utilitaires",
    title: "Accessoires utilitaires",
    description:
      "Accessoires et équipements adaptés aux véhicules utilitaires et flottes.",
    tags: ["utilitaire", "accessoires", "aménagement"],
    icon: "utility",
    ctaLabel: "Demander un prix",
  },
  {
    slug: "produits-entretien",
    title: "Produits d'entretien",
    description:
      "Additifs, liquides, AdBlue et produits d'entretien pour l'atelier.",
    tags: ["additifs", "liquides", "adblue"],
    icon: "care",
    ctaLabel: "Demander un prix",
  },
  {
    slug: "pieces-sur-demande",
    title: "Pièces sur demande",
    description:
      "Une référence spécifique ou une pièce difficile à trouver ? Indiquez-nous votre besoin.",
    tags: ["référence", "spécifique", "sourcing"],
    icon: "custom",
    ctaLabel: "Demander un prix",
  },
];

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === slug);
}

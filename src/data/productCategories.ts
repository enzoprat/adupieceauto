export type ProductCategory = {
  /** Identifiant stable, utilisé pour le préremplissage du formulaire. */
  slug: string;
  title: string;
  description: string;
  tags: string[];
  /** Exemples de produits concrets affichés sur la carte. */
  examples: string[];
  /** Statut indicatif : "prix sur demande" ou "dispo à confirmer". */
  status: "prix" | "confirmer";
  icon: ProductIcon;
  ctaLabel: string;
};

export const STATUS_LABEL: Record<ProductCategory["status"], string> = {
  prix: "Prix sur demande",
  confirmer: "Dispo à confirmer",
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
      "Tout ce qui remet un véhicule en sécurité, en stock courant ou sur référence précise.",
    tags: ["plaquettes", "disques", "liquide de frein"],
    examples: ["Plaquettes avant / arrière", "Disques ventilés", "Étriers, flexibles"],
    status: "prix",
    icon: "brake",
    ctaLabel: "Vérifier disponibilité",
  },
  {
    slug: "filtration",
    title: "Filtration",
    description:
      "Les filtres de l'entretien courant, adaptés à la motorisation exacte.",
    tags: ["huile", "air", "habitacle", "carburant"],
    examples: ["Filtre à huile", "Filtre à air", "Filtre d'habitacle"],
    status: "prix",
    icon: "filter",
    ctaLabel: "Vérifier disponibilité",
  },
  {
    slug: "batterie",
    title: "Batteries",
    description:
      "Démarrage véhicules légers et utilitaires, y compris technologies start & stop.",
    tags: ["démarrage", "utilitaire", "EFB / AGM"],
    examples: ["Batterie 60 à 100 Ah", "AGM start & stop", "Utilitaire renforcée"],
    status: "confirmer",
    icon: "battery",
    ctaLabel: "Vérifier disponibilité",
  },
  {
    slug: "eclairage",
    title: "Éclairage",
    description:
      "Remise en conformité et remplacement, de l'ampoule au bloc optique.",
    tags: ["ampoules", "optiques", "LED"],
    examples: ["Ampoules H7 / H4", "Blocs optiques", "Feux arrière"],
    status: "prix",
    icon: "light",
    ctaLabel: "Vérifier disponibilité",
  },
  {
    slug: "huiles-lubrifiants",
    title: "Huiles & lubrifiants",
    description:
      "Huiles moteur et boîte au bon grade, graisses et lubrifiants techniques.",
    tags: ["5W30", "5W40", "graisses"],
    examples: ["Huile moteur en bidon", "Huile de boîte / pont", "Graisse technique"],
    status: "prix",
    icon: "oil",
    ctaLabel: "Vérifier disponibilité",
  },
  {
    slug: "consommables-atelier",
    title: "Consommables atelier",
    description:
      "Le quotidien qui fait tourner l'atelier, sans rupture au mauvais moment.",
    tags: ["nettoyants", "gants", "sprays"],
    examples: ["Nettoyant frein", "Gants nitrile", "Chiffons, absorbants"],
    status: "prix",
    icon: "consumable",
    ctaLabel: "Vérifier disponibilité",
  },
  {
    slug: "essuie-glaces",
    title: "Essuie-glaces",
    description:
      "Balais avant et arrière, toutes dimensions et systèmes de fixation.",
    tags: ["avant", "arrière", "flat blade"],
    examples: ["Balais flat blade", "Balais arrière", "Kits par véhicule"],
    status: "confirmer",
    icon: "wiper",
    ctaLabel: "Vérifier disponibilité",
  },
  {
    slug: "embrayage",
    title: "Embrayage",
    description:
      "Kits complets et pièces associées pour les interventions moteur.",
    tags: ["kit", "butée", "volant moteur"],
    examples: ["Kit embrayage", "Butée hydraulique", "Volant moteur"],
    status: "confirmer",
    icon: "clutch",
    ctaLabel: "Vérifier disponibilité",
  },
  {
    slug: "suspension",
    title: "Suspension & liaison au sol",
    description:
      "Amortisseurs et pièces de direction pour retrouver tenue de route et confort.",
    tags: ["amortisseurs", "rotules", "biellettes"],
    examples: ["Amortisseurs", "Rotules, triangles", "Biellettes de barre"],
    status: "prix",
    icon: "suspension",
    ctaLabel: "Vérifier disponibilité",
  },
  {
    slug: "distribution",
    title: "Distribution",
    description:
      "Kits et pièces de distribution pour un entretien moteur fiable.",
    tags: ["kit", "galets", "pompe à eau"],
    examples: ["Kit de distribution", "Galets tendeurs", "Pompe à eau"],
    status: "confirmer",
    icon: "timing",
    ctaLabel: "Vérifier disponibilité",
  },
  {
    slug: "pneumatiques",
    title: "Pneumatiques",
    description:
      "Tourisme et utilitaire, selon disponibilité et dimension demandée.",
    tags: ["tourisme", "utilitaire", "4 saisons"],
    examples: ["Pneus tourisme", "Pneus utilitaire", "Montures 4 saisons"],
    status: "confirmer",
    icon: "tire",
    ctaLabel: "Vérifier disponibilité",
  },
  {
    slug: "accessoires-utilitaires",
    title: "Accessoires utilitaires",
    description:
      "Équipements adaptés aux véhicules utilitaires et petites flottes.",
    tags: ["utilitaire", "flotte", "équipement"],
    examples: ["Accessoires de charge", "Équipements utilitaire", "Consommables flotte"],
    status: "confirmer",
    icon: "utility",
    ctaLabel: "Vérifier disponibilité",
  },
  {
    slug: "produits-entretien",
    title: "Produits d'entretien",
    description:
      "Additifs, liquides et AdBlue pour compléter chaque intervention.",
    tags: ["additifs", "liquides", "AdBlue"],
    examples: ["AdBlue", "Liquide de refroidissement", "Additifs moteur"],
    status: "prix",
    icon: "care",
    ctaLabel: "Vérifier disponibilité",
  },
  {
    slug: "pieces-sur-demande",
    title: "Pièces sur demande",
    description:
      "Une référence rare ou difficile à trouver ? On la cherche pour vous.",
    tags: ["référence", "spécifique", "sourcing"],
    examples: ["Référence constructeur", "Pièce rare", "Recherche par plaque"],
    status: "confirmer",
    icon: "custom",
    ctaLabel: "Demander cette pièce",
  },
];

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === slug);
}

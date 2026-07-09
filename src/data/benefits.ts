export type Benefit = {
  label: string;
  detail: string;
  icon: "bolt" | "tag" | "pin" | "garage" | "calendar" | "shield";
};

/** Bandeau d'avantages affiché en home (BenefitsStrip). */
export const benefits: Benefit[] = [
  {
    label: "Livraison sous 4h",
    detail: "Selon disponibilité et zone d'intervention",
    icon: "bolt",
  },
  {
    label: "Prix attractifs",
    detail: "Tarifs compétitifs pour les professionnels",
    icon: "tag",
  },
  {
    label: "Service de proximité",
    detail: "Un interlocuteur direct et réactif",
    icon: "pin",
  },
  {
    label: "Fournisseur garages",
    detail: "Pensé pour les ateliers et réparateurs",
    icon: "garage",
  },
  {
    label: "Depuis 2019",
    detail: "Plus de 20 clients réguliers",
    icon: "calendar",
  },
];

export type Step = {
  number: string;
  title: string;
  description: string;
};

/** Étapes « Comment ça marche ». */
export const steps: Step[] = [
  {
    number: "01",
    title: "Envoyez votre demande",
    description:
      "Indiquez la pièce ou la catégorie recherchée via le formulaire ou par téléphone.",
  },
  {
    number: "02",
    title: "Nous vérifions prix et disponibilité",
    description:
      "Notre équipe identifie la référence, contrôle le stock et le délai de mise à disposition.",
  },
  {
    number: "03",
    title: "Nous vous confirmons rapidement",
    description:
      "Vous recevez une réponse claire : prix, disponibilité et délai pour votre garage.",
  },
  {
    number: "04",
    title: "Livraison ou retrait",
    description:
      "Livraison sous 4h selon disponibilité et zone, ou retrait sur place selon votre besoin.",
  },
];

export type Reason = {
  title: string;
  description: string;
};

/** Section « Pourquoi choisir Adu Pièce Auto ». */
export const reasons: Reason[] = [
  {
    title: "Réactivité",
    description:
      "Une demande, un échange direct, une réponse rapide. Nous traitons vos demandes en priorité pour limiter l'immobilisation des véhicules.",
  },
  {
    title: "Prix attractifs",
    description:
      "Des tarifs compétitifs sur les pièces courantes comme sur les consommables d'atelier, pour préserver vos marges.",
  },
  {
    title: "Proximité",
    description:
      "Implantés à Labastide-Saint-Pierre, nous connaissons le terrain et accompagnons les garages du Tarn-et-Garonne.",
  },
  {
    title: "Sourcing fiable",
    description:
      "Pièces courantes ou demandes spécifiques : nous identifions la bonne référence et vérifions la disponibilité.",
  },
  {
    title: "Relation directe",
    description:
      "Pas d'interface impersonnelle. Vous parlez à un interlocuteur qui connaît votre activité et vos contraintes.",
  },
  {
    title: "Consommables inclus",
    description:
      "Au-delà des pièces, nous fournissons les consommables d'atelier indispensables au quotidien des garages.",
  },
];

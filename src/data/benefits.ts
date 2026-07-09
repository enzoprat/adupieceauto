export type Proof = {
  label: string;
  detail: string;
  icon: "bolt" | "tag" | "garage" | "pin" | "clock";
  /** Valeur chiffrée animée (optionnelle). */
  stat?: { to: number; suffix?: string; prefix?: string };
  fixed?: string;
};

/** Bandeau de preuves (modules, pas badges). */
export const proofs: Proof[] = [
  {
    label: "Livraison rapide",
    detail: "sous 4h selon dispo et zone",
    icon: "bolt",
    fixed: "4h",
  },
  {
    label: "Clients réguliers",
    detail: "garages & ateliers du 82",
    icon: "garage",
    stat: { to: 20, suffix: "+" },
  },
  {
    label: "Fournisseur local",
    detail: "présent depuis",
    icon: "pin",
    stat: { to: 2019 },
  },
  {
    label: "Prix atelier",
    detail: "tarifs pensés pour votre marge",
    icon: "tag",
    fixed: "€€",
  },
];

export type Step = {
  number: string;
  title: string;
  description: string;
  meta: string;
};

/** Étapes « Comment ça marche » (process sticky). */
export const steps: Step[] = [
  {
    number: "01",
    title: "Vous envoyez votre demande",
    description:
      "Un numéro de référence, une plaque, ou juste la pièce et le véhicule. Par formulaire ou par téléphone, en moins d'une minute.",
    meta: "Formulaire · Téléphone",
  },
  {
    number: "02",
    title: "On identifie la bonne référence",
    description:
      "On croise votre besoin avec la référence exacte pour éviter l'erreur de pièce et le second déplacement.",
    meta: "Sourcing · Contrôle réf",
  },
  {
    number: "03",
    title: "On confirme prix et disponibilité",
    description:
      "Vous recevez une réponse nette : prix, dispo et délai. Rien n'est commandé sans votre accord.",
    meta: "Prix · Dispo · Délai",
  },
  {
    number: "04",
    title: "Livraison ou retrait",
    description:
      "Livraison sous 4h selon la zone et la typologie de pièce, ou retrait sur place. Vous choisissez.",
    meta: "Livraison · Retrait",
  },
];

export type Reason = {
  title: string;
  description: string;
  icon: "phone" | "pin" | "tag" | "clock" | "garage" | "check";
};

/** Section confiance « Pourquoi les garages travaillent avec nous ». */
export const reasons: Reason[] = [
  {
    icon: "phone",
    title: "Un interlocuteur, pas un portail",
    description:
      "Vous parlez à quelqu'un qui connaît votre atelier et vos contraintes. Pas de ticket, pas de file d'attente automatisée.",
  },
  {
    icon: "clock",
    title: "Moins de temps perdu au téléphone",
    description:
      "Vous demandez, on cherche. Vous récupérez du temps pour ce qui compte : sortir les véhicules de l'atelier.",
  },
  {
    icon: "tag",
    title: "Des prix qui préservent la marge",
    description:
      "Tarifs négociés sur les pièces courantes et les consommables, pour que votre devis reste compétitif.",
  },
  {
    icon: "pin",
    title: "Une logistique locale maîtrisée",
    description:
      "Labastide-Saint-Pierre et alentours : on connaît les routes, les délais et les urgences du terrain.",
  },
  {
    icon: "check",
    title: "La bonne pièce du premier coup",
    description:
      "On confirme la référence avant commande pour éviter le mauvais montage et le second déplacement.",
  },
  {
    icon: "garage",
    title: "Pensé pour les pros",
    description:
      "Garages indépendants, ateliers, réparateurs, carrossiers, flottes utilitaires : le service est calibré pour vous.",
  },
];

export const site = {
  name: "Adu Pièce Auto",
  legalName: "L'Atelier de l'Utilitaire",
  founder: "GG",
  founded: 2019,
  clientsCount: 20,
  baseline: "Vos pièces automobiles livrées rapidement, au bon prix.",
  shortDescription:
    "Vente de pièces automobiles, consommables et outillage pour les professionnels et les particuliers à Labastide-Saint-Pierre et alentours.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://adupiecesauto.fr",
  phone: {
    display: "06 02 01 34 63",
    href: "tel:+33602013463",
    raw: "+33602013463",
  },
  email: "jules.bertrand@atelierutilitaire.fr",
  hours: "Lun–Ven : 8h–12h / 14h–18h30 · Sam : 8h–12h",
  address: {
    street: "100 rue de Vérone",
    postalCode: "82370",
    city: "Labastide-Saint-Pierre",
    region: "Tarn-et-Garonne",
    country: "FR",
    full: "100 rue de Vérone, 82370 Labastide-Saint-Pierre",
  },
  geo: {
    // Coordonnées approximatives de Labastide-Saint-Pierre (82370)
    latitude: 43.9197,
    longitude: 1.3933,
  },
  serviceArea:
    "Labastide-Saint-Pierre, Montauban, Grisolles, Nohic, Villebrumier, Campsas, Orgueil et alentours (Tarn-et-Garonne, 82).",
  delivery: {
    promise: "Livraison express",
    disclaimer:
      "Nous livrons deux fois par jour : pour toute commande passée avant 11h30, vous êtes livré l'après-midi même, sous réserve de stock disponible.",
  },
  targetAudience:
    "Professionnels de l'automobile et particuliers : garages, réparateurs, ateliers, flottes, artisans et automobilistes.",
} as const;

export type Site = typeof site;

export const site = {
  name: "Adu Pièce Auto",
  legalName: "L'Atelier de l'Utilitaire",
  founder: "GG",
  founded: 2019,
  clientsCount: 20,
  baseline: "Vos pièces automobiles livrées rapidement, au bon prix.",
  shortDescription:
    "Fournisseur de pièces automobiles et consommables pour les garages et professionnels de l'automobile à Labastide-Saint-Pierre et alentours.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://www.adupieceauto.fr",
  phone: {
    display: "06 02 01 34 63",
    href: "tel:+33602013463",
    raw: "+33602013463",
  },
  email: "jules.bertrand@atelierutilitaire.fr",
  hours: "Lun – Sam : 8h – 18h",
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
    promise: "Livraison sous 4h",
    disclaimer:
      "Livraison sous 4h selon disponibilité, typologie de pièce et zone d'intervention.",
  },
  targetAudience:
    "Garages automobiles, réparateurs, ateliers mécaniques, professionnels de l'entretien, petites flottes et artisans.",
} as const;

export type Site = typeof site;

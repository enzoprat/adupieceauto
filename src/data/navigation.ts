export type NavLink = {
  label: string;
  href: string;
};

export const mainNav: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Catalogue", href: "/catalogue" },
  { label: "Livraison sous 2h", href: "/#livraison" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Catalogue produits", href: "/catalogue" },
  { label: "Demander une pièce", href: "/contact" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
];

export const primaryCta = {
  label: "Demander une pièce",
  href: "/contact",
};

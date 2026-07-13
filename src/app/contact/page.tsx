import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Demande de pièce auto à Labastide-Saint-Pierre",
  description:
    "Demandez une pièce auto, un consommable ou de l'outillage à Adu Pièce Auto. Formulaire ouvert aux professionnels comme aux particuliers, réponse rapide sur le prix et la disponibilité. Livraison express deux fois par jour : commande avant 11h30 livrée l'après-midi même, sous réserve de stock.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", path: "/" },
              { name: "Contact", path: "/contact" },
            ])
          ),
        }}
      />
      <PageHero
        eyebrow="Demande de pièce"
        title={
          <>
            Votre demande traitée <span className="text-signal">rapidement</span>
          </>
        }
        description="Professionnels comme particuliers : indiquez-nous la pièce, le consommable ou l'outillage recherché. Nous vérifions prix et disponibilité, puis revenons vers vous dans les meilleurs délais."
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Contact" }]}
      />
      <ContactSection />
    </>
  );
}

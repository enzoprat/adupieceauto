import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Demande de pièce auto à Labastide-Saint-Pierre",
  description:
    "Demandez une pièce auto ou un consommable à Adu Pièce Auto. Formulaire dédié aux garages et professionnels, réponse rapide sur le prix et la disponibilité. Livraison sous 4h selon disponibilité et zone.",
  path: "/contact",
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ categorie?: string; urgence?: string }>;
}) {
  const params = await searchParams;

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
            Votre demande traitée <span className="text-racing">rapidement</span>
          </>
        }
        description="Garages, réparateurs, professionnels : indiquez-nous la pièce ou le consommable recherché. Nous vérifions prix et disponibilité, puis revenons vers vous dans les meilleurs délais."
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Contact" }]}
      />
      <ContactSection
        initialCategorySlug={params.categorie}
        initialUrgency={params.urgence}
      />
    </>
  );
}

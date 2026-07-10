import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProductCategories } from "@/components/sections/ProductCategories";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Catalogue pièces auto, consommables & outillage",
  description:
    "Catalogue des familles de pièces auto, consommables et outillage pour professionnels et particuliers : freinage, filtration, batteries, éclairage, lubrifiants, distribution et plus. Demande de prix et disponibilité.",
  path: "/catalogue",
});

export default function CataloguePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", path: "/" },
              { name: "Catalogue", path: "/catalogue" },
            ])
          ),
        }}
      />
      <PageHero
        eyebrow="Familles de produits"
        title={
          <>
            Catalogue pièces auto &{" "}
            <span className="text-signal">consommables</span>
          </>
        }
        description="Pièces courantes, consommables d'atelier ou références spécifiques : choisissez une catégorie et demandez un prix ou la disponibilité. Aucun prix affiché, chaque demande reçoit une réponse personnalisée."
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Catalogue" },
        ]}
      />
      <ProductCategories heading="Toutes nos familles de produits." />
      <CTASection />
    </>
  );
}

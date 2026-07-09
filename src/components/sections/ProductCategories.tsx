import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ProductCategoryCard } from "@/components/cards/ProductCategoryCard";
import { Icon } from "@/components/ui/Icon";
import { productCategories } from "@/data/productCategories";

type ProductCategoriesProps = {
  /** Nombre de catégories à afficher (la home en montre une sélection). */
  limit?: number;
  showAllCta?: boolean;
  title?: string;
};

export function ProductCategories({
  limit,
  showAllCta = false,
  title = "Catalogue produits",
}: ProductCategoriesProps) {
  const categories = limit
    ? productCategories.slice(0, limit)
    : productCategories;

  return (
    <Section id="catalogue" className="bg-ink">
      <div className="max-w-2xl">
        <Eyebrow>Familles de produits</Eyebrow>
        <h2 className="mt-4 font-tight text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-mute">
          Freinage, filtration, consommables, lubrifiants, éclairage, batteries,
          pièces courantes ou demandes spécifiques : indiquez-nous votre besoin, nous
          vérifions la disponibilité et revenons vers vous rapidement.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, i) => (
          <Reveal key={category.slug} delay={(i % 3) * 0.05}>
            <ProductCategoryCard category={category} />
          </Reveal>
        ))}
      </div>

      {showAllCta && (
        <div className="mt-10 flex justify-center">
          <Button href="/catalogue" variant="outline" size="lg">
            Voir tout le catalogue
            <Icon name="arrow" className="h-4 w-4" />
          </Button>
        </div>
      )}
    </Section>
  );
}

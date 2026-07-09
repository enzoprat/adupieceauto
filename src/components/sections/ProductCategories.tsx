import { Section, Kicker } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ProductCategoryCard } from "@/components/cards/ProductCategoryCard";
import { Icon } from "@/components/ui/Icon";
import { productCategories } from "@/data/productCategories";

type ProductCategoriesProps = {
  limit?: number;
  showAllCta?: boolean;
  heading?: string;
};

export function ProductCategories({
  limit,
  showAllCta = false,
  heading = "Un catalogue qui couvre l'entretien courant.",
}: ProductCategoriesProps) {
  const categories = limit
    ? productCategories.slice(0, limit)
    : productCategories;

  return (
    <Section id="catalogue" className="bg-ink-800">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <Kicker>Catalogue</Kicker>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tightest text-paper sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-metal">
            Freinage, filtration, batteries, lubrifiants, consommables ou référence
            spécifique : vous indiquez le besoin, on confirme le prix et la
            disponibilité. Les tarifs ne sont pas affichés car chaque demande reçoit
            une réponse adaptée à votre véhicule.
          </p>
        </div>
        {showAllCta && (
          <Button href="/catalogue" variant="outline" className="shrink-0">
            Voir tout le catalogue
            <Icon
              name="arrow"
              className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
            />
          </Button>
        )}
      </div>

      <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, i) => (
          <StaggerItem key={category.slug} className="h-full">
            <ProductCategoryCard category={category} index={i} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

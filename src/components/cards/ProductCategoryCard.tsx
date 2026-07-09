import Link from "next/link";
import type { ProductCategory } from "@/data/productCategories";
import { Icon } from "@/components/ui/Icon";

export function ProductCategoryCard({
  category,
}: {
  category: ProductCategory;
}) {
  const requestHref = `/contact?categorie=${category.slug}`;

  return (
    <article className="group relative flex flex-col rounded-xl border border-white/10 bg-ink-700 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-racing/50 hover:shadow-glow">
      <div className="flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-ink-800 text-white transition-colors group-hover:border-racing/40 group-hover:text-racing">
          <Icon name={category.icon} className="h-6 w-6" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
          {String(category.slug).slice(0, 3)}
        </span>
      </div>

      <h3 className="mt-4 font-tight text-lg font-bold tracking-tight text-white">
        {category.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-mute">
        {category.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {category.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-ink-800 px-2.5 py-1 font-mono text-[11px] text-mute"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
        <Link
          href={requestHref}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors group-hover:text-racing"
        >
          {category.ctaLabel}
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
        <span className="text-white/20">·</span>
        <Link
          href={`${requestHref}&urgence=24h`}
          className="text-sm font-medium text-mute transition-colors hover:text-white"
        >
          Vérifier disponibilité
        </Link>
      </div>
    </article>
  );
}

import Link from "next/link";
import {
  type ProductCategory,
  STATUS_LABEL,
} from "@/data/productCategories";
import { brandsByIcon, brandLogos } from "@/data/partnerBrands";
import { Icon } from "@/components/ui/Icon";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function ProductCategoryCard({
  category,
  index,
}: {
  category: ProductCategory;
  index: number;
}) {
  const requestHref = `/contact?categorie=${category.slug}`;
  const brands = brandsByIcon[category.icon] ?? [];
  const statusClass =
    category.status === "confirmer"
      ? "border-pending/30 bg-pending/10 text-pending"
      : "border-avail/30 bg-avail/10 text-avail";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal/50 hover:shadow-lift">
      {/* liseré signal au hover */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-ink-700 text-paper transition-colors group-hover:border-signal/40 group-hover:text-signal">
          <Icon name={category.icon} className="h-6 w-6" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-metal-dim">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-paper">
        {category.title}
      </h3>
      <p className="mt-2 text-[14px] leading-relaxed text-metal">
        {category.description}
      </p>

      <ul className="mt-4 space-y-1.5">
        {category.examples.map((ex) => (
          <li
            key={ex}
            className="flex items-center gap-2 text-[13px] text-metal"
          >
            <Icon name="check" className="h-3.5 w-3.5 shrink-0 text-signal" />
            {ex}
          </li>
        ))}
      </ul>

      {brands.length > 0 && (
        <div className="mt-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-metal-dim">
            Marques référencées
          </span>
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            {brands.map((brand) => {
              const logo = brandLogos[brand];
              return logo ? (
                <span
                  key={brand}
                  className="flex h-7 items-center justify-center rounded-md border border-white/10 bg-paper px-1.5"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${BASE}/logos/${logo}`}
                    alt={`${brand} — marque référencée`}
                    className="h-3.5 w-auto max-w-[52px] object-contain"
                    loading="lazy"
                  />
                </span>
              ) : (
                <span
                  key={brand}
                  className="rounded-md border border-white/10 bg-ink-700/60 px-2 py-1 text-[10px] font-semibold text-paper/80"
                >
                  {brand}
                </span>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] font-medium ${statusClass}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {STATUS_LABEL[category.status]}
        </span>
        <Link
          href={requestHref}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-paper transition-colors hover:text-signal"
          aria-label={`${category.ctaLabel} — ${category.title}`}
        >
          {category.ctaLabel}
          <Icon
            name="arrow"
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </article>
  );
}

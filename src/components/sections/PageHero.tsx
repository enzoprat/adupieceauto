import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  crumbs: Crumb[];
};

export function PageHero({ eyebrow, title, description, crumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-ink">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark bg-[size:64px_64px] opacity-50" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-signal/15 blur-[130px]" />

      <div className="relative mx-auto max-w-content px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <nav aria-label="Fil d'ariane">
          <ol className="flex flex-wrap items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-metal">
            {crumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-1.5">
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-paper">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-paper">{crumb.label}</span>
                )}
                {i < crumbs.length - 1 && (
                  <Icon name="arrow" className="h-3 w-3 text-white/20" />
                )}
              </li>
            ))}
          </ol>
        </nav>

        <p className="mt-6 inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.24em] text-signal">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tightest text-paper sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-metal sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

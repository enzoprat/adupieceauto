import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-24 lg:py-28", className)}>
      <div className="mx-auto w-full max-w-content px-5 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

type KickerProps = {
  children: React.ReactNode;
  index?: string;
  className?: string;
};

/**
 * Micro-label technique de section (style catalogue).
 * Pas de tiret cadratin : un point signal + libellé mono en capitales.
 */
export function Kicker({ children, index, className }: KickerProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.24em] text-metal",
        className
      )}
    >
      {index && (
        <span className="font-semibold text-signal">{index}</span>
      )}
      <span className="h-1.5 w-1.5 rounded-full bg-signal" />
      {children}
    </span>
  );
}

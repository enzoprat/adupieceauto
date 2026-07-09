import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-16 sm:py-20 lg:py-24", className)}>
      <div className="mx-auto w-full max-w-content px-5 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-racing",
        className
      )}
    >
      <span className="h-px w-6 bg-racing" />
      {children}
    </span>
  );
}

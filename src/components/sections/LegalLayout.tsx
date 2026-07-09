import { PageHero } from "@/components/sections/PageHero";

type LegalLayoutProps = {
  title: string;
  crumbLabel: string;
  children: React.ReactNode;
};

export function LegalLayout({ title, crumbLabel, children }: LegalLayoutProps) {
  return (
    <>
      <PageHero
        eyebrow="Informations légales"
        title={title}
        crumbs={[{ label: "Accueil", href: "/" }, { label: crumbLabel }]}
      />
      <section className="bg-ink py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <div className="space-y-8 text-sm leading-relaxed text-metal [&_a]:text-paper [&_a:hover]:text-signal [&_a]:underline [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-paper [&_h2]:mb-3 [&_p]:mt-2">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}

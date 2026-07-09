import { Section, Kicker } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { reasons } from "@/data/benefits";
import { site } from "@/data/site";

export function WhyChoose() {
  return (
    <Section className="bg-ink">
      <div className="max-w-2xl">
        <Kicker>Pourquoi les garages restent</Kicker>
        <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tightest text-paper sm:text-4xl">
          Un fournisseur, pas une plateforme de plus.
        </h2>
        <p className="mt-4 text-[16px] leading-relaxed text-metal">
          Créée en {site.founded} par {site.founder}, l&apos;entreprise s&apos;est
          construite sur la relation directe et la réactivité. Aujourd&apos;hui, plus
          de {site.clientsCount} garages et ateliers commandent régulièrement.
        </p>
      </div>

      <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason) => (
          <StaggerItem key={reason.title} className="h-full">
            <div className="group h-full rounded-2xl border border-white/10 bg-ink-800 p-6 transition-colors hover:border-signal/40">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-ink-700 text-signal transition-colors group-hover:border-signal/40">
                <Icon name={reason.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-paper">
                {reason.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-metal">
                {reason.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

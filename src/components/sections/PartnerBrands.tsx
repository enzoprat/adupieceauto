import { Section, Kicker } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { brandFamilies } from "@/data/partnerBrands";

export function PartnerBrands() {
  return (
    <Section id="marques" className="bg-ink">
      <div className="max-w-2xl">
        <Kicker>Marques référencées</Kicker>
        <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tightest text-paper sm:text-4xl">
          Les équipementiers qu&apos;on met dans vos ateliers.
        </h2>
        <p className="mt-4 text-[16px] leading-relaxed text-metal">
          Pour chaque besoin, on sélectionne l&apos;équipementier adapté à votre
          véhicule, au budget et à la disponibilité. Vous indiquez la pièce,
          on confirme la référence, le prix et le délai.
        </p>
      </div>

      <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {brandFamilies.map((family) => (
          <StaggerItem key={family.title} className="h-full">
            <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-ink-800 p-6 transition-colors hover:border-signal/40">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-ink-700 text-signal transition-colors group-hover:border-signal/40">
                  <Icon name={family.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold text-paper">
                  {family.title}
                </h3>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {family.brands.map((brand) => (
                  <li
                    key={brand}
                    className="rounded-lg border border-white/10 bg-ink-700/60 px-3 py-1.5 font-display text-sm font-semibold tracking-tight text-paper/90 transition-colors group-hover:border-white/15"
                  >
                    {brand}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <p className="mt-8 text-[13px] leading-relaxed text-metal-dim">
        Marques citées à titre indicatif : elles restent la propriété de leurs
        détenteurs respectifs. Sélection possible selon la référence et la
        disponibilité.
      </p>
    </Section>
  );
}

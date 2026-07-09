import { Section, Kicker } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

const pains = [
  {
    icon: "clock" as const,
    title: "Le véhicule immobilise un pont",
    text: "Chaque heure d'attente, c'est une place d'atelier bloquée et un planning qui glisse.",
  },
  {
    icon: "phone" as const,
    title: "Le client rappelle",
    text: "Il veut une date. Sans réponse claire du fournisseur, vous ne pouvez pas vous engager.",
  },
  {
    icon: "custom" as const,
    title: "La mauvaise référence arrive",
    text: "Pièce non conforme, second déplacement, montage repoussé : la journée est perdue.",
  },
];

export function ProblemSection() {
  return (
    <Section className="relative overflow-hidden bg-ink">
      <div className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-signal/8 blur-[130px]" />

      <div className="relative grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <Kicker>Le vrai problème d&apos;un garage</Kicker>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tightest text-paper sm:text-4xl lg:text-[2.75rem]">
            Quand un véhicule est bloqué, chaque heure compte.
          </h2>
          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-metal">
            Un atelier ne perd pas de l&apos;argent sur la pièce. Il en perd sur
            l&apos;attente, l&apos;incertitude et les erreurs de référence. Adu Pièce
            Auto existe pour supprimer ces trois frictions.
          </p>

          <div className="mt-8 rounded-2xl border border-signal/25 bg-gradient-to-br from-signal/10 to-transparent p-6">
            <p className="font-display text-lg font-bold text-paper">
              La réponse : un fournisseur qui décroche, cherche et confirme.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-metal">
              Moins de temps perdu au téléphone, plus de véhicules sortis de
              l&apos;atelier. Vous obtenez prix, disponibilité et délai avant même de
              commander.
            </p>
          </div>
        </div>

        <Stagger className="grid gap-4 self-center">
          {pains.map((p) => (
            <StaggerItem key={p.title}>
              <div className="group flex items-start gap-5 rounded-2xl border border-white/10 bg-ink-800 p-6 transition-colors hover:border-white/20">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-ink-700 text-signal">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-paper">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-metal">
                    {p.text}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <Reveal className="mt-14" blur={false}>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </Reveal>
    </Section>
  );
}

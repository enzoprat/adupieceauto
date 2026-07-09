import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/data/site";

const points = [
  {
    icon: "clock" as const,
    title: "Réactivité immédiate",
    text: "Votre demande est traitée en priorité pour limiter l'immobilisation des véhicules.",
  },
  {
    icon: "pin" as const,
    title: "Zone locale maîtrisée",
    text: "Labastide-Saint-Pierre et alentours : nous connaissons le terrain et les délais.",
  },
  {
    icon: "garage" as const,
    title: "Pensé pour les garages",
    text: "Un approvisionnement adapté au rythme et aux contraintes des ateliers.",
  },
];

export function DeliverySection() {
  return (
    <Section id="livraison" className="relative overflow-hidden bg-ink-800">
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-racing/15 blur-[120px]" />

      <div className="relative grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Logistique de proximité</Eyebrow>
          <h2 className="mt-4 font-tight text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Livraison <span className="text-racing">sous 4h</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-mute">
            Besoin d&apos;une pièce rapidement ? Adu Pièce Auto accompagne les garages
            et professionnels avec une livraison sous 4h selon disponibilité et zone
            d&apos;intervention.
          </p>

          <div className="mt-6 inline-flex items-start gap-3 rounded-lg border border-white/10 bg-ink-700 px-4 py-3">
            <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0 text-racing" />
            <p className="text-sm text-mute">
              Délai indicatif :{" "}
              <span className="text-white">
                selon disponibilité, typologie de pièce et zone de livraison.
              </span>
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg">
              Demander une pièce
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
            <Button href={site.phone.href} variant="outline" size="lg">
              <Icon name="phone" className="h-4 w-4 text-racing" />
              {site.phone.display}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-white/10 bg-ink-700 p-2 shadow-card">
            <div className="rounded-xl border border-white/5 bg-ink-900 p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-mute">
                  Chrono livraison
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-racing text-racing">
                  <Icon name="bolt" className="h-6 w-6" />
                </span>
              </div>
              <p className="mt-4 font-tight text-5xl font-extrabold text-white">
                4h<span className="text-racing">.</span>
              </p>
              <p className="mt-1 text-sm text-mute">Objectif de mise à disposition</p>

              <div className="mt-6 space-y-3">
                {points.map((p) => (
                  <div key={p.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/10 bg-ink-800 text-racing">
                      <Icon name={p.icon} className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{p.title}</p>
                      <p className="text-xs leading-relaxed text-mute">{p.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 border-t border-white/5 pt-4 font-mono text-[11px] uppercase tracking-wider text-mute">
                Zone · {site.address.city} & alentours (82)
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

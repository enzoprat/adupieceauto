import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/data/site";

const highlights = [
  {
    icon: "garage" as const,
    title: "Pièces pour garages",
    text: "Pièces courantes et références spécifiques pour l'entretien et la réparation au quotidien.",
  },
  {
    icon: "consumable" as const,
    title: "Consommables atelier",
    text: "Lubrifiants, nettoyants, gants, sprays techniques et fournitures indispensables.",
  },
  {
    icon: "pin" as const,
    title: "Service de proximité",
    text: "Un interlocuteur direct, à l'écoute des contraintes des professionnels de l'automobile.",
  },
];

export function PartsIntro() {
  return (
    <Section className="bg-ink-800">
      <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <Eyebrow>Notre activité</Eyebrow>
          <h2 className="mt-4 font-tight text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Pièces auto & consommables pour professionnels
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mute">
            Créée en {site.founded} par {site.founder}, Adu Pièce Auto s&apos;est
            développée grâce à la proximité, au service client et à des prix
            attractifs. Aujourd&apos;hui, l&apos;entreprise accompagne plus de{" "}
            {site.clientsCount} clients réguliers.
          </p>
          <p className="mt-4 text-base leading-relaxed text-mute">
            Notre objectif : devenir le fournisseur de proximité fiable des garages et
            ateliers, avec un approvisionnement simple, rapide et au bon prix.
          </p>
        </Reveal>

        <div className="grid gap-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.07}>
              <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-ink-700 p-5 transition-colors hover:border-racing/40">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-ink-800 text-racing">
                  <Icon name={h.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-tight text-base font-bold text-white">
                    {h.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-mute">{h.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

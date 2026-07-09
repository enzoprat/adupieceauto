import { Section, Eyebrow } from "@/components/ui/Section";
import { PartRequestFormClient } from "@/components/forms/PartRequestFormClient";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/data/site";

const coordinates = [
  {
    icon: "phone" as const,
    label: "Téléphone",
    value: site.phone.display,
    href: site.phone.href,
  },
  {
    icon: "mail" as const,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: "pin" as const,
    label: "Adresse",
    value: site.address.full,
  },
  {
    icon: "clock" as const,
    label: "Horaires",
    value: site.hours,
  },
];

const mapQuery = encodeURIComponent(site.address.full);

export function ContactSection() {
  return (
    <Section className="bg-ink">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Colonne coordonnées */}
        <div>
          <Eyebrow>Contact direct</Eyebrow>
          <h2 className="mt-4 font-tight text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Demandez votre pièce
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mute">
            Un échange direct, une réponse rapide. Appelez-nous ou remplissez le
            formulaire : nous vérifions prix et disponibilité dans les meilleurs délais.
          </p>

          <a
            href={site.phone.href}
            className="mt-6 flex items-center gap-4 rounded-xl border border-racing/30 bg-racing/10 p-5 transition-colors hover:bg-racing/15"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-racing text-white">
              <Icon name="phone" className="h-6 w-6" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-wide text-mute">
                Appeler le fournisseur
              </span>
              <span className="font-tight text-2xl font-extrabold text-white">
                {site.phone.display}
              </span>
            </span>
          </a>

          <ul className="mt-5 space-y-3">
            {coordinates.slice(1).map((c) => (
              <li
                key={c.label}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-ink-700 p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-ink-800 text-racing">
                  <Icon name={c.icon} className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-mute">
                    {c.label}
                  </span>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="break-words font-medium text-white hover:text-racing"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span className="font-medium text-white">{c.value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex items-start gap-3 rounded-xl border border-white/10 bg-ink-700 p-4">
            <Icon name="bolt" className="mt-0.5 h-5 w-5 shrink-0 text-racing" />
            <p className="text-sm text-mute">
              <span className="font-semibold text-white">Livraison sous 4h</span> selon
              disponibilité et zone d&apos;intervention. Idéal pour les garages et
              ateliers qui ont besoin d&apos;une pièce sans attendre.
            </p>
          </div>

          <div className="mt-5 overflow-hidden rounded-xl border border-white/10">
            <iframe
              title={`Carte — ${site.name}`}
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="220"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block grayscale-[0.3]"
            />
          </div>
        </div>

        {/* Colonne formulaire */}
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-700 px-4 py-2 text-sm text-white">
            <Icon name="garage" className="h-4 w-4 text-racing" />
            Réservé aux professionnels & garages
          </div>
          <PartRequestFormClient />
        </div>
      </div>
    </Section>
  );
}

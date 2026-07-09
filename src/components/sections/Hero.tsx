import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/data/site";

const badges = [
  "Livraison sous 4h",
  "Prix attractifs",
  "Fournisseur garages",
  `Depuis ${site.founded}`,
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Fond technique : grille + halo rouge */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dark bg-[size:64px_64px] opacity-60" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-racing/20 blur-[140px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-racing-dark/15 blur-[140px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto grid max-w-content items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:py-28 lg:px-8">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-mute">
            <span className="h-1.5 w-1.5 rounded-full bg-racing" />
            Fournisseur de pièces auto · Tarn-et-Garonne
          </span>

          <h1 className="mt-6 font-tight text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Pièces auto & consommables{" "}
            <span className="text-racing">livrés rapidement</span> aux garages
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
            Adu Pièce Auto accompagne les professionnels de l&apos;automobile avec
            des pièces, consommables et solutions d&apos;approvisionnement fiables, à
            prix attractifs, avec une livraison rapide sous 4h autour de
            Labastide-Saint-Pierre.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg">
              Demander une pièce
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
            <Button href={site.phone.href} variant="outline" size="lg">
              <Icon name="phone" className="h-4 w-4 text-racing" />
              Appeler maintenant
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {badges.map((badge) => (
              <li
                key={badge}
                className="flex items-center gap-2 text-sm font-medium text-white"
              >
                <Icon name="check" className="h-4 w-4 text-racing" />
                {badge}
              </li>
            ))}
          </ul>
        </div>

        {/* Carte visuelle technique côté droit */}
        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-700 shadow-card">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-mute">
                Demande de pièce
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-racing">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-racing" />
                En ligne
              </span>
            </div>
            <div className="space-y-3 p-5">
              {[
                { ref: "REF · FRN-0421", label: "Plaquettes avant", status: "Dispo" },
                { ref: "REF · FLT-1180", label: "Filtre à huile", status: "Dispo" },
                { ref: "REF · BAT-72AH", label: "Batterie 72Ah", status: "Sous 4h" },
              ].map((row) => (
                <div
                  key={row.ref}
                  className="flex items-center justify-between rounded-lg border border-white/5 bg-ink-800 px-4 py-3"
                >
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-mute">
                      {row.ref}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-white">
                      {row.label}
                    </p>
                  </div>
                  <span className="rounded-full border border-racing/30 bg-racing/10 px-2.5 py-1 text-[11px] font-semibold text-racing">
                    {row.status}
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-3 rounded-lg bg-racing px-4 py-3.5 text-white">
                <Icon name="bolt" className="h-5 w-5" />
                <div>
                  <p className="text-sm font-bold leading-none">Réponse rapide</p>
                  <p className="mt-1 text-xs text-white/80">
                    Prix & disponibilité confirmés par l&apos;équipe
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-4 -right-4 hidden h-24 w-24 rounded-2xl border border-white/10 bg-ink-700 sm:block" />
        </div>
      </div>
    </section>
  );
}

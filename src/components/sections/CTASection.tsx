import { MagneticButton } from "@/components/ui/MagneticButton";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/data/site";

export function CTASection() {
  return (
    <section className="bg-ink py-20 sm:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-800 p-8 sm:p-12 lg:p-14">
          <div className="pointer-events-none absolute inset-0 bg-grid-dark bg-[size:56px_56px] opacity-40 [mask-image:radial-gradient(80%_120%_at_100%_0%,#000,transparent_70%)]" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-signal/20 blur-[110px]" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-signal">
                Une pièce à trouver ?
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.05] tracking-tightest text-paper sm:text-4xl lg:text-[2.9rem]">
                On cherche la réf, on confirme le prix, on livre vite.
              </h2>
              <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-metal">
                Réponse rapide sur le prix, la disponibilité et le délai. Aucune
                commande n&apos;est validée sans votre confirmation.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <MagneticButton href="/contact" className="w-full">
                Demander une pièce
                <Icon
                  name="arrow"
                  className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                />
              </MagneticButton>
              <MagneticButton
                href={site.phone.href}
                variant="outline"
                className="w-full"
              >
                <Icon name="phone" className="h-4 w-4 text-signal" />
                {site.phone.display}
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

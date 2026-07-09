import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/data/site";

export function CTASection() {
  return (
    <section className="bg-ink py-16 sm:py-20">
      <div className="mx-auto max-w-content px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-racing/30 bg-gradient-to-br from-racing-dark/30 via-ink-700 to-ink-700 p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-racing/20 blur-[100px]" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="font-tight text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Une pièce à trouver ? Faites votre demande maintenant.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
                Votre demande de pièce traitée rapidement par une équipe réactive.
                Indiquez votre besoin, nous vérifions prix et disponibilité, puis nous
                revenons vers vous.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button href="/contact" size="lg" className="w-full">
                Demander une pièce
                <Icon name="arrow" className="h-4 w-4" />
              </Button>
              <Button
                href={site.phone.href}
                variant="outline"
                size="lg"
                className="w-full border-white/25"
              >
                <Icon name="phone" className="h-4 w-4 text-racing" />
                {site.phone.display}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

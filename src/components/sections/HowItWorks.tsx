import { Section, Kicker } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { steps } from "@/data/benefits";

export function HowItWorks() {
  return (
    <Section className="bg-ink-800">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Panneau gauche sticky */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Kicker>Comment ça marche</Kicker>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tightest text-paper sm:text-4xl">
            Quatre étapes, aucune zone d&apos;ombre.
          </h2>
          <p className="mt-5 max-w-md text-[16px] leading-relaxed text-metal">
            Vous savez toujours où en est votre demande. Pas de commande engagée sans
            votre accord, pas de délai flou.
          </p>
          <div className="mt-8 hidden sm:block">
            <Button href="/contact">
              Lancer une demande
              <Icon
                name="arrow"
                className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
              />
            </Button>
          </div>
        </div>

        {/* Étapes */}
        <ol className="space-y-4">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.06}>
              <li className="group relative flex gap-5 rounded-2xl border border-white/10 bg-ink-900 p-6 transition-colors hover:border-signal/40 sm:p-7">
                <div className="flex flex-col items-center">
                  <span className="font-display text-3xl font-extrabold tracking-tight text-signal">
                    {step.number}
                  </span>
                  {i < steps.length - 1 && (
                    <span className="mt-3 hidden w-px flex-1 bg-white/10 sm:block" />
                  )}
                </div>
                <div className="flex-1 pb-1">
                  <h3 className="font-display text-lg font-bold text-paper sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-metal">
                    {step.description}
                  </p>
                  <span className="mt-3 inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-metal-dim">
                    {step.meta}
                  </span>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}

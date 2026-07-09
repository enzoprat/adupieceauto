import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { steps } from "@/data/benefits";

export function HowItWorks() {
  return (
    <Section className="bg-ink-800">
      <div className="max-w-2xl">
        <Eyebrow>Process simple</Eyebrow>
        <h2 className="mt-4 font-tight text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Comment ça marche
        </h2>
        <p className="mt-4 text-base leading-relaxed text-mute">
          Une demande, un échange direct, une réponse rapide. Notre objectif :
          simplifier l&apos;approvisionnement des professionnels de l&apos;automobile.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.07}>
            <div className="relative h-full rounded-xl border border-white/10 bg-ink-700 p-6">
              <span className="font-mono text-4xl font-extrabold text-white/10">
                {step.number}
              </span>
              <div className="mt-2 h-px w-10 bg-racing" />
              <h3 className="mt-4 font-tight text-base font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

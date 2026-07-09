import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { reasons } from "@/data/benefits";

export function WhyChoose() {
  return (
    <Section className="bg-ink">
      <div className="max-w-2xl">
        <Eyebrow>Notre engagement</Eyebrow>
        <h2 className="mt-4 font-tight text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Pourquoi choisir Adu Pièce Auto
        </h2>
        <p className="mt-4 text-base leading-relaxed text-mute">
          Des prix attractifs, un service réactif et une relation de proximité pour
          vous aider à gagner du temps au quotidien.
        </p>
      </div>

      <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason, i) => (
          <Reveal key={reason.title} delay={(i % 3) * 0.05}>
            <div className="group h-full bg-ink-700 p-6 transition-colors hover:bg-ink-600">
              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-ink-800 text-racing transition-colors group-hover:border-racing/40">
                <Icon name="check" className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-tight text-lg font-bold text-white">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">
                {reason.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

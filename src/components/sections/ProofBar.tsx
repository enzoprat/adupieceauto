import { proofs } from "@/data/benefits";
import { Icon } from "@/components/ui/Icon";
import { Counter } from "@/components/ui/Counter";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export function ProofBar() {
  return (
    <section className="border-y border-white/10 bg-ink-800">
      <Stagger className="mx-auto grid max-w-content grid-cols-2 gap-px bg-white/[0.06] px-0 sm:px-6 lg:grid-cols-4 lg:px-8">
        {proofs.map((p) => (
          <StaggerItem
            key={p.label}
            className="group flex items-center gap-4 bg-ink-800 px-5 py-7 lg:px-6"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-ink-700 text-signal transition-colors group-hover:border-signal/40">
              <Icon name={p.icon} className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-2xl font-bold tracking-tight text-paper">
                {p.stat ? (
                  <Counter
                    to={p.stat.to}
                    suffix={p.stat.suffix}
                    prefix={p.stat.prefix}
                  />
                ) : (
                  p.fixed
                )}
              </p>
              <p className="mt-0.5 text-sm font-semibold text-paper">{p.label}</p>
              <p className="text-xs text-metal">{p.detail}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

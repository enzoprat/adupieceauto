import { benefits } from "@/data/benefits";
import { Icon } from "@/components/ui/Icon";

export function BenefitsStrip() {
  return (
    <section className="border-y border-white/10 bg-ink-800">
      <div className="mx-auto grid max-w-content grid-cols-2 divide-x divide-y divide-white/10 px-5 sm:px-6 lg:grid-cols-5 lg:divide-y-0 lg:px-8">
        {benefits.map((b) => (
          <div
            key={b.label}
            className="group flex flex-col gap-2 px-3 py-6 sm:px-5 lg:py-8"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-ink-700 text-racing transition-colors group-hover:border-racing/40">
              <Icon name={b.icon} className="h-5 w-5" />
            </span>
            <p className="mt-1 font-tight text-sm font-bold text-white">{b.label}</p>
            <p className="text-xs leading-relaxed text-mute">{b.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

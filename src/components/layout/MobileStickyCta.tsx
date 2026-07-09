import Link from "next/link";
import { primaryCta } from "@/data/navigation";
import { site } from "@/data/site";
import { Icon } from "@/components/ui/Icon";

/** Barre d'action collée en bas sur mobile : Appeler + Demander une pièce. */
export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-white/10 bg-ink/95 p-3 backdrop-blur-md lg:hidden">
      <a
        href={site.phone.href}
        className="flex items-center justify-center gap-2 rounded-full glass border border-white/15 py-3 text-sm font-semibold text-paper"
      >
        <Icon name="phone" className="h-4 w-4 text-signal" />
        Appeler
      </a>
      <Link
        href={primaryCta.href}
        className="flex items-center justify-center gap-2 rounded-full glass-signal border border-signal/50 py-3 text-sm font-semibold text-paper shadow-glass"
      >
        <Icon name="bolt" className="h-4 w-4" />
        Demander une pièce
      </Link>
    </div>
  );
}

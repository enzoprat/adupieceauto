import Link from "next/link";
import { footerNav } from "@/data/navigation";
import { site } from "@/data/site";
import { Logo } from "@/components/layout/Logo";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-800">
      <div className="mx-auto grid max-w-content gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-sm text-sm leading-relaxed text-metal">
            {site.shortDescription}
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-metal-dim">
            {site.legalName} · Depuis {site.founded}
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-metal-dim">
            Navigation
          </h3>
          <ul className="space-y-2.5">
            {footerNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-metal transition-colors hover:text-paper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-metal-dim">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-metal">
            <li className="flex items-start gap-3">
              <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
              <a href={site.phone.href} className="hover:text-paper">
                {site.phone.display}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-paper">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
              <span>{site.address.full}</span>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-metal-dim sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.legalName}. Tous droits
            réservés.
          </p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-paper">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-paper">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

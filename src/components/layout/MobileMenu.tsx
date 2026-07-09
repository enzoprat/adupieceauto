"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { mainNav, primaryCta } from "@/data/navigation";
import { site } from "@/data/site";
import { Icon } from "@/components/ui/Icon";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-paper"
        aria-label="Ouvrir le menu"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            d="M4 7h16M4 12h16M4 17h16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-ink/98 backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <span className="font-display text-base font-extrabold tracking-tightest text-paper">
              Menu
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-paper"
              aria-label="Fermer le menu"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-1 px-5 py-6">
            {mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-lg font-semibold text-paper hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-3 border-t border-white/10 px-5 py-6">
            <Link
              href={primaryCta.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-signal px-5 py-3.5 text-base font-semibold text-ink shadow-signal"
            >
              {primaryCta.label}
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <a
              href={site.phone.href}
              className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-base font-semibold text-paper"
            >
              <Icon name="phone" className="h-4 w-4" />
              {site.phone.display}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

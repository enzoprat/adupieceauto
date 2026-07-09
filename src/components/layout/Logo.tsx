import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label={`${site.name} — accueil`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-racing text-white shadow-[0_6px_18px_-6px_rgba(225,6,0,0.7)]">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            d="M4 15l1.4-4.2A3 3 0 0 1 8.2 8.7h7.6a3 3 0 0 1 2.8 2.1L20 15M4 15h16M4 15v3h2.5v-1.5M20 15v3h-2.5v-1.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="8" cy="15" r="1" fill="currentColor" />
          <circle cx="16" cy="15" r="1" fill="currentColor" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-tight text-base font-extrabold tracking-tight text-white">
          Adu Pièce Auto
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
          Fournisseur garages · 82
        </span>
      </span>
    </Link>
  );
}

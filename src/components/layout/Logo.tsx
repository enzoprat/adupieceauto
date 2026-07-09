import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center", className)}
      aria-label={`${site.name} — accueil`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${BASE}/logo-adu.png`}
        alt={`${site.name} — Pièces auto`}
        className="h-10 w-auto"
        width={793}
        height={323}
      />
    </Link>
  );
}

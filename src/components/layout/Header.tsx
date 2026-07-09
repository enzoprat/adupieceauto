"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { mainNav, primaryCta } from "@/data/navigation";
import { site } from "@/data/site";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled
          ? "border-white/10 bg-ink/90 backdrop-blur-md"
          : "border-transparent bg-ink/40 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3.5 py-2 text-sm font-medium text-mute transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phone.href}
            className="flex items-center gap-2 text-sm font-semibold text-white"
          >
            <Icon name="phone" className="h-4 w-4 text-racing" />
            {site.phone.display}
          </a>
          <Link
            href={primaryCta.href}
            className="inline-flex items-center gap-2 rounded-md bg-racing px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(225,6,0,0.6)] transition-all hover:bg-racing-dark hover:shadow-glow"
          >
            {primaryCta.label}
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}

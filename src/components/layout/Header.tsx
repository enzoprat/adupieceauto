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
              className="rounded-full px-3.5 py-2 text-sm font-medium text-metal transition-colors hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phone.href}
            className="flex items-center gap-2 text-sm font-semibold text-paper transition-colors hover:text-signal"
          >
            <Icon name="phone" className="h-4 w-4 text-signal" />
            {site.phone.display}
          </a>
          <Link
            href={primaryCta.href}
            className="group/btn inline-flex items-center gap-2 rounded-full glass-signal border border-signal/50 px-5 py-2.5 text-sm font-semibold text-paper shadow-glass transition-all hover:-translate-y-0.5 hover:border-signal/80 hover:shadow-signal"
          >
            {primaryCta.label}
            <Icon
              name="arrow"
              className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5"
            />
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}

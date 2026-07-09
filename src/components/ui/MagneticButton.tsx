"use client";

import { useRef } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline";
  strength?: number;
};

const styles = {
  primary:
    "bg-signal text-ink shadow-[0_10px_30px_-10px_rgba(255,77,29,0.7)] hover:shadow-signal",
  outline:
    "border border-white/15 text-paper hover:border-signal/60 hover:bg-white/[0.04]",
};

/** Bouton avec léger effet magnétique au survol (desktop). */
export function MagneticButton({
  href,
  children,
  className,
  variant = "primary",
  strength = 0.25,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const isInternal = href.startsWith("/");

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  }
  function onLeave() {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  }

  const classes = cn(
    "group/btn inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold tracking-tight transition-[box-shadow,border-color,background] duration-200 will-change-transform focus-visible:ring-2 focus-visible:ring-signal/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink active:scale-[0.98]",
    styles[variant],
    className
  );

  const inner = (
    <span
      ref={ref}
      className="pointer-events-none inline-flex items-center gap-2 transition-transform duration-200 ease-out"
      style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
    >
      {children}
    </span>
  );

  if (isInternal) {
    return (
      <Link
        href={href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={classes}
      >
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} onMouseMove={onMove} onMouseLeave={onLeave} className={classes}>
      {inner}
    </a>
  );
}

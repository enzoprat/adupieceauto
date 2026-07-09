"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/data/site";

const requestRows = [
  { ref: "FRN-0421", label: "Plaquettes avant", status: "Dispo", tone: "avail" },
  { ref: "FLT-1180", label: "Filtre à huile", status: "Dispo", tone: "avail" },
  { ref: "BAT-72AH", label: "Batterie 72Ah", status: "Sous 4h", tone: "pending" },
] as const;

const chips = [
  { label: "REF confirmée", icon: "check" as const, x: "-8%", y: "12%", d: 0 },
  { label: "Prix validé", icon: "tag" as const, x: "92%", y: "6%", d: 0.6 },
  { label: "Zone 82", icon: "pin" as const, x: "-6%", y: "78%", d: 1.2 },
];

const trust = [
  { k: "2019", v: "Fournisseur local" },
  { k: "20+", v: "garages & ateliers" },
  { k: "82", v: "Tarn-et-Garonne" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yUp = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const yDown = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 40]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ink pt-14 sm:pt-16"
    >
      {/* Grille atelier + halo signal */}
      <div className="pointer-events-none absolute inset-0 animate-grid-drift bg-grid-dark bg-[size:64px_64px] opacity-70 [mask-image:radial-gradient(120%_100%_at_50%_0%,#000_35%,transparent_85%)]" />
      <div className="pointer-events-none absolute inset-0 bg-signal-radial" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-signal/10 blur-[130px]" />

      <div className="relative mx-auto grid max-w-content items-center gap-14 px-5 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-24 lg:px-8">
        {/* Colonne texte */}
        <div>
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-metal"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-avail" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-avail" />
            </span>
            Fournisseur pièces auto · Labastide-Saint-Pierre
          </motion.span>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="mt-6 font-display text-[2.6rem] font-extrabold leading-[0.98] tracking-tightest text-paper sm:text-6xl lg:text-[4.2rem]"
          >
            Vos véhicules sortent
            <br className="hidden sm:block" /> de l&apos;atelier{" "}
            <span className="text-signal">plus vite.</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
            className="mt-6 max-w-xl text-[17px] leading-relaxed text-metal"
          >
            Une pièce bloquante ? On identifie la bonne référence, on confirme le
            prix et la disponibilité, puis on livre sous 4h selon la zone. Pièces
            auto et consommables pour garages, ateliers et pros du Tarn-et-Garonne.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.26 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <MagneticButton href="/contact">
              Demander une pièce
              <Icon
                name="arrow"
                className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
              />
            </MagneticButton>
            <MagneticButton href={site.phone.href} variant="outline">
              <Icon name="phone" className="h-4 w-4 text-signal" />
              Appeler maintenant
            </MagneticButton>
          </motion.div>

          {/* Mini-bloc confiance */}
          <motion.dl
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.34 }}
            className="mt-10 grid max-w-lg grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02]"
          >
            {trust.map((t) => (
              <div key={t.k} className="px-4 py-4 text-center sm:text-left">
                <dt className="font-display text-2xl font-bold text-paper">
                  {t.k}
                </dt>
                <dd className="mt-1 text-[11px] uppercase tracking-wider text-metal">
                  {t.v}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Colonne visuelle : interface de demande */}
        <motion.div
          style={{ y: yUp }}
          initial={reduce ? false : { opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-800 shadow-card">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-metal">
                Demande · #A-4127
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-avail">
                <span className="h-1.5 w-1.5 rounded-full bg-avail" />
                En traitement
              </span>
            </div>

            <div className="space-y-2.5 p-5">
              {requestRows.map((row, i) => (
                <motion.div
                  key={row.ref}
                  initial={reduce ? false : { opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 + i * 0.12, duration: 0.5 }}
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-ink-900 px-4 py-3"
                >
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-metal">
                      REF · {row.ref}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-paper">
                      {row.label}
                    </p>
                  </div>
                  <span
                    className={
                      row.tone === "avail"
                        ? "rounded-full border border-avail/30 bg-avail/10 px-2.5 py-1 text-[11px] font-semibold text-avail"
                        : "rounded-full border border-pending/30 bg-pending/10 px-2.5 py-1 text-[11px] font-semibold text-pending"
                    }
                  >
                    {row.status}
                  </span>
                </motion.div>
              ))}

              <div className="flex items-center gap-3 rounded-xl bg-signal px-4 py-3.5 text-paper">
                <Icon name="bolt" className="h-5 w-5" />
                <div>
                  <p className="text-sm font-bold leading-none">
                    Réponse claire avant commande
                  </p>
                  <p className="mt-1 text-xs text-ink/80">
                    Prix, disponibilité et délai confirmés par l&apos;équipe.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Chips flottantes (desktop uniquement) */}
          {chips.map((chip) => (
            <motion.span
              key={chip.label}
              style={{ left: chip.x, top: chip.y, y: yDown }}
              initial={reduce ? false : { opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + chip.d * 0.15, duration: 0.5 }}
              className="absolute z-10 hidden -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/10 bg-ink-700/90 px-3 py-1.5 text-xs font-medium text-paper shadow-lift backdrop-blur lg:flex"
            >
              <Icon name={chip.icon} className="h-3.5 w-3.5 text-signal" />
              {chip.label}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
    </section>
  );
}

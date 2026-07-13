"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/data/site";

const trust = [
  { k: "2019", v: "Fournisseur local" },
  { k: "20+", v: "clients réguliers" },
  { k: "82", v: "Tarn-et-Garonne" },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-ink pt-14 sm:pt-16">
      {/* Grille atelier + halo signal */}
      <div className="pointer-events-none absolute inset-0 animate-grid-drift bg-grid-dark bg-[size:64px_64px] opacity-70 [mask-image:radial-gradient(120%_100%_at_50%_0%,#000_35%,transparent_85%)]" />
      <div className="pointer-events-none absolute inset-0 bg-signal-radial" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-signal/10 blur-[130px]" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 py-20 text-center sm:px-6 lg:py-28 lg:px-8">
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
          Pièces auto · Labastide-Saint-Pierre (82)
        </motion.span>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="mt-6 font-display text-[2.5rem] font-extrabold leading-[1.02] tracking-tightest text-paper sm:text-5xl lg:text-[3.6rem]"
        >
          Vente de <span className="text-signal">pièces auto</span>,
          consommables et outillage.
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
          className="mt-6 max-w-xl text-[17px] leading-relaxed text-metal"
        >
          Pour les professionnels comme pour les particuliers du
          Tarn-et-Garonne. Bonne référence, prix intéressant, livraison express
          deux fois par jour.
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
          className="mt-12 grid w-full max-w-lg grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02]"
        >
          {trust.map((t) => (
            <div key={t.k} className="px-4 py-4 text-center">
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

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
    </section>
  );
}

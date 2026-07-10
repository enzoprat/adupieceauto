"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Section, Kicker } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/data/site";

const timeline = [
  { label: "Demande reçue", meta: "T+0", icon: "mail" as const },
  { label: "Référence identifiée", meta: "T+10 min", icon: "check" as const },
  { label: "Prix & dispo confirmés", meta: "T+30 min", icon: "tag" as const },
  { label: "Livraison ou retrait", meta: "sous 4h", icon: "bolt" as const },
];

export function DeliverySection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section id="livraison" className="relative overflow-hidden bg-ink">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-signal/10 blur-[130px]" />

      <div className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Texte + timeline */}
        <div ref={ref}>
          <Kicker>Logistique de proximité</Kicker>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tightest text-paper sm:text-4xl lg:text-[2.75rem]">
            Livraison <span className="text-signal">sous 4h</span> autour de
            Labastide-Saint-Pierre.
          </h2>
          <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-metal">
            De la demande à la mise à disposition, chaque étape est traitée sans
            temps mort.
          </p>

          {/* Timeline verticale qui se remplit au scroll */}
          <div className="relative mt-9 pl-2">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-white/10" />
            <motion.div
              style={{ height: reduce ? "100%" : fill }}
              className="absolute left-[19px] top-2 w-px bg-signal"
            />
            <ul className="space-y-6">
              {timeline.map((t) => (
                <li key={t.label} className="relative flex items-center gap-5">
                  <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-ink-700 text-signal">
                    <Icon name={t.icon} className="h-4 w-4" />
                  </span>
                  <div className="flex flex-1 items-center justify-between gap-3">
                    <span className="font-display text-[15px] font-bold text-paper">
                      {t.label}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-metal">
                      {t.meta}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">
              Demander une pièce
              <Icon
                name="arrow"
                className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
              />
            </Button>
            <Button href={site.phone.href} variant="outline">
              <Icon name="phone" className="h-4 w-4 text-signal" />
              {site.phone.display}
            </Button>
          </div>
        </div>

        {/* Carte zone stylisée */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-800 p-2 shadow-card">
            <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-ink-900">
              {/* fond carte abstrait */}
              <div className="absolute inset-0 bg-grid-dark bg-[size:34px_34px] opacity-60" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(225,6,0,0.16),transparent_55%)]" />

              <div className="relative flex min-h-[300px] items-center justify-center p-6">
                {/* cercles de rayon */}
                <span className="absolute h-56 w-56 rounded-full border border-white/8" />
                <span className="absolute h-40 w-40 rounded-full border border-white/10" />
                <span className="absolute h-24 w-24 rounded-full border border-signal/30" />
                <span className="relative flex flex-col items-center">
                  <span className="flex h-12 w-12 animate-pulse-ring items-center justify-center rounded-full bg-signal text-paper">
                    <Icon name="pin" className="h-6 w-6" />
                  </span>
                  <span className="mt-3 rounded-full border border-white/10 bg-ink-800 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-paper">
                    {site.address.city}
                  </span>
                </span>
              </div>

              <div className="relative border-t border-white/10 bg-ink-800/60 px-5 py-4">
                <p className="text-[13px] leading-relaxed text-metal">
                  <span className="font-semibold text-paper">Zone couverte :</span>{" "}
                  Montauban, Grisolles, Nohic, Villebrumier, Campsas, Orgueil et
                  alentours (82).
                </p>
              </div>
            </div>
          </div>

          <p className="mt-4 flex items-start gap-2 text-[13px] text-metal">
            <Icon name="shield" className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
            Délai indicatif, selon disponibilité, typologie de pièce et zone
            d&apos;intervention.
          </p>
        </div>
      </div>
    </Section>
  );
}

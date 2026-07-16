"use client";

import { useState } from "react";
import { productCategories } from "@/data/productCategories";
import { site } from "@/data/site";
import { Icon } from "@/components/ui/Icon";

type Status = "idle" | "loading" | "success" | "error";

type PartRequestFormProps = {
  initialCategorySlug?: string;
  initialUrgency?: string;
};

const urgencyOptions = [
  { value: "aujourdhui", label: "Aujourd'hui", hint: "Urgent" },
  { value: "24h", label: "Sous 24h", hint: "Prioritaire" },
  { value: "cette-semaine", label: "Cette semaine", hint: "Planifié" },
];

function defaultMessage(categoryTitle?: string) {
  if (!categoryTitle) return "";
  return `Bonjour, je souhaite un prix et une disponibilité pour une pièce de la catégorie ${categoryTitle}.`;
}

export function PartRequestForm({
  initialCategorySlug,
  initialUrgency,
}: PartRequestFormProps) {
  const initialCategory = productCategories.find(
    (c) => c.slug === initialCategorySlug
  );

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [category, setCategory] = useState(initialCategory?.title ?? "");
  const [message, setMessage] = useState(defaultMessage(initialCategory?.title));
  const [advancedOpen, setAdvancedOpen] = useState(Boolean(initialCategory));

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    if (fd.get("company_website")) {
      setStatus("success");
      form.reset();
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("success");
      form.reset();
      return;
    }

    const payload = {
      access_key: accessKey,
      subject: `Nouvelle demande de pièce — ${fd.get("name")}`,
      from_name: "Site Adu Pièces Auto",
      replyto: (fd.get("email") as string) || undefined,
      Nom: fd.get("name"),
      "Société / garage": fd.get("company"),
      Téléphone: fd.get("phone"),
      Email: fd.get("email"),
      Ville: fd.get("city"),
      "Catégorie de pièce": category,
      "Référence pièce": fd.get("reference"),
      Immatriculation: fd.get("plate"),
      Marque: fd.get("brand"),
      Modèle: fd.get("model"),
      Année: fd.get("year"),
      Motorisation: fd.get("engine"),
      Quantité: fd.get("quantity"),
      Urgence: fd.get("urgency"),
      Message: message,
      "Consentement RGPD": fd.get("consent") ? "Oui" : "Non",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error("L'envoi a échoué. Merci de réessayer ou d'appeler.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue. Merci de réessayer."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-avail/30 bg-ink-800 p-8 text-center sm:p-10">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-avail text-avail">
          <Icon name="check" className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold text-paper">
          Demande reçue.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-metal">
          On vérifie la référence, le prix et la disponibilité, puis on revient vers
          vous rapidement. Rien n&apos;est commandé sans votre confirmation. Pour une
          urgence, appelez directement.
        </p>
        <a
          href={site.phone.href}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-signal"
        >
          <Icon name="phone" className="h-4 w-4 text-signal" />
          {site.phone.display}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-ink-800 p-6 sm:p-8"
      noValidate
    >
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      {/* Bloc 1 — Vous */}
      <FieldGroup step="01" title="Vos coordonnées">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Nom complet" required>
            <input name="name" required {...inp} placeholder="Jean Dupont" />
          </Field>
          <Field label="Société / garage" hint="si pro">
            <input name="company" {...inp} placeholder="Garage Dupont" />
          </Field>
          <Field label="Téléphone" required>
            <input
              name="phone"
              type="tel"
              required
              {...inp}
              placeholder="06 00 00 00 00"
            />
          </Field>
          <Field label="Email" hint="optionnel">
            <input name="email" type="email" {...inp} placeholder="contact@garage.fr" />
          </Field>
          <div className="sm:col-span-2">
            <Field label="Ville" hint="optionnel">
              <input name="city" {...inp} placeholder="Labastide-Saint-Pierre" />
            </Field>
          </div>
        </div>
      </FieldGroup>

      {/* Bloc 2 — Pièce */}
      <FieldGroup step="02" title="La pièce recherchée">
        <Field label="Catégorie" required>
          <div className="relative">
            <select
              name="category_select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className={`${inpBase} appearance-none pr-10`}
            >
              <option value="">Sélectionner une catégorie…</option>
              {productCategories.map((c) => (
                <option key={c.slug} value={c.title}>
                  {c.title}
                </option>
              ))}
            </select>
            <Icon
              name="arrow"
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-metal"
            />
          </div>
        </Field>

        {/* Détails véhicule repliables */}
        <button
          type="button"
          onClick={() => setAdvancedOpen((v) => !v)}
          className="mt-4 flex w-full items-center justify-between rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-left text-sm font-medium text-paper transition-colors hover:border-white/20"
          aria-expanded={advancedOpen}
        >
          <span className="flex items-center gap-2">
            <Icon name="utility" className="h-4 w-4 text-signal" />
            Détails véhicule & référence
            <span className="font-mono text-[11px] uppercase tracking-wider text-metal">
              accélère la réponse
            </span>
          </span>
          <Icon
            name="arrow"
            className={`h-4 w-4 text-metal transition-transform ${
              advancedOpen ? "-rotate-90" : "rotate-90"
            }`}
          />
        </button>

        {advancedOpen && (
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <Field label="Référence" hint="si connue">
              <input name="reference" {...inp} placeholder="FRN-0421" />
            </Field>
            <Field label="Immatriculation" hint="optionnel">
              <input name="plate" {...inp} placeholder="AB-123-CD" />
            </Field>
            <Field label="Quantité" hint="optionnel">
              <input name="quantity" type="number" min={1} {...inp} placeholder="1" />
            </Field>
            <Field label="Marque" hint="optionnel">
              <input name="brand" {...inp} placeholder="Renault" />
            </Field>
            <Field label="Modèle" hint="optionnel">
              <input name="model" {...inp} placeholder="Master" />
            </Field>
            <Field label="Année" hint="optionnel">
              <input name="year" {...inp} placeholder="2019" />
            </Field>
            <div className="sm:col-span-3">
              <Field label="Motorisation" hint="optionnel">
                <input name="engine" {...inp} placeholder="2.3 dCi 130ch" />
              </Field>
            </div>
          </div>
        )}
      </FieldGroup>

      {/* Bloc 3 — Urgence */}
      <FieldGroup step="03" title="Niveau d'urgence">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {urgencyOptions.map((opt, i) => (
            <label
              key={opt.value}
              className="flex cursor-pointer flex-col gap-0.5 rounded-xl border border-white/10 bg-ink-900 px-4 py-3 transition-colors has-[:checked]:border-signal has-[:checked]:bg-signal/10"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-paper">
                <input
                  type="radio"
                  name="urgency"
                  value={opt.value}
                  defaultChecked={
                    initialUrgency ? initialUrgency === opt.value : i === 1
                  }
                  className="accent-signal"
                />
                {opt.label}
              </span>
              <span className="pl-6 font-mono text-[10px] uppercase tracking-wider text-metal">
                {opt.hint}
              </span>
            </label>
          ))}
        </div>
      </FieldGroup>

      {/* Bloc 4 — Message */}
      <FieldGroup step="04" title="Votre message" last>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className={`${inpBase} resize-y`}
          placeholder="Décrivez le besoin : pièce, contexte, délai souhaité…"
        />
      </FieldGroup>

      <label className="mt-6 flex items-start gap-3 text-[13px] text-metal">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 accent-signal"
        />
        <span>
          J&apos;accepte que ces informations soient utilisées pour traiter ma demande,
          selon la{" "}
          <a
            href="/politique-confidentialite"
            className="text-paper underline hover:text-signal"
          >
            politique de confidentialité
          </a>
          . <span className="text-signal">*</span>
        </span>
      </label>

      {status === "error" && (
        <p className="mt-4 rounded-xl border border-signal/40 bg-signal/10 px-4 py-3 text-sm text-paper">
          {errorMsg}
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={status === "loading"}
          className="group/btn inline-flex flex-1 items-center justify-center gap-2 rounded-full glass-signal border border-signal/50 px-7 py-3.5 text-[15px] font-semibold text-paper shadow-glass transition-all hover:-translate-y-0.5 hover:border-signal/80 hover:shadow-signal active:scale-[0.98] disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande"}
          {status !== "loading" && (
            <Icon
              name="arrow"
              className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
            />
          )}
        </button>
        <a
          href={site.phone.href}
          className="inline-flex items-center justify-center gap-2 rounded-full glass border border-white/15 px-7 py-3.5 text-[15px] font-semibold text-paper transition-all hover:-translate-y-0.5 hover:border-signal/50"
        >
          <Icon name="phone" className="h-4 w-4 text-signal" />
          Appeler
        </a>
      </div>

      <p className="mt-4 text-center text-xs text-metal">
        Réponse rapide sur prix, disponibilité et délai · {site.delivery.disclaimer}
      </p>
    </form>
  );
}

const inpBase =
  "w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-paper placeholder:text-metal-dim transition-all focus:border-signal focus:ring-2 focus:ring-signal/25";

const inp = { className: inpBase };

function FieldGroup({
  step,
  title,
  last,
  children,
}: {
  step: string;
  title: string;
  last?: boolean;
  children: React.ReactNode;
}) {
  return (
    <fieldset className={last ? "" : "mb-6 border-b border-white/5 pb-6"}>
      <legend className="mb-4 flex items-center gap-2.5">
        <span className="font-mono text-xs font-semibold text-signal">{step}</span>
        <span className="font-display text-sm font-bold uppercase tracking-wide text-paper">
          {title}
        </span>
      </legend>
      {children}
    </fieldset>
  );
}

function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wide text-metal">
          {label}
          {required && <span className="text-signal"> *</span>}
        </span>
        {hint && (
          <span className="font-mono text-[10px] lowercase tracking-wide text-metal-dim">
            {hint}
          </span>
        )}
      </span>
      {children}
    </label>
  );
}

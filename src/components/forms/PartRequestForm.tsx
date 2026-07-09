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
  { value: "aujourdhui", label: "Aujourd'hui" },
  { value: "24h", label: "Sous 24h" },
  { value: "cette-semaine", label: "Cette semaine" },
];

function defaultMessage(categoryTitle?: string) {
  if (!categoryTitle) return "";
  return `Bonjour, je souhaite obtenir un prix et une disponibilité pour une pièce de la catégorie ${categoryTitle}.`;
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
  const [message, setMessage] = useState(
    defaultMessage(initialCategory?.title)
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());
    payload.category = category;
    payload.message = message;
    payload.consent = fd.get("consent") ? "true" : "";

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Une erreur est survenue.");
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
      <div className="rounded-2xl border border-racing/30 bg-ink-700 p-8 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-racing text-racing">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-tight text-xl font-bold text-white">
          Demande envoyée
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-mute">
          Merci, votre demande a bien été transmise. Notre équipe vérifie le prix et la
          disponibilité, et revient vers vous rapidement. Pour une urgence, appelez-nous
          directement.
        </p>
        <a
          href={site.phone.href}
          className="mt-5 inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-2.5 text-sm font-semibold text-white hover:border-racing"
        >
          <Icon name="phone" className="h-4 w-4 text-racing" />
          {site.phone.display}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-ink-700 p-6 sm:p-8"
      noValidate
    >
      {/* Honeypot caché */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nom complet" required>
          <input name="name" required {...inputProps} placeholder="Jean Dupont" />
        </Field>
        <Field label="Société / garage">
          <input name="company" {...inputProps} placeholder="Garage Dupont" />
        </Field>
        <Field label="Téléphone" required>
          <input
            name="phone"
            type="tel"
            required
            {...inputProps}
            placeholder="06 00 00 00 00"
          />
        </Field>
        <Field label="Email">
          <input
            name="email"
            type="email"
            {...inputProps}
            placeholder="contact@garage.fr"
          />
        </Field>
        <Field label="Ville">
          <input name="city" {...inputProps} placeholder="Labastide-Saint-Pierre" />
        </Field>
        <Field label="Catégorie de pièce">
          <select
            name="category_select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={selectClass}
          >
            <option value="">Sélectionner…</option>
            {productCategories.map((c) => (
              <option key={c.slug} value={c.title}>
                {c.title}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-4 border-t border-white/5 pt-4">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-mute">
          Véhicule & pièce (si connu)
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <Field label="Référence pièce">
            <input name="reference" {...inputProps} placeholder="FRN-0421" />
          </Field>
          <Field label="Immatriculation">
            <input name="plate" {...inputProps} placeholder="AB-123-CD" />
          </Field>
          <Field label="Quantité">
            <input
              name="quantity"
              type="number"
              min={1}
              {...inputProps}
              placeholder="1"
            />
          </Field>
          <Field label="Marque">
            <input name="brand" {...inputProps} placeholder="Renault" />
          </Field>
          <Field label="Modèle">
            <input name="model" {...inputProps} placeholder="Master" />
          </Field>
          <Field label="Année">
            <input name="year" {...inputProps} placeholder="2019" />
          </Field>
          <div className="sm:col-span-3">
            <Field label="Motorisation">
              <input
                name="engine"
                {...inputProps}
                placeholder="2.3 dCi 130ch"
              />
            </Field>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Field label="Niveau d'urgence">
          <div className="flex flex-wrap gap-2">
            {urgencyOptions.map((opt, i) => (
              <label
                key={opt.value}
                className="flex cursor-pointer items-center gap-2 rounded-md border border-white/10 bg-ink-800 px-3.5 py-2 text-sm text-white transition-colors has-[:checked]:border-racing has-[:checked]:bg-racing/10"
              >
                <input
                  type="radio"
                  name="urgency"
                  value={opt.value}
                  defaultChecked={
                    initialUrgency ? initialUrgency === opt.value : i === 1
                  }
                  className="accent-racing"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Message">
          <textarea
            name="message_text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className={`${inputBase} resize-y`}
            placeholder="Décrivez votre besoin : pièce recherchée, contexte, délai…"
          />
        </Field>
      </div>

      <label className="mt-4 flex items-start gap-3 text-sm text-mute">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 accent-racing"
        />
        <span>
          J&apos;accepte que mes informations soient utilisées pour traiter ma demande,
          conformément à la{" "}
          <a
            href="/politique-confidentialite"
            className="text-white underline hover:text-racing"
          >
            politique de confidentialité
          </a>
          . <span className="text-racing">*</span>
        </span>
      </label>

      {status === "error" && (
        <p className="mt-4 rounded-md border border-racing/40 bg-racing/10 px-4 py-3 text-sm text-white">
          {errorMsg}
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-racing px-7 py-3.5 text-base font-semibold text-white shadow-[0_8px_24px_-8px_rgba(225,6,0,0.6)] transition-all hover:bg-racing-dark disabled:opacity-60"
        >
          {status === "loading" ? "Envoi…" : "Envoyer ma demande"}
          {status !== "loading" && <Icon name="arrow" className="h-4 w-4" />}
        </button>
        <a
          href={site.phone.href}
          className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-7 py-3.5 text-base font-semibold text-white hover:border-racing"
        >
          <Icon name="phone" className="h-4 w-4 text-racing" />
          Appeler le fournisseur
        </a>
      </div>

      <p className="mt-4 text-center text-xs text-mute">
        {site.delivery.disclaimer}
      </p>
    </form>
  );
}

const inputBase =
  "w-full rounded-md border border-white/10 bg-ink-800 px-3.5 py-2.5 text-sm text-white placeholder:text-mute/60 transition-colors focus:border-racing focus:outline-none focus:ring-1 focus:ring-racing";

const selectClass = `${inputBase} appearance-none`;

const inputProps = {
  className: inputBase,
};

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-mute">
        {label}
        {required && <span className="text-racing"> *</span>}
      </span>
      {children}
    </label>
  );
}

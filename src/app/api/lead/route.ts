import { NextResponse } from "next/server";
import { site } from "@/data/site";

export const runtime = "nodejs";

type LeadPayload = Record<string, string | undefined>;

const REQUIRED_FIELDS = ["name", "phone", "consent"] as const;

export async function POST(request: Request) {
  let data: LeadPayload;
  try {
    data = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Requête invalide." },
      { status: 400 }
    );
  }

  // Honeypot anti-spam
  if (data.company_website) {
    return NextResponse.json({ ok: true });
  }

  for (const field of REQUIRED_FIELDS) {
    if (!data[field] || !String(data[field]).trim()) {
      return NextResponse.json(
        { ok: false, error: "Champs obligatoires manquants." },
        { status: 422 }
      );
    }
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  const emailTo = process.env.LEAD_EMAIL_TO || site.email;

  // Sans clé configurée : on accepte la soumission côté UI sans envoi réel.
  // (Permet de tester l'interface avant la mise en production.)
  if (!accessKey) {
    console.warn(
      "[lead] WEB3FORMS_ACCESS_KEY non configurée — la demande n'a pas été transmise par email."
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  const subject = `Nouvelle demande de pièce — ${data.name}${
    data.company ? ` (${data.company})` : ""
  }`;

  const payload = {
    access_key: accessKey,
    subject,
    from_name: "Site Adu Pièce Auto",
    replyto: data.email || undefined,
    to: emailTo,
    // Champs métier transmis tels quels à Web3Forms
    Nom: data.name,
    "Société / garage": data.company,
    Téléphone: data.phone,
    Email: data.email,
    Ville: data.city,
    "Catégorie de pièce": data.category,
    "Référence pièce": data.reference,
    Immatriculation: data.plate,
    Marque: data.brand,
    Modèle: data.model,
    Année: data.year,
    Motorisation: data.engine,
    Quantité: data.quantity,
    Urgence: data.urgency,
    Message: data.message,
    "Consentement RGPD": data.consent === "true" ? "Oui" : "Non",
  };

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: "L'envoi a échoué. Merci de réessayer ou d'appeler." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Service indisponible. Merci d'appeler directement." },
      { status: 502 }
    );
  }
}

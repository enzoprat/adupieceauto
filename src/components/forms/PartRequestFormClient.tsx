"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PartRequestForm } from "@/components/forms/PartRequestForm";

function FormWithParams() {
  const params = useSearchParams();
  return (
    <PartRequestForm
      initialCategorySlug={params.get("categorie") ?? undefined}
      initialUrgency={params.get("urgence") ?? undefined}
    />
  );
}

/**
 * Enveloppe client : lit la catégorie / l'urgence depuis l'URL pour préremplir
 * le formulaire. Compatible export statique (pas de searchParams serveur).
 */
export function PartRequestFormClient() {
  return (
    <Suspense fallback={<PartRequestForm />}>
      <FormWithParams />
    </Suspense>
  );
}

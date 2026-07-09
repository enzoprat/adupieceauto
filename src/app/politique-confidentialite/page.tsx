import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/LegalLayout";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Politique de confidentialité",
  description: `Politique de confidentialité et traitement des données personnelles du site ${site.name}.`,
  path: "/politique-confidentialite",
});

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalLayout
      title="Politique de confidentialité"
      crumbLabel="Confidentialité"
    >
      <div>
        <h2>Collecte des données</h2>
        <p>
          Les données personnelles collectées sur ce site le sont uniquement via le
          formulaire de demande de pièce : nom, société, téléphone, email, ville et
          informations relatives à la pièce ou au véhicule concerné. Ces données sont
          fournies volontairement par l&apos;utilisateur.
        </p>
      </div>

      <div>
        <h2>Finalité du traitement</h2>
        <p>
          Les informations recueillies sont utilisées exclusivement pour traiter
          votre demande, vérifier la disponibilité et le prix des pièces, et vous
          recontacter. Elles ne sont ni vendues, ni cédées à des tiers à des fins
          commerciales.
        </p>
      </div>

      <div>
        <h2>Destinataire</h2>
        <p>
          Les demandes sont transmises à {site.legalName} ({site.name}) à
          l&apos;adresse <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>

      <div>
        <h2>Durée de conservation</h2>
        <p>
          Les données sont conservées le temps nécessaire au traitement de votre
          demande et à la relation commerciale, puis archivées ou supprimées
          conformément aux obligations légales applicables.
        </p>
      </div>

      <div>
        <h2>Vos droits</h2>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous
          disposez d&apos;un droit d&apos;accès, de rectification, d&apos;opposition et
          de suppression de vos données. Pour exercer ces droits, contactez-nous à{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> ou au{" "}
          <a href={site.phone.href}>{site.phone.display}</a>.
        </p>
      </div>

      <div>
        <h2>Cookies</h2>
        <p>
          Ce site privilégie une approche sobre et ne dépose pas de cookies
          publicitaires. Seuls des éléments techniques strictement nécessaires au bon
          fonctionnement du site peuvent être utilisés.
        </p>
      </div>
    </LegalLayout>
  );
}

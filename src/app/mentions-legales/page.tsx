import type { Metadata } from "next";
import { LegalLayout } from "@/components/sections/LegalLayout";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Mentions légales",
  description: `Mentions légales du site ${site.name} (${site.legalName}), fournisseur de pièces automobiles à ${site.address.city}.`,
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <LegalLayout title="Mentions légales" crumbLabel="Mentions légales">
      <div>
        <h2>Éditeur du site</h2>
        <p>
          Le présent site est édité par {site.legalName}, exploitant l&apos;activité
          commerciale {site.name}, spécialisée dans la vente de pièces automobiles et
          consommables.
        </p>
        <p>Adresse : {site.address.full}</p>
        <p>
          Téléphone :{" "}
          <a href={site.phone.href}>{site.phone.display}</a>
        </p>
        <p>
          Email : <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </div>

      <div>
        <h2>Responsable de la publication</h2>
        <p>
          Le responsable de la publication est le représentant légal de{" "}
          {site.legalName}.
        </p>
      </div>

      <div>
        <h2>Hébergement</h2>
        <p>
          Le site est hébergé par un prestataire d&apos;hébergement web. Les
          coordonnées complètes de l&apos;hébergeur sont disponibles sur demande
          auprès de l&apos;éditeur.
        </p>
      </div>

      <div>
        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus présents sur ce site (textes, visuels,
          logos, structure) est la propriété de {site.legalName}, sauf mention
          contraire. Toute reproduction ou représentation, totale ou partielle, sans
          autorisation préalable est interdite.
        </p>
      </div>

      <div>
        <h2>Responsabilité</h2>
        <p>
          Les informations diffusées sur ce site sont fournies à titre indicatif.
          Les délais de livraison, la disponibilité et les tarifs sont confirmés au
          cas par cas après échange avec notre équipe. La mention « livraison sous 2h
          dans le 82 » s&apos;entend selon disponibilité, typologie de pièce et
          zone d&apos;intervention.
        </p>
      </div>

      <div>
        <h2>Données personnelles</h2>
        <p>
          Le traitement des données personnelles collectées via le formulaire de
          contact est décrit dans notre{" "}
          <a href="/politique-confidentialite">politique de confidentialité</a>.
        </p>
      </div>
    </LegalLayout>
  );
}

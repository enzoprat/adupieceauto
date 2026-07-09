import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-ink">
      <div className="mx-auto max-w-content px-5 text-center sm:px-6 lg:px-8">
        <p className="font-mono text-sm uppercase tracking-[0.22em] text-racing">
          Erreur 404
        </p>
        <h1 className="mt-4 font-tight text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Cette page est introuvable
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-mute">
          La page recherchée n&apos;existe pas ou a été déplacée. Retrouvez nos pièces
          et consommables, ou faites votre demande directement.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/" size="lg">
            <Icon name="arrow" className="h-4 w-4 rotate-180" />
            Retour à l&apos;accueil
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Demander une pièce
          </Button>
        </div>
      </div>
    </section>
  );
}

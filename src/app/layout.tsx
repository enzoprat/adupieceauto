import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { localBusinessJsonLd } from "@/lib/seo";
import { site } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  weight: ["600", "700", "800"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Pièces automobiles & consommables à Labastide-Saint-Pierre`,
    template: `%s | ${site.name}`,
  },
  description: site.shortDescription,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  keywords: [
    "pièce automobile Labastide-Saint-Pierre",
    "pièces auto Labastide-Saint-Pierre",
    "fournisseur pièces auto garage",
    "consommables automobile garage",
    "pièces auto Tarn-et-Garonne",
    "livraison pièces auto",
    "pièces auto pour professionnels",
    "fournisseur garage automobile",
    "pièces automobiles 82370",
    "Adu Pièce Auto",
    "L'Atelier de l'Utilitaire",
  ],
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${interTight.variable} ${mono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-racing focus:px-4 focus:py-2 focus:text-white"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <MobileStickyCta />
      </body>
    </html>
  );
}

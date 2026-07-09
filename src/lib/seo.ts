import type { Metadata } from "next";
import { site } from "@/data/site";

const defaultOgImage = "/opengraph-image";

type BuildMetadataArgs = {
  title: string;
  description: string;
  path?: string;
};

/** Construit un objet Metadata cohérent (titles, OG, canonical). */
export function buildMetadata({
  title,
  description,
  path = "/",
}: BuildMetadataArgs): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url,
      siteName: site.name,
      title,
      description,
      images: [{ url: defaultOgImage, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage],
    },
  };
}

/** Schema.org LocalBusiness / AutoPartsStore pour le référencement local. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    "@id": `${site.url}/#business`,
    name: site.name,
    legalName: site.legalName,
    description: site.shortDescription,
    url: site.url,
    telephone: site.phone.raw,
    email: site.email,
    foundingDate: String(site.founded),
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: site.serviceArea,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  };
}

/** Schema.org BreadcrumbList. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

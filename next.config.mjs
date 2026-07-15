/** @type {import('next').NextConfig} */
// Domaine perso (adupiecesauto.fr) servi à la racine → pas de basePath.
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
};

export default nextConfig;

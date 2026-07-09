/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

// Nom du dépôt GitHub Pages → le site est servi sous /adupieceauto
const repoBase = "/adupieceauto";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProd ? repoBase : "",
  assetPrefix: isProd ? repoBase : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? repoBase : "",
  },
};

export default nextConfig;

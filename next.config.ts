import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
   * Si más adelante quieres usar imágenes reales de productos
   * alojadas en un dominio externo (ej. tu propio CDN), agrega
   * aquí su hostname en remotePatterns. Por ahora las imágenes
   * de producto viven en /public/products/ (locales).
   */
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;

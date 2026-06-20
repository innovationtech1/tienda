import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegisterSW from "@/components/RegisterSW";

export const metadata: Metadata = {
  title: "innovationTECH — Gadgets de cocina inteligente, probados y curados",
  description:
    "Seleccionamos los mejores gadgets de cocina inteligente disponibles en Amazon. Reseñas honestas, sin relleno, para que decidas en minutos.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "innovationTECH",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#C4622D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className="font-sans antialiased bg-cream text-charcoal"
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <RegisterSW />
      </body>
    </html>
  );
}

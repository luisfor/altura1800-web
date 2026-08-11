import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://altura1800.com"; // TODO: reemplazar por el dominio real cuando esté conectado

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ALTURA1800 — Café colombiano de altura",
    template: "%s · ALTURA1800",
  },
  description:
    "El café colombiano de altura, convertido en una experiencia premium. Cultivado sobre los 1.800 msnm, con trazabilidad de finca.",
  keywords: [
    "café colombiano",
    "café de altura",
    "café de especialidad",
    "café premium Colombia",
    "ALTURA1800",
  ],
  openGraph: {
    title: "ALTURA1800 — Café colombiano de altura",
    description:
      "El café colombiano de altura, convertido en una experiencia premium. Cultivado sobre los 1.800 msnm.",
    url: siteUrl,
    siteName: "ALTURA1800",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ALTURA1800 — Café colombiano de altura",
    description:
      "El café colombiano de altura, convertido en una experiencia premium.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-sans antialiased bg-ink text-cream">
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

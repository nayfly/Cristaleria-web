import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/business";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

const defaultTitle = `${business.name} | Aluminio, PVC y cristalería`;
const defaultDescription =
  "Aluminio, PVC, cristalería y cerrajería en Torrox Costa. Cerramientos, toldos, persianas, mamparas y mosquiteras. Taller propio desde 1986. Presupuesto gratis.";
// Imagen de las previsualizaciones al compartir el enlace. Tiene que ser JPG
// o PNG y en proporción 1.91:1 (1200x630): WhatsApp y Facebook no renderizan
// WebP de forma fiable, y el hero es 1600x600, que además les queda recortado.
const shareImage = "/og.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Aluminios Torrox Costa",
  },
  description: defaultDescription,
  authors: [{ name: business.name }],
  creator: business.name,
  publisher: business.name,
  category: "Carpintería de aluminio y cristalería",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: business.siteUrl,
    siteName: business.name,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: shareImage,
        width: 1200,
        height: 630,
        alt: `Cerramiento de terraza instalado por ${business.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [shareImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: true,
    address: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <head>
        {/* Sin JavaScript nadie añade .is-visible, así que los bloques que
            aparecen al hacer scroll se quedarían invisibles para siempre.
            Esto los deja visibles de entrada en ese caso. */}
        <noscript>
          {/* eslint-disable-next-line react/no-danger */}
          <style dangerouslySetInnerHTML={{ __html: ".reveal{opacity:1;transform:none}" }} />
        </noscript>
      </head>
      <body className="font-body">
        <LocalBusinessJsonLd />
        {children}
      </body>
    </html>
  );
}

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

const description =
  "Toldos, persianas, cerramientos, mosquiteras y cristalería a medida en Torrox Costa, Málaga. Instalación propia y fabricación en nuestro taller desde 1986. Presupuesto gratis.";

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: business.name,
    template: `%s | ${business.shortName}`,
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: business.siteUrl,
    siteName: business.name,
    title: `${business.name} | Aluminio, PVC y cristal`,
    description,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${business.name} — cerramiento de vidrio en una terraza de Torrox Costa`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | Aluminio, PVC y cristal`,
    description,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body className="font-body">
        <LocalBusinessJsonLd />
        {children}
      </body>
    </html>
  );
}

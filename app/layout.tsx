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

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `${business.name} | Carpintería de aluminio, PVC y cristalería`,
    template: `%s | ${business.shortName}`,
  },
  description:
    "Fabricación e instalación de persianas, toldos, mosquiteras, cristalería y cerrajería en Torrox Costa, Málaga. Más de 30 años de experiencia. Presupuesto gratis.",
  keywords: [
    "cristalería Torrox Costa",
    "aluminios Torrox Costa",
    "toldos Málaga",
    "persianas de seguridad Málaga",
    "mosquiteras a medida",
    "carpintería de aluminio Costa del Sol",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: business.siteUrl,
    siteName: business.name,
    title: `${business.name} | Carpintería de aluminio, PVC y cristalería`,
    description:
      "Fabricación e instalación de persianas, toldos, mosquiteras, cristalería y cerrajería en Torrox Costa, Málaga desde 1986.",
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

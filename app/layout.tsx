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
  "Aluminio, PVC y cristalería en Torrox Costa. Cerramientos, toldos, persianas, mamparas y mosquiteras. Taller propio desde 1986. Presupuesto sin compromiso.";
const shareImage = "/images/gallery/hero-home.webp";

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Aluminios Torrox Costa",
  },
  description: defaultDescription,
  keywords: [
    "aluminios Torrox",
    "aluminio Torrox",
    "aluminios Torrox Costa",
    "cristalería Torrox",
    "cristalería Torrox Costa",
    "carpintería de aluminio Torrox",
    "cerramientos de terraza Torrox",
    "cortinas de vidrio Torrox Costa",
    "toldos Torrox",
    "persianas Torrox",
    "mamparas de baño Torrox",
    "mosquiteras Torrox",
    "cristalero Torrox Costa",
    "aluminios Axarquía",
    "carpintería de aluminio Costa del Sol",
  ],
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
        width: 1600,
        height: 600,
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
      <body className="font-body">
        <LocalBusinessJsonLd />
        {children}
      </body>
    </html>
  );
}

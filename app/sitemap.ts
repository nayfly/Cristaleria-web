import type { MetadataRoute } from "next";
import { business } from "@/lib/business";

// Fecha de la última revisión real del contenido. Actualízala a mano cuando
// cambies textos o fotos de forma significativa.
//
// Antes esto era `new Date()`, que ponía la fecha del despliegue en todas las
// páginas: cada build le decía a Google que la web entera había cambiado,
// aunque no se hubiera tocado nada. Esa señal acaba ignorándose.
const lastModified = new Date("2026-09-25");

// `priority` y `changeFrequency` se omiten a propósito: Google los ignora
// desde hace años y solo añaden ruido al sitemap.
const paths = [
  "",
  "/productos",
  "/tejidos",
  "/galeria",
  "/nosotros",
  "/contacto",
  "/aviso-legal",
  "/privacidad",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${business.siteUrl}${path}`,
    lastModified,
  }));
}

import type { MetadataRoute } from "next";
import { business } from "@/lib/business";

// Fecha de la última revisión real del contenido. Actualízala a mano cuando
// cambies textos o fotos de forma significativa.
//
// Antes esto usaba `new Date()`, que ponía la fecha del despliegue en todas
// las páginas: cada build le decía a Google que la web entera había cambiado,
// aunque no se hubiera tocado nada. Google acaba ignorando esa señal.
const lastModified = new Date("2026-09-11");

const paths = ["", "/productos", "/tejidos", "/galeria", "/nosotros", "/contacto"];

export default function sitemap(): MetadataRoute.Sitemap {
  // `priority` y `changeFrequency` se omiten a propósito: Google los ignora
  // desde hace años y solo añaden ruido al sitemap.
  return paths.map((path) => ({
    url: `${business.siteUrl}${path}`,
    lastModified,
  }));
}

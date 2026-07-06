// Galería de trabajos realizados. Cada item es un marcador (PhotoSlot) hasta
// que se suba la foto real a /public/fotos/galeria/ (ver README).

export type GalleryItem = {
  slug: string;
  tag: string;
  title: string;
  photoLabel: string;
};

export const galleryItems: GalleryItem[] = [
  {
    slug: "cerramiento-terraza",
    tag: "Exterior",
    title: "Cerramiento de terraza",
    photoLabel: "Terraza cerrada en primera línea",
  },
  {
    slug: "cortina-vidrio-panoramica",
    tag: "Cristalería",
    title: "Cortina de vidrio panorámica",
    photoLabel: "Cortina de vidrio en balcón",
  },
  {
    slug: "toldo-motorizado",
    tag: "Exterior",
    title: "Toldo motorizado",
    photoLabel: "Toldo de brazo en fachada",
  },
  {
    slug: "mampara-ducha",
    tag: "Baño",
    title: "Mampara de ducha",
    photoLabel: "Mampara de baño a medida",
  },
  {
    slug: "puerta-acorazada",
    tag: "Carpintería",
    title: "Puerta acorazada",
    photoLabel: "Puerta acorazada instalada",
  },
  {
    slug: "pergola-bioclimatica",
    tag: "Exterior",
    title: "Pérgola bioclimática",
    photoLabel: "Pérgola bioclimática en jardín",
  },
  {
    slug: "proteccion-local",
    tag: "Seguridad",
    title: "Protección de local",
    photoLabel: "Rejas de seguridad en local",
  },
  {
    slug: "mosquitera-medida",
    tag: "Confort",
    title: "Mosquitera a medida",
    photoLabel: "Mosquitera corredera",
  },
  {
    slug: "enmarcado-cuadro",
    tag: "Cristalería",
    title: "Enmarcado de cuadro",
    photoLabel: "Cuadro enmarcado a medida",
  },
];

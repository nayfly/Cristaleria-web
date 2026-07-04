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
    slug: "puerta-acorazada",
    tag: "Carpintería",
    title: "Puerta acorazada en vivienda unifamiliar",
    photoLabel: "Puerta acorazada instalada",
  },
  {
    slug: "pergola-bioclimatica",
    tag: "Exterior",
    title: "Pérgola bioclimática en terraza",
    photoLabel: "Pérgola bioclimática",
  },
  {
    slug: "cortina-vidrio-panoramica",
    tag: "Cristalería",
    title: "Cortina de vidrio panorámica con vistas al mar",
    photoLabel: "Cortina de vidrio panorámica",
  },
  {
    slug: "mampara-bano",
    tag: "Baño",
    title: "Mampara de ducha a medida",
    photoLabel: "Mampara de baño terminada",
  },
  {
    slug: "cerramiento-terraza",
    tag: "Exterior",
    title: "Cerramiento de terraza en ático",
    photoLabel: "Terraza cerrada con aluminio y vidrio",
  },
  {
    slug: "escaparate-comercio",
    tag: "Cristalería",
    title: "Escaparate de comercio local",
    photoLabel: "Escaparate acristalado",
  },
  {
    slug: "mosquiteras-vivienda",
    tag: "Confort",
    title: "Mosquiteras enrollables en vivienda familiar",
    photoLabel: "Mosquiteras instaladas",
  },
  {
    slug: "reja-seguridad",
    tag: "Seguridad",
    title: "Reja de seguridad para local comercial",
    photoLabel: "Reja de seguridad",
  },
  {
    slug: "toldo-punto-recto",
    tag: "Exterior",
    title: "Toldo de punto recto en comunidad de vecinos",
    photoLabel: "Toldo de punto recto",
  },
];

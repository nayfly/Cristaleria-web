export type GalleryItem = {
  slug: string;
  title: string;
  photoLabel: string;
  photoUrl: string;
};

export type GallerySection = {
  slug: string;
  /** Slug del servicio equivalente en lib/business.ts, para enlazar las dos
      páginas en los dos sentidos. */
  serviceSlug: string;
  tag: string;
  title: string;
  description: string;
  items: GalleryItem[];
};

export const gallerySections: GallerySection[] = [
  {
    slug: "cerramientos-terrazas",
    serviceSlug: "cerramientos-de-terrazas",
    tag: "Exterior",
    title: "Cerramientos de terrazas",
    description: "Trabajos de cerramiento para ganar espacio útil y proteger terrazas o balcones.",
    items: [
      {
        slug: "cerramiento-terraza-01",
        title: "Cerramiento de terraza",
        photoLabel: "Cerramiento de terraza a medida",
        photoUrl: "/images/gallery/cerramientos-terrazas/cerramiento-01.jpg",
      },
      {
        slug: "cerramiento-terraza-02",
        title: "Terraza protegida",
        photoLabel: "Terraza cerrada con aluminio y cristal",
        photoUrl: "/images/gallery/cerramientos-terrazas/cerramiento-02.jpg",
      },
      {
        slug: "cerramiento-terraza-03",
        title: "Cerramiento exterior",
        photoLabel: "Cerramiento exterior en vivienda",
        photoUrl: "/images/gallery/cerramientos-terrazas/cerramiento-03.jpg",
      },
      {
        slug: "cerramiento-terraza-04",
        title: "Cerramiento luminoso",
        photoLabel: "Cerramiento de terraza con entrada de luz",
        photoUrl: "/images/gallery/cerramientos-terrazas/cerramiento-04.jpg",
      },
    ],
  },
  {
    slug: "cortinas-vidrio",
    serviceSlug: "cortinas-de-vidrio-panoramicas",
    tag: "Cristalería",
    title: "Cortinas de vidrio panorámicas",
    description: "Cerramientos plegables sin perfiles verticales para mantener las vistas.",
    items: [
      {
        slug: "cortina-vidrio-10",
        title: "Cortina de vidrio en terraza",
        photoLabel: "Cortina de vidrio instalada en terraza",
        photoUrl: "/images/gallery/cortinas-vidrio/cortinas-10.jpg",
      },
      {
        slug: "cortina-vidrio-23",
        title: "Cortina panorámica",
        photoLabel: "Cortina de vidrio panorámica cerrando una terraza",
        photoUrl: "/images/gallery/cortinas-vidrio/cortinas-23.jpg",
      },
      {
        slug: "cortina-vidrio-24",
        title: "Cerramiento sin perfiles",
        photoLabel: "Cerramiento de vidrio sin perfiles verticales",
        photoUrl: "/images/gallery/cortinas-vidrio/cortinas-24.jpg",
      },
      {
        slug: "cortina-vidrio-25",
        title: "Terraza acristalada",
        photoLabel: "Terraza acristalada con cortina de vidrio",
        photoUrl: "/images/gallery/cortinas-vidrio/cortinas-25.jpg",
      },
    ],
  },
  {
    slug: "barandillas-cristal",
    serviceSlug: "barandillas-de-cristal",
    tag: "Cristalería",
    title: "Barandillas de cristal",
    description: "Barandillas transparentes para balcones, terrazas, escaleras y piscinas.",
    items: [
      {
        slug: "barandilla-cristal-22",
        title: "Barandilla con vistas al mar",
        photoLabel: "Barandilla de cristal en balcón con vistas al mar",
        photoUrl: "/images/gallery/barandillas-cristal/barandilla-22.jpg",
      },
      {
        slug: "barandilla-cristal-31",
        title: "Barandilla panorámica",
        photoLabel: "Barandilla de cristal en terraza panorámica",
        photoUrl: "/images/gallery/barandillas-cristal/barandilla-31.jpg",
      },
      {
        slug: "barandilla-cristal-37",
        title: "Barandilla para piscina",
        photoLabel: "Barandilla de cristal junto a piscina",
        photoUrl: "/images/gallery/barandillas-cristal/barandilla-37.jpg",
      },
      {
        slug: "barandilla-cristal-39",
        title: "Protección de terraza",
        photoLabel: "Barandilla de cristal sobre muro de terraza",
        photoUrl: "/images/gallery/barandillas-cristal/barandilla-39.jpg",
      },
      {
        slug: "barandilla-cristal-42",
        title: "Detalle de herrajes",
        photoLabel: "Detalle de herrajes para barandilla de cristal",
        photoUrl: "/images/gallery/barandillas-cristal/barandilla-42.jpg",
      },
    ],
  },
  {
    slug: "toldos-persianas",
    serviceSlug: "toldos-y-persianas",
    tag: "Exterior",
    title: "Toldos y persianas",
    description: "Instalaciones para sombra, protección solar y mejora de fachadas.",
    items: [
      {
        slug: "toldo-01",
        title: "Toldo de brazo",
        photoLabel: "Toldo de brazo instalado en fachada",
        photoUrl: "/images/gallery/toldos-persianas/toldo-01.jpg",
      },
      {
        slug: "toldo-02",
        title: "Toldo exterior",
        photoLabel: "Toldo exterior para terraza",
        photoUrl: "/images/gallery/toldos-persianas/toldo-02.jpg",
      },
      {
        slug: "toldo-03",
        title: "Protección solar",
        photoLabel: "Sistema de toldo para proteger del sol",
        photoUrl: "/images/gallery/toldos-persianas/toldo-03.jpg",
      },
      {
        slug: "toldo-04",
        title: "Toldo a medida",
        photoLabel: "Toldo fabricado e instalado a medida",
        photoUrl: "/images/gallery/toldos-persianas/toldo-04.jpg",
      },
    ],
  },
  {
    slug: "mamparas-bano",
    serviceSlug: "mamparas-de-bano",
    tag: "Baño",
    title: "Mamparas de baño",
    description: "Mamparas a medida en vidrio templado para duchas y bañeras.",
    items: [
      {
        slug: "mampara-01",
        title: "Mampara fija",
        photoLabel: "Mampara fija de ducha",
        photoUrl: "/images/gallery/mamparas-bano/mampara-01.jpg",
      },
      {
        slug: "mampara-02",
        title: "Mampara corredera",
        photoLabel: "Mampara corredera de baño",
        photoUrl: "/images/gallery/mamparas-bano/mampara-02.jpg",
      },
      {
        slug: "mampara-03",
        title: "Mampara a medida",
        photoLabel: "Mampara de baño fabricada a medida",
        photoUrl: "/images/gallery/mamparas-bano/mampara-03.jpg",
      },
      {
        slug: "mampara-04",
        title: "Ducha acristalada",
        photoLabel: "Ducha con mampara de vidrio templado",
        photoUrl: "/images/gallery/mamparas-bano/mampara-04.jpg",
      },
    ],
  },
  {
    slug: "canceles-puertas",
    serviceSlug: "canceles-y-puertas",
    tag: "Carpintería",
    title: "Canceles y puertas",
    description: "Puertas, canceles y soluciones de carpintería para accesos.",
    items: [
      {
        slug: "puerta-01",
        title: "Puerta instalada",
        photoLabel: "Puerta instalada a medida",
        photoUrl: "/images/gallery/canceles-puertas/puerta-01.jpg",
      },
      {
        slug: "puerta-02",
        title: "Cancel de aluminio",
        photoLabel: "Cancel de aluminio instalado",
        photoUrl: "/images/gallery/canceles-puertas/puerta-02.jpg",
      },
      {
        slug: "puerta-03",
        title: "Acceso seguro",
        photoLabel: "Puerta de acceso con carpintería de aluminio",
        photoUrl: "/images/gallery/canceles-puertas/puerta-03.jpg",
      },
      {
        slug: "puerta-04",
        title: "Puerta a medida",
        photoLabel: "Puerta fabricada e instalada a medida",
        photoUrl: "/images/gallery/canceles-puertas/puerta-04.jpg",
      },
    ],
  },
  {
    slug: "proteccion-viviendas",
    serviceSlug: "proteccion-de-viviendas",
    tag: "Seguridad",
    title: "Protección de viviendas y locales",
    description: "Rejas, cerramientos y soluciones para mejorar la seguridad.",
    items: [
      {
        slug: "proteccion-01",
        title: "Protección exterior",
        photoLabel: "Protección exterior de vivienda",
        photoUrl: "/images/gallery/proteccion-viviendas/proteccion-01.jpg",
      },
      {
        slug: "proteccion-02",
        title: "Reja instalada",
        photoLabel: "Reja de seguridad instalada",
        photoUrl: "/images/gallery/proteccion-viviendas/proteccion-02.jpg",
      },
      {
        slug: "proteccion-03",
        title: "Cerramiento seguro",
        photoLabel: "Cerramiento de seguridad para vivienda",
        photoUrl: "/images/gallery/proteccion-viviendas/proteccion-03.jpg",
      },
      {
        slug: "proteccion-04",
        title: "Seguridad a medida",
        photoLabel: "Solución de seguridad fabricada a medida",
        photoUrl: "/images/gallery/proteccion-viviendas/proteccion-04.jpg",
      },
    ],
  },
  {
    slug: "mosquiteras",
    serviceSlug: "mosquiteras",
    tag: "Confort",
    title: "Mosquiteras",
    description: "Mosquiteras fijas, correderas y enrollables para puertas y ventanas.",
    items: [
      {
        slug: "mosquitera-01",
        title: "Mosquitera corredera",
        photoLabel: "Mosquitera corredera instalada",
        photoUrl: "/images/gallery/mosquiteras/mosquitera-01.jpg",
      },
      {
        slug: "mosquitera-02",
        title: "Mosquitera a medida",
        photoLabel: "Mosquitera fabricada a medida",
        photoUrl: "/images/gallery/mosquiteras/mosquitera-02.jpg",
      },
      {
        slug: "mosquitera-03",
        title: "Ventana protegida",
        photoLabel: "Ventana con mosquitera instalada",
        photoUrl: "/images/gallery/mosquiteras/mosquitera-03.jpg",
      },
      {
        slug: "mosquitera-04",
        title: "Sistema práctico",
        photoLabel: "Sistema de mosquitera para uso diario",
        photoUrl: "/images/gallery/mosquiteras/mosquitera-04.jpg",
      },
    ],
  },
  {
    slug: "enmarcados",
    serviceSlug: "enmarcado-de-cuadros",
    tag: "Cristalería",
    title: "Enmarcados",
    description: "Cristal, espejos y marcos a medida para piezas decorativas.",
    items: [
      {
        slug: "enmarcado-01",
        title: "Cuadro enmarcado",
        photoLabel: "Cuadro enmarcado a medida",
        photoUrl: "/images/gallery/enmarcados/enmarcado-01.jpg",
      },
      {
        slug: "enmarcado-02",
        title: "Marco a medida",
        photoLabel: "Marco fabricado a medida",
        photoUrl: "/images/gallery/enmarcados/enmarcado-02.jpg",
      },
      {
        slug: "enmarcado-03",
        title: "Cristal para cuadro",
        photoLabel: "Cristal colocado en cuadro enmarcado",
        photoUrl: "/images/gallery/enmarcados/enmarcado-03.jpg",
      },
      {
        slug: "enmarcado-04",
        title: "Trabajo de taller",
        photoLabel: "Trabajo de enmarcado realizado en taller",
        photoUrl: "/images/gallery/enmarcados/enmarcado-04.jpg",
      },
    ],
  },
];

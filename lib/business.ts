// Datos reales de la empresa. Fuente única: cambia aquí y se propaga
// a metadatos SEO, structured data (JSON-LD) y todas las páginas.

export const business = {
  name: "Cristalería y Aluminios Torrox Costa",
  shortName: "Cristalería y Aluminios",
  foundedYear: 1986,
  phone: "+34683117711",
  phoneDisplay: "683 11 77 11",
  whatsapp: "https://wa.me/34683117711",
  email: "alucrisvr@gmail.com",
  address: {
    street: "Av. de Andalucía, n°24, bj",
    postalCode: "29793",
    locality: "Torrox Costa",
    region: "Málaga",
    country: "ES",
  },
  geo: {
    lat: 36.7307142,
    lng: -3.9619791,
  },
  hours: {
    display: "Lunes a sábado: 10:30–13:30 · Domingo: cerrado",
    shortDisplay: "Lun–Sáb 10:30–13:30",
    openingHoursSpec: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:30",
        closes: "13:30",
      },
    ],
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=100064627428354",
    youtube: "https://www.youtube.com/@cristaleriayaluminios.torr7231",
  },
  rating: {
    value: 4.8,
    count: 101,
  },
  googleReviewsUrl:
    "https://www.google.com/search?q=Cristaleria+y+Aluminios+Torrox+Costa+rese%C3%B1as",
  siteUrl: "https://www.cristaleriayaluminiostorroxcosta.com",
  story: {
    intro:
      "Somos un negocio familiar de Torrox Costa. Desde 1986 fabricamos e instalamos carpintería de aluminio, PVC y cristalería, atendiendo a vecinos y negocios de toda la zona.",
    paragraphs: [
      "Empezamos como un pequeño taller de barrio y, casi 40 años después, seguimos siendo eso: gente de aquí arreglando y fabricando para gente de aquí. Conocemos las casas, los edificios y el clima de la Costa del Sol, y eso se nota en cada trabajo que sale del taller.",
      "No subcontratamos la fabricación: cortamos, montamos e instalamos nosotros mismos, así que respondemos de principio a fin de cada presupuesto. Si algo falla, no tienes que perseguir a nadie: nos llamas y venimos.",
      "Preferimos explicarte las cosas claras antes que venderte de más. Si un arreglo pequeño te soluciona el problema, te lo decimos, aunque una instalación nueva nos convenga más a nosotros.",
    ],
  },
  values: [
    {
      title: "Trato cercano",
      description: "Te atendemos nosotros mismos, sin intermediarios ni comerciales de paso.",
    },
    {
      title: "Fabricación propia",
      description: "Cortamos y montamos en nuestro propio taller, con control total de cada pieza.",
    },
    {
      title: "Presupuesto claro",
      description: "Sin sorpresas ni letra pequeña: lo que se habla es lo que se cobra.",
    },
    {
      title: "Aquí toda la vida",
      description: "Casi 40 años en Torrox Costa. Si algo falla después, seguimos aquí para arreglarlo.",
    },
  ],
} as const;

export type Service = {
  slug: string;
  tag: string;
  title: string;
  shortDescription: string;
  description: string;
  bullets: string[];
  photoLabel: string;
  // Foto de stock provisional (ver README) — sustituir por foto real del trabajo cuando se tenga.
  photoUrl: string;
};

export const services: Service[] = [
  {
    slug: "cerramientos-de-terrazas",
    tag: "Exterior",
    title: "Cerramientos de terrazas",
    shortDescription: "Gana espacio útil todo el año con cerramientos de aluminio.",
    description:
      "Gana un espacio útil todo el año cerrando tu terraza o balcón con estructuras de aluminio y vidrio a medida.",
    bullets: [
      "Estructuras de aluminio ligero",
      "Paneles fijos o correderos",
      "Aislamiento térmico y acústico",
    ],
    photoLabel: "Terraza cerrada",
    photoUrl:
      "https://images.unsplash.com/photo-1758862528822-b0094ae44705?auto=format&fit=crop&w=1200&q=75",
  },
  {
    slug: "toldos-y-persianas",
    tag: "Exterior",
    title: "Toldos y persianas",
    shortDescription: "Toldos, pérgolas bioclimáticas y persianas motorizadas.",
    description:
      "Toldos, pérgolas bioclimáticas y persianas motorizadas para proteger tu terraza o fachada del sol y la lluvia todo el año.",
    bullets: [
      "Pérgolas bioclimáticas",
      "Toldos de brazo y punto recto",
      "Persianas motorizadas y manuales",
    ],
    photoLabel: "Toldos y persianas",
    photoUrl:
      "https://images.unsplash.com/photo-1725794440337-a8b6035c3a62?auto=format&fit=crop&w=1200&q=75",
  },
  {
    slug: "cortinas-de-vidrio-panoramicas",
    tag: "Cristalería",
    title: "Cortinas de vidrio panorámicas",
    shortDescription: "Cerramientos panorámicos que se pliegan sin perder vistas.",
    description:
      "Cerramientos de vidrio plegables sin perfiles verticales que interrumpan la vista, ideales para terrazas y balcones.",
    bullets: [
      "Máxima transparencia, mínimo perfil",
      "Plegado lateral 100%",
      "Vidrio templado de seguridad",
    ],
    photoLabel: "Cortina de vidrio panorámica",
    photoUrl:
      "https://images.unsplash.com/photo-1613324061338-19d4528a5be9?auto=format&fit=crop&w=1200&q=75",
  },
  {
    slug: "mamparas-de-bano",
    tag: "Baño",
    title: "Mamparas de baño",
    shortDescription: "Mamparas a medida en vidrio templado, todos los estilos.",
    description:
      "Mamparas de ducha y bañera a medida, en vidrio templado, en todos los estilos: fijas, correderas o abatibles.",
    bullets: [
      "Medidas exactas para tu baño",
      "Vidrio templado de 6-8mm",
      "Tratamiento anti-cal opcional",
    ],
    photoLabel: "Mampara de baño",
    photoUrl:
      "https://images.unsplash.com/photo-1722764372202-b8ae35e7d424?auto=format&fit=crop&w=1200&q=75",
  },
  {
    slug: "canceles-y-puertas",
    tag: "Carpintería",
    title: "Canceles y puertas",
    shortDescription: "Puertas acorazadas, correderas y de paso a medida.",
    description:
      "Puertas acorazadas, correderas, abatibles y de paso, fabricadas a medida en aluminio o PVC con acabados de alta seguridad.",
    bullets: [
      "Puertas acorazadas certificadas",
      "Sistemas correderos y plegables",
      "Herrajes y cerraduras de seguridad",
    ],
    photoLabel: "Puertas acorazadas",
    photoUrl:
      "https://images.unsplash.com/photo-1770786174932-293eaf17f919?auto=format&fit=crop&w=1200&q=75",
  },
  {
    slug: "proteccion-de-viviendas",
    tag: "Seguridad",
    title: "Protección de viviendas y locales",
    shortDescription: "Rejas y cerramientos de seguridad para tu tranquilidad.",
    description:
      "Rejas, cerramientos de seguridad y persianas reforzadas para proteger tu vivienda o local comercial.",
    bullets: [
      "Rejas fijas y abatibles",
      "Persianas de seguridad reforzadas",
      "Soluciones a medida para locales",
    ],
    photoLabel: "Protección de vivienda",
    photoUrl:
      "https://images.unsplash.com/photo-1767522248510-d9c2a1117cb9?auto=format&fit=crop&w=1200&q=75",
  },
  {
    slug: "mosquiteras",
    tag: "Confort",
    title: "Mosquiteras",
    shortDescription: "Mosquiteras fijas, enrollables y correderas a medida.",
    description:
      "Mosquiteras fijas, enrollables y correderas a medida, compatibles con la mayoría de ventanas y puertas existentes.",
    bullets: [
      "A medida para cualquier hueco",
      "Fijas, correderas o enrollables",
      "Instalación rápida y limpia",
    ],
    photoLabel: "Mosquitera",
    photoUrl:
      "https://images.unsplash.com/photo-1758998222336-d48b2390a686?auto=format&fit=crop&w=1200&q=75",
  },
  {
    slug: "enmarcado-de-cuadros",
    tag: "Cristalería",
    title: "Enmarcado de cuadros",
    shortDescription: "Cristal y marcos a medida para tus cuadros y espejos.",
    description:
      "Corte de vidrio y marcos a medida para cuadros, espejos y escaparates, desde una pieza suelta hasta un pedido completo.",
    bullets: ["Corte de vidrio al momento", "Marcos a medida", "Reparación de piezas sueltas"],
    photoLabel: "Cuadro enmarcado",
    photoUrl:
      "https://images.unsplash.com/photo-1626846116799-ad61f874f99d?auto=format&fit=crop&w=1200&q=75",
  },
];

// Los 3 servicios más pedidos, destacados en la portada.
export const featuredServiceSlugs = [
  "cerramientos-de-terrazas",
  "cortinas-de-vidrio-panoramicas",
  "toldos-y-persianas",
];

export const reviews = [
  {
    text: "Destaca la rapidez, el buen trabajo realizado y el trato amable y profesional.",
    who: "Mari Carmen Rodríguez García",
    date: "Julio 2023",
    rating: 5,
  },
  {
    text: "Valora la puntualidad, la calidad del producto y la buena solución ante imprevistos.",
    who: "Sonia García Ruiz",
    date: "Junio 2023",
    rating: 5,
  },
  {
    text: "Repite con ellos por la rapidez al resolver una persiana y el buen asesoramiento.",
    who: "Begoña Fernandez",
    date: "Junio 2023",
    rating: 5,
  },
  {
    text: "Recomienda la empresa por un servicio rápido, eficiente, educado y muy resolutivo.",
    who: "Marilla Stevens",
    date: "Junio 2023",
    rating: 5,
  },
  {
    text: "Subraya un acabado cuidado, trato agradable y ejecución rápida del trabajo.",
    who: "Karin Pontén",
    date: "Abril 2023",
    rating: 5,
  },
  {
    text: "Resume la experiencia como profesional, perfecta y entregada en la fecha acordada.",
    who: "francisco alcalde",
    date: "Marzo 2023",
    rating: 5,
  },
];

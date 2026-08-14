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
    facebook: "https://www.facebook.com/p/Cristaleria-y-Aluminios-Torrox-Costa-100064627428354/",
    youtube: "https://www.youtube.com/@cristaleriayaluminios.torr7231",
  },
  rating: {
    value: 4.8,
    count: 140,
  },
  // Municipios de la Axarquía a los que se desplaza el taller. Sale en el
  // JSON-LD como areaServed: quita los que no cubráis, porque decir que se
  // trabaja en un sitio al que no se va perjudica más que ayuda.
  areaServed: [
    "Torrox",
    "Torrox Costa",
    "Nerja",
    "Frigiliana",
    "Algarrobo",
    "Vélez-Málaga",
    "Torre del Mar",
    "Cómpeta",
  ],
  // Enlace a la ficha real de Google Maps (búsqueda por nombre + dirección
  // exactos, para llevar siempre a la ficha oficial y sus reseñas).
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Cristaler%C3%ADa+y+Aluminios+Torrox+Costa+Av.+de+Andaluc%C3%ADa+24+Torrox+Costa+M%C3%A1laga",
  siteUrl: "https://www.cristaleriayaluminiostorroxcosta.com",
  story: {
    intro:
      "Somos un negocio familiar de Torrox Costa. Desde 1986 instalamos carpintería de aluminio, PVC y cristalería para vecinos y negocios de toda la zona: lo que podemos, lo fabricamos en nuestro taller; lo que no, lo traemos de proveedores de confianza.",
    paragraphs: [
      "Empezamos como un pequeño taller de barrio y, 40 años después, seguimos siendo eso: gente de aquí arreglando, instalando y fabricando para gente de aquí. Conocemos las casas, los edificios y el clima de la Costa del Sol, y eso se nota en cada trabajo que sale del taller.",
      "No subcontratamos el trabajo: medimos, instalamos y ajustamos nosotros mismos (y fabricamos a medida lo que sale de nuestro taller), así que respondemos de principio a fin de cada presupuesto. Si algo falla, no tienes que perseguir a nadie: nos llamas y venimos.",
      "Preferimos explicarte las cosas claras antes que venderte de más. Si un arreglo pequeño te soluciona el problema, te lo decimos, aunque una instalación nueva nos convenga más a nosotros.",
    ],
  },
  values: [
    {
      title: "Trato cercano",
      description: "Te atendemos nosotros mismos, sin intermediarios ni comerciales de paso.",
    },
    {
      title: "Instalación y fabricación propia",
      description: "Instalamos nosotros mismos, sin subcontratar; lo que fabricamos, sale de nuestro propio taller.",
    },
    {
      title: "Presupuesto claro",
      description: "Sin sorpresas ni letra pequeña: lo que se habla es lo que se cobra.",
    },
    {
      title: "Aquí toda la vida",
      description: "40 años en Torrox Costa. Si algo falla después, seguimos aquí para arreglarlo.",
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
    photoUrl: "/images/services/cerramientos-terrazas.webp",
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
    photoUrl: "/images/services/toldos-persianas.webp",
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
    photoUrl: "/images/services/cortinas-vidrio.jpg",
  },
  {
    slug: "barandillas-de-cristal",
    tag: "Cristalería",
    title: "Barandillas de cristal",
    shortDescription: "Barandillas transparentes para terrazas, balcones y piscinas.",
    description:
      "Barandillas de cristal a medida para terrazas, balcones, escaleras y zonas de piscina, con una instalación limpia y segura.",
    bullets: [
      "Vidrio de seguridad",
      "Sistemas con perfil o herrajes",
      "Vistas despejadas sin perder protección",
    ],
    photoLabel: "Barandilla de cristal",
    photoUrl: "/images/services/barandillas-cristal.jpg",
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
    photoUrl: "/images/services/mamparas-bano.webp",
  },
  {
    slug: "canceles-y-puertas",
    tag: "Carpintería",
    title: "Canceles y puertas",
    shortDescription: "Puertas acorazadas, correderas y de paso a medida.",
    description:
      "Puertas acorazadas, correderas, abatibles y de paso, a medida en aluminio o PVC con acabados de alta seguridad.",
    bullets: [
      "Puertas acorazadas certificadas",
      "Sistemas correderos y plegables",
      "Herrajes y cerraduras de seguridad",
    ],
    photoLabel: "Puertas acorazadas",
    photoUrl: "/images/services/canceles-puertas.webp",
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
    photoUrl: "/images/services/proteccion-viviendas.webp",
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
    photoUrl: "/images/services/mosquiteras.webp",
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
    photoUrl: "/images/services/enmarcados.webp",
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

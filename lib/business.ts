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
  // Identificador de la ficha en Google. No es secreto: identifica un negocio
  // público, y tenerlo aquí evita configurarlo como variable de entorno.
  googlePlaceId: "ChIJH5TCLGSkLxURUzspBgKLPfM",
  // Ficha oficial en Maps y listado completo de reseñas, ambos por place id
  // para que no dependan de que una búsqueda por nombre acierte.
  googleMapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJH5TCLGSkLxURUzspBgKLPfM",
  googleReviewsUrl: "https://search.google.com/local/reviews?placeid=ChIJH5TCLGSkLxURUzspBgKLPfM",
  siteUrl: "https://www.cristaleriayaluminiostorroxcosta.com",
  // Datos para el aviso legal y la política de privacidad. Los exige el
  // artículo 10 de la LSSI, y tienen que ser los del titular real del negocio.
  //
  // OJO: los dos primeros están SIN RELLENAR a propósito. Salen tal cual en las
  // páginas legales, así que se ven a la primera y no se publica por descuido
  // un dato inventado. Rellénalos antes de sacar la web del .vercel.app.
  legal: {
    titular: "[PENDIENTE: nombre y apellidos, o razón social]",
    nif: "[PENDIENTE: NIF o CIF]",
    // Solo si el negocio es una sociedad (S.L., S.A.). Si es autónomo, null.
    registroMercantil: null as string | null,
    ultimaActualizacion: "14 de agosto de 2026",
  },
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

// Reseñas copiadas literalmente de la ficha de Google, sin corregir redacción,
// ortografía ni puntuación: son palabras de sus autores, no nuestras.
//
// Las fechas de Google son relativas ("hace 2 semanas"), y guardarlas así
// envejecería mal, así que van convertidas al mes en que se publicaron. La
// conversión tiene un margen de unos días en las más antiguas.
//
// `lang` solo hace falta cuando la reseña no está en castellano: marca el
// idioma en el HTML para lectores de pantalla y buscadores.
export const reviews = [
  {
    text: "Wonderful service from start to finish. Very professional, friendly, and excellent communication throughout. They did a really lovely job, and I'm very happy with the results. Thank you for a great service. I would highly recommend!",
    who: "Emma Gibson",
    date: "Agosto 2026",
    rating: 5,
    lang: "en",
  },
  {
    text: "Muy satisfecho con el trabajo realizado. Además, Juan estuvo muy disponible e hizo el trabajo más rápido de lo esperado. Especialmente para los 2 toldos, porque sabía que tomaríamos posesión del apartamento en julio. También reemplazó 2 puertas ventanas : trabajo limpio y cuidadoso. Estamos muy contentos con el resultado. Nos pondremos en contacto con él nuevamente para otras transformaciones.",
    who: "Marc DGAC",
    date: "Agosto 2026",
    rating: 5,
  },
  {
    text: "Gran trabajo realizado en mi estudio. Reparación de tres persianas, un trabajo impecable, super profesionales. Recomendable 100%",
    who: "Alberto Gómez",
    date: "Julio 2026",
    rating: 5,
  },
  {
    text: "Estoy contenta con el trabajo, un trabajo muy rapido y bueno",
    who: "Marta Patzeltova",
    date: "Julio 2026",
    rating: 5,
  },
  {
    text: "Excelentes profesionales. Muy buen servicio y calidad. Atención personalizada, sin duda lo recomiendo.",
    who: "Isabel Lebrero Martinez",
    date: "Julio 2026",
    rating: 5,
  },
  {
    text: "Esta es mi experiencia con CRISTALERÍA Y ALUMINIOS TORROX COSTA, Trabajan de forma conciensuda, son puntuales y de forma muy profesional, además sus honorarios son muy aceptables en comparación a otras empresas locales. LA RECOMIENDO 🌟🌟🌟🌟🌟",
    who: "Elsy Luna",
    date: "Julio 2026",
    rating: 5,
  },
  {
    text: "Sehr gute Arbeit, schnelle Umsetzung, auf Maß gefertigt und zu einem fairen Preis. Absolut empfehlenswert",
    who: "Laila Pohlmann",
    date: "Julio 2026",
    rating: 5,
    lang: "de",
  },
  {
    text: "We have used Cristalería y Aluminios de Torrox-Costa many times over the years, and the service has always been excellent. Antonio is extremely professional, reliable, and takes great pride in his work. He has fitted our mosquito doors, serviced all of our shutters, and promptly repaired them whenever any have broken. The quality of the workmanship is outstanding, and the customer service is always friendly, efficient, and dependable. We would highly recommend Cristalería y Aluminios de Torrox-Costa to anyone looking for quality windows, shutters, mosquito screens, or glass and aluminium work. A truly excellent company that we will continue to use in the future.",
    who: "Sandra Webb",
    date: "Julio 2026",
    rating: 5,
    lang: "en",
  },
  {
    text: "Me pusiste unas mosquiteras y luego te llamé para otro trabajo. Ya eres mi persona de confianza, gracias por ayudarme con rapidez y cercanía, totalmente recomendable",
    who: "Encarni Heredia Merino",
    date: "Julio 2026",
    rating: 5,
  },
  {
    text: "Kurzfristig ein Problem bei uns ganz unproblematisch gelöst - bei weiteren Themen würden wir auf dieses Geschäft zurückgreifen",
    who: "Markus Staubermann",
    date: "Junio 2026",
    rating: 5,
    lang: "de",
  },
  {
    text: "Great store, very friendly and professional people. Made a new showerwall in our bathroom and we are very happy with that! Recommended company!",
    who: "Edith Celie",
    date: "Marzo 2026",
    rating: 5,
    lang: "en",
  },
  {
    text: "Nous avons mis les mousquetaires avec Antonio.Tres bon travail! Très correct,tjr a l’heure! Antonio es un buen professionnel!",
    who: "Tamara Kassianova",
    date: "Febrero 2026",
    rating: 5,
    lang: "fr",
  },
  {
    text: "Ya he acudido a ellos en dos ocasiones, muy contenta con el servicio. Me arreglaron los toldos y ahora una persiana. Han venido rápido y quedó muy bien. Además son muy amables y competentes en su trabajo. Sin duda los recomiendo y volveré a contactarles si necesito sus servicios. Un 10 sobre 10. Gracias",
    who: "Begoña Bermúdez",
    date: "Agosto 2025",
    rating: 5,
  },
  {
    text: "Persona muy servicial, ha intentado arreglar la mampara pero como la fábrica está cerrada hasta septiembre me ha dado una solución por si sirve en lugar de cambiar las piezas. No me ha cobrado nada por venir. Muchísimas gracias",
    who: "Marta González Blancas",
    date: "Agosto 2024",
    rating: 5,
  },
  {
    text: "Planung, Beratung, Ausführung und der Preis sind super. Er hat alle unsere Wünsche zu unserer besten Zufriedenheit ausgeführt. Wir haben eine Balkonverglasung in Auftrag gegeben",
    who: "Claudia Schmitz",
    date: "Marzo 2024",
    rating: 5,
    lang: "de",
  },
  {
    text: "Mega guter Service und sehr gute Ausführung der Arbeiten, schnell und zuverlässig. Wir sind sehr zufrieden und empfehlen diese Firma jederzeit gerne weiter",
    who: "Annette Lange",
    date: "Marzo 2024",
    rating: 5,
    lang: "de",
  },
  {
    text: "Juan Antonio es súper amable y atento, detallista en el trabajo. Intenta aconsejarte siempre lo mejor. Si hay algún problema o contrariedad, intenta solucionarlo. Lo recomiendo.",
    who: "Raquel Lopez Rodriguez",
    date: "Diciembre 2023",
    rating: 5,
  },
  {
    text: "Puntuales, profesionales y buena calidad de producto. Ante imprevistos dan buena solución. Lo recomiendo 100%",
    who: "Yeon Ji Young",
    date: "Junio 2023",
    rating: 5,
  },
  {
    text: "Es la segunda vez que acudo a este establecimiento. He tenido un problema con una persiana y José Antonio ha venido rápidamente a solucionarlo. Es una persona muy amable y te aconseja en lo que precises. Contaré con él si lo vuelvo a necesitar.",
    who: "Begoña Fernandez",
    date: "Junio 2023",
    rating: 5,
  },
  {
    text: "Alltid snabbt utfört arbete med trevlighet, kunnighet och en kvalitetsmässigt snygg finish dessutom. Rekommerderas varmt!",
    who: "Karin Pontén",
    date: "Abril 2023",
    rating: 5,
    lang: "sv",
  },
];

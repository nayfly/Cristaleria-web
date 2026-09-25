import { business, services } from "@/lib/business";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: business.name,
    alternateName: `Aluminios Torrox Costa`,
    description:
      "Carpintería de aluminio, PVC y cristalería en Torrox Costa (Málaga). Cerramientos de terraza, cortinas de vidrio, toldos, persianas, mamparas y mosquiteras, con taller e instalación propia desde 1986.",
    image: [
      `${business.siteUrl}/images/gallery/hero-home.webp`,
      `${business.siteUrl}/images/gallery/tienda-taller.webp`,
    ],
    logo: `${business.siteUrl}/images/brand/logo.png`,
    "@id": business.siteUrl,
    url: business.siteUrl,
    telephone: business.phone,
    email: business.email,
    priceRange: "€€",
    currenciesAccepted: "EUR",
    hasMap: business.googleMapsUrl,
    areaServed: business.areaServed.map((name) => ({
      "@type": "City",
      name,
    })),
    knowsLanguage: ["es", "en"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de aluminio, PVC y cristalería",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.shortDescription,
          url: `${business.siteUrl}/productos#${service.slug}`,
        },
      })),
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    openingHoursSpecification: business.hours.openingHoursSpec.map((spec) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: spec.days,
      opens: spec.opens,
      closes: spec.closes,
    })),
    sameAs: [business.social.facebook, business.social.youtube, business.googleMapsUrl],
    // Sin aggregateRating a propósito. Google no admite reseñas
    // "autodeclaradas" en LocalBusiness: las estrellas de los resultados las
    // pone Google desde su propia ficha, no desde este marcado, así que
    // ponerlo aquí no aporta nada y expone a una penalización manual.
    // Las reseñas siguen visibles en la web, que es lo que ve el cliente.
    foundingDate: `${business.foundedYear}`,
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

import { business, services } from "@/lib/business";
import { getReviews } from "@/lib/google-reviews";

export async function LocalBusinessJsonLd() {
  // Misma llamada cacheada que usa la portada: Next la deduplica, así que esto
  // no gasta una petición extra a Google.
  const opiniones = await getReviews();

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
    hasMap: business.googleReviewsUrl,
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
    sameAs: [business.social.facebook, business.social.youtube, business.googleReviewsUrl],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: opiniones.rating,
      reviewCount: opiniones.count,
    },
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

import { business } from "@/lib/business";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: business.name,
    image: [
      `${business.siteUrl}/og.jpg`,
      `${business.siteUrl}/images/gallery/tienda-taller.webp`,
      `${business.siteUrl}/images/gallery/hero-home.webp`,
    ],
    logo: `${business.siteUrl}/images/brand/logo.png`,
    "@id": business.siteUrl,
    url: business.siteUrl,
    telephone: business.phone,
    email: business.email,
    priceRange: "€€",
    hasMap: business.googleReviewsUrl,
    areaServed: business.areaServed.map((name) => ({
      "@type": "Place",
      name,
    })),
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
    sameAs: [business.social.facebook, business.social.youtube],
    // Nota: no marcamos aggregateRating. Google no permite reseñas
    // "autodeclaradas" en LocalBusiness (las estrellas de la ficha de Google
    // las pone Google, no la web), así que marcarlas aquí no da estrellas en
    // los resultados y sí puede acarrear una penalización manual.
    // Las reseñas siguen visibles en la página: solo se quita del marcado.
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

import { business } from "@/lib/business";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: business.name,
    image: `${business.siteUrl}/fotos/fachada.jpg`,
    "@id": business.siteUrl,
    url: business.siteUrl,
    telephone: business.phone,
    email: business.email,
    priceRange: "€€",
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating.value,
      reviewCount: business.rating.count,
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

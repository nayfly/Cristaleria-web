// Trae las reseñas reales de la ficha de Google (Places API New).
//
// Todo esto es opcional: si no hay clave o Google falla, la web sigue
// funcionando con las reseñas de respaldo de `lib/business.ts`. Nunca se
// rompe una página por una reseña.
//
// Variables de entorno (en Vercel: Settings -> Environment Variables):
//   GOOGLE_PLACES_API_KEY  clave de Google Cloud con la Places API activada
//   GOOGLE_PLACE_ID        id de la ficha, ej. ChIJ...  (ver scripts/find-place-id.mjs)

import { business, reviews as fallbackReviews } from "./business";

export type SiteReview = {
  text: string;
  who: string;
  date: string;
  rating?: number;
  /** Foto de perfil del autor en Google. Su atribución es obligatoria. */
  photoUrl?: string;
  /** Enlace a la reseña concreta en Google Maps. */
  sourceUrl?: string;
};

export type ReviewsData = {
  reviews: SiteReview[];
  rating: number;
  count: number;
  mapsUrl: string;
  /** true = vienen de la API en vivo; false = respaldo estático. */
  live: boolean;
};

type LocalizedText = { text?: string };

type PlacesReview = {
  text?: LocalizedText;
  originalText?: LocalizedText;
  rating?: number;
  relativePublishTimeDescription?: string;
  googleMapsUri?: string;
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
};

type PlacesResponse = {
  reviews?: PlacesReview[];
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
};

const FALLBACK: ReviewsData = {
  reviews: fallbackReviews.map((r) => ({ ...r })),
  rating: business.rating.value,
  count: business.rating.count,
  mapsUrl: business.googleReviewsUrl,
  live: false,
};

export async function getReviews(): Promise<ReviewsData> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) return FALLBACK;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=es`,
      {
        headers: {
          "X-Goog-Api-Key": key,
          "X-Goog-FieldMask": "reviews,rating,userRatingCount,googleMapsUri",
        },
        // Google permite cachear los datos de una ficha hasta 30 días; con
        // revalidar una vez al día son ~30 peticiones al mes, muy por debajo
        // de las 1.000 gratuitas.
        next: { revalidate: 86400 },
      },
    );

    if (!res.ok) {
      console.error(`Places API respondió ${res.status}: ${await res.text()}`);
      return FALLBACK;
    }

    const data: PlacesResponse = await res.json();
    const mapped = (data.reviews ?? [])
      .map((r): SiteReview | null => {
        const text = (r.text?.text ?? r.originalText?.text ?? "").trim();
        const who = r.authorAttribution?.displayName?.trim();
        if (!text || !who) return null;
        return {
          text,
          who,
          date: r.relativePublishTimeDescription ?? "",
          rating: r.rating,
          photoUrl: r.authorAttribution?.photoUri,
          sourceUrl: r.googleMapsUri,
        };
      })
      .filter((r): r is SiteReview => r !== null);

    if (mapped.length === 0) return FALLBACK;

    return {
      reviews: mapped,
      rating: data.rating ?? business.rating.value,
      count: data.userRatingCount ?? business.rating.count,
      mapsUrl: data.googleMapsUri ?? business.googleReviewsUrl,
      live: true,
    };
  } catch (error) {
    console.error("No se pudieron traer las reseñas de Google:", error);
    return FALLBACK;
  }
}

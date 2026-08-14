// Busca el GOOGLE_PLACE_ID de la ficha del negocio.
//
//   npm run place-id
//
// Lee la clave de .env.local (o del entorno, si la tienes puesta ahí). Imprime
// los candidatos con su dirección y su valoración, para que pegues en las
// variables de entorno el id del que sea realmente vuestra ficha.

import { readFileSync } from "node:fs";

// Carga mínima de .env.local: Next lo lee solo al arrancar, pero un script
// suelto no, y no merece la pena traerse dotenv para tres líneas.
function cargarEnvLocal() {
  let contenido;
  try {
    contenido = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
  } catch {
    return; // no existe: se usará lo que haya en el entorno
  }
  for (const linea of contenido.split("\n")) {
    const limpia = linea.trim();
    if (!limpia || limpia.startsWith("#")) continue;
    const corte = limpia.indexOf("=");
    if (corte === -1) continue;
    const clave = limpia.slice(0, corte).trim();
    const valor = limpia.slice(corte + 1).trim().replace(/^["']|["']$/g, "");
    if (valor && !process.env[clave]) process.env[clave] = valor;
  }
}

cargarEnvLocal();

const key = process.env.GOOGLE_PLACES_API_KEY;
if (!key) {
  console.error("Falta GOOGLE_PLACES_API_KEY.");
  console.error("Copia .env.example a .env.local y pon ahí la clave.");
  process.exit(1);
}

const textQuery =
  process.argv.slice(2).join(" ") ||
  "Cristalería y Aluminios Torrox Costa, Av. de Andalucía 24, Torrox Costa, Málaga";

const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-Goog-Api-Key": key,
    "X-Goog-FieldMask":
      "places.id,places.displayName,places.formattedAddress,places.rating,places.userRatingCount,places.googleMapsUri",
  },
  body: JSON.stringify({ textQuery, languageCode: "es" }),
});

if (!res.ok) {
  console.error(`Google respondió ${res.status}:`);
  console.error(await res.text());
  process.exit(1);
}

const { places = [] } = await res.json();
if (places.length === 0) {
  console.log(`Sin resultados para: ${textQuery}`);
  process.exit(0);
}

for (const p of places) {
  console.log("");
  console.log(`  ${p.displayName?.text ?? "(sin nombre)"}`);
  console.log(`  ${p.formattedAddress ?? ""}`);
  console.log(`  ${p.rating ?? "?"} / 5 sobre ${p.userRatingCount ?? "?"} reseñas`);
  console.log(`  GOOGLE_PLACE_ID=${p.id}`);
  console.log(`  ${p.googleMapsUri ?? ""}`);
}
console.log("");

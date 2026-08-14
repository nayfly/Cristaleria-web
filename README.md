# Cristalería y Aluminios Torrox Costa — Web

Next.js 14 (App Router) + Tailwind CSS. Reemplaza la web actual en WordPress.

## Poner en marcha

```
npm install
npm run dev
```

## Dónde está publicada

Desplegada de prueba en https://cristaleria-web.vercel.app — es la versión que
se enseña para dar el visto bueno, todavía no sustituye a la web en producción.

## Ya resuelto

- **Fotos reales**: no queda ningún `PhotoSlot` sin foto. Las 10 fichas de
  servicio y los 37 trabajos de la galería apuntan a ficheros que existen en
  `/public/images/`, organizado en
  `brand/` (logo), `services/` (una imagen por servicio) y `gallery/` (una
  subcarpeta por categoría, más `hero-home.webp` y `tienda-taller.webp`).
- **Legales**: aviso legal, privacidad y cookies, con los datos del titular
  rellenos. La web no instala cookies: el mapa de Google carga solo si el
  visitante pulsa, así que no hace falta banner de consentimiento.
- **SEO**: metadatos Open Graph y Twitter, sitemap.xml, robots.txt, favicon
  generado del logo y structured data (JSON-LD `HomeAndConstructionBusiness`)
  con dirección, geolocalización, horario, valoración, catálogo de servicios y
  municipios donde se trabaja — nada de esto lo tiene la web actual.

## Reseñas de Google

La portada puede tirar las reseñas reales de la ficha de Google en vez de las
de respaldo. Es **opcional**: sin configurar nada, la web funciona con las
reseñas de `lib/business.ts` y no falla nunca (`lib/google-reviews.ts` cae al
respaldo ante cualquier error).

Para activarlo, copia `.env.example` a `.env.local`, saca una clave de Google
Cloud con la Places API (New) activada y averigua el id de la ficha:

```
GOOGLE_PLACES_API_KEY=xxx npm run place-id
```

En Vercel las dos variables van en Settings → Environment Variables.

Detalles que conviene saber:

- **Google no devuelve el texto de las reseñas de esta ficha.** Responde 200 con
  la nota y el recuento, pero el array `reviews` viene vacío; comprobado con y
  sin `languageCode`, en inglés y pidiendo solo ese campo. Por eso las 20
  reseñas del carrusel están copiadas literalmente a mano en `lib/business.ts`.
  Lo que sí sale de la API, y se refresca solo, es la valoración y el número
  total.
- Aunque las devolviera, el máximo por ficha son 5.
- La respuesta se cachea 24 h (`revalidate: 86400`), o sea ~30 peticiones al
  mes: muy por debajo de las 1.000 gratuitas. A partir de ahí son 25 $/1.000.
- Con la API activa, la valoración y el número de reseñas de la portada y del
  JSON-LD salen de Google, así que ya no se quedan desfasados a mano.
- La clave se usa **solo en el servidor**, nunca llega al navegador (no lleva
  prefijo `NEXT_PUBLIC_`). En Google Cloud restringe la clave por API a la
  Places API, pero deja las restricciones de aplicación en "Ninguno": por
  referrer no vale (el servidor no manda `Referer`) y por IP tampoco (en Vercel
  la IP de salida solo es fija en Pro con Static IPs, 100 $/mes). Lo que acota
  el riesgo de verdad es ponerle tope de cuota a la API.

## Pendiente antes de publicar

1. **Dominio**: `siteUrl` en `lib/business.ts` apunta al dominio real
   (`www.cristaleriayaluminiostorroxcosta.com`), no al de Vercel. Mientras la
   web viva solo en `.vercel.app`, el canonical, el sitemap y el JSON-LD
   señalan a un dominio que todavía no la sirve.
2. **Variables en Vercel**: ni las reseñas en vivo ni el envío del formulario
   están activos en producción hasta configurar `GOOGLE_PLACES_API_KEY` y
   `RESEND_API_KEY` (ver `.env.example`). Sin ellas la web funciona igual, con
   los valores de respaldo y el `mailto`. Cambiar variables en Vercel **no
   redespliega solo**: hay que lanzar un despliegue después.

## Formulario de contacto

`/contacto` envía a `app/api/contacto/route.ts`, que entrega el mensaje por
correo con Resend (por `fetch`, sin SDK ni dependencias). Lleva validación y
límites de longitud en el servidor, un campo trampa para bots y `reply_to` con
el correo del cliente, para poder contestarle dando a Responder.

Sin `RESEND_API_KEY` la ruta devuelve 503 y el formulario cae al `mailto` de
siempre. La política de privacidad se adapta sola a las dos situaciones, así
que nunca describe un tratamiento que no está ocurriendo.

## Galería

`/galeria` filtra por categoría y amplía las fotos en un visor (flechas del
teclado para pasar, Escape para cerrar). Cada categoría enlaza con su servicio
en `/productos` y viceversa; la correspondencia vive en el campo `serviceSlug`
de cada sección en `lib/gallery.ts`, así que se cambia en un solo sitio.

Se puede enlazar a una categoría concreta desde fuera: `/galeria#mamparas-bano`.

## Al editar contenido

Todo el contenido del negocio (teléfono, email, horario, redes, reseñas,
valoración, servicios) sale de `lib/business.ts`, y los trabajos de la galería
de `lib/gallery.ts`. Cambia ahí, no en las páginas.

## Estructura

- `app/page.tsx` — Inicio
- `app/productos/page.tsx` — Catálogo de servicios
- `app/galeria/page.tsx` — Galería, con filtros y visor (`components/GalleryBrowser.tsx`)
- `app/nosotros/page.tsx` — Quiénes somos (historia y valores, en `lib/business.ts`)
- `app/contacto/page.tsx` — Contacto: formulario, mapa y datos
- `app/aviso-legal`, `app/privacidad`, `app/cookies` — legales (`components/LegalPage.tsx`)
- `app/api/contacto/route.ts` — envío del formulario por Resend
- `components/` — cabecera, pie, redes, flotante de llamada, formulario, mapa bajo demanda
- `lib/business.ts` — única fuente de verdad de datos y contenido de la empresa
- `lib/gallery.ts` — trabajos de la galería, con `serviceSlug` para enlazar con los servicios
- `lib/google-reviews.ts` — valoración en vivo de Google, con respaldo estático
- `app/icon.png`, `app/apple-icon.png` — favicon, generados del logo
- `scripts/find-place-id.mjs` — busca el id de la ficha de Google

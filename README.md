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
  servicio y los 39 trabajos de la galería apuntan a ficheros que existen en
  `/public/images/`, organizado en
  `brand/` (logo), `services/` (una imagen por servicio) y `gallery/` (una
  subcarpeta por categoría, más `hero-home.webp` y `tienda-taller.webp`).
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

- Google devuelve **como mucho 5 reseñas** por ficha. No hay forma de sacar las
  140 por API; el botón "Ver reseñas en Google" sigue llevando al resto.
- La respuesta se cachea 24 h (`revalidate: 86400`), o sea ~30 peticiones al
  mes: muy por debajo de las 1.000 gratuitas. A partir de ahí son 25 $/1.000.
- Con la API activa, la valoración y el número de reseñas de la portada y del
  JSON-LD salen de Google, así que ya no se quedan desfasados a mano.
- La clave se usa **solo en el servidor**, nunca llega al navegador.

## Pendiente antes de publicar

1. **Formulario de contacto**: en `/contacto` no hay backend de email — el
   formulario (`components/ContactForm.tsx`) construye un mensaje de
   WhatsApp o un `mailto:` con lo escrito. Si se quiere que llegue de verdad a
   un buzón sin pasar por WhatsApp, hay que añadir un proveedor tipo Formspree
   o Resend.
2. **Avisos legales**: no hay página de privacidad, aviso legal ni cookies.
   Hoy la web no pone cookies propias, pero el mapa de `/contacto` es un iframe
   de Google.
3. **Dominio**: `siteUrl` en `lib/business.ts` ya apunta al dominio real
   (`www.cristaleriayaluminiostorroxcosta.com`), no al de Vercel. Mientras la
   web viva solo en `.vercel.app`, el canonical, el sitemap y el JSON-LD
   señalan a un dominio que todavía no la sirve.

## Al editar contenido

Todo el contenido del negocio (teléfono, email, horario, redes, reseñas,
valoración, servicios) sale de `lib/business.ts`, y los trabajos de la galería
de `lib/gallery.ts`. Cambia ahí, no en las páginas.

## Estructura

- `app/page.tsx` — Inicio
- `app/productos/page.tsx` — Catálogo de productos
- `app/galeria/page.tsx` — Galería de trabajos realizados (`lib/gallery.ts`)
- `app/nosotros/page.tsx` — Quiénes somos (historia y valores, en `lib/business.ts`)
- `app/contacto/page.tsx` — Contacto: formulario, mapa y datos
- `components/` — Header, Footer, botón flotante de WhatsApp, formulario de contacto, marcador de fotos
- `lib/business.ts` — única fuente de verdad de datos y contenido de la empresa
- `lib/gallery.ts` — proyectos mostrados en la galería
- `lib/google-reviews.ts` — reseñas en vivo de Google, con respaldo estático
- `app/icon.png`, `app/apple-icon.png` — favicon, generados del logo
- `scripts/find-place-id.mjs` — busca el id de la ficha de Google

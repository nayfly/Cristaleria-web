# Cristalería y Aluminios Torrox Costa — Web

Next.js 14 (App Router) + Tailwind CSS. Reemplaza la web actual en WordPress.

## Poner en marcha

```
npm install
npm run dev
```

## Antes de publicar

1. **Fotos reales**: cada bloque con el icono 📷 (componente `PhotoSlot`) es un
   marcador. Sustitúyelo por `<Image src="/fotos/xxx.jpg" alt="..." fill />`
   con la foto real guardada en `/public/fotos/`.
2. **Datos del negocio**: todo el contenido (teléfono, email, horario, redes,
   reseñas, valoración) sale de `lib/business.ts`. Cambia ahí, no en las páginas.
3. **Valoración de Google**: en `lib/business.ts`, `rating.count` está puesto
   como aproximado (+100). Pon la cifra exacta que tengáis en Google Business.
4. **Dominio**: `siteUrl` en `lib/business.ts` debe coincidir con el dominio
   real antes de desplegar (afecta al sitemap, robots.txt y JSON-LD).
5. **SEO ya incluido**: metadatos Open Graph, sitemap.xml, robots.txt y
   structured data (JSON-LD `HomeAndConstructionBusiness`) con dirección,
   geolocalización, horario y valoración — nada de esto lo tiene la web actual.

6. **Formulario de contacto**: en `/contacto` no hay backend de email — el
   formulario (`components/ContactForm.tsx`) construye un mensaje de
   WhatsApp o un `mailto:` con lo escrito. Si más adelante se quiere que
   llegue de verdad a un buzón sin pasar por WhatsApp, hay que añadir un
   proveedor tipo Formspree o Resend.

## Estructura

- `app/page.tsx` — Inicio
- `app/productos/page.tsx` — Catálogo de productos
- `app/galeria/page.tsx` — Galería de trabajos realizados (`lib/gallery.ts`)
- `app/nosotros/page.tsx` — Quiénes somos (historia y valores, en `lib/business.ts`)
- `app/contacto/page.tsx` — Contacto: formulario, mapa y datos
- `components/` — Header, Footer, botón flotante de WhatsApp, formulario de contacto, marcador de fotos
- `lib/business.ts` — única fuente de verdad de datos y contenido de la empresa
- `lib/gallery.ts` — proyectos mostrados en la galería

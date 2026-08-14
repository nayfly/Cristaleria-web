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

- **Fotos reales**: las 10 fichas de servicio y los 39 trabajos de la galería
  apuntan a ficheros que existen en `/public/images/`, organizado en
  `brand/` (logo), `services/` (una imagen por servicio) y `gallery/` (una
  subcarpeta por categoría, más `hero-home.webp` y `tienda-taller.webp`).
- **SEO**: metadatos Open Graph, sitemap.xml, robots.txt y structured data
  (JSON-LD `HomeAndConstructionBusiness`) con dirección, geolocalización,
  horario y valoración — nada de esto lo tiene la web actual.

## Pendiente antes de publicar

1. **Foto de `/nosotros`**: es el único `PhotoSlot` que sigue sin `src`
   (`app/nosotros/page.tsx`, "Foto del equipo o del taller"). Pásale una foto
   de `/public/images/` o quita el bloque.
2. **Formulario de contacto**: en `/contacto` no hay backend de email — el
   formulario (`components/ContactForm.tsx`) construye un mensaje de
   WhatsApp o un `mailto:` con lo escrito. Si se quiere que llegue de verdad a
   un buzón sin pasar por WhatsApp, hay que añadir un proveedor tipo Formspree
   o Resend.
3. **Valoración de Google**: en `lib/business.ts`, `rating.count` está puesto
   como aproximado (101). Pon la cifra exacta que tengáis en Google Business,
   porque va al JSON-LD.
4. **Dominio**: `siteUrl` en `lib/business.ts` ya apunta al dominio real
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

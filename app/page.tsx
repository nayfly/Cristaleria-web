import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CallFloat } from "@/components/CallFloat";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Reveal } from "@/components/Reveal";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { business, services, featuredServiceSlugs, yearsInBusiness } from "@/lib/business";
import { getReviews } from "@/lib/google-reviews";

const featuredServices = featuredServiceSlugs
  .map((slug) => services.find((s) => s.slug === slug))
  .filter((s): s is (typeof services)[number] => Boolean(s));

// La portada no declara title/description propios: hereda los del layout, que
// son la fuente única y ya vienen recortados a lo que Google muestra sin cortar.

// Se regenera una vez al día para refrescar la valoración de Google. Explícito
// y no heredado del fetch, para que se vea de un vistazo cada cuánto cambia.
export const revalidate = 86400;

export default async function HomePage() {
  const opiniones = await getReviews();

  return (
    <>
      <Header active="inicio" />

      {/* HERO */}
      <section className="bg-cream pt-[52px]">
        <div className="mx-auto max-w-[900px] px-5 text-center sm:px-8">
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-accent">
            {business.address.locality} · Desde {business.foundedYear}
          </p>
          <h1 className="mx-auto mt-4 max-w-[14ch] font-display text-[40px] font-bold leading-[1.02] tracking-[-0.02em] text-ink sm:max-w-[16ch] sm:text-[62px] lg:text-[74px]">
            Cerramientos que se notan por cómo encajan
          </h1>
          <p className="mx-auto mt-6 max-w-[52ch] text-[16.5px] leading-relaxed text-muted">
            Instalamos aluminio, PVC, vidrio, toldos y persianas a medida, fabricando en
            nuestro taller lo que podemos. Presupuesto claro y rápido, sin intermediarios.
          </p>
          <div className="mx-auto mt-8 grid w-full max-w-[330px] grid-cols-1 justify-center gap-3 sm:max-w-none sm:grid-cols-none sm:flex sm:flex-wrap sm:justify-center">
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3.5 text-[14.5px] font-bold text-white transition hover:bg-accent-dark"
            >
              Llamar {business.phoneDisplay}
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-md border-[1.5px] border-line bg-white px-6 py-3.5 text-[14.5px] font-bold text-ink transition hover:bg-cream"
            >
              Pedir por formulario
            </Link>
          </div>
          <p className="mt-3.5 text-[12.5px] text-muted/80">Respuesta rápida · Sin compromiso</p>
        </div>

        <div className="mx-auto mt-11 max-w-[1180px] px-5 sm:px-8">
          <PhotoSlot
            label="Terraza con cerramiento de vidrio en Torrox Costa"
            src="/images/gallery/hero-home.webp"
            sizes="(min-width: 1180px) 1180px, 100vw"
            priority
            className="aspect-[16/7] rounded-[20px]"
            imgClassName="hero-zoom"
          />
        </div>

        {/* CONFIANZA — una tarjeta sólida, una clara y una con foto, para que la
            banda tenga ritmo en vez de cuatro cajitas iguales. */}
        <div className="mx-auto mt-5 grid max-w-[1180px] grid-cols-1 gap-4 px-5 pb-14 sm:px-8 md:grid-cols-3">
          <Reveal>
            <div className="flex h-full flex-col rounded-[20px] bg-ink p-7 text-white">
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-warm">
                Desde {business.foundedYear}
              </p>
              <p className="mt-auto pt-10 font-display text-[72px] font-bold leading-[0.85]">
                {yearsInBusiness}
              </p>
              <p className="mt-2 font-display text-[21px] font-bold leading-tight">
                años en {business.address.locality}
              </p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-white/70">
                El mismo taller y la misma gente desde {business.foundedYear}.
              </p>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="flex h-full flex-col rounded-[20px] border border-line bg-white p-7">
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-accent">
                Opiniones
              </p>
              <p className="mt-auto pt-10 font-display text-[72px] font-bold leading-[0.85] text-ink">
                {opiniones.rating}
              </p>
              <p className="mt-2 font-display text-[21px] font-bold leading-tight text-ink">
                sobre 5 en Google
              </p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
                {opiniones.count} reseñas de vecinos y negocios de la zona.
              </p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="relative h-full min-h-[260px] overflow-hidden rounded-[20px]">
              <PhotoSlot
                label="Instalación de un cerramiento en Torrox Costa"
                src="/images/services/cerramientos-terrazas.webp"
                sizes="(min-width: 768px) 33vw, 100vw"
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink2/90 via-ink2/40 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-7 text-white">
                <p className="font-display text-[26px] font-bold leading-tight">
                  Instalación propia
                </p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-white/80">
                  Medimos, fabricamos, instalamos y ajustamos nosotros mismos. Sin subcontratar.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICIOS — en formato editorial: numerados, con la foto grande, en vez
          de tres tarjetas iguales. El catálogo completo sigue en /productos. */}
      <section className="py-[72px]">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <Reveal>
            <div className="max-w-[46ch]">
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-accent">
                Lo más pedido
              </p>
              <h2 className="mt-3 font-display text-[34px] font-bold leading-[1.03] tracking-[-0.015em] text-ink sm:text-[46px]">
                Los trabajos que más piden en la costa
              </h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-muted">
                Cerramientos, cortinas de cristal y toldos — y hacemos muchos más: mamparas,
                mosquiteras, rejas, cerrajería y reparaciones.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-16 sm:gap-20">
            {featuredServices.map((service, i) => (
              <Reveal key={service.slug}>
                <article className="grid grid-cols-1 items-center gap-7 md:grid-cols-2 md:gap-12">
                  <div className={i % 2 === 1 ? "md:order-2" : undefined}>
                    <PhotoSlot
                      label={service.photoLabel}
                      src={service.photoUrl}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="aspect-[4/3] rounded-[20px]"
                    />
                  </div>
                  <div className={i % 2 === 1 ? "md:order-1" : undefined}>
                    <div className="flex items-center gap-3">
                      <span className="rounded-md bg-ink px-2.5 py-1 font-display text-[13px] font-bold tabular-nums text-white">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
                        {service.tag}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-[30px] font-bold leading-[1.05] tracking-[-0.015em] text-ink sm:text-[38px]">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-[46ch] text-[15.5px] leading-relaxed text-muted">
                      {service.description}
                    </p>
                    <ul className="mt-4 grid gap-2">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-[14.5px] text-muted">
                          <span aria-hidden className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/productos#${service.slug}`}
                      className="mt-6 inline-flex rounded-md bg-accent px-6 py-3.5 text-[14.5px] font-bold text-white transition hover:bg-accent-dark"
                    >
                      Pedir presupuesto →
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 text-center">
              <Link
                href="/productos"
                className="inline-flex rounded-md border-[1.5px] border-line px-7 py-3.5 text-[14.5px] font-bold text-ink transition hover:bg-cream"
              >
                Ver todos los servicios →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <Reveal>
          {/* Sin foto por decisión del negocio: en vez de dejar la rejilla de dos
              columnas coja, el bloque pasa a una sola columna con el texto a
              ancho de lectura. */}
          <div className="rounded-[20px] bg-ink p-8 text-white sm:p-12">
            <div className="max-w-[62ch]">
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-warm">
                Cómo trabajamos
              </p>
              <h2 className="mt-3 font-display text-[32px] font-bold leading-[1.03] tracking-[-0.015em] sm:text-[44px]">
                Oficio de taller, trato de barrio
              </h2>
              <p className="mt-4 text-[15px] leading-[1.7] text-white/82">
                Somos un negocio familiar de {business.address.locality}. Desde{" "}
                {business.foundedYear} instalamos nosotros mismos, sin subcontratar, y fabricamos a
                medida lo que sale de nuestro taller: si algo falla, nos llamas y venimos.
              </p>
              <p className="mt-2.5 text-[15px] leading-[1.7] text-white/82">
                Preferimos explicarte las cosas claras antes que venderte de más.
              </p>
              <Link
                href="/nosotros"
                className="mt-7 inline-flex rounded-md bg-accent px-6 py-3.5 text-[14.5px] font-bold text-white transition hover:bg-accent-dark"
              >
                Conocer al equipo
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      {/* RESEÑAS */}
      <section className="bg-cream py-[72px]">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <Reveal>
            <div className="mx-auto mb-8 max-w-[60ch] text-center">
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-accent">
                Opiniones
              </p>
              <h2 className="mt-3 font-display text-[34px] font-bold leading-[1.03] tracking-[-0.015em] text-ink sm:text-[46px]">
                Esto no lo decimos nosotros
              </h2>
              <p className="mt-3 text-[14.5px] text-muted">
                {opiniones.rating}/5 sobre {opiniones.count} reseñas en Google
              </p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <ReviewsCarousel reviews={opiniones.reviews} url={opiniones.mapsUrl} />
          </Reveal>
        </div>
      </section>

      <Footer />
      <CallFloat />
    </>
  );
}

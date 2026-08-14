import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PhotoSlot } from "@/components/PhotoSlot";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { business, services, featuredServiceSlugs } from "@/lib/business";
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
        <div className="mx-auto max-w-[680px] px-5 text-center sm:px-8">
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-accent">
            {business.address.locality} · Desde {business.foundedYear}
          </p>
          <h1 className="mx-auto mt-4 max-w-[12ch] font-display text-[30px] font-bold leading-[1.08] text-ink sm:max-w-none sm:text-5xl">
            Cerramientos que se notan por cómo encajan
          </h1>
          <p className="mx-auto mt-[18px] max-w-[52ch] text-[16.5px] leading-relaxed text-muted">
            Instalamos aluminio, PVC, vidrio, toldos y persianas a medida, fabricando en
            nuestro taller lo que podemos. Presupuesto claro y rápido, sin intermediarios.
          </p>
          <div className="mx-auto mt-[26px] grid w-full max-w-[330px] grid-cols-1 justify-center gap-3 sm:max-w-none sm:grid-cols-none sm:flex sm:flex-wrap">
            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center rounded-md bg-wa px-6 py-3.5 text-[14.5px] font-bold text-ink2 hover:brightness-95"
            >
              WhatsApp ahora
            </a>
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3.5 text-[14.5px] font-bold text-white hover:bg-accent-dark"
            >
              Llamar {business.phoneDisplay}
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-md border-[1.5px] border-line bg-white px-6 py-3.5 text-[14.5px] font-bold text-ink hover:bg-cream"
            >
              Pedir por formulario
            </Link>
          </div>
          <p className="mt-3.5 text-[12.5px] text-muted/80">
            Respuesta rápida · Sin compromiso
          </p>
        </div>

        <div className="mx-auto mt-9 max-w-[1180px] px-5 sm:px-8">
          <PhotoSlot
            label="Terraza con cerramiento de vidrio en Torrox Costa"
            src="/images/gallery/hero-home.webp"
            sizes="(min-width: 1180px) 1180px, 100vw"
            priority
            className="aspect-[16/7] rounded-md"
          />
        </div>

        {/* TRUST */}
        <div className="mx-auto mt-9 grid max-w-[1180px] grid-cols-1 gap-3.5 px-5 pb-8 sm:px-8 sm:grid-cols-2 lg:grid-cols-4">
          <TrustCard
            icon="★"
            value={`${opiniones.rating} / 5`}
            label={`${opiniones.count} reseñas Google`}
          />
          <TrustCard icon="40" value={`Desde ${business.foundedYear}`} label="40 años en la zona" />
          <TrustCard icon="⚒" value="Instalación propia" label="Medimos y montamos nosotros mismos" />
          <TrustCard icon="⏱" value="Respuesta rápida" label="Te contestamos lo antes posible" />
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-[52px]">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="mx-auto mb-[30px] max-w-[60ch] text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-accent">
              Lo más pedido
            </p>
            <h2 className="mx-auto mt-2.5 max-w-[13ch] font-display text-[26px] font-bold leading-tight text-ink sm:max-w-none sm:text-3xl">
              Los trabajos que más piden en la costa
            </h2>
            <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">
              Cerramientos, cortinas de cristal y toldos — y hacemos muchos más: mamparas,
              mosquiteras, rejas, reparaciones.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {featuredServices.map((service) => (
              <div
                key={service.slug}
                className="flex flex-col overflow-hidden rounded-md border border-line bg-white"
              >
                <PhotoSlot label={service.photoLabel} src={service.photoUrl} className="aspect-[4/3]" />
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-accent">
                    {service.tag}
                  </p>
                  <h3 className="mt-0.5 font-display text-[19px] text-ink">{service.title}</h3>
                  <p className="mb-2 mt-1 text-[13.5px] leading-[1.5] text-muted">
                    {service.shortDescription}
                  </p>
                  <Link
                    href={`/productos#${service.slug}`}
                    className="mt-auto text-[13px] font-bold text-accent hover:text-accent-dark"
                  >
                    Pedir presupuesto →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 text-center">
            <Link
              href="/productos"
              className="inline-flex rounded-md border-[1.5px] border-line px-6 py-3 text-[14.5px] font-bold text-ink hover:bg-cream"
            >
              Ver todos los servicios →
            </Link>
          </div>
        </div>
      </section>

      {/* STORY */}
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-9 rounded-[20px] bg-ink p-8 text-white sm:p-10 md:grid-cols-[0.9fr_1.1fr]">
          <PhotoSlot
            label="Taller de aluminio y cristaleria"
            src="/images/gallery/tienda-taller.webp"
            sizes="(min-width: 768px) 45vw, 100vw"
            className="aspect-square rounded-md"
          />
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-warm">
              Cómo trabajamos
            </p>
            <h2 className="mt-2.5 font-display text-[26px] font-bold leading-tight">
              Oficio de taller, trato de barrio
            </h2>
            <p className="mt-3 text-[14.5px] leading-[1.7] text-white/82">
              Somos un negocio familiar de {business.address.locality}. Desde {business.foundedYear} instalamos
              nosotros mismos, sin subcontratar, y fabricamos a medida lo que sale de nuestro
              taller: si algo falla, nos llamas y venimos.
            </p>
            <p className="mt-2.5 text-[14.5px] leading-[1.7] text-white/82">
              Preferimos explicarte las cosas claras antes que venderte de más.
            </p>
            <Link
              href="/nosotros"
              className="mt-6 inline-flex rounded-md bg-accent px-6 py-3.5 text-[14.5px] font-bold text-white hover:bg-accent-dark"
            >
              Conocer al equipo
            </Link>
          </div>
        </div>
      </div>

      {/* RESEÑAS */}
      <section className="bg-cream py-[52px]">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="mx-auto mb-6 max-w-[60ch] text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-accent">Opiniones</p>
            <h2 className="mt-2.5 font-display text-[28px] font-bold leading-tight text-ink sm:text-3xl">
              Clientes que ya nos han dejado entrar en casa
            </h2>
            <p className="mt-2.5 text-[14.5px] text-muted">
              {opiniones.rating}/5 sobre {opiniones.count} reseñas en Google
            </p>
          </div>
          <ReviewsCarousel reviews={opiniones.reviews} url={opiniones.mapsUrl} />
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="mx-auto max-w-[1132px] px-5 pb-[52px] sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-[20px] bg-tan p-8 sm:p-11">
          <div>
            <h2 className="font-display text-[26px] font-bold text-ink">
              ¿Qué hueco quieres cerrar o mejorar?
            </h2>
            <p className="mt-1.5 text-[14px] text-muted">
              Te orientamos por teléfono o WhatsApp, sin compromiso · Respuesta rápida
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener"
              className="rounded-md bg-wa px-6 py-3.5 text-[14.5px] font-bold text-ink2 hover:brightness-95"
            >
              WhatsApp
            </a>
            <a
              href={`tel:${business.phone}`}
              className="rounded-md bg-accent px-6 py-3.5 text-[14.5px] font-bold text-white hover:bg-accent-dark"
            >
              Llamar
            </a>
            <Link
              href="/contacto"
              className="rounded-md border-[1.5px] border-line bg-white px-6 py-3.5 text-[14.5px] font-bold text-ink hover:bg-cream"
            >
              Formulario
            </Link>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}

function TrustCard({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-line bg-white p-[18px]">
      <div className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-[9px] bg-tan text-[16px] font-extrabold text-accent-dark">
        {icon}
      </div>
      <div className="min-w-0">
        <b className="block text-[14.5px] text-ink">{value}</b>
        <span className="block text-xs text-muted">{label}</span>
      </div>
    </div>
  );
}

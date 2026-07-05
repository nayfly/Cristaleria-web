import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PhotoSlot } from "@/components/PhotoSlot";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { business, services, reviews } from "@/lib/business";

const heroImage =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=82";

export const metadata: Metadata = {
  title: `${business.name} | Carpintería de aluminio, PVC y cristalería en Torrox Costa`,
  description:
    "Ventanas, toldos, persianas, mosquiteras y cristalería a medida en Torrox Costa, Málaga. Fabricación propia desde 1986. Pide presupuesto gratis por WhatsApp o llamada.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Header active="inicio" />

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Cerramiento acristalado luminoso con perfilería de aluminio"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(19%_0.025_245/0.96)_0%,oklch(19%_0.025_245/0.78)_42%,oklch(19%_0.025_245/0.34)_100%)]" />
        </div>

        <div className="relative mx-auto grid min-h-[610px] max-w-[1180px] grid-cols-1 items-end gap-10 px-4 py-12 sm:px-8 md:grid-cols-[1.05fr_0.95fr] md:py-16">
          <div className="min-w-0 max-w-[650px]">
            <p className="text-[12px] font-bold uppercase text-warm sm:text-[13px]">
              Cristalería, aluminio y PVC en {business.address.locality}
            </p>
            <h1 className="mt-3 max-w-[11ch] break-words font-display text-[36px] font-bold leading-[1.04] sm:max-w-[13ch] sm:text-6xl lg:text-7xl">
              Cerramientos a medida, instalados por gente de aquí
            </h1>
            <p className="mt-5 max-w-[32ch] text-base leading-relaxed text-white/88 sm:max-w-[45ch] sm:text-lg">
              Fabricación propia desde {business.foundedYear}. Ventanas, mamparas, toldos,
              persianas, mosquiteras y trabajos de vidrio con presupuesto claro.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contacto"
                className="inline-flex w-full justify-center rounded-md bg-warm px-5 py-3.5 text-[15px] font-semibold text-ink hover:bg-white sm:w-auto sm:px-6"
              >
                Pedir presupuesto gratis
              </Link>
              <a
                href={`tel:${business.phone}`}
                className="inline-flex w-full justify-center rounded-md border border-white/55 px-5 py-3.5 text-[15px] font-semibold hover:bg-white/10 sm:w-auto sm:px-6"
              >
                Llamar {business.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="hidden self-end md:block">
            <div className="ml-auto max-w-[390px] border border-white/18 bg-white/12 p-6 shadow-2xl backdrop-blur">
              <p className="text-sm font-semibold text-warm">Taller propio en Torrox Costa</p>
              <p className="mt-3 text-[15px] leading-relaxed text-white/82">
                Medimos, fabricamos e instalamos nosotros. Sin intermediarios y con respuesta
                cercana si hay que ajustar o mantener el trabajo.
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-5 border-t border-white/15 pt-5">
                <div>
                  <dt className="text-3xl font-bold text-white">30+</dt>
                  <dd className="mt-1 text-xs text-white/65">años de experiencia</dd>
                </div>
                <div>
                  <dt className="text-3xl font-bold text-white">24-48h</dt>
                  <dd className="mt-1 text-xs text-white/65">respuesta habitual</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-6 px-5 py-8 sm:px-8 md:grid-cols-4">
          <Stat value="30+" label="Años de experiencia" />
          <Stat value={`${business.rating.value}★`} label={`+${business.rating.count} reseñas en Google`} />
          <Stat value="100%" label="Fabricación propia" />
          <Stat value="24-48h" label="Respuesta a presupuestos" />
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="mb-11 max-w-[40ch]">
            <p className="text-[13px] font-bold uppercase text-accent">
              Lo que hacemos
            </p>
            <h2 className="mt-2.5 font-display text-3xl font-bold leading-tight sm:text-4xl">
              Soluciones claras para vivienda, local y comunidad
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-muted">
              Desde un arreglo puntual hasta un cerramiento completo: medimos, fabricamos y
              dejamos instalado cada trabajo.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.slug}
                className="overflow-hidden rounded-md border border-line bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <PhotoSlot label={s.photoLabel} src={s.photoUrl} className="aspect-[4/3]" />
                <div className="p-5">
                  <h3 className="mb-1.5 text-[16.5px] font-semibold">{s.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-muted">{s.shortDescription}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/productos"
              className="inline-flex rounded-lg border border-line px-6 py-3 text-[15px] font-semibold hover:bg-panel"
            >
              Ver todos los productos
            </Link>
          </div>
        </div>
      </section>

      {/* NOSOTROS (teaser) */}
      <section id="nosotros" className="bg-panel py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-5 sm:px-8 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[5/4] overflow-hidden rounded-md">
            <Image
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=78"
              alt="Taller de fabricación y montaje"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[13px] font-bold uppercase text-accent">
              Desde {business.foundedYear}
            </p>
            <h2 className="mt-2.5 font-display text-3xl font-bold leading-tight">
              Una empresa familiar con casi 40 años de oficio
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-muted">
              {business.story.intro}
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {business.values.map((v) => (
                <li key={v.title} className="flex items-center gap-2.5 text-[14.5px] font-semibold">
                  <span className="h-2 w-2 flex-none rounded-full bg-accent" />
                  {v.title}
                </li>
              ))}
            </ul>
            <Link
              href="/nosotros"
              className="mt-6 inline-flex rounded-lg bg-accent px-6 py-3 text-[15px] font-semibold text-white hover:bg-accent-dark"
            >
              Conoce nuestra historia
            </Link>
          </div>
        </div>
      </section>

      {/* RESEÑAS */}
      <section className="bg-ink py-16 text-white sm:py-20">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="mb-9 max-w-[40ch]">
            <p className="text-[13px] font-bold uppercase text-warm">
              Opiniones
            </p>
            <h2 className="mt-2.5 font-display text-3xl font-bold leading-tight">
              Clientes satisfechos en toda la Costa del Sol
            </h2>
            <p className="mt-3 text-white/70">Reseñas verificadas de Google.</p>
          </div>
          <div className="mb-9 flex flex-wrap items-center gap-3.5">
            <span className="text-lg text-warm">★★★★★</span>
            <b className="text-lg">{business.rating.value} / 5</b>
            <span className="text-sm text-white/60">
              basado en más de {business.rating.count} reseñas de Google
            </span>
          </div>
          <ReviewsCarousel reviews={reviews} />
          <div className="mt-9 text-center">
            <Link
              href="/galeria"
              className="inline-flex rounded-lg border border-white/25 px-6 py-3 text-[15px] font-semibold hover:bg-white/10"
            >
              Ver galería de trabajos
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="bg-gradient-to-r from-accent to-accent-dark text-white">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-7 px-5 py-14 sm:px-8">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-[28px]">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="mt-1.5 text-[15px] text-white/85">
              Pide presupuesto sin compromiso, te respondemos en el mismo día.
            </p>
          </div>
          <div className="flex flex-wrap gap-3.5">
            <a
              href={`tel:${business.phone}`}
              className="rounded-lg bg-white px-6 py-3.5 text-[15px] font-semibold text-accent-dark"
            >
              Llamar: {business.phoneDisplay}
            </a>
            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener"
              className="rounded-lg border border-white/55 px-6 py-3.5 text-[15px] font-semibold hover:bg-white/10"
            >
              WhatsApp
            </a>
            <Link
              href="/contacto"
              className="rounded-lg border border-white/55 px-6 py-3.5 text-[15px] font-semibold hover:bg-white/10"
            >
              Más formas de contacto
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-0">
      <b className="block font-display text-[28px] text-accent">{value}</b>
      <span className="block max-w-[14ch] text-[13.5px] leading-snug text-muted sm:max-w-none">{label}</span>
    </div>
  );
}

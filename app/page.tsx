import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PhotoSlot } from "@/components/PhotoSlot";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { business, services, reviews } from "@/lib/business";

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
      <section id="top" className="relative flex min-h-[560px] items-end overflow-hidden text-white sm:min-h-[600px]">
        <PhotoSlot
          label="Foto de fachada del taller o instalación destacada"
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[oklch(22%_0.03_50/0.9)] via-[oklch(22%_0.03_50/0.42)] to-[oklch(22%_0.03_50/0.18)]" />
        <div className="relative z-[2] mx-auto w-full max-w-[1180px] px-5 py-14 sm:px-8">
          <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-warm">
            Carpintería de aluminio, PVC y cristalería · {business.address.locality}
          </p>
          <h1 className="mt-3 max-w-[18ch] font-display text-4xl font-bold leading-[1.06] sm:text-5xl">
            Un negocio familiar que hace las cosas a tu medida
          </h1>
          <p className="mt-4 max-w-[38ch] text-lg leading-relaxed text-white/90">
            Fabricación propia, instalación y mantenimiento. Casi 40 años cuidando hogares y
            negocios de Torrox Costa y la Costa del Sol como si fueran nuestros.
          </p>
          <div className="mt-7 flex flex-wrap gap-3.5">
            <Link
              href="/contacto"
              className="rounded-lg bg-accent px-6 py-3.5 text-[15px] font-semibold hover:bg-accent-dark"
            >
              Pedir presupuesto gratis
            </Link>
            <a
              href={`tel:${business.phone}`}
              className="rounded-lg border border-white/55 px-6 py-3.5 text-[15px] font-semibold hover:bg-white/10"
            >
              Llamar ahora
            </a>
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
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-accent">
              Lo que hacemos
            </p>
            <h2 className="mt-2.5 font-display text-3xl font-bold leading-tight sm:text-4xl">
              Un servicio completo de carpintería y cristalería
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.slug}
                className="overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-xl"
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
          <PhotoSlot label="Foto del equipo o del taller" className="aspect-[5/4] rounded-2xl" />
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-accent">
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
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-warm">
              Opiniones
            </p>
            <h2 className="mt-2.5 font-display text-3xl font-bold leading-tight">
              Clientes satisfechos en toda la Costa del Sol
            </h2>
            <p className="mt-3 text-white/70">Reseñas verificadas de Google.</p>
          </div>
          <div className="mb-9 flex flex-wrap items-center gap-3.5">
            <span className="text-lg tracking-widest text-warm">★★★★★</span>
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
    <div>
      <b className="block font-display text-[28px] text-accent">{value}</b>
      <span className="text-[13.5px] text-muted">{label}</span>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PhotoSlot } from "@/components/PhotoSlot";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { business, services, reviews, type Service } from "@/lib/business";

const heroImage =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=82";

const featuredServices = services.slice(0, 4);

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

      <section id="top" className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Cerramiento acristalado moderno en una vivienda luminosa"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(17%_0.025_245/0.96)_0%,oklch(17%_0.025_245/0.82)_43%,oklch(17%_0.025_245/0.34)_100%)]" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100vh-108px)] max-w-[1180px] grid-cols-1 items-end gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.04fr_0.96fr] md:py-16">
          <div className="min-w-0 max-w-[720px] pb-4">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-warm">
              Taller propio en {business.address.locality}
            </p>
            <h1 className="mt-4 max-w-[12ch] font-display text-[40px] font-bold leading-[1.03] sm:text-6xl lg:text-7xl">
              Cerramientos que se notan por cómo encajan
            </h1>
            <p className="mt-6 max-w-[46ch] text-[16.5px] leading-relaxed text-white/86 sm:text-lg">
              Fabricamos e instalamos aluminio, PVC, vidrio, toldos y persianas a medida. Sin
              intermediarios, con presupuesto claro y respuesta cercana.
            </p>
            <div className="mt-8 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contacto"
                className="inline-flex w-full justify-center rounded-md bg-warm px-6 py-3.5 text-[15px] font-semibold text-ink transition hover:bg-white sm:w-auto"
              >
                Pedir presupuesto gratis
              </Link>
              <a
                href={`tel:${business.phone}`}
                className="inline-flex w-full justify-center rounded-md border border-white/45 px-6 py-3.5 text-[15px] font-semibold transition hover:bg-white/10 sm:w-auto"
              >
                Llamar {business.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="hidden self-end md:block">
            <div className="ml-auto grid max-w-[420px] gap-3">
              <div className="border border-white/15 bg-white/10 p-5 backdrop-blur">
                <p className="text-sm font-semibold text-warm">Desde {business.foundedYear}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-white/80">
                  Medimos, fabricamos e instalamos nosotros. La misma gente que te atiende responde
                  si hay que ajustar algo después.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <HeroMetric value="30+" label="años de oficio" />
                <HeroMetric value="24-48h" label="respuesta habitual" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-6 px-5 py-8 sm:px-8 md:grid-cols-4">
          <Stat value="4.8/5" label={`+${business.rating.count} reseñas de Google`} />
          <Stat value="100%" label="Fabricación propia" />
          <Stat value="Torrox" label="Costa y alrededores" />
          <Stat value="A medida" label="Sin soluciones de catálogo" />
        </div>
      </section>

      <section id="servicios" className="bg-bg py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-accent">
                Servicios principales
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
                Lo que más se pide cuando una casa necesita funcionar mejor
              </h2>
            </div>
            <p className="max-w-[58ch] text-[15.5px] leading-relaxed text-muted md:justify-self-end">
              Ventanas que aíslan, terrazas que se aprovechan, baños que quedan limpios y exteriores
              preparados para el sol de la costa. Medimos el hueco, proponemos opciones y dejamos el
              trabajo instalado.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[14px] text-muted">
              También hacemos mosquiteras, rejas, enmarcado, reparaciones y vidrio a medida.
            </p>
            <Link
              href="/productos"
              className="inline-flex justify-center rounded-md border border-line bg-white px-6 py-3 text-[15px] font-semibold transition hover:border-accent hover:text-accent"
            >
              Ver catálogo completo
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="relative min-h-[420px] overflow-hidden rounded-md">
            <Image
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=78"
              alt="Taller de fabricación y montaje"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="self-center">
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-accent">
              Cómo trabajamos
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
              Oficio de taller, trato de barrio y medidas tomadas en serio
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-muted">
              {business.story.intro} No vendemos de más: si una reparación basta, lo decimos. Si
              hace falta fabricar, el presupuesto sale claro desde el principio.
            </p>
            <div className="mt-7 grid gap-4">
              <ProcessStep number="01" title="Visita y medición" text="Vemos el hueco, las necesidades reales y el acabado que encaja con la vivienda." />
              <ProcessStep number="02" title="Fabricación propia" text="Cortamos y montamos en taller para controlar medidas, perfilería y herrajes." />
              <ProcessStep number="03" title="Instalación y ajuste" text="Dejamos el trabajo instalado, probado y listo para usar sin perseguir a terceros." />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white sm:py-20">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="mb-9 max-w-[44ch]">
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-warm">
              Opiniones
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
              Clientes de la zona que ya nos han dejado entrar en casa
            </h2>
            <p className="mt-3 text-white/70">
              Reseñas verificadas y trato directo en Torrox Costa y alrededores.
            </p>
          </div>
          <div className="mb-9 flex flex-wrap items-center gap-3.5">
            <span className="text-lg text-warm">★★★★★</span>
            <b className="text-lg">{business.rating.value} / 5</b>
            <span className="text-sm text-white/60">
              basado en más de {business.rating.count} reseñas de Google
            </span>
          </div>
          <ReviewsCarousel reviews={reviews} />
        </div>
      </section>

      <section id="contacto" className="bg-accent text-white">
        <div className="mx-auto grid max-w-[1180px] gap-8 px-5 py-14 sm:px-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-white/70">
              Presupuesto sin compromiso
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold leading-tight">
              Cuéntanos qué hueco quieres cerrar, arreglar o mejorar
            </h2>
            <p className="mt-3 max-w-[58ch] text-[15.5px] leading-relaxed text-white/85">
              Te orientamos por teléfono o WhatsApp y, si hace falta, pasamos a medir.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener"
              className="rounded-md bg-white px-6 py-3.5 text-center text-[15px] font-semibold text-accent-dark"
            >
              Escribir por WhatsApp
            </a>
            <a
              href={`tel:${business.phone}`}
              className="rounded-md border border-white/55 px-6 py-3.5 text-center text-[15px] font-semibold hover:bg-white/10"
            >
              Llamar {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}

function HeroMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="border border-white/15 bg-white/10 p-5 backdrop-blur">
      <b className="block font-display text-3xl text-white">{value}</b>
      <span className="mt-1 block text-[13px] text-white/66">{label}</span>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-0">
      <b className="block font-display text-[27px] text-accent">{value}</b>
      <span className="block max-w-[16ch] text-[13.5px] leading-snug text-muted sm:max-w-none">
        {label}
      </span>
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group overflow-hidden rounded-md border border-line bg-white transition hover:-translate-y-1 hover:shadow-xl">
      <PhotoSlot label={service.photoLabel} src={service.photoUrl} className="aspect-[4/3]" />
      <div className="p-5">
        <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-accent">
          {service.tag}
        </p>
        <h3 className="mt-2 text-[17px] font-semibold leading-tight">{service.title}</h3>
        <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{service.shortDescription}</p>
        <Link
          href={`/productos#${service.slug}`}
          className="mt-4 inline-flex text-[13.5px] font-semibold text-accent group-hover:text-accent-dark"
        >
          Ver detalles
        </Link>
      </div>
    </article>
  );
}

function ProcessStep({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="grid grid-cols-[52px_1fr] gap-4 border-t border-line pt-4">
      <span className="font-display text-[22px] font-bold text-warm">{number}</span>
      <div>
        <h3 className="text-[16px] font-semibold">{title}</h3>
        <p className="mt-1 text-[14.5px] leading-relaxed text-muted">{text}</p>
      </div>
    </div>
  );
}

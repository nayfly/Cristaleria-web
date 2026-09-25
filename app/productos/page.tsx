import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CallFloat } from "@/components/CallFloat";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Reveal } from "@/components/Reveal";
import { business, services } from "@/lib/business";
import { gallerySections } from "@/lib/gallery";

// Cada servicio con su categoría de galería, para poder enlazar el catálogo con
// los trabajos ya hechos. Se deriva de lib/gallery.ts, así que si allí cambia un
// slug esto no se queda desincronizado.
const galeriaPorServicio: Record<string, string> = Object.fromEntries(
  gallerySections.map((s) => [s.serviceSlug, s.slug]),
);

export const metadata: Metadata = {
  title: "Cerramientos, toldos y mamparas",
  description:
    "Cerramientos de terraza, cortinas de vidrio, toldos, persianas, barandillas, mamparas, puertas, mosquiteras, cerrajería y enmarcado en Torrox Costa. Instalación propia.",
  alternates: { canonical: "/productos" },
};

export default function ProductosPage() {
  return (
    <>
      <Header active="productos" />

      <section className="border-b border-line bg-cream py-14 sm:py-16">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-accent">Servicios</p>
          <h1 className="mt-3 max-w-[16ch] font-display text-[40px] font-bold leading-[1.03] tracking-[-0.015em] text-ink sm:text-[56px]">
            Todo lo que hacemos en aluminio, PVC y cristal
          </h1>
          <p className="mt-4 max-w-[60ch] text-[15.5px] leading-relaxed text-muted">
            Instalación propia de principio a fin, fabricando a medida en nuestro taller lo que
            podemos. Pide presupuesto para cualquiera de estos trabajos y te respondemos rápido.
          </p>

          {/* Índice. La mayoría llega aquí desde Google buscando una cosa
              concreta: sin esto tiene que recorrerse las diez fichas para
              encontrarla. */}
          <nav aria-label="Índice de servicios" className="mt-8">
            {/* En móvil, una sola fila que se desliza: apilados ocupaban media
                pantalla antes de llegar al primer servicio. De sm en adelante
                caben en dos líneas y se ven todos de golpe. */}
            <ul className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
              {services.map((s) => (
                <li key={s.slug} className="flex-none">
                  <a
                    href={`#${s.slug}`}
                    className="inline-flex whitespace-nowrap rounded-full border border-line bg-white px-4 py-2 text-[13.5px] font-semibold text-ink transition hover:border-accent hover:text-accent"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* El catálogo deja de ser diez tarjetas iguales en rejilla y pasa a
          fichas numeradas con la foto grande, alternando lado. Mismo criterio
          que en la portada, y cada trabajo se ve de verdad. */}
      <section className="py-[72px]">
        <div className="mx-auto grid max-w-[1180px] gap-16 px-5 sm:gap-20 sm:px-8">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <article
                id={s.slug}
                className="grid scroll-mt-28 grid-cols-1 items-center gap-7 md:grid-cols-2 md:gap-12"
              >
                <div className={i % 2 === 1 ? "md:order-2" : undefined}>
                  <PhotoSlot
                    label={s.photoLabel}
                    src={s.photoUrl}
                    objectPosition={s.photoPosition}
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
                      {s.tag}
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-[30px] font-bold leading-[1.05] tracking-[-0.015em] text-ink sm:text-[38px]">
                    {s.title}
                  </h2>
                  <p className="mt-3 max-w-[46ch] text-[15.5px] leading-relaxed text-muted">
                    {s.description}
                  </p>
                  <ul className="mt-4 grid gap-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-[14.5px] text-muted">
                        <span
                          aria-hidden
                          className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-accent"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                  {/* Un solo botón por ficha: antes había dos en cada una, o
                      sea veinte en la página, y competían entre ellos. */}
                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <a
                      href={`tel:${business.phone}`}
                      className="inline-flex rounded-md bg-accent px-6 py-3.5 text-[14.5px] font-bold text-white transition hover:bg-accent-dark"
                    >
                      Pedir presupuesto
                    </a>
                    {galeriaPorServicio[s.slug] && (
                      <Link
                        href={`/galeria#${galeriaPorServicio[s.slug]}`}
                        className="text-[14px] font-bold text-accent transition hover:text-accent-dark"
                      >
                        Ver trabajos hechos →
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-[1132px] px-5 pb-[72px] sm:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-[20px] bg-tan p-8 sm:p-11">
            <div>
              <h2 className="font-display text-[28px] font-bold leading-[1.05] tracking-[-0.01em] text-ink sm:text-[34px]">
                ¿No ves tu trabajo en la lista?
              </h2>
              <p className="mt-1.5 text-[14px] text-muted">
                Seguro que también lo hacemos. Cuéntanos qué necesitas.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${business.phone}`}
                className="rounded-md bg-accent px-6 py-3.5 text-[14.5px] font-bold text-white transition hover:bg-accent-dark"
              >
                Llamar
              </a>
              <Link
                href="/contacto"
                className="rounded-md border-[1.5px] border-line bg-white px-6 py-3.5 text-[14.5px] font-bold text-ink transition hover:bg-cream"
              >
                Formulario
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      <Footer />
      <CallFloat />
    </>
  );
}

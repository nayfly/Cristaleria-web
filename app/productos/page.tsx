import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PhotoSlot } from "@/components/PhotoSlot";
import { business, services } from "@/lib/business";

export const metadata: Metadata = {
  title: "Servicios de carpintería, toldos y cristalería",
  description:
    "Catálogo completo: cerramientos de terraza, toldos y persianas, cortinas de vidrio panorámicas, barandillas de cristal, mamparas de baño, puertas acorazadas, protección de viviendas, mosquiteras y enmarcado de cuadros en Torrox Costa.",
  alternates: { canonical: "/productos" },
};

export default function ProductosPage() {
  return (
    <>
      <Header active="productos" />

      <section className="border-b border-line bg-cream py-11">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-accent">Servicios</p>
          <h1 className="mt-2.5 font-display text-[32px] font-bold leading-tight text-ink sm:text-[36px]">
            Todo lo que hacemos en aluminio, PVC y cristal
          </h1>
          <p className="mt-2 max-w-[60ch] text-[15.5px] leading-relaxed text-muted">
            Instalación propia de principio a fin, fabricando a medida en nuestro taller lo que
            podemos. Pide presupuesto para cualquiera de estos trabajos y te respondemos en 24–48h.
          </p>
        </div>
      </section>

      <section className="py-[52px]">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.slug}
                id={s.slug}
                className="flex scroll-mt-24 flex-col overflow-hidden rounded-md border border-line bg-white"
              >
                <PhotoSlot label={s.photoLabel} src={s.photoUrl} className="aspect-[4/3]" />
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-accent">
                    {s.tag}
                  </p>
                  <h3 className="mt-0.5 font-display text-[20px] text-ink">{s.title}</h3>
                  <p className="mb-2.5 mt-1 text-[13.5px] leading-[1.5] text-muted">
                    {s.description}
                  </p>
                  <ul className="mb-3.5 grid gap-1.5 text-[13px] leading-[1.6] text-muted">
                    {s.bullets.map((b) => (
                      <li key={b}>· {b}</li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap gap-2.5">
                    <a
                      href={business.whatsapp}
                      target="_blank"
                      rel="noopener"
                      className="rounded-md bg-accent px-4 py-2.5 text-[13px] font-bold text-white hover:bg-accent-dark"
                    >
                      WhatsApp
                    </a>
                    <a
                      href={`tel:${business.phone}`}
                      className="rounded-md border-[1.5px] border-line px-4 py-2.5 text-[13px] font-bold text-ink hover:bg-cream"
                    >
                      Llamar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1132px] px-5 pb-[52px] sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-[20px] bg-tan p-8 sm:p-11">
          <div>
            <h2 className="font-display text-[26px] font-bold text-ink">
              ¿No ves tu trabajo en la lista?
            </h2>
            <p className="mt-1.5 text-[14px] text-muted">
              Seguro que también lo hacemos. Cuéntanos qué necesitas.
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

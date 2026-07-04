import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PhotoSlot } from "@/components/PhotoSlot";
import { business, services } from "@/lib/business";

export const metadata: Metadata = {
  title: "Productos y servicios de carpintería, toldos y cristalería",
  description:
    "Catálogo completo: puertas acorazadas, toldos, persianas, cortinas de vidrio panorámicas, mamparas de baño, cerramientos de terrazas, mosquiteras y protección de viviendas en Torrox Costa.",
  alternates: { canonical: "/productos" },
};

export default function ProductosPage() {
  return (
    <>
      <Header active="productos" />

      <section className="border-b border-line bg-panel py-14">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-accent">Catálogo</p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-[40px]">
            Todos nuestros productos y servicios
          </h1>
          <p className="mt-2.5 max-w-[62ch] text-[16.5px] leading-relaxed text-muted">
            Fabricación propia e instalación de carpintería de aluminio, PVC, cristalería, toldos
            y sistemas de protección, a medida para tu hogar o negocio.
          </p>
        </div>
      </section>

      {services.map((s, i) => (
        <section
          key={s.slug}
          id={s.slug}
          className={`border-b border-line py-14 sm:py-16 ${i % 2 === 0 ? "bg-white" : "bg-panel"}`}
        >
          <div
            className={`mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-5 sm:px-8 md:grid-cols-2 md:gap-14 ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <PhotoSlot label={s.photoLabel} className="aspect-[4/3] rounded-2xl" />
            <div>
              <p className="text-[12.5px] font-bold uppercase tracking-wide text-muted">{s.tag}</p>
              <h2 className="mt-2.5 font-display text-[28px] font-bold leading-tight">{s.title}</h2>
              <p className="mt-3.5 text-[15px] leading-relaxed text-muted">{s.description}</p>
              <ul className="mt-4 grid gap-2.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-[14.5px] font-medium">
                    <span className="mt-1.5 h-[7px] w-[7px] flex-none rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href="/#contacto"
                className="mt-5 inline-flex rounded-lg bg-accent px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-accent-dark"
              >
                Pedir presupuesto
              </Link>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-gradient-to-r from-accent to-accent-dark py-14 text-white">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-7 px-5 sm:px-8">
          <div>
            <h2 className="font-display text-2xl font-bold">¿No encuentras lo que buscas?</h2>
            <p className="mt-1.5 text-[15px] text-white/85">
              Cuéntanos tu proyecto y te asesoramos sin compromiso.
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
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}

import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PhotoSlot } from "@/components/PhotoSlot";
import { business } from "@/lib/business";
import { galleryItems } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Galería de trabajos realizados",
  description:
    "Proyectos de carpintería de aluminio, PVC y cristalería realizados en Torrox Costa y la Costa del Sol: puertas, toldos, cerramientos, mamparas y más.",
  alternates: { canonical: "/galeria" },
};

export default function GaleriaPage() {
  return (
    <>
      <Header active="galeria" />

      <section className="border-b border-line bg-panel py-14">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-accent">Galería</p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-[40px]">
            Algunos trabajos que hemos hecho
          </h1>
          <p className="mt-2.5 max-w-[62ch] text-[16.5px] leading-relaxed text-muted">
            Una muestra de proyectos reales en hogares y negocios de la zona. Cada trabajo lleva
            nuestra fabricación e instalación de principio a fin.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <div
                key={item.slug}
                className="overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <PhotoSlot label={item.photoLabel} className="aspect-[4/3]" />
                <div className="p-5">
                  <p className="text-[12px] font-bold uppercase tracking-wide text-muted">
                    {item.tag}
                  </p>
                  <h3 className="mt-1 text-[15.5px] font-semibold leading-snug">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-accent to-accent-dark py-14 text-white">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-7 px-5 sm:px-8">
          <div>
            <h2 className="font-display text-2xl font-bold">¿Quieres algo parecido en tu casa?</h2>
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

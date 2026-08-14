import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CallFloat } from "@/components/CallFloat";
import { GalleryBrowser } from "@/components/GalleryBrowser";
import { business } from "@/lib/business";
import { gallerySections } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Galería de trabajos en aluminio",
  description:
    "Proyectos de carpintería de aluminio, PVC y cristalería realizados en Torrox Costa y la Costa del Sol: puertas, toldos, cerramientos, mamparas y más.",
  alternates: { canonical: "/galeria" },
};

export default function GaleriaPage() {
  return (
    <>
      <Header active="galeria" />

      <section className="border-b border-line bg-cream py-11">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-accent">Galería</p>
          <h1 className="mt-2.5 font-display text-[32px] font-bold leading-tight text-ink sm:text-[36px]">
            Algunos trabajos que hemos hecho
          </h1>
          <p className="mt-2 max-w-[60ch] text-[15.5px] leading-relaxed text-muted">
            Una muestra de proyectos reales en hogares y negocios de la zona. Cada trabajo lleva
            nuestra instalación de principio a fin, y fabricación propia cuando el trabajo lo permite.
          </p>
        </div>
      </section>

      <section className="py-[52px]">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <GalleryBrowser sections={gallerySections} />
        </div>
      </section>

      <div className="mx-auto max-w-[1132px] px-5 pb-[52px] sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-[20px] bg-tan p-8 sm:p-11">
          <div>
            <h2 className="font-display text-[26px] font-bold text-ink">
              ¿Quieres algo parecido en tu casa?
            </h2>
            <p className="mt-1.5 text-[14px] text-muted">
              Cuéntanos tu proyecto y te asesoramos sin compromiso.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${business.phone}`}
              className="rounded-md bg-accent px-6 py-3.5 text-[14.5px] font-bold text-white hover:bg-accent-dark"
            >
              Llamar
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <CallFloat />
    </>
  );
}

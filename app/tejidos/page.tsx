import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Tejidos para toldos",
  description:
    "Catálogo de tejidos y colores de nuestros proveedores de toldos en Torrox Costa. Próximamente disponible: mientras tanto, pregúntanos por WhatsApp.",
  alternates: { canonical: "/tejidos" },
};

export default function TejidosPage() {
  return (
    <>
      <Header active="tejidos" />

      <section className="border-b border-line bg-cream py-11">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-accent">Tejidos</p>
          <h1 className="mt-2.5 font-display text-[32px] font-bold leading-tight text-ink sm:text-[36px]">
            Tejidos y colores para tu toldo
          </h1>
          <p className="mt-2 max-w-[60ch] text-[15.5px] leading-relaxed text-muted">
            Para los toldos trabajamos con tejidos de proveedores especializados: distintos
            colores, texturas y niveles de protección solar según lo que necesites.
          </p>
        </div>
      </section>

      <section className="py-[52px]">
        <div className="mx-auto max-w-[820px] px-5 text-center sm:px-8">
          <div className="rounded-md border border-dashed border-line bg-white p-10">
            <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-muted">
              Catálogo en preparación
            </p>
            <h2 className="mx-auto mt-2.5 max-w-[32ch] font-display text-[22px] font-bold text-ink">
              Estamos subiendo aquí los tejidos de nuestros proveedores
            </h2>
            <p className="mx-auto mt-3 max-w-[52ch] text-[14.5px] leading-relaxed text-muted">
              Muy pronto podrás ver aquí los colores y texturas disponibles antes de pedir
              presupuesto. Mientras tanto, si buscas un tejido o color concreto, dínoslo y te lo
              confirmamos directamente.
            </p>
            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex rounded-md bg-wa px-6 py-3.5 text-[14.5px] font-bold text-ink2 hover:brightness-95"
            >
              Preguntar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}

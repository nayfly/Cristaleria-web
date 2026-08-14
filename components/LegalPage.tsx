import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { business } from "@/lib/business";

// Carcasa común de las tres páginas legales: mismo encabezado, mismo ancho de
// lectura y el mismo tratamiento tipográfico, para no repetirlo tres veces.
export function LegalPage({
  titulo,
  entradilla,
  children,
}: {
  titulo: string;
  entradilla: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header active="contacto" />

      <section className="border-b border-line bg-cream py-11">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-accent">Legal</p>
          <h1 className="mt-2.5 font-display text-[32px] font-bold leading-tight text-ink sm:text-[36px]">
            {titulo}
          </h1>
          <p className="mt-2 max-w-[60ch] text-[15.5px] leading-relaxed text-muted">{entradilla}</p>
        </div>
      </section>

      <section className="py-12 sm:py-[56px]">
        <div
          className={[
            "mx-auto max-w-[75ch] px-5 text-[15px] leading-[1.75] text-muted sm:px-8",
            "[&_h2]:mb-3 [&_h2]:mt-9 [&_h2]:font-display [&_h2]:text-[21px] [&_h2]:font-bold [&_h2]:text-ink first:[&_h2]:mt-0",
            "[&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-[16px] [&_h3]:font-bold [&_h3]:text-ink",
            "[&_p]:mb-3.5",
            "[&_ul]:mb-3.5 [&_ul]:grid [&_ul]:gap-2 [&_ul]:pl-5 [&_li]:list-disc",
            "[&_a]:font-semibold [&_a]:text-accent hover:[&_a]:text-accent-dark",
            "[&_dl]:mb-3.5 [&_dl]:grid [&_dl]:gap-1.5",
            "[&_dt]:font-bold [&_dt]:text-ink",
          ].join(" ")}
        >
          {children}

          <p className="mt-10 border-t border-line pt-5 text-[13.5px]">
            Última actualización: {business.legal.ultimaActualizacion}.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

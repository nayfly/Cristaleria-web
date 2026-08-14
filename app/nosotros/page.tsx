import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PhotoSlot } from "@/components/PhotoSlot";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Quiénes somos: 40 años en Torrox",
  description:
    "Negocio familiar en Torrox Costa desde 1986: instalación y fabricación propia de carpintería de aluminio, PVC y cristalería en toda la Axarquía.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <>
      <Header active="nosotros" />

      <section className="border-b border-line bg-cream py-11">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-accent">
            Desde {business.foundedYear}
          </p>
          <h1 className="mt-2.5 font-display text-[32px] font-bold leading-tight text-ink sm:text-[36px]">
            Quiénes somos
          </h1>
          <p className="mt-2 max-w-[60ch] text-[15.5px] leading-relaxed text-muted">
            {business.story.intro}
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-[56px]">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-9 px-5 sm:px-8 md:grid-cols-[1fr_1.1fr] md:gap-14">
          <PhotoSlot
            label="Nuestro taller de aluminio y cristalería en Torrox Costa"
            src="/images/gallery/tienda-taller.webp"
            sizes="(min-width: 768px) 45vw, 100vw"
            className="aspect-[5/4] rounded-2xl"
          />
          <div>
            <h2 className="font-display text-[28px] font-bold leading-tight text-ink">
              40 años en Torrox Costa
            </h2>
            <div className="mt-3.5 space-y-3 text-[15.5px] leading-[1.7] text-muted">
              {business.story.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink2 py-14 text-white sm:py-[56px]">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-warm">
            Cómo trabajamos
          </p>
          <h2 className="mt-2.5 max-w-[18ch] font-display text-[28px] font-bold leading-tight">
            Lo que puedes esperar de nosotros
          </h2>
          <div className="mt-[30px] grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
            {business.values.map((v) => (
              <div key={v.title} className="rounded-md border border-white/[0.14] bg-white/5 p-[22px]">
                <h3 className="mb-2 text-[16px] font-bold">{v.title}</h3>
                <p className="text-[13.5px] leading-[1.6] text-white/72">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1132px] px-5 py-[52px] sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-[20px] bg-tan p-8 sm:p-11">
          <div>
            <h2 className="font-display text-[26px] font-bold text-ink">¿Hablamos de tu proyecto?</h2>
            <p className="mt-1.5 text-[14px] text-muted">
              Pide presupuesto sin compromiso, te respondemos lo antes posible.
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
            <Link
              href="/contacto"
              className="rounded-md bg-accent px-6 py-3.5 text-[14.5px] font-bold text-white hover:bg-accent-dark"
            >
              Ir a contacto
            </Link>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}

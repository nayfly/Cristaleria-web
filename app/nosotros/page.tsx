import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { PhotoSlot } from "@/components/PhotoSlot";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description:
    "Conoce a Cristalería y Aluminios Torrox Costa: negocio familiar desde 1986, fabricación propia e instalación de carpintería de aluminio, PVC y cristalería en la Costa del Sol.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <>
      <Header active="nosotros" />

      <section className="border-b border-line bg-panel py-14">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-accent">
            Desde {business.foundedYear}
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-[40px]">
            Quiénes somos
          </h1>
          <p className="mt-2.5 max-w-[62ch] text-[16.5px] leading-relaxed text-muted">
            {business.story.intro}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-5 sm:px-8 md:grid-cols-2 md:gap-16">
          <PhotoSlot label="Foto del equipo o del taller" className="aspect-[5/4] rounded-2xl" />
          <div>
            <h2 className="font-display text-2xl font-bold leading-tight sm:text-3xl">
              Casi 40 años en Torrox Costa
            </h2>
            <div className="mt-4 space-y-3.5 text-[15.5px] leading-relaxed text-muted">
              {business.story.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white sm:py-20">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <div className="mb-11 max-w-[40ch]">
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-warm">
              Cómo trabajamos
            </p>
            <h2 className="mt-2.5 font-display text-3xl font-bold leading-tight">
              Lo que puedes esperar de nosotros
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {business.values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-2 text-[16px] font-semibold">{v.title}</h3>
                <p className="text-[14px] leading-relaxed text-white/75">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-accent to-accent-dark py-14 text-white">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-7 px-5 sm:px-8">
          <div>
            <h2 className="font-display text-2xl font-bold">¿Hablamos de tu proyecto?</h2>
            <p className="mt-1.5 text-[15px] text-white/85">
              Pide presupuesto sin compromiso, te respondemos en el mismo día.
            </p>
          </div>
          <Link
            href="/contacto"
            className="rounded-lg bg-white px-6 py-3.5 text-[15px] font-semibold text-accent-dark"
          >
            Ir a contacto
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}

import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ContactForm } from "@/components/ContactForm";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Pide presupuesto sin compromiso a Cristalería y Aluminios Torrox Costa. Teléfono, WhatsApp, email, dirección y horario en Torrox Costa, Málaga.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  const mapSrc = `https://www.google.com/maps?q=${business.geo.lat},${business.geo.lng}&z=16&output=embed`;

  return (
    <>
      <Header active="contacto" />

      <section className="border-b border-line bg-panel py-14">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-accent">Contacto</p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-[40px]">
            Hablemos de tu proyecto
          </h1>
          <p className="mt-2.5 max-w-[62ch] text-[16.5px] leading-relaxed text-muted">
            Escríbenos, llama o pásate por el taller. Te respondemos el mismo día.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 px-5 sm:px-8 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <div>
            <h2 className="mb-5 font-display text-2xl font-bold">Cuéntanos qué necesitas</h2>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-line bg-white p-6">
              <h3 className="mb-3.5 text-[13.5px] font-bold uppercase tracking-wide text-muted">
                Datos de contacto
              </h3>
              <ul className="grid gap-2.5 text-[15px] leading-relaxed">
                <li>
                  <a href={`tel:${business.phone}`} className="font-semibold hover:text-accent">
                    {business.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${business.email}`} className="font-semibold hover:text-accent">
                    {business.email}
                  </a>
                </li>
                <li className="text-muted">
                  {business.address.street}, {business.address.postalCode}{" "}
                  {business.address.locality} ({business.address.region})
                </li>
                <li className="text-muted">{business.hours.display}</li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                src={mapSrc}
                title="Ubicación en el mapa"
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}

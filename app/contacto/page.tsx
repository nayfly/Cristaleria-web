import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ContactForm } from "@/components/ContactForm";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contacto y presupuesto",
  description:
    "Pide presupuesto sin compromiso a Cristalería y Aluminios Torrox Costa. Teléfono, WhatsApp, email, dirección y horario en Torrox Costa, Málaga.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  const mapSrc = `https://www.google.com/maps?q=${business.geo.lat},${business.geo.lng}&z=16&output=embed`;

  return (
    <>
      <Header active="contacto" />

      <section className="border-b border-line bg-cream py-11">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-accent">Contacto</p>
          <h1 className="mt-2.5 font-display text-[32px] font-bold leading-tight text-ink sm:text-[36px]">
            Hablemos de tu proyecto
          </h1>
          <p className="mt-2 max-w-[60ch] text-[15.5px] leading-relaxed text-muted">
            Escríbenos, llama o pásate por el taller. Te respondemos lo antes posible.
          </p>
          <div className="mt-[22px] flex flex-wrap gap-3">
            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener"
              className="rounded-md bg-wa px-6 py-3.5 text-[14.5px] font-bold text-ink2 hover:brightness-95"
            >
              WhatsApp ahora
            </a>
            <a
              href={`tel:${business.phone}`}
              className="rounded-md bg-accent px-6 py-3.5 text-[14.5px] font-bold text-white hover:bg-accent-dark"
            >
              Llamar {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-[56px]">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 px-5 sm:px-8 md:grid-cols-[1.1fr_1fr] md:gap-14">
          <div>
            <h2 className="mb-[18px] font-display text-[23px] font-bold text-ink">
              Cuéntanos qué necesitas
            </h2>
            <ContactForm />
          </div>

          <div>
            <div className="mb-5 rounded-2xl border border-line bg-cream p-6">
              <h3 className="mb-3.5 text-[12.5px] font-bold uppercase tracking-[0.06em] text-muted">
                Datos de contacto
              </h3>
              <ul className="grid gap-2.5 text-[15px] leading-relaxed">
                <li>
                  <a href={`tel:${business.phone}`} className="font-bold text-ink hover:text-accent">
                    {business.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${business.email}`} className="hover:text-accent">
                    {business.email}
                  </a>
                </li>
                <li>
                  {business.address.street}, {business.address.postalCode}{" "}
                  {business.address.locality} ({business.address.region})
                </li>
                <li>{business.hours.display}</li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                src={mapSrc}
                title="Ubicación en el mapa"
                width="100%"
                height="300"
                style={{ border: 0, display: "block" }}
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

"use client";

import { useState } from "react";
import { business, services } from "@/lib/business";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(services[0]?.title ?? "Otro");
  const [message, setMessage] = useState("");

  function buildText() {
    const lines = [
      `Hola, soy ${name || "..."}.`,
      phone ? `Mi teléfono: ${phone}.` : "",
      email ? `Mi email: ${email}.` : "",
      `Qué necesito: ${service}.`,
      message,
    ].filter(Boolean);
    return lines.join("\n");
  }

  function handleWhatsApp(e: React.FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(buildText());
    window.open(`${business.whatsapp}?text=${text}`, "_blank", "noopener");
  }

  function handleEmail() {
    const subject = encodeURIComponent(`Presupuesto — ${name || "consulta desde la web"}`);
    const body = encodeURIComponent(buildText());
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
  }

  const fieldClass =
    "rounded-md border border-line bg-white px-3.5 py-3 text-[14.5px] outline-none focus:border-accent focus:outline focus:outline-2 focus:outline-accent/40";

  return (
    <form className="grid gap-4" onSubmit={handleWhatsApp}>
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor="name" className="text-[13px] font-bold text-ink">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            className={fieldClass}
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="phone" className="text-[13px] font-bold text-ink">
            Teléfono
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="683 00 00 00"
            className={fieldClass}
          />
        </div>
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="email" className="text-[13px] font-bold text-ink">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tucorreo@ejemplo.com"
          className={fieldClass}
        />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="service" className="text-[13px] font-bold text-ink">
          ¿Qué necesitas?
        </label>
        <select
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={fieldClass}
        >
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Otro">Otro</option>
        </select>
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="message" className="text-[13px] font-bold text-ink">
          Cuéntanos tu proyecto
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder="Medidas, ubicación, cuándo lo necesitas..."
          required
          className={`resize-y ${fieldClass}`}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-accent px-6 py-3.5 text-[15px] font-bold text-white hover:bg-accent-dark"
      >
        Enviar solicitud
      </button>
      <button
        type="button"
        onClick={handleEmail}
        className="text-center text-[13.5px] font-semibold text-accent hover:text-accent-dark"
      >
        o envíalo por email
      </button>
    </form>
  );
}

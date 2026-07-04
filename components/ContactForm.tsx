"use client";

import { useState } from "react";
import { business } from "@/lib/business";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function buildText() {
    const lines = [
      `Hola, soy ${name || "..."}.`,
      phone ? `Mi teléfono: ${phone}.` : "",
      message,
    ].filter(Boolean);
    return lines.join("\n");
  }

  function handleWhatsApp(e: React.FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(buildText());
    window.open(`${business.whatsapp}?text=${text}`, "_blank", "noopener");
  }

  function handleEmail(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Presupuesto — ${name || "consulta desde la web"}`);
    const body = encodeURIComponent(buildText());
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="grid gap-4" onSubmit={handleWhatsApp}>
      <div className="grid gap-1.5">
        <label htmlFor="name" className="text-[13.5px] font-semibold">
          Tu nombre
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre y apellidos"
          className="rounded-lg border border-line bg-white px-4 py-3 text-[15px] outline-none focus:border-accent"
        />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="phone" className="text-[13.5px] font-semibold">
          Teléfono
        </label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Para poder llamarte"
          className="rounded-lg border border-line bg-white px-4 py-3 text-[15px] outline-none focus:border-accent"
        />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="message" className="text-[13.5px] font-semibold">
          Cuéntanos tu proyecto
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder="Qué necesitas, medidas aproximadas, dirección..."
          required
          className="resize-none rounded-lg border border-line bg-white px-4 py-3 text-[15px] outline-none focus:border-accent"
        />
      </div>
      <div className="flex flex-wrap gap-3.5">
        <button
          type="submit"
          className="rounded-lg bg-[#25D366] px-6 py-3.5 text-[15px] font-semibold text-white hover:brightness-95"
        >
          Enviar por WhatsApp
        </button>
        <button
          type="button"
          onClick={handleEmail}
          className="rounded-lg border border-line px-6 py-3.5 text-[15px] font-semibold text-ink hover:bg-panel"
        >
          Enviar por email
        </button>
      </div>
    </form>
  );
}

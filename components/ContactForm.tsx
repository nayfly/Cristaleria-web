"use client";

import { useState } from "react";
import { business, services } from "@/lib/business";

type Estado = "listo" | "enviando" | "enviado" | "error";

export function ContactForm({ envioActivo }: { envioActivo: boolean }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(services[0]?.title ?? "Otro");
  const [message, setMessage] = useState("");
  const [web, setWeb] = useState(""); // trampa para bots, invisible
  const [estado, setEstado] = useState<Estado>("listo");

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

  // Salida de emergencia: abre el programa de correo del visitante con el
  // mensaje ya escrito. Es lo que hacía la web antes de tener servidor, y
  // sigue siendo la red de seguridad si el envío falla.
  function abrirCorreo() {
    const subject = encodeURIComponent(`Presupuesto — ${name || "consulta desde la web"}`);
    const body = encodeURIComponent(buildText());
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (estado === "enviando") return;

    if (!envioActivo) {
      abrirCorreo();
      return;
    }

    setEstado("enviando");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: name,
          telefono: phone,
          email,
          servicio: service,
          mensaje: message,
          web,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setEstado("enviado");
    } catch {
      setEstado("error");
    }
  }

  const fieldClass =
    "rounded-md border border-line bg-white px-3.5 py-3 text-[14.5px] outline-none focus:border-accent focus:outline focus:outline-2 focus:outline-accent/40";

  if (estado === "enviado") {
    return (
      <div className="rounded-md border border-line bg-white p-6 text-center">
        <p className="font-display text-[22px] font-bold text-ink">Mensaje enviado</p>
        <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
          Gracias, {name || "gracias por escribirnos"}. Te contestaremos lo antes posible al
          {phone && email ? " teléfono o correo que nos has dejado" : " contacto que nos has dejado"}.
        </p>
        <p className="mt-4 text-[13.5px] text-muted">
          ¿Prefieres no esperar?{" "}
          <a
            href={`tel:${business.phone}`}
            className="font-bold text-accent hover:text-accent-dark"
          >
            Llámanos al {business.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
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
            autoComplete="name"
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
            autoComplete="tel"
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
          autoComplete="email"
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

      {/* Trampa para bots: fuera de pantalla y fuera del recorrido del
          tabulador. Si viene rellena, el mensaje se descarta. */}
      <div className="absolute left-[-9999px]" aria-hidden>
        <label htmlFor="web">No rellenes este campo</label>
        <input
          id="web"
          type="text"
          value={web}
          onChange={(e) => setWeb(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        disabled={estado === "enviando"}
        className="w-full rounded-md bg-accent px-6 py-3.5 text-[15px] font-bold text-white hover:bg-accent-dark disabled:opacity-60"
      >
        {estado === "enviando" ? "Enviando…" : "Enviar solicitud"}
      </button>

      {estado === "error" && (
        <div className="rounded-md border border-accent/40 bg-accent/5 p-3.5 text-center text-[13.5px] leading-relaxed text-ink">
          No hemos podido enviar el mensaje. Prueba otra vez, o{" "}
          <button
            type="button"
            onClick={abrirCorreo}
            className="font-bold text-accent underline hover:text-accent-dark"
          >
            envíalo desde tu correo
          </button>{" "}
          o llámanos al{" "}
          <a href={`tel:${business.phone}`} className="font-bold text-accent hover:text-accent-dark">
            {business.phoneDisplay}
          </a>
          .
        </div>
      )}

      <p className="text-center text-[12.5px] leading-[1.5] text-muted">
        {envioActivo ? (
          <>
            Solo usamos tus datos para responderte. Más detalle en la{" "}
            <a href="/privacidad" className="font-bold text-accent hover:text-accent-dark">
              política de privacidad
            </a>
            .
          </>
        ) : (
          <>
            Se abrirá tu programa de correo con el mensaje ya escrito. Si prefieres llamar,{" "}
            <a
              href={`tel:${business.phone}`}
              className="font-bold text-accent hover:text-accent-dark"
            >
              {business.phoneDisplay}
            </a>
            .
          </>
        )}
      </p>
    </form>
  );
}

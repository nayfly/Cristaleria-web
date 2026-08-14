"use client";

import { useState } from "react";
import { business } from "@/lib/business";

// El iframe de Google Maps deja cookies de Google en cuanto se carga, y eso
// obligaría a montar un banner de consentimiento para toda la web. Cargándolo
// solo cuando el visitante lo pide, la web no instala ninguna cookie y el aviso
// se queda en una frase. De paso ahorra media docena de peticiones a quien solo
// venía a ver el teléfono.
export function MapEmbed() {
  const [cargado, setCargado] = useState(false);

  if (cargado) {
    return (
      <iframe
        src={`https://www.google.com/maps?q=${business.geo.lat},${business.geo.lng}&z=16&output=embed`}
        title="Ubicación del taller en el mapa"
        width="100%"
        height="300"
        style={{ border: 0, display: "block" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div
      className="flex h-[300px] flex-col items-center justify-center gap-3 bg-cream px-5 text-center"
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(0,0,0,.04) 0 2px, transparent 2px 14px)",
      }}
    >
      <p className="text-[14px] font-bold text-ink">
        {business.address.street}, {business.address.locality}
      </p>
      <button
        type="button"
        onClick={() => setCargado(true)}
        className="rounded-md bg-accent px-5 py-2.5 text-[13.5px] font-bold text-white hover:bg-accent-dark"
      >
        Ver el mapa
      </button>
      <p className="max-w-[38ch] text-[12px] leading-[1.5] text-muted">
        El mapa lo carga Google. Al abrirlo, Google podrá instalar sus cookies.
      </p>
      <a
        href={business.googleMapsUrl}
        target="_blank"
        rel="noopener"
        className="text-[12.5px] font-bold text-accent hover:text-accent-dark"
      >
        O ábrelo en Google Maps →
      </a>
    </div>
  );
}

import { NextResponse } from "next/server";
import { business } from "@/lib/business";

// Recibe el formulario de contacto y lo manda por correo con Resend.
//
// Se habla con la API por fetch en vez de con su SDK: son dos campos y una
// cabecera, y así el proyecto no gana una dependencia que actualizar.
//
// Variables de entorno:
//   RESEND_API_KEY      obligatoria; sin ella la ruta responde 503 y el
//                       formulario vuelve solo al mailto de siempre
//   CONTACT_TO_EMAIL    destino (por defecto, el correo del negocio)
//   CONTACT_FROM_EMAIL  remitente; hasta verificar el dominio en Resend hay
//                       que dejar el suyo de pruebas

export const runtime = "nodejs";

const LIMITES = {
  nombre: 100,
  telefono: 40,
  email: 120,
  servicio: 120,
  mensaje: 4000,
} as const;

type Campos = Record<keyof typeof LIMITES, string>;

function limpiar(valor: unknown, max: number): string {
  if (typeof valor !== "string") return "";
  // Fuera saltos de línea en los campos de una línea y espacios de relleno.
  return valor.replace(/\r/g, "").trim().slice(0, max);
}

export async function POST(request: Request) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return NextResponse.json({ error: "no_configurado" }, { status: 503 });
  }

  let cuerpo: unknown;
  try {
    cuerpo = await request.json();
  } catch {
    return NextResponse.json({ error: "json_invalido" }, { status: 400 });
  }

  const datos = (cuerpo ?? {}) as Record<string, unknown>;

  // Trampa para bots: es un campo oculto que una persona nunca rellena. Se
  // responde 200 a propósito, para que el bot lo dé por bueno y no reintente.
  if (limpiar(datos.web, 200)) {
    return NextResponse.json({ ok: true });
  }

  const campos = Object.fromEntries(
    (Object.keys(LIMITES) as (keyof typeof LIMITES)[]).map((k) => [k, limpiar(datos[k], LIMITES[k])]),
  ) as Campos;

  if (!campos.mensaje) {
    return NextResponse.json({ error: "falta_mensaje" }, { status: 400 });
  }
  if (!campos.telefono && !campos.email) {
    return NextResponse.json({ error: "falta_contacto" }, { status: 400 });
  }
  if (campos.email && !/^[^@\s]+@[^@\s.]+\.[^@\s]+$/.test(campos.email)) {
    return NextResponse.json({ error: "email_invalido" }, { status: 400 });
  }

  const texto = [
    `Nombre:    ${campos.nombre || "(no indicado)"}`,
    `Teléfono:  ${campos.telefono || "(no indicado)"}`,
    `Email:     ${campos.email || "(no indicado)"}`,
    `Servicio:  ${campos.servicio || "(no indicado)"}`,
    "",
    campos.mensaje,
    "",
    "—",
    `Enviado desde el formulario de ${business.siteUrl}`,
  ].join("\n");

  try {
    const respuesta = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Web Cristalería <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO_EMAIL || business.email],
        // Así, al dar a responder en el correo, se le contesta al cliente.
        reply_to: campos.email || undefined,
        subject: `Presupuesto web — ${campos.nombre || "consulta"}`,
        text: texto,
      }),
    });

    if (!respuesta.ok) {
      console.error(`Resend respondió ${respuesta.status}: ${await respuesta.text()}`);
      return NextResponse.json({ error: "envio_fallido" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("No se pudo enviar el formulario:", error);
    return NextResponse.json({ error: "envio_fallido" }, { status: 502 });
  }
}

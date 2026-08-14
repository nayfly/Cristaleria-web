import { business } from "@/lib/business";

// Sustituye al antiguo botón flotante de WhatsApp. El negocio prefiere que le
// llamen o le escriban un correo, así que el acceso rápido desde el móvil pasa
// a ser el teléfono.
export function CallFloat() {
  return (
    <a
      href={`tel:${business.phone}`}
      aria-label={`Llamar al ${business.phoneDisplay}`}
      className="fixed bottom-[22px] right-[22px] z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-accent text-[24px] text-white shadow-lg hover:bg-accent-dark"
    >
      <span aria-hidden>📞</span>
    </a>
  );
}

import { business } from "@/lib/business";

export function WhatsAppFloat() {
  return (
    <a
      href={business.whatsapp}
      target="_blank"
      rel="noopener"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-lg"
    >
      ☎
    </a>
  );
}

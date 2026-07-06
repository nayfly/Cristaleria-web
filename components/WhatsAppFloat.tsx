import { business } from "@/lib/business";

export function WhatsAppFloat() {
  return (
    <a
      href={business.whatsapp}
      target="_blank"
      rel="noopener"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-[22px] right-[22px] z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-wa text-[26px] text-ink2 shadow-lg"
    >
      💬
    </a>
  );
}

// Marcador de foto. Si se pasa `src` (foto de stock provisional o real),
// se muestra la imagen; si no, se muestra el marcador 📷 para rellenar luego.

import Image from "next/image";

export function PhotoSlot({
  label,
  className = "",
  src,
}: {
  label: string;
  className?: string;
  src?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={src} alt={label} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center border border-dashed border-line bg-panel px-3 text-center text-xs leading-relaxed text-muted ${className}`}
      role="img"
      aria-label={label}
    >
      📷 {label}
    </div>
  );
}

import Image from "next/image";

export function PhotoSlot({
  label,
  className = "",
  src,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false,
  imgClassName = "",
  objectPosition,
}: {
  label: string;
  className?: string;
  src?: string;
  sizes?: string;
  priority?: boolean;
  /** Clases extra sobre la propia imagen, para efectos como el zoom del hero. */
  imgClassName?: string;
  /** Punto de la foto que se conserva al recortar, p. ej. "50% 30%". Sirve
      cuando lo importante está arriba y el recorte centrado se lo come. */
  objectPosition?: string;
}) {
  if (src?.startsWith("/")) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={label}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${imgClassName}`}
          style={objectPosition ? { objectPosition } : undefined}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-[#e7ebee] px-5 text-center ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(0,0,0,.05) 0 2px, transparent 2px 14px)",
      }}
      role="img"
      aria-label={label}
    >
      <span className="relative text-[11px] font-semibold uppercase tracking-[0.08em] text-black/45">
        {label}
      </span>
    </div>
  );
}

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
  if (src?.startsWith("/")) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={label}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center border border-dashed border-line bg-panel px-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-muted ${className}`}
      role="img"
      aria-label={label}
    >
      Foto pendiente: {label}
    </div>
  );
}

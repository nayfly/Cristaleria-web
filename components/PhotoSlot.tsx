import Image from "next/image";

export function PhotoSlot({
  label,
  className = "",
  src,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false,
}: {
  label: string;
  className?: string;
  src?: string;
  sizes?: string;
  priority?: boolean;
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
          className="object-cover"
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

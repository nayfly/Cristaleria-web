// Marcador de foto. Sustituir por <Image src="/fotos/xxx.jpg" alt="..." fill />
// (con la imagen real en /public/fotos/) cuando Robert/el cliente suban el material.
// Se deja como componente aparte para que el cambio a fotos reales sea un
// find-and-replace de una línea por cada sitio donde se usa.

export function PhotoSlot({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
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

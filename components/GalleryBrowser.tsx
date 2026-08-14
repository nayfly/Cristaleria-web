"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { GallerySection } from "@/lib/gallery";

export function GalleryBrowser({ sections }: { sections: GallerySection[] }) {
  const [filtro, setFiltro] = useState<string>("todos");
  // Índice dentro de la lista plana de fotos visibles. Al cambiar de filtro se
  // pone a null, así que nunca queda apuntando a una lista que ya no existe.
  const [abierta, setAbierta] = useState<number | null>(null);

  // Permite llegar de fuera a una categoría concreta: /galeria#mamparas-bano
  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.replace("#", ""));
    if (hash && sections.some((s) => s.slug === hash)) setFiltro(hash);
  }, [sections]);

  const visibles = useMemo(
    () => (filtro === "todos" ? sections : sections.filter((s) => s.slug === filtro)),
    [filtro, sections],
  );

  // Lista plana de lo que se está viendo: es por donde navegan las flechas del
  // visor, para que recorra lo mismo que el visitante tiene delante.
  const planas = useMemo(
    () => visibles.flatMap((s) => s.items.map((item) => ({ item, seccion: s }))),
    [visibles],
  );

  const mover = useCallback(
    (paso: number) => {
      setAbierta((actual) => {
        if (actual === null || planas.length === 0) return actual;
        return (actual + paso + planas.length) % planas.length;
      });
    },
    [planas.length],
  );

  const cerrar = useCallback(() => setAbierta(null), []);

  // Teclado y bloqueo del scroll de fondo mientras el visor está abierto.
  useEffect(() => {
    if (abierta === null) return;

    function alPulsar(e: KeyboardEvent) {
      if (e.key === "Escape") cerrar();
      if (e.key === "ArrowRight") mover(1);
      if (e.key === "ArrowLeft") mover(-1);
    }

    const scrollPrevio = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", alPulsar);
    return () => {
      document.body.style.overflow = scrollPrevio;
      window.removeEventListener("keydown", alPulsar);
    };
  }, [abierta, cerrar, mover]);

  function cambiarFiltro(slug: string) {
    setFiltro(slug);
    setAbierta(null);
    // replaceState y no el hash directo: así la URL queda compartible pero la
    // página no pega un salto al ancla.
    const url = slug === "todos" ? window.location.pathname : `#${slug}`;
    window.history.replaceState(null, "", url);
  }

  const foto = abierta !== null ? planas[abierta] : null;

  return (
    <>
      {/* FILTROS */}
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar por tipo de trabajo">
        <Chip activo={filtro === "todos"} onClick={() => cambiarFiltro("todos")}>
          Todos
        </Chip>
        {sections.map((s) => (
          <Chip key={s.slug} activo={filtro === s.slug} onClick={() => cambiarFiltro(s.slug)}>
            {s.title}
          </Chip>
        ))}
      </div>

      <div className="grid gap-12">
        {visibles.map((section) => (
          <section key={section.slug} id={section.slug} className="scroll-mt-28">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div className="max-w-[66ch]">
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-accent">
                  {section.tag}
                </p>
                <h2 className="mt-1 font-display text-[24px] font-bold leading-tight text-ink">
                  {section.title}
                </h2>
                <p className="mt-1.5 text-[14px] leading-relaxed text-muted">
                  {section.description}
                </p>
              </div>
              <Link
                href={`/productos#${section.serviceSlug}`}
                className="text-[13.5px] font-bold text-accent hover:text-accent-dark"
              >
                Ver el servicio →
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => {
                const indice = planas.findIndex(
                  (f) => f.seccion.slug === section.slug && f.item.slug === item.slug,
                );
                return (
                  <button
                    key={item.slug}
                    type="button"
                    onClick={() => setAbierta(indice)}
                    aria-label={`Ampliar: ${item.photoLabel}`}
                    className="group overflow-hidden rounded-md border border-line bg-white text-left transition hover:-translate-y-[3px] hover:shadow-md"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.photoUrl}
                        alt={item.photoLabel}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition duration-300 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-[15.5px] font-bold text-ink">{item.title}</h3>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* VISOR */}
      {foto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={foto.item.photoLabel}
          onClick={cerrar}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink2/95 p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={cerrar}
            aria-label="Cerrar"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[22px] text-white hover:bg-white/20"
          >
            <span aria-hidden>×</span>
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative h-[70vh] w-full max-w-[1100px]"
          >
            <Image
              src={foto.item.photoUrl}
              alt={foto.item.photoLabel}
              fill
              sizes="(min-width: 1100px) 1100px, 100vw"
              className="object-contain"
              priority
            />
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            className="mt-4 flex w-full max-w-[1100px] flex-wrap items-center justify-center gap-4 text-white sm:justify-between"
          >
            <div className="order-2 text-center sm:order-1 sm:text-left">
              <p className="text-[15px] font-bold">{foto.item.title}</p>
              <p className="text-[13px] text-white/70">
                {foto.seccion.title} · {(abierta ?? 0) + 1} de {planas.length}
              </p>
            </div>
            <div className="order-1 flex gap-2.5 sm:order-2">
              <button
                type="button"
                onClick={() => mover(-1)}
                aria-label="Foto anterior"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <span aria-hidden>←</span>
              </button>
              <button
                type="button"
                onClick={() => mover(1)}
                aria-label="Foto siguiente"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <span aria-hidden>→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Chip({
  activo,
  onClick,
  children,
}: {
  activo: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={activo}
      className={`rounded-full border px-4 py-2 text-[13.5px] font-bold transition ${
        activo
          ? "border-accent bg-accent text-white"
          : "border-line bg-white text-ink hover:border-accent hover:text-accent"
      }`}
    >
      {children}
    </button>
  );
}

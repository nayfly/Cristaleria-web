"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Envuelve un bloque para que aparezca deslizándose cuando entra en pantalla.
 *
 * El estado inicial (oculto) vive en CSS, en `.reveal` de globals.css, para que
 * no haya un parpadeo entre el HTML del servidor y la hidratación. Aquí solo se
 * añade `.is-visible` cuando el observador lo ve, y se deja de observar: la
 * animación ocurre una vez y no se repite al subir y bajar, que cansa.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  /** Retardo en milisegundos, para escalonar varios elementos seguidos. */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Si el navegador no lo soporta, se muestra sin más.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      // Se dispara un poco antes de que el bloque llegue al centro, para que al
      // llegar leyendo ya esté colocado.
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

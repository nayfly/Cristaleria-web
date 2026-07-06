"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Review = {
  text: string;
  who: string;
  date: string;
  rating?: number;
};

export function ReviewsCarousel({
  reviews,
  rating,
  count,
  url,
}: {
  reviews: Review[];
  rating: number;
  count: number;
  url: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused || reviews.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length);
    }, 6500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, reviews.length]);

  function goTo(i: number) {
    setIndex((i + reviews.length) % reviews.length);
  }

  const visibleReviews = useMemo(
    () => [0, 1, 2].map((offset) => reviews[(index + offset) % reviews.length]),
    [index, reviews],
  );

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]"
    >
      <aside className="rounded-md border border-white/10 bg-white/5 p-6 sm:p-8">
        <div className="inline-flex rounded-full bg-white px-3 py-1 text-[12px] font-bold text-ink">
          Google reviews
        </div>
        <div className="mt-6 flex items-end gap-3">
          <b className="font-display text-5xl text-white">{rating}</b>
          <span className="pb-2 text-lg text-warm">★★★★★</span>
        </div>
        <p className="mt-2 text-sm text-white/65">Basado en más de {count} reseñas públicas.</p>
        <a
          href={url}
          target="_blank"
          rel="noopener"
          className="mt-6 inline-flex rounded-md border border-white/30 px-5 py-3 text-[14px] font-semibold text-white transition hover:bg-white/10"
        >
          Ver reseñas en Google
        </a>
      </aside>

      <div className="relative min-w-0">
        <div className="grid gap-4 md:grid-cols-3">
          {visibleReviews.map((review, cardIndex) => (
            <article
              key={`${review.who}-${review.date}`}
              className={`rounded-md border border-white/10 bg-white p-5 text-ink shadow-lg ${
                cardIndex > 0 ? "hidden md:block" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <b className="block text-[15px] leading-tight">{review.who}</b>
                  <span className="mt-1 block text-[12.5px] text-muted">{review.date}</span>
                </div>
                <span className="rounded-full bg-panel px-2 py-1 text-[11px] font-bold text-accent">
                  Google
                </span>
              </div>
              <div className="mt-4 text-sm text-warm">{"★".repeat(review.rating ?? 5)}</div>
              <p className="mt-3 min-h-[120px] text-[14.5px] leading-relaxed text-muted">
                “{review.text}”
              </p>
            </article>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="flex gap-2">
            {reviews.map((r, i) => (
              <button
                key={`${r.who}-${i}`}
                type="button"
                aria-label={`Ir a la reseña ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === index ? "bg-warm" : "bg-white/25 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Reseña anterior"
              onClick={() => goTo(index - 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10"
            >
              <span aria-hidden>←</span>
            </button>
            <button
              type="button"
              aria-label="Siguiente reseña"
              onClick={() => goTo(index + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10"
            >
              <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

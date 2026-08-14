"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { SiteReview } from "@/lib/google-reviews";

export function ReviewsCarousel({ reviews, url }: { reviews: SiteReview[]; url: string }) {
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
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="grid gap-[18px] md:grid-cols-3">
        {visibleReviews.map((review, cardIndex) => (
          <article
            key={`${review.who}-${review.date}`}
            className={`rounded-md border border-line bg-white p-5 ${
              cardIndex > 0 ? "hidden md:block" : ""
            }`}
          >
            <p className="mb-2 text-sm text-accent">{"★".repeat(Math.round(review.rating ?? 5))}</p>
            <p className="text-[13.5px] leading-[1.55] text-[#3a3226]">“{review.text}”</p>
            <div className="mt-3 flex items-center gap-2.5">
              {review.photoUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={review.photoUrl}
                  alt=""
                  width={28}
                  height={28}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-7 w-7 flex-none rounded-full object-cover"
                />
              )}
              <div className="min-w-0">
                <b className="block truncate text-[12.5px] text-ink">{review.who}</b>
                {review.date && (
                  <span className="block text-[11.5px] text-muted">{review.date}</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-5">
        {/* Con pocas reseñas los puntos orientan; pasada la decena se
            convierten en una fila de confeti que no dice nada. */}
        {reviews.length <= 8 ? (
          <div className="flex gap-2">
            {reviews.map((r, i) => (
              <button
                key={`${r.who}-${i}`}
                type="button"
                aria-label={`Ir a la reseña ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === index ? "bg-accent" : "bg-line hover:bg-muted/40"
                }`}
              />
            ))}
          </div>
        ) : (
          <p
            aria-live="polite"
            className="text-[13px] font-bold tabular-nums text-muted"
          >
            <span className="text-ink">{index + 1}</span> / {reviews.length}
          </p>
        )}
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Reseña anterior"
            onClick={() => goTo(index - 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink hover:bg-cream"
          >
            <span aria-hidden>←</span>
          </button>
          <button
            type="button"
            aria-label="Siguiente reseña"
            onClick={() => goTo(index + 1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink hover:bg-cream"
          >
            <span aria-hidden>→</span>
          </button>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener"
          className="text-[13.5px] font-bold text-accent hover:text-accent-dark"
        >
          Ver reseñas en Google →
        </a>
      </div>
    </div>
  );
}

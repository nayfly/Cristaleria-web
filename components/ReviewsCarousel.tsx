"use client";

import { useEffect, useRef, useState } from "react";

type Review = {
  text: string;
  who: string;
};

export function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused || reviews.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length);
    }, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, reviews.length]);

  function goTo(i: number) {
    setIndex((i + reviews.length) % reviews.length);
  }

  const current = reviews[index];

  return (
    <div
      className="mx-auto max-w-[720px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
        <div className="mb-4 text-lg tracking-widest text-warm">★★★★★</div>
        <p className="min-h-[96px] text-[17px] leading-relaxed text-white/90">«{current.text}»</p>
        <div className="mt-5 text-sm font-semibold">{current.who}</div>

        <button
          type="button"
          aria-label="Reseña anterior"
          onClick={() => goTo(index - 1)}
          className="absolute left-2 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/20 p-2 hover:bg-white/10 sm:-left-5 sm:flex"
        >
          <span aria-hidden>←</span>
        </button>
        <button
          type="button"
          aria-label="Siguiente reseña"
          onClick={() => goTo(index + 1)}
          className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/20 p-2 hover:bg-white/10 sm:-right-5 sm:flex"
        >
          <span aria-hidden>→</span>
        </button>
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {reviews.map((r, i) => (
          <button
            key={r.who}
            type="button"
            aria-label={`Ir a la reseña ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index ? "bg-warm" : "bg-white/25 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

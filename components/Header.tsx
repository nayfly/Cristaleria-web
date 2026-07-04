"use client";

import { useState } from "react";
import Link from "next/link";
import { business } from "@/lib/business";

const navItems = [
  { href: "/", label: "Inicio", key: "inicio" },
  { href: "/productos", label: "Productos", key: "productos" },
  { href: "/galeria", label: "Galería", key: "galeria" },
  { href: "/nosotros", label: "Quiénes somos", key: "nosotros" },
  { href: "/contacto", label: "Contacto", key: "contacto" },
] as const;

export function Header({
  active,
}: {
  active: "inicio" | "productos" | "galeria" | "nosotros" | "contacto";
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-ink text-white text-[13px]">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-5 py-2 sm:px-8">
          <span>
            {business.address.locality}, {business.address.region} · {business.phoneDisplay}
          </span>
          <a href={`mailto:${business.email}`} className="opacity-85 hover:opacity-100">
            {business.email}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          <nav className="flex items-center justify-between py-4">
            <Link href="/" className="font-display text-xl font-bold leading-tight text-ink">
              {business.shortName}
              <span className="block font-body text-xs font-medium uppercase tracking-wide text-muted">
                {business.address.locality} · desde {business.foundedYear}
              </span>
            </Link>
            <ul className="hidden gap-8 text-[15px] font-semibold text-ink lg:flex">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className={active === item.key ? "text-accent" : "hover:text-accent"}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contacto"
              className="hidden rounded-lg bg-accent px-6 py-3 text-[15px] font-semibold text-white hover:bg-accent-dark lg:inline-flex"
            >
              Pedir presupuesto
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-line lg:hidden"
            >
              <span className="relative block h-[14px] w-[18px]">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-[18px] bg-ink transition ${open ? "translate-y-[6px] rotate-45" : ""}`}
                />
                <span
                  className={`absolute left-0 top-[6px] h-[2px] w-[18px] bg-ink transition ${open ? "opacity-0" : ""}`}
                />
                <span
                  className={`absolute left-0 top-[12px] h-[2px] w-[18px] bg-ink transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </nav>
        </div>

        {open && (
          <div className="border-t border-line bg-white lg:hidden">
            <ul className="mx-auto flex max-w-[1180px] flex-col px-5 py-3 text-[15px] font-semibold text-ink sm:px-8">
              {navItems.map((item) => (
                <li key={item.key} className="border-b border-line py-3 last:border-b-0">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block ${active === item.key ? "text-accent" : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="px-5 pb-5 sm:px-8">
              <Link
                href="/contacto"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-accent px-6 py-3 text-center text-[15px] font-semibold text-white hover:bg-accent-dark"
              >
                Pedir presupuesto
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { business } from "@/lib/business";

const navItems = [
  { href: "/", label: "Inicio", key: "inicio" },
  { href: "/productos", label: "Servicios", key: "productos" },
  { href: "/galeria", label: "Galería", key: "galeria" },
  { href: "/nosotros", label: "Nosotros", key: "nosotros" },
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
      <div className="bg-ink text-white text-[12.5px] font-bold">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-3 px-4 py-2 sm:px-8">
          <span className="min-w-0 truncate">
            {business.hours.shortDisplay} · {business.address.locality}
          </span>
          <div className="flex flex-none items-center gap-3.5">
            <a href={`tel:${business.phone}`} className="hidden sm:inline">
              📞 {business.phoneDisplay}
            </a>
            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener"
              className="rounded-md bg-wa px-3.5 py-1.5 text-ink2"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-8">
          <nav className="flex min-w-0 items-center justify-between gap-4 py-4">
            <Link href="/" className="min-w-0 flex-1 font-display text-lg font-bold leading-tight text-ink sm:text-xl lg:flex-none">
              {business.shortName}
            </Link>
            <ul className="hidden gap-8 text-[14px] font-semibold text-[#3a3226] lg:flex">
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
            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener"
              className="hidden rounded-lg bg-accent px-5 py-2.5 text-[13.5px] font-bold text-white hover:bg-accent-dark lg:inline-flex"
            >
              WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-line lg:hidden"
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
          <div className="border-t border-line bg-cream lg:hidden">
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
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-accent px-6 py-3 text-center text-[15px] font-bold text-white hover:bg-accent-dark"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

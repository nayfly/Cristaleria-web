"use client";

import { useState } from "react";
import Link from "next/link";
import { business } from "@/lib/business";
import { SocialLinks } from "./SocialLinks";

const navItems = [
  { href: "/", label: "Inicio", key: "inicio" },
  { href: "/productos", label: "Servicios", key: "productos" },
  { href: "/tejidos", label: "Tejidos", key: "tejidos" },
  { href: "/galeria", label: "Galería", key: "galeria" },
  { href: "/nosotros", label: "Nosotros", key: "nosotros" },
  { href: "/contacto", label: "Contacto", key: "contacto" },
] as const;

export function Header({
  active,
}: {
  active: "inicio" | "productos" | "tejidos" | "galeria" | "nosotros" | "contacto";
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-ink text-white text-[12.5px] font-bold">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-3 px-4 py-2 sm:px-8">
          <span className="min-w-0 flex-1 truncate">
            {business.hours.shortDisplay} · {business.address.locality}
          </span>
          <div className="hidden flex-none items-center gap-3.5 sm:flex">
            <SocialLinks />
            <a href={`tel:${business.phone}`} className="hidden sm:inline">
              📞 {business.phoneDisplay}
            </a>
            <Link href="/contacto" className="rounded-md bg-accent px-3.5 py-1.5 text-white">
              Pedir presupuesto
            </Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-8">
          <nav className="flex min-w-0 items-center justify-between gap-4 py-4">
            <Link href="/" className="flex min-w-0 flex-1 items-center lg:flex-none">
              <img
                src="/images/brand/logo.png"
                alt={business.name}
                className="h-12 w-[56px] object-contain sm:h-14 sm:w-[65px]"
              />
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
              href={`tel:${business.phone}`}
              className="hidden rounded-lg bg-accent px-5 py-2.5 text-[13.5px] font-bold text-white hover:bg-accent-dark lg:inline-flex"
            >
              Llamar {business.phoneDisplay}
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
                href={`tel:${business.phone}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-accent px-6 py-3 text-center text-[15px] font-bold text-white hover:bg-accent-dark"
              >
                Llamar {business.phoneDisplay}
              </a>
              <SocialLinks className="mt-4 justify-center [&>a]:border [&>a]:border-line" />
            </div>
          </div>
        )}
      </header>
    </>
  );
}

import Link from "next/link";
import { business } from "@/lib/business";

export function Header({
  active,
}: {
  active: "inicio" | "productos" | "galeria" | "nosotros" | "contacto";
}) {
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
            <ul className="hidden gap-8 text-[15px] font-semibold text-ink md:flex">
              <li>
                <Link
                  href="/"
                  className={active === "inicio" ? "text-accent" : "hover:text-accent"}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/productos"
                  className={active === "productos" ? "text-accent" : "hover:text-accent"}
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href="/galeria"
                  className={active === "galeria" ? "text-accent" : "hover:text-accent"}
                >
                  Galería
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className={active === "nosotros" ? "text-accent" : "hover:text-accent"}
                >
                  Quiénes somos
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className={active === "contacto" ? "text-accent" : "hover:text-accent"}
                >
                  Contacto
                </Link>
              </li>
            </ul>
            <Link
              href="/contacto"
              className="rounded-lg bg-accent px-6 py-3 text-[15px] font-semibold text-white hover:bg-accent-dark"
            >
              Pedir presupuesto
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

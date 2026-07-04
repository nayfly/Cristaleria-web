import Link from "next/link";
import { business } from "@/lib/business";

export function Footer() {
  return (
    <footer className="bg-ink py-14 text-white/75">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-11 px-5 sm:px-8 md:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
        <div>
          <h4 className="mb-3.5 text-[13.5px] font-semibold uppercase tracking-wide text-white">
            {business.shortName}
          </h4>
          <p className="text-[14.5px] leading-[1.8]">
            {business.address.locality}, {business.address.region}.
            <br />
            Carpintería de aluminio, PVC y cristalería desde {business.foundedYear}.
          </p>
        </div>
        <div>
          <h4 className="mb-3.5 text-[13.5px] font-semibold uppercase tracking-wide text-white">
            Navegación
          </h4>
          <ul className="grid gap-2 text-[14.5px] leading-[1.8]">
            <li>
              <Link href="/" className="hover:text-white">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/productos" className="hover:text-white">
                Productos
              </Link>
            </li>
            <li>
              <Link href="/galeria" className="hover:text-white">
                Galería
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className="hover:text-white">
                Quiénes somos
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-white">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3.5 text-[13.5px] font-semibold uppercase tracking-wide text-white">
            Horario
          </h4>
          <p className="text-[14.5px] leading-[1.8]">
            Lunes a sábado: 10:30–13:30
            <br />
            Domingo: cerrado
          </p>
        </div>
        <div>
          <h4 className="mb-3.5 text-[13.5px] font-semibold uppercase tracking-wide text-white">
            Contacto
          </h4>
          <p className="text-[14.5px] leading-[1.8]">
            <a href={`tel:${business.phone}`} className="hover:text-white">
              {business.phoneDisplay}
            </a>
            <br />
            <a href={`mailto:${business.email}`} className="hover:text-white">
              {business.email}
            </a>
            <br />
            <a href={business.social.facebook} target="_blank" rel="noopener" className="hover:text-white">
              Facebook
            </a>{" "}
            ·{" "}
            <a href={business.social.youtube} target="_blank" rel="noopener" className="hover:text-white">
              YouTube
            </a>
          </p>
        </div>
      </div>
      <div className="mx-auto mt-11 flex max-w-[1180px] flex-wrap justify-between gap-2 border-t border-white/10 px-5 pt-6 text-[13px] text-white/50 sm:px-8">
        <span>© {new Date().getFullYear()} {business.name}</span>
        <span>Todos los derechos reservados</span>
      </div>
    </footer>
  );
}

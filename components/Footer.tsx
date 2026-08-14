import Link from "next/link";
import { business } from "@/lib/business";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="bg-ink2 py-11 text-white/75">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-8 px-5 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <img
            src="/images/brand/logo.png"
            alt={business.name}
            className="h-20 w-[92px] object-contain"
          />
          <p className="mt-2.5 max-w-[34ch] text-[13.5px] leading-[1.6]">
            Negocio familiar en {business.address.locality} desde {business.foundedYear}.
            Instalación y fabricación propia de aluminio, PVC y cristalería.
          </p>
        </div>
        <div>
          <h4 className="mb-3.5 text-[13px] font-bold uppercase text-white">Servicios</h4>
          <ul className="grid gap-2.5 text-[13.5px]">
            <li>
              <Link href="/productos#cerramientos-de-terrazas" className="hover:text-white">
                Cerramientos de terraza
              </Link>
            </li>
            <li>
              <Link href="/productos#cortinas-de-vidrio-panoramicas" className="hover:text-white">
                Cortinas de vidrio
              </Link>
            </li>
            <li>
              <Link href="/productos#barandillas-de-cristal" className="hover:text-white">
                Barandillas de cristal
              </Link>
            </li>
            <li>
              <Link href="/productos#toldos-y-persianas" className="hover:text-white">
                Toldos y persianas
              </Link>
            </li>
            <li>
              <Link href="/productos#mamparas-de-bano" className="hover:text-white">
                Mamparas de baño
              </Link>
            </li>
            <li>
              <Link href="/tejidos" className="hover:text-white">
                Tejidos para toldos
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3.5 text-[13px] font-bold uppercase text-white">Empresa</h4>
          <ul className="grid gap-2.5 text-[13.5px]">
            <li>
              <Link href="/nosotros" className="hover:text-white">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/galeria" className="hover:text-white">
                Galería
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
          <h4 className="mb-3.5 text-[13px] font-bold uppercase text-white">Contacto</h4>
          <ul className="grid gap-2.5 text-[13.5px]">
            <li>
              <a href={`tel:${business.phone}`} className="hover:text-white">
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="hover:text-white">
                {business.email}
              </a>
            </li>
            <li>
              {business.address.street}, {business.address.locality}
            </li>
            <li>{business.hours.shortDisplay}</li>
            <li className="pt-1.5">
              <SocialLinks />
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-[1180px] flex-wrap justify-between gap-2 border-t border-white/10 px-5 pt-[18px] text-xs text-white/45 sm:px-8">
        <span>© {new Date().getFullYear()} {business.name}</span>
        <nav className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <Link href="/aviso-legal" className="hover:text-white">
            Aviso legal
          </Link>
          <span aria-hidden>·</span>
          <Link href="/privacidad" className="hover:text-white">
            Privacidad
          </Link>
          <span aria-hidden>·</span>
          <Link href="/cookies" className="hover:text-white">
            Cookies
          </Link>
        </nav>
        <span>{business.address.region} · España</span>
      </div>
      <div className="mx-auto mt-3 max-w-[1180px] px-5 text-center text-xs text-white/45 sm:px-8">
        Powered by{" "}
        <a
          href="https://robertsoftware.com"
          target="_blank"
          rel="noopener"
          className="font-semibold text-[#c084fc] hover:text-[#d8b4fe]"
        >
          RobertSoftware
        </a>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Esta web no instala cookies. Aquí explicamos qué es una cookie, por qué no las usamos y qué pasa si abres el mapa de Google.",
  alternates: { canonical: "/cookies" },
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <LegalPage
      titulo="Política de cookies"
      entradilla="Esta web no instala cookies. Por eso no verás ningún banner pidiéndote permiso."
    >
      <h2>No usamos cookies</h2>
      <p>
        Ni propias ni de terceros: ni de análisis, ni de publicidad, ni de redes sociales. Tampoco
        usamos balizas web, huellas digitales del navegador ni ninguna otra técnica para seguirte el
        rastro. No sabemos cuánta gente entra, ni de dónde viene, ni qué mira.
      </p>
      <p>
        Es una decisión consciente. Una web de un taller no necesita vigilar a quien la visita, y
        así nos ahorramos el banner que molesta a todo el mundo.
      </p>

      <h2>Entonces, ¿por qué existe esta página?</h2>
      <p>
        Porque hay dos matices honestos que conviene contar.
      </p>

      <h3>El mapa de la página de contacto</h3>
      <p>
        En <Link href="/contacto">contacto</Link> hay un mapa de Google. No se carga solo: verás un
        recuadro con la dirección y un botón. <strong>Mientras no pulses ese botón, no se conecta
        con Google y no se instala ninguna cookie.</strong> Si lo pulsas, cargas contenido de Google
        y a partir de ahí Google puede instalar sus cookies y tratar tus datos según sus propias
        condiciones. Está en tu mano.
      </p>
      <p>
        Si prefieres ver dónde estamos sin cargar nada aquí, tienes el enlace para abrirlo
        directamente en la aplicación de Google Maps.
      </p>

      <h3>Enlaces a otras páginas</h3>
      <p>
        Los iconos de Facebook, Google y YouTube son simples enlaces. No cargan nada de esos
        servicios mientras estás aquí. Ahora bien, en cuanto pulsas uno sales de esta web y entras
        en la suya, donde sí habrá cookies y donde manda su política, no la nuestra.
      </p>

      <h2>Sobre las tipografías</h2>
      <p>
        Las fuentes de la web son de Google Fonts, pero están descargadas y servidas desde nuestro
        propio dominio. Tu navegador no hace ninguna petición a Google para mostrarlas, que es lo
        habitual en otras webs y una fuente silenciosa de transferencia de datos.
      </p>

      <h2>Qué es una cookie, por si acaso</h2>
      <p>
        Es un archivo pequeño que una web guarda en tu navegador para reconocerte en visitas
        posteriores. Sirven para cosas útiles, como recordar que has iniciado sesión, y para otras
        menos útiles, como seguirte por internet para enseñarte publicidad. Puedes ver y borrar las
        que tengas desde la configuración de tu navegador, en el apartado de privacidad.
      </p>

      <h2>Si esto cambia</h2>
      <p>
        Si algún día añadimos analítica o cualquier otra herramienta que use cookies, actualizaremos
        esta página y, cuando la ley lo exija, pediremos tu consentimiento antes de instalar nada.
      </p>

      <h2>Dudas</h2>
      <p>
        Escríbenos a <a href={`mailto:${business.email}`}>{business.email}</a>. Puedes consultar
        también el <Link href="/aviso-legal">aviso legal</Link> y la{" "}
        <Link href="/privacidad">política de privacidad</Link>.
      </p>
    </LegalPage>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Datos identificativos del titular de la web de Cristalería y Aluminios Torrox Costa y condiciones de uso del sitio.",
  alternates: { canonical: "/aviso-legal" },
  robots: { index: true, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <LegalPage
      titulo="Aviso legal"
      entradilla="Quién está detrás de esta web y en qué condiciones puedes usarla."
    >
      <h2>Quiénes somos</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002 de servicios de la sociedad de la
        información y de comercio electrónico (LSSI-CE), estos son los datos del titular de este
        sitio web:
      </p>
      <dl>
        <dt>Titular</dt>
        <dd>{business.legal.titular}</dd>
        <dt>NIF / CIF</dt>
        <dd>{business.legal.nif}</dd>
        <dt>Nombre comercial</dt>
        <dd>{business.name}</dd>
        <dt>Domicilio</dt>
        <dd>
          {business.address.street}, {business.address.postalCode} {business.address.locality},{" "}
          {business.address.region}
        </dd>
        <dt>Teléfono</dt>
        <dd>{business.phoneDisplay}</dd>
        <dt>Correo electrónico</dt>
        <dd>{business.email}</dd>
        <dt>Actividad</dt>
        <dd>Carpintería de aluminio y PVC, cristalería, toldos y persianas.</dd>
        {business.legal.registroMercantil && (
          <>
            <dt>Datos registrales</dt>
            <dd>{business.legal.registroMercantil}</dd>
          </>
        )}
      </dl>

      <h2>Para qué sirve esta web</h2>
      <p>
        Este sitio es informativo: enseña los trabajos que hacemos y facilita ponerse en contacto
        con nosotros. No es una tienda: aquí no se vende nada, no se cobra nada y no hay pasarela de
        pago. Cualquier presupuesto se acuerda después, por teléfono, WhatsApp, correo o en el
        propio taller.
      </p>

      <h2>Condiciones de uso</h2>
      <p>
        Navegar por esta web te convierte en usuario y supone que aceptas estas condiciones. Te
        pedimos que uses el sitio de buena fe: no intentes dañarlo, no lo utilices para actividades
        ilícitas y no envíes por el formulario contenidos que puedan ser ofensivos o vulnerar
        derechos de terceros.
      </p>

      <h2>Precios, plazos y disponibilidad</h2>
      <p>
        La información sobre servicios y materiales es orientativa y puede cambiar sin aviso previo,
        porque depende de proveedores, medidas y de cada instalación concreta. Nada de lo publicado
        aquí es un presupuesto ni una oferta vinculante: el presupuesto válido es siempre el que
        entregamos por escrito para tu caso.
      </p>

      <h2>Propiedad intelectual</h2>
      <p>
        Los textos, el logotipo y las fotografías de trabajos realizados son propiedad del titular,
        salvo que se indique otra cosa. Puedes compartir enlaces a la web con normalidad, pero no
        reproducir sus contenidos para uso comercial sin permiso.
      </p>
      <p>
        Las reseñas que aparecen en la página de inicio están escritas por sus autores y publicadas
        en nuestra ficha de Google. Se reproducen literalmente, sin corregir ni resumir, y con
        enlace a la ficha original para que cualquiera pueda comprobarlas.
      </p>

      <h2>Responsabilidad</h2>
      <p>
        Procuramos que todo lo publicado sea correcto y esté actualizado, pero no podemos garantizar
        que no haya errores ni que la web esté disponible sin interrupciones. Si detectas algo mal,
        te agradecemos que nos avises en {business.email}.
      </p>

      <h2>Enlaces a otras webs</h2>
      <p>
        Enlazamos a sitios de terceros (Google, Facebook, YouTube y WhatsApp). No controlamos su
        contenido ni sus condiciones, así que cuando sales de esta web pasas a regirte por las suyas.
      </p>

      <h2>Legislación aplicable</h2>
      <p>
        Estas condiciones se rigen por la legislación española. Para cualquier controversia, las
        partes se someten a los juzgados y tribunales que correspondan conforme a derecho.
      </p>

      <h2>Más información</h2>
      <p>
        Puedes consultar también nuestra <Link href="/privacidad">política de privacidad</Link> y la{" "}
        <Link href="/cookies">política de cookies</Link>.
      </p>
    </LegalPage>
  );
}

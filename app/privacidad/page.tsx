import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Qué datos tratamos, para qué, durante cuánto tiempo y qué derechos tienes sobre ellos en la web de Cristalería y Aluminios Torrox Costa.",
  alternates: { canonical: "/privacidad" },
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  // El formulario se comporta de dos maneras según esté configurado el envío
  // por servidor. El texto se adapta para no describir algo que no ocurre.
  const envioActivo = Boolean(process.env.RESEND_API_KEY);

  return (
    <LegalPage
      titulo="Política de privacidad"
      entradilla="Qué datos tuyos tratamos, para qué y qué puedes hacer al respecto. En corto: esta web no guarda nada."
    >
      <h2>Lo importante, primero</h2>
      <p>
        Esta web <strong>no tiene base de datos ni guarda un registro de sus visitantes</strong>. No
        te seguimos el rastro, no sabemos qué páginas miras y no creamos ninguna ficha tuya por el
        hecho de entrar.
      </p>
      {envioActivo ? (
        <p>
          Cuando rellenas el formulario de contacto, lo que escribes viaja cifrado hasta nuestro
          servidor, que <strong>lo convierte en un correo y nos lo envía</strong>. No se guarda en
          ninguna base de datos: el mensaje acaba en nuestro buzón, como si nos hubieras escrito un
          correo normal, y ahí se queda.
        </p>
      ) : (
        <p>
          El formulario de contacto ni siquiera envía nada a un servidor nuestro: lo que escribes se
          usa en tu propio dispositivo para redactar un correo, y no sale de ahí hasta que tú le das
          a enviar en tu programa de correo.
        </p>
      )}
      <p>
        Eso significa que, mientras no nos escribas, no tenemos ningún dato tuyo. Cuando nos
        escribes, tratamos lo que nos cuentes para responderte, y nada más.
      </p>

      <h2>Responsable del tratamiento</h2>
      <dl>
        <dt>Responsable</dt>
        <dd>{business.legal.titular}</dd>
        <dt>NIF / CIF</dt>
        <dd>{business.legal.nif}</dd>
        <dt>Domicilio</dt>
        <dd>
          {business.address.street}, {business.address.postalCode} {business.address.locality},{" "}
          {business.address.region}
        </dd>
        <dt>Correo electrónico</dt>
        <dd>{business.email}</dd>
        <dt>Teléfono</dt>
        <dd>{business.phoneDisplay}</dd>
      </dl>

      <h2>Qué datos tratamos y de dónde salen</h2>
      <p>
        Solo los que nos facilitas tú al ponerte en contacto con nosotros: normalmente tu nombre, un
        teléfono o un correo, y lo que nos cuentes sobre el trabajo que necesitas (medidas,
        dirección de la instalación, fotos si nos las mandas). No compramos listas ni obtenemos tus
        datos de terceros.
      </p>
      <p>
        No tratamos datos de categorías especiales, ni elaboramos perfiles, ni tomamos decisiones
        automatizadas sobre ti.
      </p>

      <h2>Para qué los usamos y con qué legitimación</h2>
      <ul>
        <li>
          <strong>Atender tu consulta y prepararte un presupuesto.</strong> La base legal es la
          aplicación de medidas precontractuales a petición tuya (artículo 6.1.b del RGPD).
        </li>
        <li>
          <strong>Ejecutar el trabajo contratado</strong> y su garantía posterior, si llegamos a
          acuerdo. La base legal es la ejecución del contrato (artículo 6.1.b).
        </li>
        <li>
          <strong>Cumplir nuestras obligaciones legales</strong>, sobre todo las fiscales y de
          facturación (artículo 6.1.c).
        </li>
      </ul>
      <p>
        No te vamos a mandar publicidad ni boletines: no hacemos envíos comerciales desde esta web.
      </p>

      <h2>Cuánto tiempo los guardamos</h2>
      <p>
        Las consultas que no acaban en trabajo se conservan el tiempo necesario para atenderlas y se
        eliminan después. Si llegamos a trabajar juntos, los datos de la factura y del contrato se
        conservan durante los plazos que exige la normativa fiscal y mercantil, que son de varios
        años, y después se eliminan.
      </p>

      <h2>Quién más puede ver tus datos</h2>
      <p>
        No vendemos ni cedemos datos a nadie. Ahora bien, para funcionar nos apoyamos en servicios de
        terceros, y conviene que sepas cuáles:
      </p>
      <ul>
        <li>
          <strong>Nuestro proveedor de correo.</strong> Si nos escribes por email, el mensaje queda
          en nuestro buzón alojado por el proveedor correspondiente.
        </li>
        {envioActivo && (
          <li>
            <strong>Resend (Plus Five Five, Inc.),</strong> el servicio que entrega los mensajes del
            formulario en nuestro buzón. Actúa como encargado del tratamiento: procesa el envío por
            cuenta nuestra y no usa tus datos para nada más.
          </li>
        )}
        <li>
          <strong>Vercel Inc.,</strong> que aloja esta web. Como cualquier servidor, procesa las
          peticiones técnicas necesarias para servirte las páginas y puede registrar direcciones IP
          en sus registros de seguridad.
        </li>
        <li>
          <strong>Google,</strong> únicamente si abres el mapa de la página de contacto o pulsas
          alguno de los enlaces a nuestra ficha. Lo explicamos en la{" "}
          <Link href="/cookies">política de cookies</Link>.
        </li>
      </ul>
      <p>
        Algunos de estos proveedores pueden tratar información fuera del Espacio Económico Europeo.
        En esos casos, las transferencias se amparan en las garantías previstas por el RGPD, como las
        cláusulas contractuales tipo aprobadas por la Comisión Europea.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Puedes ejercer en cualquier momento tus derechos de <strong>acceso</strong>,{" "}
        <strong>rectificación</strong>, <strong>supresión</strong>, <strong>oposición</strong>,{" "}
        <strong>limitación del tratamiento</strong> y <strong>portabilidad</strong>. Para hacerlo,
        escríbenos a <a href={`mailto:${business.email}`}>{business.email}</a> o pásate por el taller
        con tu documento de identidad. Es gratis y te responderemos en el plazo legal.
      </p>
      <p>
        Si crees que no hemos atendido bien tu petición, puedes reclamar ante la Agencia Española de
        Protección de Datos, en{" "}
        <a href="https://www.aepd.es" target="_blank" rel="noopener">
          www.aepd.es
        </a>
        .
      </p>

      <h2>Menores</h2>
      <p>
        Esta web no se dirige a menores de edad y no recogemos datos de menores de forma consciente.
      </p>

      <h2>Seguridad</h2>
      <p>
        La web se sirve siempre cifrada por HTTPS. Aplicamos medidas razonables para proteger la
        información que nos confías, y tratamos tus datos con la misma discreción con la que
        entramos en tu casa a tomar medidas.
      </p>

      <h2>Cambios en esta política</h2>
      <p>
        Si cambiamos la forma de tratar los datos, actualizaremos esta página y su fecha. Te
        recomendamos revisarla de vez en cuando.
      </p>
    </LegalPage>
  );
}

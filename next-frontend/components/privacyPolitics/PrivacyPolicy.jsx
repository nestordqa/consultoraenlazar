import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/system";
import Link from "next/link";

const StyledCloseButton = styled(Button)({
  display: "flex",
  backgroundColor: "white",
  color: "black",
  fontWeight: "bold",
  fontSize: "18px",
  fontFamily: "Noah Text",
  borderRadius: "5rem",
  padding: "2px",
  marginTop: "10px",
  marginRight: "10px",
  border: "2px solid #323232",
  alignSelf: "flex-end",
  "&:hover": {
    backgroundColor: "white",
  },
});
const StyledDialog = styled(Dialog)({
  "& .MuiDialog-paper": {
    backgroundColor: "#34668b",
    fontFamily: "Noah Text",
  },
});
const StyledDialogContent = styled(DialogContent)({
  backgroundColor: "white",
  padding: "1.5rem",
  fontSize: "17px",
});
const StyledTitle = styled(DialogTitle)({
  backgroundColor: "#34668b",
  color: "white",
  fontSize: "1.8rem",
  fontFamily: "Noah Text",
  "&:hover": {
    backgroundColor: "#34668b",
  },
  "@media (max-width: 768px)": {
    fontSize: "1.5rem",
  },
});

export default function PrivacyPolicy({ handleClose, open, scroll }) {
  return (
    <div>
      <StyledDialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <StyledCloseButton variant="contained" onClick={handleClose}>
          X
        </StyledCloseButton>
        <StyledTitle id="scroll-dialog-title">
          Términos y condiciones
        </StyledTitle>
        <StyledDialogContent id="scroll-dialog-description" tabIndex={-1}>
          <h3 className="pt-5">
            <strong>Introducción:</strong>
          </h3>
          <p>
            Al utilizar nuestro Sitio Web y nuestros servicios, aceptas estos
            términos y condiciones, nuestra Política de Privacidad y cualquier
            otro aviso legal que pueda aparecer en nuestro Sitio Web. Estos
            términos y condiciones se rigen por las leyes de la República
            Argentina.
          </p>
          <br />
          <h3>
            <strong>Servicios:</strong>
          </h3>
          <p>
            Ofrecemos servicios de recursos humanos y capacitaciones de
            formación relacionados con el ámbito laboral y empresarial.
            Cumplimos con todas las leyes y regulaciones aplicables en
            Argentina, incluyendo, entre otras, la Ley de Contrato de Trabajo y
            la{" "}
            <Link
              href="http://servicios.infoleg.gob.ar/infolegInternet/anexos/60000-64999/64790/norma.htm"
              target="_blank"
            >
              <strong className="text-blue">
                Ley de Protección de Datos Personales.
              </strong>
            </Link>
          </p>
          <br />
          <h3>
            <strong>Uso del Sitio Web: </strong>
          </h3>
          <p>
            Al utilizar nuestro Sitio Web, garantizas que eres mayor de edad y
            que tienes capacidad legal para aceptar estos términos y
            condiciones. Además, te comprometes a hacer un uso adecuado y lícito
            del Sitio Web y a no utilizarlo con fines ilícitos o fraudulentos,
            así como a no realizar ninguna conducta que pueda dañar nuestra
            imagen o reputación. En caso de incumplimiento de estos términos y
            condiciones, nos reservamos el derecho a restringir o impedir el
            acceso al Sitio Web.
          </p>
          <br />
          <h3>
            <strong>Propiedad intelectual:</strong>
          </h3>
          <p>
            El contenido de este Sitio Web, incluyendo, pero no limitado a,
            textos, imágenes, gráficos, diseños, logotipos, software y cualquier
            otro material (en adelante, el "Contenido"), está protegido por
            derechos de propiedad intelectual, incluyendo derechos de autor,
            marcas registradas y otros derechos similares. El uso no autorizado
            del Contenido está estrictamente prohibido y puede dar lugar a
            responsabilidad civil o penal.
          </p>
          <br />
          <h3>
            <strong>Enlaces a sitios web de terceros:</strong>
          </h3>
          <p>
            Este Sitio Web puede contener enlaces a otros sitios web de
            terceros. Estos enlaces son proporcionados únicamente para su
            conveniencia. No tenemos control sobre el contenido de estos sitios
            web y no asumimos ninguna responsabilidad por ellos. Exclusión de
            responsabilidad: No garantizamos la disponibilidad o el acceso
            continuo al Sitio Web o a nuestros servicios. Nos reservamos el
            derecho a modificar o interrumpir los servicios en cualquier
            momento, sin previo aviso. No asumimos ninguna responsabilidad por
            los errores o inexactitudes del Contenido, ni por los daños o
            perjuicios que puedan derivarse del uso de nuestro Sitio Web o de
            nuestros servicios.
          </p>
          <br />
          <h3>
            <strong>Privacidad:</strong>
          </h3>
          <p>
            Nos comprometemos a respetar la privacidad de nuestros usuarios.
            Consulta nuestra Política de Privacidad para obtener más información
            sobre cómo utilizamos y protegemos tus datos personales. Cumplimos
            con la Ley de Protección de Datos Personales y cualquier otra ley
            aplicable en Argentina.
          </p>
          <br />
          <h3>
            <strong>Jurisdicción y competencia:</strong>
          </h3>
          <p>
            Para cualquier controversia que pudiera derivarse de estos términos
            y condiciones, las partes se someten a los tribunales ordinarios de
            la Ciudad de Buenos Aires, renunciando a cualquier otro fuero que
            pudiera corresponderles.
          </p>
          <br />
          <h2 className="font-bold text-xl py-6 px-2 mb-6 text-darkBlue border-y-[1px]">
            Política de privacidad
          </h2>
          <p>
            En cumplimiento de la Ley de Protección de Datos Personales de
            Argentina, se establece la presente política de privacidad que
            describe cómo se recopilan, utilizan y protegen los datos personales
            que se obtienen a través de este Sitio Web.
          </p>
          <br />
          <h3>
            <strong>Responsable del tratamiento de datos personales:</strong>
          </h3>
          <p>
            La empresa responsable del tratamiento de los datos personales es
            Enlazar (en adelante, "nosotros" o "la empresa").
          </p>
          <br />
          <h3>
            <strong>Datos personales recopilados:</strong>
          </h3>
          <p>
            Recopilamos datos personales que nos proporcionas directamente a
            través de este Sitio Web o que obtenemos de forma automática
            mediante el uso de cookies. Los datos personales que podemos
            recopilar incluyen, entre otros, tu nombre, dirección de correo
            electrónico, número de teléfono, empresa en la que trabajas y
            cualquier otra información que nos proporciones voluntariamente.
          </p>
          <br />
          <h3>
            <strong>Finalidad y base jurídica del tratamiento:</strong>
          </h3>
          <p>
            La recopilación y tratamiento de tus datos personales se realiza con
            la finalidad de proporcionarte los servicios y cursos de recursos
            humanos ofrecidos en este Sitio Web, así como para fines
            estadísticos y de marketing.
          </p>
          <br />
          <p>
            La base jurídica para el tratamiento de tus datos personales es tu
            consentimiento expreso al aceptar la presente política de privacidad
            y los términos y condiciones de este Sitio Web.
          </p>
          <br />
          <h3>
            <strong>Cesión de datos a terceros:</strong>
          </h3>
          <p>
            No compartimos tus datos personales con terceros, salvo en los casos
            en que se requiera por ley o por orden judicial.
          </p>
          <br />
          <h3>
            <strong>Medidas de seguridad:</strong>
          </h3>
          <p>
            Tomamos las medidas necesarias para proteger tus datos personales
            contra el acceso no autorizado, la divulgación o alteración.
            Utilizamos medidas técnicas y organizativas adecuadas para
            garantizar la seguridad de tus datos personales.
          </p>
          <br />
          <h3>
            <strong>Derechos de los titulares de datos:</strong>
          </h3>
          <p>
            Tienes derecho a acceder, rectificar, cancelar y oponerte al
            tratamiento de tus datos personales. Puedes ejercer estos derechos
            enviando una solicitud por escrito a la dirección de correo
            electrónico <strong className="text-blue">hola@enlazar.xyz</strong>.
            También puedes darte de baja de nuestras comunicaciones comerciales
            en cualquier momento utilizando el enlace proporcionado en cada
            correo electrónico.
          </p>
          <br />
          <h3>
            <strong>Conservación de datos:</strong>
          </h3>
          <p>
            Conservamos tus datos personales durante el tiempo necesario para
            cumplir con la finalidad para la que se recopilaron y para cumplir
            con las obligaciones legales que nos correspondan.
          </p>
          <br />
          <h3>
            <strong>Modificaciones de la política de privacidad:</strong>
          </h3>
          <p>
            Nos reservamos el derecho a modificar esta política de privacidad en
            cualquier momento. Cualquier cambio será publicado en este Sitio Web
            y será efectivo desde el momento en que se publique.
          </p>
          <br />
          <p>
            Si tienes alguna pregunta o duda sobre esta política de privacidad,
            por favor, ponte en contacto con nosotros a través de la dirección
            de correo electrónico{" "}
            <strong className="text-blue">hola@enlazar.xyz</strong>.
          </p>
        </StyledDialogContent>
      </StyledDialog>
    </div>
  );
}

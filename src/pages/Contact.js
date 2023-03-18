import React from "react";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import FormularioContacto from "../modules/FormularioContacto";

function Contact() {
  const { t } = useTranslation("common");
  return (
    <div className="contenedor-internas">
      <div className="contenedor-componente-contacto fondo-translucido borde-redondeado">
        <h3 className="spartan-bold titulo-contacto">
          {t("TituloContacto.title", { framework: "React" })}
        </h3>
        <h2 className="titulo-2 titulo-degradado -mt-2 -mb-3">{t("SubituloContacto.title", { framework: "React" })}</h2>
        <h4 className="titulo-4 mb-4">
        {t("TaglineContacto.title", { framework: "React" })}
        </h4>
        <FormularioContacto />
        <Footer />
      </div>
    </div>
  );
}

export default Contact;

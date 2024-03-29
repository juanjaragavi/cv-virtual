import React from "react";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import ContInternas from "../layouts/ContInternas";
import FormularioContacto from "../modules/FormularioContacto";

const sinBorderNiFondo = {
  border: 0,
  background: "transparent",
  backdropFilter: "none",
}

function Contact() {
  const { t } = useTranslation("common");
  return (
    <ContInternas style={sinBorderNiFondo}>
      <div className="contenedor-componente-contacto fondo-translucido borde-redondeado">
        <h3 className="spartan-bold titulo-contacto">
          {t("TituloContacto.title", { framework: "React" })}
        </h3>
        <h2 className="animate-pulse titulo-2 titulo-degradado -mt-1 -mb-3">{t("SubituloContacto.title", { framework: "React" })}</h2>
        <h4 className="titulo-4 mb-6">
        {t("TaglineContacto.title", { framework: "React" })}
        </h4>
        <FormularioContacto />
        <Footer />
      </div>
    </ContInternas>
  );
}

export default Contact;

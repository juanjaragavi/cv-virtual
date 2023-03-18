import React from "react";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import FormularioContacto from "../modules/FormularioContacto";

function Contact() {
  const { t } = useTranslation("common");
  return (
    <div className="contenedor-internas">
      <div className="contenedor-componente-contacto fondo-translucido borde-redondeado">
        <h3 className="mt-7 spartan-bold text-4xl text-center leading-7">
          Desde 2007,
        </h3>
        <h2 className="titulo-2 titulo-degradado -mt-2 -mb-3">Obsesionado</h2>
        <h4 className="titulo-4 decoracion-texto-destacado">
          con la Tecnología y el Marketing
        </h4>
        <FormularioContacto />
        <Footer />
      </div>
    </div>
  );
}

export default Contact;

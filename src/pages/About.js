import React from "react";
import FotoSinBorde from "../media/FotoSinBorde";
import FotoBorde from "../media/FotoBorde";
import { useTranslation } from "react-i18next";
import TextoEjemplo from "../media/TextoEjemplo";
import ContInternas from "../layouts/ContInternas";
import Columna from "../layouts/Columna";
import ContColumnas from "../layouts/ContColumnas";
import Seccion from "../layouts/Seccion";

function About() {
  const primeraColumna = { order: -9999, border: 0, flexBasis: "50%" };
  const segundaColumna = { order: 9999, flexBasis: "50%", border: 0 };
  const paddingInterno = { padding: "1em" };
  const tresColumnas = { flexBasis: "33.333333%" }

  const { t } = useTranslation("common");
  return (
    <ContInternas style={paddingInterno}>
      <ContColumnas>
        <Columna style={primeraColumna}>
          <FotoBorde
            src={require("../assets/ejemplo-eliminar.jpg")}
            title={t("AltFotoInternas.title", { framework: "React" })}
            alt={t("AltFotoInternas.title", { framework: "React" })}
          />
        </Columna>
        <Columna style={segundaColumna}>
          <TextoEjemplo />
        </Columna>
      </ContColumnas>
      <Seccion>
        <TextoEjemplo />
        <FotoSinBorde
            src={require("../assets/logo-juan-jaramillo.png")}
            title={t("AltFotoInternas.title", { framework: "React" })}
            alt={t("AltFotoInternas.title", { framework: "React" })}
          />
      </Seccion>
      <ContColumnas>
        <Columna style={tresColumnas}>
          <TextoEjemplo />
          <FotoBorde
            src={require("../assets/ejemplo-eliminar.jpg")}
            title={t("AltFotoInternas.title", { framework: "React" })}
            alt={t("AltFotoInternas.title", { framework: "React" })}
          />
        </Columna>
        <Columna style={tresColumnas}>
          <TextoEjemplo />
          <FotoBorde
            src={require("../assets/ejemplo-eliminar.jpg")}
            title={t("AltFotoInternas.title", { framework: "React" })}
            alt={t("AltFotoInternas.title", { framework: "React" })}
          />
        </Columna>
        <Columna style={tresColumnas}>
        <FotoBorde
            src={require("../assets/ejemplo-eliminar.jpg")}
            title={t("AltFotoInternas.title", { framework: "React" })}
            alt={t("AltFotoInternas.title", { framework: "React" })}
          />
        </Columna>
      </ContColumnas>
    </ContInternas>
  );
}

export default About;

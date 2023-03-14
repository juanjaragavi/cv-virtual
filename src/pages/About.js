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
  const sinBorde = { border: 0 }
  const sinBordeMarginTop = { border: 0, marginTop: 30 }
  const paddingInterno = { padding: "1em" };
  const tresColumnas = { flexBasis: "33.333333%", border: 0 }
  const segundaColumna = { order: 9999, flexBasis: "50%", border: 0 };
  const primeraColumna = { order: -9999, border: 0, flexBasis: "50%" };
  const textoCentrado = { textAlign: "center", paddingleft: 20, paddingRight: 20, marginTop: 10 }
  const textoNegrilla = { fontWeight: 700 };

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
          <h3 className="titulo-3">Desde 2007,</h3>
          <h1 className="titulo-1 titulo-degradado -mt-2 -mb-3">Obsesionado</h1>
          <h3 className="titulo-3 decoracion-texto-destacado">con la Tecnología y el Marketing</h3>
          <TextoEjemplo style={textoCentrado} />
        </Columna>
      </ContColumnas>
      <ContColumnas>
        <Columna style={sinBordeMarginTop}>
          <p className="text-center">Títulos</p>
          <h1 className="titulo-1 titulo-degradado">Título 1</h1>
          <h2 className="titulo-2 color-texto-primario">Título 2</h2>
          <h3 className="titulo-3 color-texto-primario">Título 3</h3>
          <h4 className="titulo-4 color-texto-primario"><span style={textoNegrilla}>Título 4:</span> Este es, quizás, el único título que puede ser largo y de más de un renglón. Esto es, porque este puede ser un tipo de título que simplemente reemplace a un párrafo, pero con un texto un poco más destacado, o para infiltrar títulos entre el texto.</h4>
        </Columna>
      </ContColumnas>
      <Seccion style={sinBorde}>
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
          <FotoSinBorde
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

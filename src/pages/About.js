import React from "react";
import { motion } from "framer-motion";
import Columna from "../layouts/Columna";
import Seccion from "../layouts/Seccion";
import Footer from "../components/Footer";
import FotoBorde from "../media/FotoBorde";
import { useTranslation } from "react-i18next";
import FotoSinBorde from "../media/FotoSinBorde";
import TextoEjemplo from "../media/TextoEjemplo";
import ContInternas from "../layouts/ContInternas";
import ContColumnas from "../layouts/ContColumnas";
import LogosFlotantes from "../media/LogosFlotantes";

function About() {
  const sinBorde = { border: 0 };
  const fotoRedonda = { borderRadius: "9999px" };
  const tresColumnasBorde = { flexBasis: "33.333333%" };
  const sinBordeMarginTop = { border: 0, marginTop: 30 };
  const tresColumnas = { flexBasis: "33.333333%", border: 0 };
  const segundaColumna = { order: 9999, flexBasis: "50%", border: 0 };
  const primeraColumna = { order: -9999, border: 0, flexBasis: "50%" };
  const textoCentrado = {
    marginTop: 10,
    paddingleft: 20,
    paddingRight: 20,
    textAlign: "center",
  };
  const textoNegrilla = { fontWeight: 700 };
  const paddingLados = {
    marginTop: 50,
    marginBottom: 50,
    paddingLeft: "25%",
    paddingRight: "25%",
  };

  const { t } = useTranslation("common");

  return (
    <ContInternas>
      <ContColumnas>
        <Columna style={primeraColumna}>
          <LogosFlotantes />
          <FotoSinBorde
            src={require("../assets/ejemplo-eliminar.png")}
            title={t("AltFotoInternas.title", { framework: "React" })}
            alt={t("AltFotoInternas.title", { framework: "React" })}
          />
        </Columna>
        <Columna style={segundaColumna}>
          <h3 className="titulo-3 mr-1.5">
            Desde<span className="pl-7"></span>2007,
          </h3>
          <h1 className="titulo-1 titulo-degradado -mt-7 -mb-3">Obsesionado</h1>
          <h3 className="titulo-3 decoracion-titulo-destacado">
            con la Tecnología y el Marketing.
          </h3>
          <TextoEjemplo style={textoCentrado} />
        </Columna>
      </ContColumnas>
      <ContColumnas>
        <Columna style={sinBordeMarginTop}>
          <h1 className="titulo-1 titulo-degradado">Título 1</h1>
          <motion.h2
            className="titulo-2 color-texto-primario"
            initial={{ y: -15, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 10,
                mass: 0.75,
                stiffness: 100,
                delay: 0.5,
              },
            }}
          >
            Título 2
          </motion.h2>
          <h3 className="titulo-3 color-texto-primario">Título 3</h3>
          <motion.h4
            className="titulo-4 color-texto-primario"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                damping: 10,
                mass: 0.75,
                stiffness: 100,
                delay: 0.5,
              },
            }}
          >
            <span style={textoNegrilla}>Título 4:</span> Este es, quizás, el
            único título que puede ser largo y de más de un renglón. Esto es,
            porque este puede ser un tipo de título que simplemente reemplace a
            un párrafo, pero con un texto un poco más destacado, o para
            infiltrar títulos entre el texto.
          </motion.h4>
        </Columna>
      </ContColumnas>
      <ContColumnas>
        <Columna style={primeraColumna}>
          <h3 className="titulo-3">Desde 2007,</h3>
          <h2 className="titulo-2 titulo-degradado -mt-2 -mb-3">Obsesionado</h2>
          <h4 className="titulo-4 decoracion-texto-destacado">
            con la Tecnología y el Marketing
          </h4>
          <TextoEjemplo style={textoCentrado} />
        </Columna>
        <Columna style={segundaColumna}>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{
              opacity: 1,
              x: -25,
              transition: {
                type: "spring",
                damping: 10,
                mass: 0.75,
                stiffness: 50,
                delay: 1,
              },
            }}
          >
            <FotoBorde
              style={fotoRedonda}
              src={require("../assets/ejemplo-eliminar.jpg")}
              title={t("AltFotoInternas.title", { framework: "React" })}
              alt={t("AltFotoInternas.title", { framework: "React" })}
            />
          </motion.div>
        </Columna>
      </ContColumnas>
      <Seccion style={sinBorde}>
        <TextoEjemplo />
        <FotoSinBorde
          style={paddingLados}
          src={require("../assets/logo-juan-jaramillo.png")}
          title={t("AltFotoInternas.title", { framework: "React" })}
          alt={t("AltFotoInternas.title", { framework: "React" })}
        />
      </Seccion>
      <ContColumnas>
        <Columna style={tresColumnasBorde}>
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
      <Footer />
    </ContInternas>
  );
}

export default About;

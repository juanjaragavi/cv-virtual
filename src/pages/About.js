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
import PopoverContacto from "../media/PopoverContacto";

const transition = {
  duration: 12,
  ease: "easeInOut",
  repeat: Infinity,
  repeatDelay: 1,
  delay: 2,
};
const transitionMision = {
  duration: 3,
  ease: "easeInOut",
  repeat: Infinity,
  repeatDelay: 0.5,
  delay: 0.5,
};

function About() {
  const fotoRedonda = { borderRadius: "9999px" };
  const sinBordeMarginTop = { border: 0, marginTop: 30 };
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
    marginTop: 80,
    marginBottom: 100,
    paddingLeft: "10%",
    paddingRight: "10%",
    border: 0,
  };
  const marginTop = { marginTop: 40 };

  const { t } = useTranslation("common");

  return (
    <ContInternas>
      <ContColumnas style={marginTop}>
        <Columna style={primeraColumna}>
          <LogosFlotantes />
          <FotoSinBorde
            src={require(`../assets/ejemplo-eliminar.png`)}
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
          <motion.h2
            className="mt-10 titulo-2 color-texto-primario"
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
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 10,
                mass: 0.75,
                stiffness: 50,
                delay: 1,
              },
            }}
          >
            <h3 className="titulo-3">Desde 2007,</h3>
            <h2 className="titulo-2 titulo-degradado -mt-2 -mb-3">
              Obsesionado
            </h2>
            <h4 className="titulo-4 decoracion-texto-destacado">
              con la Tecnología y el Marketing
            </h4>
            <TextoEjemplo style={textoCentrado} />
          </motion.div>
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
              src={require(`../assets/ejemplo-eliminar.jpg`)}
              title={t("AltFotoInternas.title", { framework: "React" })}
              alt={t("AltFotoInternas.title", { framework: "React" })}
            />
          </motion.div>
        </Columna>
      </ContColumnas>
      <Seccion style={paddingLados}>
        <h3 className="titulo-3 -mb-0.5 ">
          Ahora, mi{" "}
          <motion.span
            className="-ml-[0.3rem] -mr-[0.76rem] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
            animate={{
              opacity: [0, 1, 1, 1, 0, 0],
            }}
            transition={transitionMision}
          >
            misión
          </motion.span>
          <motion.span
            className="-ml-[5rem] bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-orange-500"
            animate={{
              opacity: [1, 0, 0, 0, 1, 1],
            }}
            transition={transitionMision}
          >
            visión
          </motion.span>
        </h3>
        <h3 className="titulo-3">es poner todos mis</h3>
        <h3 className="titulo-3 decoracion-titulo-destacado">
          16 años de experiencia
        </h3>
        <h2 className="titulo-2">al servicio de tu</h2>
        <motion.h2
          className="-mt-[0.2em] titulo-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500"
          animate={{
            opacity: [1, 0, 0, 0, 0, 0, 0, 0, 1],
          }}
          transition={transition}
        >
          Emprendimiento
        </motion.h2>
        <motion.h2
          className="-mt-[1.1em] titulo-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500"
          animate={{
            opacity: [0, 1, 0, 0, 0, 0, 0, 0, 0],
          }}
          transition={transition}
        >
          Organización
        </motion.h2>
        <motion.h2
          className="-mt-[1.1em] titulo-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500"
          animate={{
            opacity: [0, 0, 1, 0, 0, 0, 0, 0, 0],
          }}
          transition={transition}
        >
          Startup
        </motion.h2>
        <motion.h2
          className="-mt-[1.1em] titulo-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500"
          animate={{
            opacity: [0, 0, 0, 1, 0, 0, 0, 0, 0],
          }}
          transition={transition}
        >
          Empresa
        </motion.h2>
        <motion.h2
          className="-mt-[1.1em] titulo-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500"
          animate={{
            opacity: [0, 0, 0, 0, 1, 0, 0, 0, 0],
          }}
          transition={transition}
        >
          Corporativo
        </motion.h2>
        <motion.h2
          className="-mt-[1.1em] titulo-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500"
          animate={{
            opacity: [0, 0, 0, 0, 0, 1, 0, 0, 0],
          }}
          transition={transition}
        >
          Negocio
        </motion.h2>
        <motion.h2
          className="-mt-[1.1em] titulo-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500"
          animate={{
            opacity: [0, 0, 0, 0, 0, 0, 1, 0, 0],
          }}
          transition={transition}
        >
          Sociedad
        </motion.h2>
        <motion.h2
          className="-mt-[1.1em] titulo-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500"
          animate={{
            opacity: [0, 0, 0, 0, 0, 0, 0, 1, 0],
          }}
          transition={transition}
        >
          Firma
        </motion.h2>
        <PopoverContacto />
      </Seccion>
      <Footer />
    </ContInternas>
  );
}

export default About;

import React from "react";
import AWSUrl from "../media/AWSUrl";
import { motion } from "framer-motion";
import Seccion from "../layouts/Seccion";
import Columna from "../layouts/Columna";
import Footer from "../components/Footer";
import FotoBorde from "../media/FotoBorde";
import AvisoScroll from "../media/AvisoScroll";
import { useTranslation } from "react-i18next";
import FotoSinBorde from "../media/FotoSinBorde";
import ContInternas from "../layouts/ContInternas";
import ContColumnas from "../layouts/ContColumnas";
import LogosFlotantes from "../media/LogosFlotantes";
import PopoverContacto from "../media/PopoverContacto";
import { Code, Brush, BrandHipchat, ChartBar, Brain } from "tabler-icons-react";

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
  const sinBordeMarginTop = { border: 0, marginTop: 60 };
  const segundaColumna = { order: 9999, flexBasis: "50%", border: 0 };
  const primeraColumna = { order: -9999, border: 0, flexBasis: "50%" };
  const textoCentrado = {
    marginTop: 10,
    paddingleft: 20,
    paddingRight: 20,
    textAlign: "center",
  };
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
            src={AWSUrl.URL + "ejemplo-eliminar.png"}
            title={t("AltFotoInternas.title", { framework: "React" })}
            alt={t("AltFotoInternas.title", { framework: "React" })}
          />
        </Columna>
        <Columna style={segundaColumna}>
          <h3 className="titulo-3 mr-1.5 mt-16">
            {t("Desde.title", { framework: "React" })}
            <span className="pl-7"></span>2007,
          </h3>
          <h1 className="titulo-1 titulo-degradado -mt-7 -mb-3">
            {t("Obsesionado.title", { framework: "React" })}
          </h1>
          <h3 className="titulo-3 decoracion-titulo-destacado">
            {t("TecMarketing.title", { framework: "React" })}
          </h3>
          <p className="parrafo" style={textoCentrado}>
            {t("ParrafoIntro.title", { framework: "React" })}
          </p>
          <AvisoScroll />
        </Columna>
      </ContColumnas>
      <ContColumnas>
        <Columna style={sinBordeMarginTop}>
          <motion.h3
            className="titulo-3 color-texto-primario"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                damping: 10,
                mass: 0.75,
                stiffness: 100,
                delay: 0.3,
              },
            }}
          >
            {t("ParrafoDos.title", { framework: "React" })}
          </motion.h3>
        </Columna>
      </ContColumnas>
      <ContColumnas>
        <Columna style={primeraColumna}>
          <div>
            <motion.ul
              className="listado-de-tareas"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  damping: 10,
                  mass: 0.75,
                  stiffness: 50,
                  delayChildren: 1.5,
                },
              }}
            >
              <motion.li
                className="group"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    damping: 10,
                    mass: 0.75,
                    stiffness: 50,
                    delay: 1,
                  },
                }}
              >
                <Brush className="icono-listado-de-tareas group-hover:scale-125 transiciones" />
                <span className="group-hover:underline group-hover:decoration-3 group-hover:decoration-pink-500 group-hover:underline-offset-4 transiciones">
                  {t("Task1.title", { framework: "React" })}
                </span>
              </motion.li>
              <motion.li
                className="group"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    damping: 10,
                    mass: 0.75,
                    stiffness: 50,
                    delay: 1,
                  },
                }}
              >
                <Code className="icono-listado-de-tareas group-hover:scale-125 transiciones" />
                <span className="group-hover:underline group-hover:decoration-3 group-hover:decoration-pink-500 group-hover:underline-offset-4 transiciones">
                  {t("Task2.title", { framework: "React" })}
                </span>
              </motion.li>
              <motion.li
                className="group"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    damping: 10,
                    mass: 0.75,
                    stiffness: 50,
                    delay: 1,
                  },
                }}
              >
                <Brain className="icono-listado-de-tareas group-hover:scale-125 transiciones" />
                <span className="group-hover:underline group-hover:decoration-3 group-hover:decoration-pink-500 group-hover:underline-offset-4 transiciones">
                  {t("Task3.title", { framework: "React" })}
                </span>
              </motion.li>
              <motion.li
                className="group"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    damping: 10,
                    mass: 0.75,
                    stiffness: 50,
                    delay: 1,
                  },
                }}
              >
                <BrandHipchat className="icono-listado-de-tareas group-hover:scale-125 transiciones" />
                <span className="group-hover:underline group-hover:decoration-3 group-hover:decoration-pink-500 group-hover:underline-offset-4 transiciones">
                  {t("Task4.title", { framework: "React" })}
                </span>
              </motion.li>
              <motion.li
                className="group"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    damping: 10,
                    mass: 0.75,
                    stiffness: 50,
                    delay: 1,
                  },
                }}
              >
                <ChartBar className="icono-listado-de-tareas group-hover:scale-125 transiciones" />
                <span className="group-hover:underline group-hover:decoration-3 group-hover:decoration-pink-500 group-hover:underline-offset-4 transiciones">
                  {t("Task5.title", { framework: "React" })}
                </span>
              </motion.li>
            </motion.ul>
          </div>
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
              className="img-circular-borde-rosa-internas transiciones"
              src={AWSUrl.URL + "ejemplo-eliminar.jpg"}
              title={t("AltFotoInternas.title", { framework: "React" })}
              alt={t("AltFotoInternas.title", { framework: "React" })}
            />
          </motion.div>
        </Columna>
      </ContColumnas>
      <Seccion style={paddingLados}>
        <h3 className="titulo-3 -mb-0.5 ">
          {t("AhoraMi.title", { framework: "React" })}{" "}
          <motion.span
            className="-ml-[0.3rem] -mr-[0.76rem] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
            animate={{
              opacity: [0, 1, 1, 1, 0, 0],
            }}
            transition={transitionMision}
          >
            {t("Mision.title", { framework: "React" })}
          </motion.span>
          <motion.span
            className="-ml-[5rem] bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-orange-500"
            animate={{
              opacity: [1, 0, 0, 0, 1, 1],
            }}
            transition={transitionMision}
          >
            {t("Vision.title", { framework: "React" })}
          </motion.span>
        </h3>
        <h3 className="titulo-3">
          {t("EsPonerMis.title", { framework: "React" })}
        </h3>
        <h3 className="titulo-3 decoracion-titulo-destacado">
          {t("16YrsOfXp.title", { framework: "React" })}
        </h3>
        <h2 className="titulo-2">
          {t("AlServicioDeTu.title", { framework: "React" })}
        </h2>
        <motion.h2
          className="-mt-[0.2em] titulo-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500"
          animate={{
            opacity: [1, 0, 0, 0, 0, 0, 0, 0, 1],
          }}
          transition={transition}
        >
          {t("Emprendimiento.title", { framework: "React" })}
        </motion.h2>
        <motion.h2
          className="-mt-[1.1em] titulo-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500"
          animate={{
            opacity: [0, 1, 0, 0, 0, 0, 0, 0, 0],
          }}
          transition={transition}
        >
          {t("Organizacion.title", { framework: "React" })}
        </motion.h2>
        <motion.h2
          className="-mt-[1.1em] titulo-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500"
          animate={{
            opacity: [0, 0, 1, 0, 0, 0, 0, 0, 0],
          }}
          transition={transition}
        >
          {t("Startup.title", { framework: "React" })}
        </motion.h2>
        <motion.h2
          className="-mt-[1.1em] titulo-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500"
          animate={{
            opacity: [0, 0, 0, 1, 0, 0, 0, 0, 0],
          }}
          transition={transition}
        >
          {t("Empresa.title", { framework: "React" })}
        </motion.h2>
        <motion.h2
          className="-mt-[1.1em] titulo-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500"
          animate={{
            opacity: [0, 0, 0, 0, 1, 0, 0, 0, 0],
          }}
          transition={transition}
        >
          {t("Corporativo.title", { framework: "React" })}
        </motion.h2>
        <motion.h2
          className="-mt-[1.1em] titulo-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500"
          animate={{
            opacity: [0, 0, 0, 0, 0, 1, 0, 0, 0],
          }}
          transition={transition}
        >
          {t("Negocio.title", { framework: "React" })}
        </motion.h2>
        <motion.h2
          className="-mt-[1.1em] titulo-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500"
          animate={{
            opacity: [0, 0, 0, 0, 0, 0, 1, 0, 0],
          }}
          transition={transition}
        >
          {t("Sociedad.title", { framework: "React" })}
        </motion.h2>
        <motion.h2
          className="-mt-[1.1em] titulo-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500"
          animate={{
            opacity: [0, 0, 0, 0, 0, 0, 0, 1, 0],
          }}
          transition={transition}
        >
          {t("Firma.title", { framework: "React" })}
        </motion.h2>
        <PopoverContacto />
      </Seccion>
      <Footer />
    </ContInternas>
  );
}

export default About;

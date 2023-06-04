import AWSUrl from "../media/AWSUrl";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Seccion from "../layouts/Seccion";
import Columna from "../layouts/Columna";
import Footer from "../components/Footer";
import FotoBorde from "../media/FotoBorde";
import AvisoScroll from "../media/AvisoScroll";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";
import FotoSinBorde from "../media/FotoSinBorde";
import ContInternas from "../layouts/ContInternas";
import ContColumnas from "../layouts/ContColumnas";
import LogosFlotantes from "../media/LogosFlotantes";
import PopoverContacto from "../media/PopoverContacto";
import { Code, Brush, BrandHipchat, Brain } from "tabler-icons-react";

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

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const textVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

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
          <h1 className="titulo-1 titulo-degradado -mb-3 -mt-7">
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
                <Brush className="icono-listado-de-tareas transiciones group-hover:scale-125" />
                <span
                  className="group-hover:decoration-3 transiciones group- group-hover:decoration-pink-500 group--offset-4"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {t("Task1.title", { framework: "React" })}
                </span>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <p
                        className="pl-8 text-lg font-light dark:font-light transition-all duration-300 ease-in-out after:content-['_↗']  hover:font-light hover:text-white  dark:text-white dark:hover:font-light dark:hover:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        Diseño experiencias de usuario únicas e innovadoras para
                        productos basados en inteligencia artificial, teniendo
                        en cuenta las necesidades, expectativas y emociones de
                        los usuarios finales, así como los objetivos y la visión
                        de los clientes.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
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
                <Code className="icono-listado-de-tareas transiciones group-hover:scale-125" />
                <span
                  className="group-hover:decoration-3 transiciones group- group-hover:decoration-pink-500 group--offset-4"
                  onClick={() => setIsOpen1(!isOpen1)}
                >
                  {t("Task2.title", { framework: "React" })}
                </span>
                <AnimatePresence>
                  {isOpen1 && (
                    <motion.div
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <p
                        className="pl-8 text-lg font-normal dark:font-light text-gray-800  transition-all duration-300 ease-in-out after:content-['_↗']  hover:font-light hover:text-white  dark:text-white dark:hover:font-light dark:hover:text-white"
                        onClick={() => setIsOpen1(!isOpen1)}
                      >
                        Desarrollo soluciones integrales con inteligencia
                        artificial que funcionan en cualquier plataforma y
                        dispositivo, utilizando las mejores prácticas y
                        tecnologías para crear interfaces atractivas, intuitivas
                        y accesibles, y sistemas robustos, escalables y seguros.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
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
                <Brain className="icono-listado-de-tareas transiciones group-hover:scale-125" />
                <span
                  className="group-hover:decoration-3 transiciones group- group-hover:decoration-pink-500 group--offset-4"
                  onClick={() => setIsOpen2(!isOpen2)}
                >
                  {t("Task3.title", { framework: "React" })}
                </span>
                <AnimatePresence>
                  {isOpen2 && (
                    <motion.div
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <p
                        className="pl-8 text-lg font-normal dark:font-light text-pink-800  transition-all duration-300 ease-in-out after:content-['_↗']  hover:font-light hover:text-white  dark:text-white dark:hover:font-light dark:hover:text-white"
                        onClick={() => setIsOpen2(!isOpen2)}
                      >
                        Aplico la inteligencia artificial a cualquier dominio o
                        problema para optimizar procesos, generar insights y
                        crear valor, utilizando técnicas avanzadas de
                        aprendizaje automático, procesamiento del lenguaje
                        natural, visión por computador y otras áreas
                        relacionadas.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
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
                <BrandHipchat className="icono-listado-de-tareas transiciones group-hover:scale-125" />
                <span
                  className="group-hover:decoration-3 transiciones group- group-hover:decoration-pink-500 group--offset-4"
                  onClick={() => setIsOpen3(!isOpen3)}
                >
                  {t("Task4.title", { framework: "React" })}
                </span>
                <AnimatePresence>
                  {isOpen3 && (
                    <motion.div
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <p
                        className="pl-8 text-lg font-bold dark:font-light text-gray-800  transition-all duration-300 ease-in-out after:content-['_↗']  hover:font-light hover:text-white  dark:text-white dark:hover:font-light dark:hover:text-white"
                        onClick={() => setIsOpen3(!isOpen3)}
                      >
                        Creo prompts personalizados y detallados para ChatGPT de
                        OpenAI que cumplen con cualquier objetivo o propósito,
                        utilizando un proceso iterativo y centrado en el usuario
                        para definir, diseñar y evaluar prompts que se ajusten a
                        las necesidades y los requisitos de cada cliente o caso
                        de uso.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
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
            className="-ml-[0.3rem] -mr-[0.76rem] bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"
            animate={{
              opacity: [0, 1, 1, 1, 0, 0],
            }}
            transition={transitionMision}
          >
            {t("Mision.title", { framework: "React" })}
          </motion.span>
          <motion.span
            className="-ml-[5rem] bg-gradient-to-r from-violet-500 to-orange-500 bg-clip-text text-transparent"
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
          className="titulo-2 -mt-[0.2em] bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          animate={{
            opacity: [1, 0, 0, 0, 0, 0, 0, 0, 1],
          }}
          transition={transition}
        >
          {t("Emprendimiento.title", { framework: "React" })}
        </motion.h2>
        <motion.h2
          className="titulo-2 -mt-[1.1em] bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          animate={{
            opacity: [0, 1, 0, 0, 0, 0, 0, 0, 0],
          }}
          transition={transition}
        >
          {t("Organizacion.title", { framework: "React" })}
        </motion.h2>
        <motion.h2
          className="titulo-2 -mt-[1.1em] bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          animate={{
            opacity: [0, 0, 1, 0, 0, 0, 0, 0, 0],
          }}
          transition={transition}
        >
          {t("Startup.title", { framework: "React" })}
        </motion.h2>
        <motion.h2
          className="titulo-2 -mt-[1.1em] bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          animate={{
            opacity: [0, 0, 0, 1, 0, 0, 0, 0, 0],
          }}
          transition={transition}
        >
          {t("Empresa.title", { framework: "React" })}
        </motion.h2>
        <motion.h2
          className="titulo-2 -mt-[1.1em] bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          animate={{
            opacity: [0, 0, 0, 0, 1, 0, 0, 0, 0],
          }}
          transition={transition}
        >
          {t("Corporativo.title", { framework: "React" })}
        </motion.h2>
        <motion.h2
          className="titulo-2 -mt-[1.1em] bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          animate={{
            opacity: [0, 0, 0, 0, 0, 1, 0, 0, 0],
          }}
          transition={transition}
        >
          {t("Negocio.title", { framework: "React" })}
        </motion.h2>
        <motion.h2
          className="titulo-2 -mt-[1.1em] bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          animate={{
            opacity: [0, 0, 0, 0, 0, 0, 1, 0, 0],
          }}
          transition={transition}
        >
          {t("Sociedad.title", { framework: "React" })}
        </motion.h2>
        <motion.h2
          className="titulo-2 -mt-[1.1em] bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
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

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
import "react-vertical-timeline-component/style.min.css";
import SliderClientesDestacados from "../media/SliderClientesDestacados";
import {
  Code,
  ChartInfographic,
  BuildingCommunity,
  Brush,
  BrandHipchat,
  Brain,
} from "tabler-icons-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

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
  const sinBordeMarginTop = { border: 0 };
  const sinBorde = { border: 0 };
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
  const menosPaddingLados = {
    marginBottom: 60,
    border: 0,
  };
  const menosPaddingLogos = {
    width: "100%",
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 0,
    marginBottom: 30,
    border: 0,
  };

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
  const Tradebog = () => {
    window.open("https://tradebog.com", "_blank");
  };
  const FreshWorks = () => {
    window.open("https://www.linkedin.com/company/5317002/", "_blank");
  };
  const LaQuintaP = () => {
    window.open("https://www.linkedin.com/company/la-quinta-p/", "_blank");
  };

  return (
    <ContInternas>
      <ContColumnas>
        <Columna style={sinBorde}>
          <LogosFlotantes />
          <FotoSinBorde
            src={AWSUrl.URL + "ejemplo-eliminar.webp"}
            title={t("AltFotoInternas.title", { framework: "React" })}
            alt={t("AltFotoInternas.title", { framework: "React" })}
          />
        </Columna>
        <Columna style={sinBorde}>
          <h3 className="titulo-3 mr-1.5 mt-3 sm:mt-[20%]">
            {t("Desde.title", { framework: "React" })}
            <span className="ml-3 pl-2 sm:pl-7"></span>2007,
          </h3>
          <h1 className="titulo-1 titulo-degradado -mb-2 -mt-4 sm:-mt-7">
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
            className="titulo-3 px-4 sm:mt-20 sm:px-24"
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
        <Columna style={sinBorde}>
          <motion.ul
            className="listado-de-tareas mb-0 mt-0 sm:mt-32"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                damping: 10,
                mass: 0.75,
                stiffness: 50,
                delayChildren: 0.5,
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
                  delay: 0.5,
                },
              }}
            >
              <Brush className="icono-listado-de-tareas transiciones group-hover:scale-125" />
              <span
                className="titulo-servicios-perfil-about transiciones"
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
                      className="descripcion-servicios-perfil-about transiciones"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {t("DescriptionTask1.title", { framework: "React" })}
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
                  delay: 0.5,
                },
              }}
            >
              <Code className="icono-listado-de-tareas transiciones group-hover:scale-125" />
              <span
                className="titulo-servicios-perfil-about transiciones"
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
                      className="descripcion-servicios-perfil-about transiciones"
                      onClick={() => setIsOpen1(!isOpen1)}
                    >
                      {t("DescriptionTask2.title", { framework: "React" })}
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
                  delay: 0.5,
                },
              }}
            >
              <Brain className="icono-listado-de-tareas transiciones group-hover:scale-125" />
              <span
                className="titulo-servicios-perfil-about transiciones"
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
                      className="descripcion-servicios-perfil-about transiciones"
                      onClick={() => setIsOpen2(!isOpen2)}
                    >
                      {t("DescriptionTask3.title", { framework: "React" })}
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
                  delay: 0.5,
                },
              }}
            >
              <BrandHipchat className="icono-listado-de-tareas transiciones group-hover:scale-125" />
              <span
                className="titulo-servicios-perfil-about transiciones"
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
                      className="descripcion-servicios-perfil-about transiciones"
                      onClick={() => setIsOpen3(!isOpen3)}
                    >
                      {t("DescriptionTask4.title", { framework: "React" })}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          </motion.ul>
          <div className="invisible sm:visible md:visible lg:visible xl:visible 2xl:visible">
            <AvisoScroll />
          </div>
        </Columna>
        <Columna style={sinBorde}>
          <motion.div
            className="-mt-20 w-full"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                damping: 10,
                mass: 0.75,
                stiffness: 50,
                delay: 0.5,
              },
            }}
          >
            <FotoBorde
              className="img-circular-borde-rosa-internas transiciones"
              src={AWSUrl.URL + "servicios-landing-tech.webp"}
              title={t("AltFotoInternas.title", { framework: "React" })}
              alt={t("AltFotoInternas.title", { framework: "React" })}
            />
          </motion.div>
        </Columna>
      </ContColumnas>
      <Seccion style={menosPaddingLados}>
        <h2 className="titulo-2 ml-2 sm:-mb-1.5 underline decoration-white decoration-4 underline-offset-8">
          {t("ConoceMi.title", { framework: "React" })}{" "}
          <span className="sm:-ml-1.1 sm:-mr-[1rem] bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            {t("Experiencia.title", { framework: "React" })}
          </span>
        </h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="spartan vertical-timeline-element--work text-lg"
            contentStyle={{ background: "#ec4899", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #ec4899" }}
            date={t("XpFecha1.title", { framework: "React" })}
            iconStyle={{ background: "#ec4899", color: "#fff" }}
            icon={<Brain />}
          >
            <h3 className="titulo-3 vertical-timeline-element-title">
              {t("XpTitulo1.title", { framework: "React" })}
            </h3>
            <h4 className="titulo-4 spartan vertical-timeline-element-subtitle text-center">
              {t("XpEmpresa1.title", { framework: "React" })}
            </h4>
            <p className="spartan">
              {t("XpDescripcion1.title", { framework: "React" })}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="spartan vertical-timeline-element--work text-lg"
            contentStyle={{ background: "#ec4899", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #ec4899" }}
            date={t("XpFecha2.title", { framework: "React" })}
            iconStyle={{ background: "#ec4899", color: "#fff" }}
            icon={<Brush />}
          >
            <h3 className="titulo-3 vertical-timeline-element-title">
              {t("XpTitulo2.title", { framework: "React" })}
            </h3>
            <h4 className="titulo-4 spartan vertical-timeline-element-subtitle text-center">
              {t("XpEmpresa2.title", { framework: "React" })}
            </h4>
            <p className="spartan">
              {t("XpDescripcion2.title", { framework: "React" })}
            </p>
            <p></p>
            <h4
              onClick={Tradebog}
              className="transiciones titulo-4 spartan vertical-timeline-element-subtitle cursor-pointer text-center hover:underline"
            >
              {t("XpLink2.title", { framework: "React" })}
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="spartan vertical-timeline-element--work text-lg"
            contentStyle={{ background: "#a855f7", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #a855f7" }}
            date={t("XpFecha3.title", { framework: "React" })}
            iconStyle={{ background: "#a855f7", color: "#fff" }}
            icon={<BuildingCommunity />}
          >
            <h3 className="titulo-3 vertical-timeline-element-title">
              {t("XpTitulo3.title", { framework: "React" })}
            </h3>
            <h4 className="titulo-4 vertical-timeline-element-subtitle text-center">
              {t("XpEmpresa3.title", { framework: "React" })}
            </h4>
            <p>{t("XpDescripcion3.title", { framework: "React" })}</p>
            <p></p>
            <h4
              onClick={FreshWorks}
              className="transiciones titulo-4 spartan vertical-timeline-element-subtitle cursor-pointer text-center hover:underline"
            >
              {t("XpLink3.title", { framework: "React" })}
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="spartan vertical-timeline-element--work text-lg"
            contentStyle={{ background: "#8b5cf6", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #8b5cf6" }}
            date={t("XpFecha4.title", { framework: "React" })}
            iconStyle={{ background: "#8b5cf6", color: "#fff" }}
            icon={<ChartInfographic />}
          >
            <h3 className="titulo-3 vertical-timeline-element-title">
              {t("XpTitulo4.title", { framework: "React" })}
            </h3>
            <h4 className="titulo-4 vertical-timeline-element-subtitle">
              {t("XpEmpresa4.title", { framework: "React" })}
            </h4>
            <p>{t("XpDescripcion4.title", { framework: "React" })}</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="spartan vertical-timeline-element--work text-lg"
            contentStyle={{ background: "#6366f1", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #6366f1" }}
            date={t("XpFecha5.title", { framework: "React" })}
            iconStyle={{ background: "#6366f1", color: "#fff" }}
            icon={<BuildingCommunity />}
          >
            <h3 className="titulo-3 vertical-timeline-element-title">
              {t("XpTitulo5.title", { framework: "React" })}
            </h3>
            <h4 className="titulo-4 vertical-timeline-element-subtitle">
              {t("XpEmpresa5.title", { framework: "React" })}
            </h4>
            <p>{t("XpDescripcion5.title", { framework: "React" })}</p>
            <p></p>
            <h4
              onClick={LaQuintaP}
              className="transiciones titulo-4 spartan vertical-timeline-element-subtitle cursor-pointer text-center hover:underline"
            >
              {t("XpLink5.title", { framework: "React" })}
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Seccion>
      <div className="grid place-items-center -mt-[4.5rem] pt-20 mx-3 sm:mx-1 border-2 sm:border-4 borde-redondeado">
        <div className="spartan">
          <h2 className="text-center titulo-2">
            {t("Clientes.title", { framework: "React" })}{" "}
            <span className="-ml-0.5 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              {t("Destacados.title", { framework: "React" })}
            </span>
          </h2>
        </div>
        <Seccion style={menosPaddingLogos}>
          <SliderClientesDestacados />
        </Seccion>
      </div>
      <Seccion style={paddingLados}>
        <h3 className="titulo-3 -mb-0.5">
          {t("AhoraMi.title", { framework: "React" })}{" "}
          <motion.span
            className="sm:-ml-[0.3rem] sm:-mr-[0.76rem] bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"
            animate={{
              opacity: [0, 1, 1, 1, 0, 0],
            }}
            transition={transitionMision}
          >
            {t("Mision.title", { framework: "React" })}
          </motion.span>
          <motion.span
            className="sm:-ml-[5rem] bg-gradient-to-r from-violet-500 to-orange-500 bg-clip-text text-transparent"
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
        <h2 className="titulo-2 mt-1 sm:mt-2">
          {t("AlServicioDeTu.title", { framework: "React" })}
        </h2>
        <motion.h2
          className="titulo-2 mt-1 sm:mt-1 bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
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

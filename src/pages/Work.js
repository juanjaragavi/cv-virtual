import React from "react";
import AWSUrl from "../media/AWSUrl";
import { motion } from "framer-motion";
import Clock from "../components/Clock";
import Seccion from "../layouts/Seccion";
import Columna from "../layouts/Columna";
import Footer from "../components/Footer";
import Calendar from "../components/Calendar";
import { useTranslation } from "react-i18next";
import FotoSinBorde from "../media/FotoSinBorde";
import { Brush, Brain } from "tabler-icons-react";
import Calculator from "../components/Calculator";
import ContColumnas from "../layouts/ContColumnas";
import ContInternas from "../layouts/ContInternas";
import CurrencyConverter from "../components/CurrencyConverter";

function Work() {
  const { t } = useTranslation("common");
  const sinBorde = {
    border: 0,
  };
  const fotosRedondeadas = {
    borderRadius: "9999px",
    borderWidth: "2px",
    borderColor: "#FFFFFF",
    marginLeft: "33px",
    marginRight: "33px",
    marginTop: "40px",
    marginBottom: "40px",
  };
  const fotosInterfaces = {
    marginLeft: "33px",
    marginRight: "33px",
    marginTop: "10px",
    marginBottom: "10px",
  };
  const fotoLogoGooglePlay = {
    paddingLeft: "5.3rem",
    paddingRight: "5.3rem",
  };
  const marginTop5 = {
    marginTop: "20px",
    marginBottom: "20px",
  };
  const ZioneCosmetics = () => {
    window.open("https://zionecosmetics.com", "_blank");
  };
  const ElCorteIngles = () => {
    window.open("https://elcorteingles.es", "_blank");
  };
  const ZioneShopApp = () => {
    window.open("https://elcorteingles.es", "_blank");
  };
  return (
    <ContInternas>
      <Seccion>
        <motion.div
          className="group mb-5 mt-5"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              damping: 10,
              mass: 0.75,
              stiffness: 50,
              delay: 0.5,
            },
          }}
        >
          <div className="flex w-full flex-row pb-2 pt-5">
            <Brain className="icono-listado-de-tareas transiciones mt-0.5 group-hover:scale-125" />
            <h2 className="spartan transiciones text-center text-4xl font-bold">
              {t("IAPromptEngineering.title", { framework: "React" })}
            </h2>
          </div>
          <p className="spartan ml-10 mr-10 text-justify text-2xl font-light">
            {t("DescIAPromptEngineering.title", { framework: "React" })}
          </p>
        </motion.div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              damping: 10,
              mass: 0.75,
              stiffness: 50,
              delay: 0.5,
            },
          }}
        >
          <ContColumnas>
            <Columna style={sinBorde}>
              <Calculator />
            </Columna>
            <Columna style={sinBorde}>
              <Calendar />
            </Columna>
            <Columna style={sinBorde}>
              <CurrencyConverter />
              <Clock />
            </Columna>
          </ContColumnas>
        </motion.div>
        <motion.div
          className="group mb-5 mt-5"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              damping: 10,
              mass: 0.75,
              stiffness: 50,
              delay: 0.5,
            },
          }}
        >
          <div className="flex w-full flex-row pb-2 pt-5">
            <Brain className="icono-listado-de-tareas transiciones mt-0.5 group-hover:scale-125" />
            <h2 className="spartan transiciones text-center text-4xl font-bold">
              {t("IAGeneracionDeImagenes.title", { framework: "React" })}
            </h2>
          </div>
          <p className="spartan ml-10 mr-10 text-justify text-2xl font-light">
            {t("DescIAGeneracionDeImagenes.title", { framework: "React" })}
          </p>
        </motion.div>
        <ContColumnas>
          <div className="flex flex-col">
            <motion.section
              className="mt-2 flex flex-row"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 10,
                  mass: 0.75,
                  stiffness: 50,
                  delay: 0.5,
                },
              }}
            >
              <FotoSinBorde
                src={AWSUrl.URL + "1-generated-images.jpg"}
                title={t("AltFotoInternas.title", { framework: "React" })}
                alt={t("AltFotoInternas.title", { framework: "React" })}
              />
              <FotoSinBorde
                src={AWSUrl.URL + "2-generated-images.jpg"}
                title={t("AltFotoInternas.title", { framework: "React" })}
                alt={t("AltFotoInternas.title", { framework: "React" })}
              />
              <FotoSinBorde
                src={AWSUrl.URL + "3-generated-images.jpg"}
                title={t("AltFotoInternas.title", { framework: "React" })}
                alt={t("AltFotoInternas.title", { framework: "React" })}
              />
              <FotoSinBorde
                src={AWSUrl.URL + "4-generated-images.jpg"}
                title={t("AltFotoInternas.title", { framework: "React" })}
                alt={t("AltFotoInternas.title", { framework: "React" })}
              />
            </motion.section>
            <motion.section
              className="mb-2 mt-2 flex flex-row"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 10,
                  mass: 0.75,
                  stiffness: 50,
                  delay: 0.5,
                },
              }}
            >
              <FotoSinBorde
                src={AWSUrl.URL + "5-generated-images.jpg"}
                title={t("AltFotoInternas.title", { framework: "React" })}
                alt={t("AltFotoInternas.title", { framework: "React" })}
              />
              <FotoSinBorde
                src={AWSUrl.URL + "6-generated-images.jpg"}
                title={t("AltFotoInternas.title", { framework: "React" })}
                alt={t("AltFotoInternas.title", { framework: "React" })}
              />
              <FotoSinBorde
                src={AWSUrl.URL + "7-generated-images.jpg"}
                title={t("AltFotoInternas.title", { framework: "React" })}
                alt={t("AltFotoInternas.title", { framework: "React" })}
              />
              <FotoSinBorde
                src={AWSUrl.URL + "8-generated-images.jpg"}
                title={t("AltFotoInternas.title", { framework: "React" })}
                alt={t("AltFotoInternas.title", { framework: "React" })}
              />
            </motion.section>
          </div>
        </ContColumnas>
        <motion.div
          className="group mb-5 mt-5"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              damping: 10,
              mass: 0.75,
              stiffness: 50,
              delay: 0.5,
            },
          }}
        >
          <div className="flex w-full flex-row pb-2 pt-5">
            <Brain className="icono-listado-de-tareas transiciones mt-0.5 group-hover:scale-125" />
            <h2 className="spartan transiciones text-center text-4xl font-bold">
              {t("IAConsultoriaImp.title", { framework: "React" })}
            </h2>
          </div>
          <p className="spartan ml-10 mr-10 text-justify text-2xl font-light">
            {t("DescIAConsultoriaImp.title", { framework: "React" })}
          </p>
        </motion.div>
        <ContColumnas>
          <div className="flex flex-col">
            <motion.section
              className="mb-5 flex flex-row"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 10,
                  mass: 0.75,
                  stiffness: 50,
                  delay: 0.5,
                },
              }}
            >
              <div className="flex flex-col">
                <FotoSinBorde
                  style={fotosRedondeadas}
                  src={AWSUrl.URL + "iAConsultoria-1.jpg"}
                  title={t("AltFotoInternas.title", { framework: "React" })}
                  alt={t("AltFotoInternas.title", { framework: "React" })}
                />
                <h3 className="spartan transiciones text-center text-3xl font-bold">
                  {t("IAConsultoria1.title", { framework: "React" })}
                </h3>
              </div>
              <div className="flex flex-col">
                <FotoSinBorde
                  style={fotosRedondeadas}
                  src={AWSUrl.URL + "iAConsultoria-2.jpg"}
                  title={t("AltFotoInternas.title", { framework: "React" })}
                  alt={t("AltFotoInternas.title", { framework: "React" })}
                />
                <h3 className="spartan transiciones text-center text-3xl font-bold">
                  {t("IAConsultoria2.title", { framework: "React" })}
                </h3>
              </div>
              <div className="flex flex-col">
                <FotoSinBorde
                  style={fotosRedondeadas}
                  src={AWSUrl.URL + "iAConsultoria-3.jpg"}
                  title={t("AltFotoInternas.title", { framework: "React" })}
                  alt={t("AltFotoInternas.title", { framework: "React" })}
                />
                <h3 className="spartan transiciones text-center text-3xl font-bold">
                  {t("IAConsultoria3.title", { framework: "React" })}
                </h3>
              </div>
            </motion.section>
          </div>
        </ContColumnas>
      </Seccion>

      {/* Diseñador UI & UX */}

      <Seccion style={marginTop5}>
        <motion.div
          className="group mb-5 mt-5"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              damping: 10,
              mass: 0.75,
              stiffness: 50,
              delay: 0.5,
            },
          }}
        >
          <div className="flex w-full flex-row pb-2 pt-5">
            <Brush className="icono-listado-de-tareas transiciones mt-0.5 group-hover:scale-125" />
            <h2 className="spartan transiciones text-center text-4xl font-bold">
              {t("UXUIDesign.title", { framework: "React" })}
            </h2>
          </div>
          <p className="spartan ml-10 mr-10 text-justify text-2xl font-light">
            {t("DescUXUIDesign.title", { framework: "React" })}
          </p>
        </motion.div>
        <ContColumnas>
          <div className="flex flex-col">
            <motion.section
              className="mb-5 flex flex-row"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  damping: 10,
                  mass: 0.75,
                  stiffness: 50,
                  delay: 0.5,
                },
              }}
            >
              <div className="flex flex-col">
                <h3 className="spartan transiciones text-center text-3xl font-bold">
                  {t("UXUIDesignClient1.title", { framework: "React" })}
                </h3>
                <h4 className="spartan transiciones text-center text-2xl font-bold">
                  {t("UXUIDesignProject1.title", { framework: "React" })}
                </h4>
                <FotoSinBorde
                  style={fotosInterfaces}
                  src={
                    AWSUrl.URL + "Montajes-Dispositivos-UI-UX-ZIONE-Shop.png"
                  }
                  title={t("AltFotoInternas.title", { framework: "React" })}
                  alt={t("AltFotoInternas.title", { framework: "React" })}
                />
                <h5 className="spartan transiciones w-96 text-center text-xl font-normal">
                  {t("UXUIDesignDescription1.title", { framework: "React" })}
                </h5>
                <button
                  onClick={ZioneShopApp}
                >
                  <FotoSinBorde
                    style={fotoLogoGooglePlay}
                    src={AWSUrl.URL + "google-play-logo.svg"}
                    title={t("AltFotoInternas.title", { framework: "React" })}
                    alt={t("AltFotoInternas.title", { framework: "React" })}
                  />
                </button>
              </div>
              <div className="flex flex-col">
                <h3 className="spartan transiciones text-center text-3xl font-bold">
                  {t("UXUIDesignClient3.title", { framework: "React" })}
                </h3>
                <h4 className="spartan transiciones text-center text-2xl font-bold">
                  {t("UXUIDesignProject3.title", { framework: "React" })}
                </h4>
                <FotoSinBorde
                  style={fotosInterfaces}
                  src={AWSUrl.URL + "Montajes Dispositivos UI-UX-3.png"}
                  title={t("AltFotoInternas.title", { framework: "React" })}
                  alt={t("AltFotoInternas.title", { framework: "React" })}
                />
                <h5 className="spartan transiciones w-96 text-center text-xl font-normal">
                  {t("UXUIDesignDescription3.title", { framework: "React" })}
                </h5>
                <button
                  className="spartan-medium boton-visitar-sitio-web-work transiciones estilos-interactivos-botones borde-redondeado ml-5 mr-10"
                  type="button"
                  onClick={ElCorteIngles}
                >
                  {t("VisitaElSitioWeb.title", { framework: "React" })}
                </button>
              </div>
              <div className="flex flex-col">
                <h3 className="spartan transiciones text-center text-3xl font-bold">
                  {t("UXUIDesignClient2.title", { framework: "React" })}
                </h3>
                <h4 className="spartan transiciones text-center text-2xl font-bold">
                  {t("UXUIDesignProject2.title", { framework: "React" })}
                </h4>
                <FotoSinBorde
                  style={fotosInterfaces}
                  src={AWSUrl.URL + "Montajes Dispositivos UI-UX-2.png"}
                  title={t("AltFotoInternas.title", { framework: "React" })}
                  alt={t("AltFotoInternas.title", { framework: "React" })}
                />
                <h5 className="spartan transiciones 3xl:w-96 w-11/12 text-center text-xl font-normal 2xl:w-11/12">
                  {t("UXUIDesignDescription2.title", { framework: "React" })}
                </h5>
                <button
                  className="spartan-medium boton-visitar-sitio-web-work transiciones estilos-interactivos-botones borde-redondeado ml-5 mr-10"
                  type="button"
                  onClick={ZioneCosmetics}
                >
                  {t("VisitaElSitioWeb.title", { framework: "React" })}
                </button>
              </div>
            </motion.section>
          </div>
        </ContColumnas>
      </Seccion>
      <Footer />
    </ContInternas>
  );
}

export default Work;

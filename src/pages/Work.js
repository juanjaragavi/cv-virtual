import React from "react";
import AWSUrl from "../media/AWSUrl";
import { motion } from "framer-motion";
import Clock from "../components/Clock";
import Seccion from "../layouts/Seccion";
import Columna from "../layouts/Columna";
import Footer from "../components/Footer";
import FotoSinBorde from "../media/FotoSinBorde";
import Calendar from "../components/Calendar";
import { useTranslation } from "react-i18next";
import Calculator from "../components/Calculator";
import ContColumnas from "../layouts/ContColumnas";
import ContInternas from "../layouts/ContInternas";
import CurrencyConverter from "../components/CurrencyConverter";
import {
  Code,
  ChartInfographic,
  BuildingCommunity,
  Brush,
  BrandHipchat,
  Brain,
} from "tabler-icons-react";

function Work() {
  const { t } = useTranslation("common");
  const sinBorde = {
    border: 0,
  };

  return (
    <ContInternas>
      <Seccion>
        <motion.div
          className="group mt-5 mb-5"
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
        <motion.div
          className="group mt-5 mb-5"
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
            <section className="flex flex-row mt-2">
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
            </section>
            <section className="flex flex-row mb-2">
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
            </section>
          </div>
        </ContColumnas>
        <motion.div
          className="group mt-5 mb-5"
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
            <section className="flex flex-row mt-2">
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
            </section>
            <section className="flex flex-row mb-2">
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
            </section>
          </div>
        </ContColumnas>
      </Seccion>
      * Diseñador UI & UX *
      <Footer />
    </ContInternas>
  );
}

export default Work;

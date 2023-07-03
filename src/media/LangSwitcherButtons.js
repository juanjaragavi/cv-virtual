import React from "react";
import AWSUrl from "./AWSUrl";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const variants = {
  initial: { x: -200 },
  active: { x: 0 },
};

export default function LangSwitcherButtons({ animateSwitcher }) {
  const [t, i18n] = useTranslation("common");

  return (
    <motion.div
      className="contenedor-language-switcher"
      animate={animateSwitcher}
      initial="initial"
      variants={variants}
      transition={{
        type: "tween",
        duration: 1,
        delay: 0,
      }}
    >
      <motion.div
        onClick={() => {
          i18n.changeLanguage("en");
        }}
        className="transiciones my-2 language-switcher-english"
        initial={{
          x: -112,
        }}
        whileHover={{
          x: -30,
        }}
        transition={{
          type: "tween",
          duration: 0,
          delay: 0,
          ease: "easeInOut",
        }}
      >
        <img
          className="icono-language-switcher"
          alt={t("AltEnLang.title", { framework: "React" })}
          src={AWSUrl.URL + "uk.webp"}
          title={t("AltEnLang.title", { framework: "React" })}
        />
        <p>{t("English.title", { framework: "React" })}</p>
      </motion.div>
      <motion.div
        onClick={() => {
          i18n.changeLanguage("es");
        }}
        className="transiciones language-switcher-spanish"
        initial={{
          x: -112,
        }}
        whileHover={{
          x: -30,
        }}
        transition={{
          type: "tween",
          duration: 0,
          delay: 0,
          ease: "easeInOut",
        }}
      >
        <img
          className="icono-language-switcher"
          alt={t("AltEsLang.title", { framework: "React" })}
          src={AWSUrl.URL + "spain.webp"}
          title={t("AltEsLang.title", { framework: "React" })}
        />
        <p>{t("Spanish.title", { framework: "React" })}</p>
      </motion.div>
    </motion.div>
  );
}

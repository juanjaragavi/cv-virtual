import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function LangSwitcherButtons({ moveSpanish, moveEnglish }) {
  const [t, i18n] = useTranslation("common");

  return (
    <motion.main
      className="contenedor-language-switcher"
      initial={{
        x: -200,
      }}
      animate={{
        x: 0,
      }}
      transition={{
        type: "tween",
        duration: 1,
        delay: 0,
      }}
    >
      <motion.div
        onClick={() => {
          i18n.changeLanguage("en");
          moveEnglish();
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
          src={require("../assets/uk.png")}
          title={t("AltEnLang.title", { framework: "React" })}
        />
        <p>{t("English.title", { framework: "React" })}</p>
      </motion.div>
      <motion.div
        onClick={() => {
          i18n.changeLanguage("es");
          moveSpanish();
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
          src={require("../assets/spain.png")}
          title={t("AltEsLang.title", { framework: "React" })}
        />
        <p>{t("Spanish.title", { framework: "React" })}</p>
      </motion.div>
    </motion.main>
  );
}
export default LangSwitcherButtons;

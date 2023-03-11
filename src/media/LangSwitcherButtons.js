import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function LangSwitcherButtons(props) {
  const { t } = useTranslation("common");
  const { buttonTextEs, buttonTextEn, onClickEs, onClickEn } = props;

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
        duration: 0.5,
        delay: 0,
      }}
    >
      <motion.div
        onClick={onClickEn}
        className="transiciones my-2 language-switcher-english"
        initial={{
          x: -112,
        }}
        whileHover={{
          x: -30,
        }}
        transition={{
          type: "tween",
          duration: 0.3,
        }}
      >
        <img
          className="icono-language-switcher"
          alt={t("AltEnLang.title", { framework: "React" })}
          src={require("../assets/uk.png")}
          title={t("AltEnLang.title", { framework: "React" })}
        />
        <p>{buttonTextEn}</p>
      </motion.div>
      <motion.div
        onClick={onClickEs}
        className="transiciones language-switcher-spanish"
        initial={{
          x: -112,
        }}
        whileHover={{
          x: -30,
        }}
        transition={{
          type: "tween",
          duration: 0.3,
        }}
      >
        <img
          className="icono-language-switcher"
          alt={t("AltEsLang.title", { framework: "React" })}
          src={require("../assets/spain.png")}
          title={t("AltEsLang.title", { framework: "React" })}
        />
        <p>{buttonTextEs}</p>
      </motion.div>
    </motion.main>
  );
}
export default LangSwitcherButtons;

import React from "react";
import { motion } from "framer-motion";
import LogoJJ from "../components/LogoJJ";
import ThemeSwitcher from "../components/ThemeSwitcher";
import IconButton from "./IconButton";
import { useTranslation } from "react-i18next";
import { useAnimationControls } from "framer-motion";

function LangSplash() {
  const langSelect = useAnimationControls();
  const [t, i18n] = useTranslation("common");
  return (
    <motion.main
      layout
      className="contenedor-selector-idiomas"
      initial={{ scale: 1 }}
      animate={langSelect}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 0.3,
        delay: 0.3,
      }}
    >
      <motion.div
        drag
        className="subcontenedor-selector-idiomas cursor-move fondo-translucido"
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 2,
        }}
      >
        <div className="flex space-between">
          <LogoJJ className="logo-jj-lang-selector" />
          <div className="basis-1/2">
            <ThemeSwitcher className="switch-selector-tema transiciones mr-5" />
          </div>
        </div>
        <div>
          <h2 className="titulo-selecciona-idioma">
            Select a Language / Selecciona un Idioma
          </h2>
        </div>
        <div className="contenedor-botones-idioma">
          <IconButton
            className="boton-conoce-mas boton-idioma transiciones estilos-interactivos-botones"
            leftIcon={
              <img
                className="icono-language-switcher mb-1.5 ml-0"
                alt={t("AltEnLang.title", { framework: "React" })}
                src={require("../assets/uk.png")}
                title={t("AltEnLang.title", { framework: "React" })}
              />
            }
            buttonText="ENGLISH"
            onClick={() => {
              i18n.changeLanguage("en");
              langSelect.start({
                scale: 0,
              });
            }}
          />
          <IconButton
            className="boton-conoce-mas boton-idioma transiciones estilos-interactivos-botones"
            leftIcon={
              <img
                className="icono-language-switcher mb-1.5 ml-0"
                alt={t("AltEsLang.title", { framework: "React" })}
                src={require("../assets/spain.png")}
                title={t("AltEsLang.title", { framework: "React" })}
              />
            }
            buttonText="ESPAÑOL"
            onClick={() => {
              i18n.changeLanguage("es");
              langSelect.start({
                scale: 0,
              });
            }}
          />
        </div>
      </motion.div>
    </motion.main>
  );
}

export default LangSplash;

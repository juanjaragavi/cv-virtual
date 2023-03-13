import React from "react";
import IconButton from "./IconButton";
import { motion } from "framer-motion";
import LogoJJ from "../components/LogoJJ";
import { useTranslation } from "react-i18next";
import { useAnimationControls } from "framer-motion";
import ThemeSwitcher from "../components/ThemeSwitcher";

function LangSplash({
  setAnimateHeader,
  setAnimateBubble,
  setStartAnimations,
  setAnimateSwitcher,
  setAnimateFixedMenu,
  setAnimateHeaderMovil,
}) {
  const onButtonClick = (mode) => {
    setAnimateBubble(mode);
    setAnimateHeader(mode);
    setStartAnimations(mode);
    setAnimateSwitcher(mode);
    setAnimateFixedMenu(mode);
    setAnimateHeaderMovil(mode);
  };
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
          delay: 0,
        }}
      >
        <div className="contenedor-logo-y-switcher-selector-idiomas">
          <LogoJJ className="logo-jj-lang-selector transiciones" />
          <ThemeSwitcher className="switch-selector-tema transiciones" />
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
              onButtonClick("active");
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
              onButtonClick("active");
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

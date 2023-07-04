import React from "react";
import ConfResetBtn from "./ConfResetBtn";
import { useTranslation } from "react-i18next";
import { motion, useAnimationControls } from "framer-motion";

function ConfirmResetForm({ onClickAccept, onClickCancel, className }) {
  const langSelect = useAnimationControls();
  const { t } = useTranslation("common");
  return (
    <motion.div
      layout
      className={className}
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
        className="contenedor-reset-formulario-contacto"
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
          <h2 className="titulo-importante-reset-formulario-contacto">
            {t("TituloImportanteConfirmResetForm.title", {
              framework: "React",
            })}
          </h2>
          <svg
            className="icono-importante-reset-formulario-contacto"
            viewBox="0 0 38 38"
          >
            <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM22.386 10.146l-9.388 9.446-4.228-4.227c-0.39-0.39-1.024-0.39-1.415 0s-0.391 1.023 0 1.414l4.95 4.95c0.39 0.39 1.024 0.39 1.415 0 0.045-0.045 0.084-0.094 0.119-0.145l9.962-10.024c0.39-0.39 0.39-1.024 0-1.415s-1.024-0.39-1.415 0z"></path>
          </svg>
        </div>
        <div>
          <h2 className="titulo-selecciona-idioma">
            {t("TitleConfirmResetForm.title", { framework: "React" })}
          </h2>
          <h4 className="spartan-light -mt-0.5 text-center text-xl leading-6">
            {t("SubTitleConfirmResetForm.title", { framework: "React" })}
          </h4>
        </div>
        <div className="contenedor-botones-idioma">
          <ConfResetBtn
            className="btn-aceptar-reset-formulario-contacto transiciones spartan-medium estilos-interactivos-botones group"
            leftIcon={
              <svg
                className="icono-aceptar-reset-formulario-contacto transiciones icono-language-switcher"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M9 12l2 2l4 -4"></path>
              </svg>
            }
            buttonText={t("BtnConfirmResetForm.title", { framework: "React" })}
            onClick={() => {
              onClickAccept();
              langSelect.start({
                scale: 0,
              });
            }}
          />
          <ConfResetBtn
            className="spartan-medium btn-cancelar-reset-formulario-contacto transiciones estilos-interactivos-botones group"
            leftIcon={
              <svg
                className="icono-cancelar-reset-formulario-contacto transiciones icono-language-switcher"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M10 10l4 4m0 -4l-4 4"></path>
              </svg>
            }
            buttonText={t("BtnCancelResetForm.title", { framework: "React" })}
            onClick={() => {
              onClickCancel();
              langSelect.start({
                scale: 0,
              });
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ConfirmResetForm;

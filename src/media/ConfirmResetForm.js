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
        className="pt-10 pb-10 pl-5 pr-5 border border-gray-900 dark:border-white hover:border-pink-500 dark:hover:border-pink-500 rounded-3xl cursor-move fondo-translucido"
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
          <h2 className="ml-5 -mt-1 titulo-2 text-yellow-500">{t("TituloImportanteConfirmResetForm.title", { framework: "React" })}</h2>
          <svg
            className="w-[55px] h-[55px] stroke-2 fill-none stroke-yellow-500"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
            <path d="M12 8v4"></path>
            <path d="M12 16h.01"></path>
          </svg>
        </div>
        <div>
          <h2 className="titulo-selecciona-idioma">
            {t("TitleConfirmResetForm.title", { framework: "React" })}
          </h2>
          <h4 className="-mt-0.5 spartan-light text-xl text-center leading-6">
            {t("SubTitleConfirmResetForm.title", { framework: "React" })}
          </h4>
        </div>
        <div className="contenedor-botones-idioma">
          <ConfResetBtn
            className="group spartan-medium text-white hover:text-green-500 border-white hover:border-green-500 mt-4 basis-1/2 mr-2 transiciones estilos-interactivos-botones"
            leftIcon={
              <svg
                className="stroke-white group-hover:stroke-green-500 fill-none stroke-2 w-[24px] h-[24px] mb-1.5 ml-0 -mr-2 transiciones icono-language-switcher"
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
            className="group spartan-medium text-white hover:text-red-500 border-white hover:border-red-500 mt-4 basis-1/2 mr-2 transiciones estilos-interactivos-botones"
            leftIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-white group-hover:stroke-red-500 fill-none stroke-2 w-[24px] h-[24px] mb-1.5 ml-0 -mr-2 transiciones icono-language-switcher"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
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

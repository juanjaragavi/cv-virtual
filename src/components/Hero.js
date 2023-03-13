import React from "react";
import { motion } from "framer-motion";
import IconButton from "../media/IconButton";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation("common");
  const LinkGitHub = () => {
    window.open("https://github.com/juanjaragavi/", "_blank");
  };

  return (
    <div className="contenedor-hero">
      <div className="contenedor-saludo-nombre">
        <article>
          <motion.h2
            className="saludo"
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              type: "tween",
              duration: 1,
              delay: 0.1,
            }}
          >
            {t("Saludo.title", { framework: "React" })}
          </motion.h2>
          <motion.h1
            className="nombre transiciones"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
              delay: 0.5,
            }}
          >
            {t("Nombre.title", { framework: "React" })}
          </motion.h1>
          <motion.h4
            className="roles sm:text-justify"
            initial={{
              y: -50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              type: "tween",
              duration: 1,
              delay: 0.1,
            }}
          >
            {t("Tagline.title", { framework: "React" })}
          </motion.h4>
          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              type: "tween",
              duration: 1,
              delay: 1,
            }}
          >
            <IconButton
              className="boton-conoce-mas invisible sm:visible z-50 hover:scale-105"
              onClick={LinkGitHub}
              rightIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-circle-check stroke-1 -mt-0.5"
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
                  <path d="M9 12l2 2l4 -4"></path>
                </svg>
              }
              buttonText={t("BotonConoceMas.title", { framework: "React" })}
            />
          </motion.div>
        </article>
      </div>
      <motion.img
        className="foto-juan-jaramillo transiciones"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          type: "tween",
          duration: 1,
          delay: 0.5,
        }}
        alt={t("AltFotoJJ.title", { framework: "React" })}
        src={require("../assets/juan-jaramillo-cv-virtual.png")}
        title={t("AltFotoJJ.title", { framework: "React" })}
      />
    </div>
  );
}
export default Hero;
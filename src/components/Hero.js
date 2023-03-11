import React from "react";
import { motion } from "framer-motion";
import IconButton from "../media/IconButton";
import { CircleCheck } from "tabler-icons-react";
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
            className="roles"
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
              onClick={LinkGitHub}
              rightIcon={<CircleCheck size={24} />}
              buttonText={t("BotonConoceMas.title", { framework: "React" })}
              className="boton-conoce-mas"
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

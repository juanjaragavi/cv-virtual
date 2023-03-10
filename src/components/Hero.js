import React from "react";
import { motion } from "framer-motion";
import IconButton from "../media/IconButton";
import { useTranslation } from "react-i18next";

const variants = {
  active: { y: 0, opacity: 1, scale: 1 },
  inactive: { opacity: 0 },
  initial: { opacity: 0 },
  initials: { opacity: 0, scale: 0.8 },
  initial50: { y: 50, opacity: 0 },
  initialm50: { y: -50, opacity: 0 },
};

function Hero({ startAnimations }) {
  const { t } = useTranslation("common");
  const LinkGitHub = () => {
    window.open("https://github.com/juanjaragavi/cv-virtual", "_blank");
  };

  return (
    <motion.main
      className="contenedor-hero"
      initial="initial"
      variants={variants}
      animate={startAnimations}
      transition={{
        type: "tween",
        duration: 0.5,
        delay: 0.3,
      }}
    >
      <article className="contenedor-saludo-nombre">
        <section>
          <motion.h2
            className="saludo"
            initial="initialm50"
            variants={variants}
            animate={startAnimations}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut"
            }}
          >
            {t("Saludo.title", { framework: "React" })}
          </motion.h2>
          <motion.h1
            className="nombre transiciones"
            initial="initials"
            variants={variants}
            animate={startAnimations}
            transition={{
              type: "tween",
              duration: 0.5,
              delay: 0.5,
              ease: "easeOut"
            }}
          >
            {t("Nombre.title", { framework: "React" })}
          </motion.h1>
          <motion.h4
          className="roles sm:text-justify"
          initial="initialm50"
            variants={variants}
            animate={startAnimations}
            transition={{
              type: "tween",
              duration: 0.8,
              delay: 1,
              ease: "easeOut"
            }}
          >
            {t("Tagline.title", { framework: "React" })}
          </motion.h4>
          <motion.div
          initial="initial50"
          variants={variants}
          animate={startAnimations}
          transition={{
            type: "tween",
            duration: 0.5,
            delay: 1.8,
            ease: "easeOut"
          }}
          >
            <IconButton
              className="boton-conoce-mas transiciones invisible sm:visible z-50 hover:scale-105"
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
        </section>
      </article>
      <motion.img
        className="foto-juan-jaramillo"
        initial="initial50"
        variants={variants}
        animate={startAnimations}
        transition={{
          type: "tween",
          duration: 0.5,
          delay: 0.9,
          ease: "easeOut"
        }}
        alt={t("AltFotoJJ.title", { framework: "React" })}
        src={require("../assets/juan-jaramillo-cv-virtual.png")}
        title={t("AltFotoJJ.title", { framework: "React" })}
      />
    </motion.main>
  );
}
export default Hero;

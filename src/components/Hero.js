import React from "react";
import { motion } from "framer-motion";
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
            className="nombre bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-orange-500 to-pink-500"
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

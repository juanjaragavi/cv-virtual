import React, { useContext } from "react";
import { motion } from "framer-motion";
import IconButton from "../media/IconButton";
import Spanish from "../texts/Spanish";
import { CircleCheck } from 'tabler-icons-react';

function Hero() {
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
            {Spanish.Saludo}
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
            {Spanish.Nombre}
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
            {Spanish.Tagline}
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
              buttonText={Spanish.BotonConoceMas}
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
        alt="Juan Jaramillo de medio perfil y en ropa informal."
        src={require("../assets/juan-jaramillo-cv-virtual.png")}
      />
    </div>
  );
}
export default Hero;

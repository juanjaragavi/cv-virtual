import React from "react";
import { motion } from "framer-motion";

function LangSwitcherButtons(props) {
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
        <p>{buttonTextEn}</p>
        <img
          className="rounded-full w-5 h-5 ml-2 mt-0.5"
          alt="Bandera de Reino Unido en el cambiador de Idiomas."
          src={require("../assets/uk.png")}
        />
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
        <p>{buttonTextEs}</p>
        <img
          className="rounded-full w-5 h-5 ml-1 mt-0.5"
          alt="Bandera de España en el cambiador de Idiomas."
          src={require("../assets/spain.png")}
        />
      </motion.div>
    </motion.main>
  );
}
export default LangSwitcherButtons;

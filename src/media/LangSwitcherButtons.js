import React from "react";
import { motion } from "framer-motion";

function LangSwitcherButtons() {
  return (
    <main className="contenedor-language-switcher">
      <motion.div
        onClick={() => console.log("Hola")}
        className="transiciones my-2 language-switcher-english"
        initial={{
          x: -110,
        }}
        whileHover={{
          x: -30,
        }}
        transition={{
          type: "tween",
          duration: 0.3,
        }}
      >
        <p>ENGLISH</p>
        <img
          className="rounded-full w-5 h-5 ml-2 mt-0.5"
          alt="Bandera de Reino Unido en el cambiador de Idiomas."
          src={require("../assets/uk.png")}
        />
      </motion.div>
      <motion.div
        onClick={() => console.log("Hola")}
        className="transiciones language-switcher-spanish"
        initial={{
          x: -110,
        }}
        whileHover={{
          x: -30,
        }}
        transition={{
          type: "tween",
          duration: 0.3,
        }}
      >
        <p>SPANISH</p>
        <img
          className="rounded-full w-5 h-5 ml-2 mt-0.5"
          alt="Bandera de España en el cambiador de Idiomas."
          src={require("../assets/spain.png")}
        />
      </motion.div>
    </main>
  );
}
export default LangSwitcherButtons;

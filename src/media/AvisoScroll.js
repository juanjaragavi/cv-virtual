import React from "react";
import { motion } from "framer-motion";

const transition = {
  duration: 1,
  ease: "easeInOut",
  repeat: Infinity,
  repeatDelay: 0,
  delay: 0.5,
};

function AvisoScroll() {
  return (
    <motion.div
      className="group contenedor-aviso-haz-scroll"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          type: "tween",
          duration: 1,
          delay: 2,
        },
      }}
    >
      <div className="group-hover:border-pink-500 dark:group-hover:border-pink-500 contenedor-mouse-aviso-haz-scroll transiciones">
        <motion.svg
          className="group-hover:stroke-pink-500 dark:group-hover:stroke-pink-500 mouse-aviso-haz-scroll transiciones"
          transition={transition}
          animate={{
            y: [25, -25, 25],
          }}
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M6 3m0 4a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4z"></path>
          <path d="M12 7l0 4"></path>
        </motion.svg>
      </div>
      <p className="group-hover:text-pink-500 dark:group-hover:text-pink-500 texto-aviso-haz-scroll">
        HAZ SCROLL
      </p>
      <div className="group-hover:border-pink-500 dark:group-hover:border-pink-500 contenedor-flecha-aviso-haz-scroll">
        <svg
          className="group-hover:stroke-pink-500 dark:group-hover:stroke-pink-500 flecha-aviso-haz-scroll transiciones"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
          <path d="M8 12l4 4"></path>
          <path d="M12 8v8"></path>
          <path d="M16 12l-4 4"></path>
        </svg>
      </div>
    </motion.div>
  );
}
export default AvisoScroll;

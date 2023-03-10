import React from "react";
import "../App.css";
import { motion, useAnimationControls } from "framer-motion";
import Spanish from "../texts/Spanish";

function Nav() {

  const controls = useAnimationControls();

  return (
    <nav className="nav-principal transiciones">
      <ul className="contenedor-menu">
        <motion.li
          whileHover={() => {
            controls.start({
              x: 2,
              opacity: 1,
              transition: { duration: 0.3 },
            });
          }}
          onHoverEnd={() => {
            controls.start({
              opacity: 0,
              transition: { duration: 0.3 },
            });
          }}
          className="botones-menu transiciones"
        >
          {Spanish.Item1}
        </motion.li>
        <motion.li
          whileHover={() => {
            controls.start({
              x: 84,
              opacity: 1,
              transition: { duration: 0.3 },
            });
          }}
          onHoverEnd={() => {
            controls.start({
              opacity: 0,
              transition: { duration: 0.3 },
            });
          }}
          className="botones-menu transiciones"
        >
          {Spanish.Item2}
        </motion.li>
        <motion.li
          whileHover={() => {
            controls.start({
              x: 180,
              opacity: 1,
              transition: { duration: 0.3 },
            });
          }}
          onHoverEnd={() => {
            controls.start({
              opacity: 0,
              transition: { duration: 0.3 },
            });
          }}
          className="botones-menu transiciones"
        >
          {Spanish.Item3}
        </motion.li>
        <motion.li
          whileHover={() => {
            controls.start({
              x: 285,
              opacity: 1,
              transition: { duration: 0.3 },
            });
          }}
          onHoverEnd={() => {
            controls.start({
              opacity: 0,
              transition: { duration: 0.3 },
            });
          }}
          className="botones-menu transiciones"
        >
          {Spanish.Item4}
        </motion.li>
      </ul>
      <motion.div
        animate={controls}
        initial={{ opacity: 0 }}
        className="fondo-botones-menu"
      ></motion.div>
    </nav>
  );
}

export default Nav;

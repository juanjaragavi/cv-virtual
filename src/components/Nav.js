import React from "react";
import "../App.css";
import { motion, useAnimationControls } from "framer-motion";

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
          Home
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
          About
        </motion.li>
        <motion.li
          whileHover={() => {
            controls.start({
              x: 165,
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
          Work
        </motion.li>
        <motion.li
          whileHover={() => {
            controls.start({
              x: 253,
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
          Contact
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

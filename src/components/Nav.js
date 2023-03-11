import React from "react";
import "../App.css";
import { motion, useAnimationControls } from "framer-motion";
import { useTranslation } from "react-i18next";

function Nav() {
  const { t } = useTranslation("common");

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
          {t("Item1.title", { framework: "React" })}
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
          {t("Item2.title", { framework: "React" })}
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
          {t("Item3.title", { framework: "React" })}
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
          {t("Item4.title", { framework: "React" })}
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
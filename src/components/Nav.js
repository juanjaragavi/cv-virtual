import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useTranslation } from "react-i18next";

function Nav() {
  const { t } = useTranslation("common");

  const controls = useAnimationControls();

  return (
    <nav className="nav-principal transiciones">
      <ul className="contenedor-menu">
        <motion.li
          className="botones-menu transiciones"
          whileHover={() => {
            controls.start({
              x: 12,
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
        >
          {t("Item1.title", { framework: "React" })}
        </motion.li>
        <motion.li
          className="botones-menu transiciones"
          whileHover={() => {
            controls.start({
              x: 124,
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
        >
          {t("Item2.title", { framework: "React" })}
        </motion.li>
        <motion.li
          className="botones-menu transiciones"
          whileHover={() => {
            controls.start({
              x: 235,
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
        >
          {t("Item3.title", { framework: "React" })}
        </motion.li>
        <motion.li
          className="botones-menu transiciones"
          whileHover={() => {
            controls.start({
              x: 348,
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
        >
          {t("Item4.title", { framework: "React" })}
        </motion.li>
      </ul>
      <motion.div
        layout
        className="fondo-botones-menu"
        animate={controls}
        initial={{ opacity: 0 }}
      ></motion.div>
    </nav>
  );
}

export default Nav;
import React from "react";
import { useTranslation } from "react-i18next";
import { motion, useAnimationControls } from "framer-motion";

function Nav({ setMoveItems }) {
  const { t } = useTranslation("common");
  const controls = useAnimationControls();

  const onButtonClick = (mode) => {
    setMoveItems(mode);
  };

  return (
    <div>
      <nav className="nav-principal transiciones">
        <ul className="contenedor-menu">
          <motion.li
            onClick={() => onButtonClick("home")}
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
            onClick={() => onButtonClick("about")}
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
            onClick={() => onButtonClick("work")}
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
            onClick={() => onButtonClick("contact")}
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
          className="fondo-botones-menu"
          animate={controls}
          initial={{ x: 12, opacity: 0 }}
        ></motion.div>
      </nav>
    </div>
  );
}

export default Nav;

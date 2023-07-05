import { motion } from "framer-motion";
import React, { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTranslation } from "react-i18next";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
};

function NavMovil() {
  const { t } = useTranslation("common");
  const whatsAppWeb = () => {
    window.open("https://wa.link/5twaug/", "_blank");
  };
  const Home = () => {
    window.open("/", "_self");
  };
  const About = () => {
    window.open("/", "_self");
  };
  const Work = () => {
    window.open("/", "_self");
  };

  const [isOpen, setIsOpen] = useState(false);
  const linkBlog = () => {
    window.open("https://blog.juanjaramillo.tech/", "_self");
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="z-50 relative spartan-bold"
    >
      <motion.button
        className="boton-menu-movil"
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.02 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="texto-boton-menu-movil">
          {t("Menu.title", { framework: "React" })}
        </p>
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.4 }}
          style={{ originY: 0.55, originX: 0.28 }}
        >
          <div className="pr-4 pt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-circle-chevron-down stroke-gray-900 dark:stroke-white stroke-1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M15 11l-3 3l-3 -3"></path>
              <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18z"></path>
            </svg>
          </div>
        </motion.div>
      </motion.button>
      <motion.ul
        className="contenedor-desplegable-menu-movil fondo-translucido"
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(0% 0% 100% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.li
          className="py-2"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05, textDecoration: "underline" }}
          variants={itemVariants}
          style={{ cursor: "pointer" }}
          onTap={Home}
          onClick={() => setIsOpen(!isOpen)}
        >
          {t("Item1.title", { framework: "React" })}{" "}
        </motion.li>
        <motion.li
          className="py-2"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05, textDecoration: "underline" }}
          variants={itemVariants}
          style={{ cursor: "pointer" }}
          onTap={About}
          onClick={() => setIsOpen(!isOpen)}
        >
          {t("Item2.title", { framework: "React" })}{" "}
        </motion.li>
        <motion.li
          className="py-2"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05, textDecoration: "underline" }}
          variants={itemVariants}
          style={{ cursor: "pointer" }}
          onTap={Work}
          onClick={() => setIsOpen(!isOpen)}
        >
          {t("Item3.title", { framework: "React" })}{" "}
        </motion.li>
        <motion.li
          className="py-2"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05, textDecoration: "underline" }}
          variants={itemVariants}
          style={{ cursor: "pointer" }}
          onTap={linkBlog}
          onClick={() => setIsOpen(!isOpen)}
        >
          {t("Item4.title", { framework: "React" })}{" "}
        </motion.li>
        <motion.li
          className="py-2"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05, textDecoration: "underline" }}
          variants={itemVariants}
          style={{ cursor: "pointer" }}
          onTap={whatsAppWeb}
          onClick={() => setIsOpen(!isOpen)}
        >
          {t("Item5.title", { framework: "React" })}{" "}
        </motion.li>
        <div className="linea-divisoria-menu-movil"></div>
        <ThemeSwitcher className="switch-menu-movil transiciones" />
      </motion.ul>
    </motion.nav>
  );
}
export default NavMovil;

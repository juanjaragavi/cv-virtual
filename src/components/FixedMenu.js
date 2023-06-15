import React from "react";
import { motion } from "framer-motion";
import GitHub from "../socialIcons/GitHub";
import Telegram from "../socialIcons/Telegram";
import LinkedIn from "../socialIcons/LinkedIn";
import WhatsApp from "../socialIcons/WhatsApp";
import Instagram from "../socialIcons/Instagram";

const variants = {
  active: { y: 0, opacity: 1 },
  initial: { y: 50, opacity: 0 },
  initial100: { y: 100, opacity: 0 },
};

function FixedMenu({ animateFixedMenu }) {
  const LinkGitHub = () => {
    window.open("https://github.com/juanjaragavi/cv-virtual", "_blank");
  };

  const LinkTelegram = () => {
    window.open("https://t.me/juanjaragavi", "_blank");
  };

  const LinkLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/juan-jaramillo-ai/",
      "_blank"
    );
  };
  const LinkInstagram = () => {
    window.open(
      "https://www.instagram.com/juanjaramilloai/",
      "_blank"
    );
  };

  return (
    <motion.div
      className="contenedor-menu-fijo"
      variants={variants}
      initial="initial"
      animate={animateFixedMenu}
      transition={{
        type: "tween",
        duration: 0.5,
        delay: 0.2,
      }}
    >
      <nav className="contenedor-menu-sociales">
        <ul className="menu-sociales transiciones hover:scale-105">
          <li onClick={LinkLinkedIn} className="svg-sociales transiciones ml-2.5">
            <LinkedIn />
          </li>
          <li onClick={LinkGitHub} className="svg-sociales transiciones">
            <GitHub />
          </li>
          <li
            onClick={LinkTelegram}
            className="svg-sociales transiciones mr-2.5"
          >
            <Telegram />
          </li>
          <li
            onClick={LinkInstagram}
            className="svg-sociales transiciones -ml-1 mr-3"
          >
            <Instagram />
          </li>
        </ul>
      </nav>
      <motion.div
        className="contenedor-boton-whatsapp"
        variants={variants}
        initial="initial100"
        animate={animateFixedMenu}
        transition={{
          type: "spring",
          duration: 1,
          delay: 1.5,
        }}
      >
        <WhatsApp />
      </motion.div>
    </motion.div>
  );
}

export default FixedMenu;

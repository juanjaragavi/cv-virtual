import React from "react";
import { motion } from "framer-motion";
import GitHub from "../socialIcons/GitHub";
import Telegram from "../socialIcons/Telegram";
import LinkedIn from "../socialIcons/LinkedIn";
import WhatsApp from "../socialIcons/WhatsApp";

function FixedMenu() {
  const LinkGitHub = () => {
    window.open("https://github.com/juanjaragavi/", "_blank");
  };

  const LinkTelegram = () => {
    window.open("https://t.me/juanjaragavi", "_blank");
  };

  const LinkLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/juan-jaramillo-tradebog/",
      "_blank"
    );
  };

  return (
    <motion.main
      className="contenedor-menu-fijo"
      initial={{
        y: 50,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        type: "tween",
        duration: 0.5,
        delay: 0,
      }}
    >
      <nav className="contenedor-menu-sociales">
        <motion.ul
          className="menu-sociales transiciones hover:scale-105"
          transition={{ duration: 0.2 }}
        >
          <li onClick={LinkLinkedIn} className="svg-sociales transiciones ml-2">
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
        </motion.ul>
      </nav>
      <motion.div
        className="contenedor-boton-whatsapp"
        initial={{
          y: 100,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 2,
        }}
      >
        <WhatsApp />
      </motion.div>
    </motion.main>
  );
}

export default FixedMenu;

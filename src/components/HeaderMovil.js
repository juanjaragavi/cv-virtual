import React from "react";
import LogoJJ from "./LogoJJ";
import { motion } from "framer-motion";
import NavMovil from "./NavMovil";

function HeaderMovil() {
  return (
    <motion.header
      className="header-movil"
      initial={{
        y: -50,
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
      <LogoJJ className="logo-jj" />

      <NavMovil />
    </motion.header>
  );
}

export default HeaderMovil;

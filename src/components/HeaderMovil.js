import React from "react";
import LogoJJ from "./LogoJJ";
import { motion } from "framer-motion";
import NavMovil from "./NavMovil";

const variants = {
  initial: { y: -50, opacity: 0 },
  active: { y: 0, opacity: 1 },
};

function HeaderMovil({ animateHeaderMovil }) {
  return (
    <motion.header
      className="header-movil"
      variants={variants}
      initial="initial"
      animate={animateHeaderMovil}
      transition={{
        type: "tween",
        duration: 0.5,
        delay: 2,
      }}
    >
      <LogoJJ className="logo-jj" />

      <NavMovil />
    </motion.header>
  );
}

export default HeaderMovil;

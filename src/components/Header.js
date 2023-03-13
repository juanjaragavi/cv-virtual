import React from "react";
import Nav from "./Nav";
import ThemeSwitcher from "./ThemeSwitcher";
import LogoJJ from "./LogoJJ";
import { motion } from "framer-motion";

const variants = {
  active: { y:0, opacity: 1 },
  initial: { y: -50, opacity: 0 },
};

function Header({ animateHeader }) {
  return (
    <motion.header
      className="header"
      initial="initial"
      variants={variants}
      animate={animateHeader}
      transition={{
        type: "tween",
        duration: 0.5,
        delay: 0.2,
      }}
    >
      <LogoJJ className="logo-jj transiciones" />
      <Nav />
      <ThemeSwitcher className="switch transiciones" />
    </motion.header>
  );
}

export default Header;

import Nav from "./Nav";
import React from "react";
import LogoJJ from "./LogoJJ";
import { motion } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";
import About from "../pages/About";

const variants = {
  active: { y: 0, opacity: 1 },
  initial: { y: -50, opacity: 0 },
};

function Header({ animateHeader }) {
  return (
    <main className="relative w-screen h-auto z-20">
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
      <article className="placeholder-internas">
        <About />
      </article>
    </main>
  );
}

export default Header;

import Nav from "./Nav";
import LogoJJ from "./LogoJJ";
import Work from "../pages/Work";
import About from "../pages/About";
import { motion, useAnimationControls } from "framer-motion";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const variants = {
  active: { y: 0, opacity: 1 },
  initial: { y: -50, opacity: 0 },
};

function Header({ animateHeader }) {
  const controls = useAnimationControls();
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
          delay: 0.3,
        }}
      >
        <LogoJJ
          className="logo-jj transiciones"
          onClick={() => {
            controls.start({
              opacity: 0,
              x: -1300,
              transition: {
                type: "spring",
                damping: 10,
                mass: 0.75,
                stiffness: 100,
                delay: 0,
              },
            });
          }}
        />
        <Nav />
        <Work
          className='cursor-pointer'
          onClick={() => {
            controls.start({
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                damping: 10,
                mass: 0.75,
                stiffness: 100,
                delay: 0.3,
              },
            });
          }}
        />
        <ThemeSwitcher className="switch transiciones" />
      </motion.header>
      <motion.article
        layout
        className="placeholder-internas"
        initial={{
          opacity: 0,
          x: 1300,
        }}
        animate={controls}
        exit={{
          opacity: 0,
          x: 1300,
        }}
      >
        <About />
      </motion.article>
    </main>
  );
}

export default Header;

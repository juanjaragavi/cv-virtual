import Nav from "./Nav";
import LogoJJ from "./LogoJJ";
import Work from "../pages/Work";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { motion } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";
import React, { useState, useEffect } from "react";

const variants = {
  active: { y: 0, opacity: 1 },
  initial: { y: -50, opacity: 0 },
};
const variantsInternas = {
  home: {
    opacity: 0,
    x: 1300,
    transition: {
      type: "spring",
      damping: 10,
      mass: 0.75,
      stiffness: 100,
      delay: 0.1,
    },
  },
  about: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 10,
      mass: 0.75,
      stiffness: 100,
      delay: 0.1,
    },
  },
  work: {
    opacity: 1,
    x: "-34%",
    transition: {
      type: "spring",
      damping: 10,
      mass: 0.75,
      stiffness: 100,
      delay: 0.1,
    },
  },
  contact: {
    opacity: 1,
    x: "-67%",
    transition: {
      type: "spring",
      damping: 10,
      mass: 0.75,
      stiffness: 100,
      delay: 0.1,
    },
  },
};

function Header({ animateHeader }) {

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'work') {
        setMoveItems('work');
      } else if (hash === 'about') {
        setMoveItems('about');
      } else if (hash === 'contact') {
        setMoveItems('contact');
      } else {
        setMoveItems('home');
      }
    };
  
    // Call handleHashChange on mount and add the event listener for hash changes
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
  
    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  ;

  const [moveItems, setMoveItems] = useState("home");
  return (
    <header className="contenedor-header">
      <motion.div
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
        <LogoJJ />
        <Nav setMoveItems={setMoveItems} />
        <ThemeSwitcher className="switch transiciones" />
      </motion.div>
      <motion.div
        layout
        className="placeholder-internas"
        initial="home"
        animate={moveItems}
        variants={variantsInternas}
      >
        <About />
        <Work />
        <Contact />
      </motion.div>
    </header>
  );
}

export default Header;
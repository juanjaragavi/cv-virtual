import React from "react";
import NavMovil from "./NavMovil";
import Work from "../pages/Work";
import { motion } from "framer-motion";

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
        delay: 1.5,
      }}
    >
      <NavMovil />
      <div className="h-screen max-h-[40rem] overflow-x-scroll absolute top-20 grid place-items-center">
        <Work />
      </div>
    </motion.header>
  );
}

export default HeaderMovil;

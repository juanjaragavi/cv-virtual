import React from "react";
import { motion } from "framer-motion";

function LogoJJ({ className }) {
  return <motion.main whileTap={{ scale: 0.9 }} className={className}> </motion.main>;
}

export default LogoJJ;

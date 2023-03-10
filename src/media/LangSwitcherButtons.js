import React from 'react'
import { motion } from "framer-motion";

function LangSwitcherButtons() {

  return (
    <main className='contenedor-language-switcher'>
        <motion.div>English</motion.div>
        <motion.div>Spanish</motion.div>
    </main>
  )
}
export default LangSwitcherButtons;

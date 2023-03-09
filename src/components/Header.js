import Nav from "./Nav";
import ThemeSwitcher from "./ThemeSwitcher";
import LogoJJ from "./LogoJJ";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      className="header"
      initial={{
        y:-50,
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
      <LogoJJ />
      <Nav />
      <ThemeSwitcher />
    </motion.header>
  );
}

export default Header;

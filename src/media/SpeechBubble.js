import React from "react";
import { motion } from "framer-motion";
import { X } from "tabler-icons-react";
import CloseButton from "./CloseButton";
import { useTranslation } from "react-i18next";

const variants = {
  initial: { scale: 0, opacity: 0 },
  active: { scale: 1, opacity: 1 },
};

function SpeechBubble({ move, animateBubble }) {
  const { t } = useTranslation("common");
  const [visible, setVisible] = React.useState(true);

  return (
    <motion.main
      style={{ display: visible ? "block" : "none" }}
      className="contenedor-speech-bubble"
      initial="initial"
      variants={variants}
      animate={animateBubble}
      transition={{
        type: "spring",
        ease: "easeOut",
        duration: 0.8,
        delay: 2,
      }}
    >
      <div className="cuadro-grande-speech-bubble">
        <h3 className="titulo-dudas">
          {t("TituloWhatsApp.title", { framework: "React" })}
        </h3>
        <h4 className="invitacion-dudas">
          {t("CTAWhatsApp.title", { framework: "React" })}
        </h4>
      </div>
      <div className="flecha-speech-bubble"></div>
      <motion.div
        variants={variants}
        animate={move}
        transition={{ duration: 0 }}
      >
        <CloseButton
          onClick={() => setVisible(!visible)}
          className="boton-cerrar-speech-bubble transiciones"
          buttonText={visible ? <X size={30} /> : <X size={30} />}
        />
      </motion.div>
    </motion.main>
  );
}

export default SpeechBubble;

import React from "react";
import { motion } from "framer-motion";
import { X } from "tabler-icons-react";
import CloseButton from "./CloseButton";
import { useTranslation } from "react-i18next";

function SpeechBubble() {
  const { t } = useTranslation("common");
  const [visible, setVisible] = React.useState(true);

  return (
    <motion.main
      style={{ display: visible ? "block" : "none" }}
      className="contenedor-speech-bubble"
      initial={{
        scale: 0,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        ease: "easeOut",
        duration: 0.8,
        delay: 2.5,
      }}
    >
      <div className="cuadro-grande-speech-bubble">
        <h3 className="titulo-dudas">{t("TituloWhatsApp.title", { framework: "React" })}</h3>
        <h4 className="invitacion-dudas">{t("CTAWhatsApp.title", { framework: "React" })}</h4>
      </div>
      <div className="flecha-speech-bubble"></div>
      <CloseButton
        onClick={() => setVisible(!visible)}
        className="boton-cerrar-speech-bubble transiciones"
        buttonText={visible ? <X size={30} /> : <X size={30} />}
      />
    </motion.main>
  );
}

export default SpeechBubble;
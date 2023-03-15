import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "tabler-icons-react";
import CloseButton from "./CloseButton";
import { useTranslation } from "react-i18next";

const variants = {
  initial: { scale: 0, opacity: 0 },
  active: { scale: 1, opacity: 1 },
};

function SpeechBubble({ animateBubble }) {
  const { t } = useTranslation("common");
  const [visible, setVisible] = React.useState(true);

  return (
    <AnimatePresence>
      {visible && (
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
          exit={{
            scale: 0,
            opacity: 0,
            transition: { delay: 0.3 },
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
          <div
          >
            <CloseButton
              onClick={() => setVisible(!visible)}
              className="boton-cerrar-speech-bubble transiciones"
              buttonText={visible ? <X size={30} /> : <X size={30} />}
            />
          </div>
        </motion.main>
      )}
    </AnimatePresence>
  );
}

export default SpeechBubble;

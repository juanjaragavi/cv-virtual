import React from "react";
import { Button } from "@mantine/core";
import { motion } from "framer-motion";
import { X } from "tabler-icons-react";
import CloseButton from "./CloseButton";

function SpeechBubble() {
  const [visible, setVisible] = React.useState(true);
  const [hoverEvent, setHoverEvent] = React.useState(true);

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
        <h3 className="titulo-dudas">¿Dudas? ¿Deseas saber más?</h3>
        <h4 className="invitacion-dudas">¡Chatea conmigo Ahora!</h4>
      </div>
      <div className="flecha-speech-bubble"></div>
      <CloseButton
        onClick={() => setVisible(!visible)}
        className="boton-cerrar-speech-bubble"
        buttonText={visible ? <X size={30} color="#333" /> : <X size={30} color="#FFF" />}
      />
    </motion.main>
  );
}

export default SpeechBubble;

import axios from 'axios';
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import ConfirmResetForm from "../media/ConfirmResetForm";

function FormularioContacto() {
        const handleSubmit = (event) => {
            event.preventDefault();
        
            const myForm = event.target;
            const formData = new FormData(myForm);
            
            fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
            })
            .then(() => console.log("Form successfully submitted"))
            .catch((error) => alert(error));
        };
        
        document
        .querySelector("form")
        .addEventListener("submit", handleSubmit);
    const { t } = useTranslation("common");    
    const [confirmarReset, setConfirmarReset] = useState(false);
    const handleResetClick = () => {
        setConfirmarReset(true);
    };

    const handleConfirmClick = () => {
        document.querySelector("form").reset();
        setConfirmarReset(false);
    };

    const handleCancelClick = () => {
        setConfirmarReset(false);
    };

    const onSubmit = async (formData) => {
            const apiKey = 'd15f46c462659821c2e404e86b9898530beb5d68';
            const sheetId = '1evOX0vet6DQsIxPC64wAwvWaC5jAYs0QJGyAtOc7fIA';
            const sheetName = 'Sheet1';
            const range = `${sheetName}!A1:D1`; // Adjust the range according to your data
        
            const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}:append?valueInputOption=RAW&key=${apiKey}`;
        
            const values = [
            [
                formData.nombres,
                formData.apellidos,
                formData.email,
                formData.telefono
            ]
            ];
        
            const response = await axios.post(url, {
            range,
            majorDimension: 'ROWS',
            values
            });
        
            console.log(response);
        };

    return (
        <div className="contenedor-formulario-contacto">
        <AnimatePresence>
            {confirmarReset && (
            <motion.div
                exit={{
                opacity: 0,
                transition: {
                    type: "tween",
                    ease: "easeInOut",
                    duration: 0.3,
                    delay: 0.3,
                },
                }}
            >
                <ConfirmResetForm
                className="contenedor-conf-reset-formulario-contacto"
                onClickAccept={handleConfirmClick}
                onClickCancel={handleCancelClick}
                />
            </motion.div>
            )}
        </AnimatePresence>
        <form onReset={handleResetClick} onSubmit={handleSubmit(onSubmit)} method="POST" data-netlify="true" name="contact" netlify>
            <div className="contenedor-campo-formulario-contacto">
            <input type="hidden" name="Formulario-Contacto-Landing-Page" value="contact"></input>    
            <input
                className="spartan-medium peer campo-formulario-contacto transiciones"
                type="text"
                name="nombres"
                id="nombres"
                placeholder={t("NombresFormContacto.title", { framework: "React" })}
            />
            </div>
            <div className="contenedor-campo-formulario-contacto">
            <input
                className="spartan-medium peer campo-formulario-contacto transiciones"
                type="text"
                name="apellidos"
                id="apellidos"
                placeholder={t("ApellidosFormContacto.title", {
                framework: "React",
                })}
            />
            </div>
            <div className="contenedor-campo-formulario-contacto">
            <input
                className="spartan-medium peer campo-formulario-contacto transiciones"
                type="email"
                name="email"
                id="email"
                placeholder={t("EmailFormContacto.title", { framework: "React" })}
            />
            </div>
            <div className="contenedor-campo-formulario-contacto">
            <input
                className="spartan-medium peer campo-formulario-contacto transiciones"
                type="number"
                name="telefono"
                id="telefono"
                placeholder={t("TelefonoFormContacto.title", {
                framework: "React",
                })}
            />
            </div>
            <div className="contenedor-botones-formulario-contacto">
            <button
                className="spartan-medium boton-enviar-formulario-contacto boton-idioma transiciones estilos-interactivos-botones borde-redondeado"
                type="submit"
            >
                {t("BtnEnviarFormContacto.title", { framework: "React" })}
            </button>
            <button
                className="spartan-medium boton-restablecer-formulario-contacto boton-idioma transiciones estilos-interactivos-botones borde-redondeado"
                type="button"
                onClick={handleResetClick}
            >
                {t("BtnResetFormContacto.title", { framework: "React" })}
            </button>
            </div>
        </form>
        </div>
    );
}

export default FormularioContacto;

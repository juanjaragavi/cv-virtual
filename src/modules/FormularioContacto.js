import { number } from "yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import ConfirmResetForm from "../media/ConfirmResetForm";

function FormularioContacto() {
    const { t } = useTranslation("common");
    const {
        register,
        formState: { errors },
    } = useForm();
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
        <form onReset={handleResetClick}>
            <div className="contenedor-campo-formulario-contacto">
            <input
                {...register("nombres", {
                required: true,
                })}
                
                className="spartan-medium campo-formulario-contacto transiciones peer"
                type="text"
                name="nombres"
                id="nombres"
                placeholder={t("NombresFormContacto.title", { framework: "React" })}
            />
            {errors.nombres?.type === "required" && (
                <p className="spartan-medium texto-error-formulario-contacto">
                {t("CampoReqFormContacto.title", { framework: "React" })}
                </p>
            )}
            </div>
            <div className="contenedor-campo-formulario-contacto">
            <input
                {...register("apellidos", {
                required: true,
                })}
                
                className="spartan-medium campo-formulario-contacto transiciones peer"
                type="text"
                name="apellidos"
                id="apellidos"
                placeholder={t("ApellidosFormContacto.title", {
                framework: "React",
                })}
            />
            {errors.apellidos?.type === "required" && (
                <p className="spartan-medium texto-error-formulario-contacto">
                {t("CampoReqFormContacto.title", { framework: "React" })}
                </p>
            )}
            </div>
            <div className="contenedor-campo-formulario-contacto">
            <input
                {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                })}
                
                className="spartan-medium campo-formulario-contacto transiciones peer"
                type="email"
                name="email"
                id="email"
                placeholder={t("EmailFormContacto.title", { framework: "React" })}
            />
            {errors.email?.type === "required" && (
                <p className="spartan-medium texto-error-formulario-contacto">
                {t("CampoReqFormContacto.title", { framework: "React" })}
                </p>
            )}
            {errors.email?.type === "pattern" && (
                <p className="spartan-medium texto-error-formulario-contacto">
                {t("CampoReqFormContacto.title", { framework: "React" })}
                </p>
            )}
            </div>
            <div className="contenedor-campo-formulario-contacto">
            <input
                {...register("telefono", {
                maxLength: 10,
                minLength: 10,
                required: true,
                type: number,
                })}
                
                className="spartan-medium campo-formulario-contacto transiciones peer"
                type="number"
                name="telefono"
                id="telefono"
                placeholder={t("TelefonoFormContacto.title", {
                framework: "React",
                })}
            />
            {errors.telefono?.type === "required" && (
                <p className="spartan-medium texto-error-formulario-contacto">
                {t("CampoReqFormContacto.title", { framework: "React" })}
                </p>
            )}
            {errors.telefono?.type === "minLength" && (
                <p className="spartan-medium texto-error-formulario-contacto">
                {t("MinCharFormContacto.title", { framework: "React" })}
                </p>
            )}
            {errors.telefono?.type === "maxLength" && (
                <p className="spartan-medium texto-error-formulario-contacto">
                {t("MaxCharFormContacto.title", { framework: "React" })}
                </p>
            )}
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

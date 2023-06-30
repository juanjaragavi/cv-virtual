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

    const [form, setForm] = useState({
        nombres: "",
        apellidos: "",
        email: "",
        telefono: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        const formData = new URLSearchParams();
        for (const key in form) {
            formData.append(key, form[key]);
            }
            
            fetch('https://hooks.zapier.com/hooks/catch/15793138/3dimzst/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formData.toString()
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch((error) => console.error('Error:', error));
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
        <form onSubmit={handleSubmit} onReset={handleResetClick} netlify>
            <div className="contenedor-campo-formulario-contacto">
            <input
                {...register("nombres", {
                required: true,
                })}
                className="spartan-medium campo-formulario-contacto transiciones peer"
                value={form.nombres}
                onChange={handleChange}
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
                value={form.apellidos} 
                onChange={handleChange}
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
                value={form.email} 
                onChange={handleChange}
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
                value={form.telefono} 
                onChange={handleChange}
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

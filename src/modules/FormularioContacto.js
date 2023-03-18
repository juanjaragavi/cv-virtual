import React from "react";
import { number } from "yup";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

function FormularioContacto() {
    const { t } = useTranslation("common");
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className="contenedor-formulario-contacto">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="contenedor-campo-formulario-contacto">
            <input
                {...register("nombres", {
                required: true,
                })}
                className="spartan-medium peer campo-formulario-contacto transiciones"
                type="text"
                name="nombres"
                id="nombres"
                placeholder={t("NombresFormContacto.title", { framework: "React" })}
            />
            {errors.apellidos?.type === "required" && (
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
                className="spartan-medium peer campo-formulario-contacto transiciones"
                type="text"
                name="apellidos"
                id="apellidos"
                placeholder={t("ApellidosFormContacto.title", { framework: "React" })}
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
                className="spartan-medium peer campo-formulario-contacto transiciones"
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
                className="spartan-medium peer campo-formulario-contacto transiciones"
                type="number"
                name="telefono"
                id="telefono"
                placeholder={t("TelefonoFormContacto.title", { framework: "React" })}
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
            <input
                className="spartan-medium boton-enviar-formulario-contacto boton-idioma transiciones estilos-interactivos-botones borde-redondeado"
                type="submit"
                value={t("BtnEnviarFormContacto.title", { framework: "React" })}
            />
            <input
                className="spartan-medium boton-restablecer-formulario-contacto boton-idioma transiciones estilos-interactivos-botones borde-redondeado"
                type="reset"
                value={t("BtnResetFormContacto.title", { framework: "React" })}
            />
            </div>
        </form>
        </div>
    );
}

export default FormularioContacto;

import React from "react";
import { useForm } from "react-hook-form";
import { number } from "yup";

function FormularioContacto() {
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
                placeholder="Nombres"
            />
            {errors.apellidos?.type === "required" && (
                <p className="spartan-medium texto-error-formulario-contacto">
                Este campo es requerido.
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
                placeholder="Apellidos"
            />
            {errors.apellidos?.type === "required" && (
                <p className="spartan-medium texto-error-formulario-contacto">
                Este campo es requerido.
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
                placeholder="Correo Electrónico"
            />
            {errors.email?.type === "required" && (
                <p className="spartan-medium texto-error-formulario-contacto">
                Este campo es requerido.
                </p>
            )}
            {errors.email?.type === "pattern" && (
                <p className="spartan-medium texto-error-formulario-contacto">
                Ingresa un correo electrónico válido.
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
                placeholder="Teléfono"
            />
            {errors.telefono?.type === "required" && (
                <p className="spartan-medium texto-error-formulario-contacto">
                Este campo es requerido.
                </p>
            )}
            {errors.telefono?.type === "minLength" && (
                <p className="spartan-medium texto-error-formulario-contacto">
                El número mínimo de caracteres permitido es 10.
                </p>
            )}
            {errors.telefono?.type === "maxLength" && (
                <p className="spartan-medium texto-error-formulario-contacto">
                El número máximo de caracteres permitido es 10.
                </p>
            )}
            </div>
            <div className="contenedor-botones-formulario-contacto">
            <input
                className="spartan-medium boton-enviar-formulario-contacto boton-idioma transiciones estilos-interactivos-botones borde-redondeado"
                type="submit"
                value="ENVIAR"
            />
            <input
                className="spartan-medium boton-restablecer-formulario-contacto boton-idioma transiciones estilos-interactivos-botones borde-redondeado"
                type="reset"
                value="RESTABLECER"
            />
            </div>
        </form>
        </div>
    );
}

export default FormularioContacto;

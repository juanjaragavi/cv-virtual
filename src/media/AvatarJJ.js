import React from "react";
import AWSUrl from "./AWSUrl";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { Popover, Transition } from "@headlessui/react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { IconBrandTelegram } from "@tabler/icons-react";

const solutions = [
    {
        name: "WHATSAPP",
        href: "https://wa.link/9emctf/",
        icon: IconBrandWhatsapp,
        target: "_blank",
    },
    {
        name: "TELEGRAM",
        href: "https://t.me/juanjaragavi",
        icon: IconBrandTelegram,
        target: "_blank",
    },
    {
        name: "LINKEDIN",
        href: "https://www.linkedin.com/in/juan-jaramillo-tradebog/",
        icon: IconBrandLinkedin,
        target: "_blank",
    },
];

function AvatarJJDinamico() {
    const { t } = useTranslation("common");
    return (
        <Popover className="inline">
            {({ open }) => (
            <>
                <Popover.Button
                className={`
                    ${open ? "" : "text-opacity-90"}
                    group`}
                >
                <span className="inline-flex items-baseline">
                    <img
                    src={AWSUrl.URL+'avatar.webp'}
                    alt={t("AltAvatarJJ.title", { framework: "React" })}
                    title={t("AltAvatarJJ.title", { framework: "React" })}
                    className="self-center w-5 h-5 rounded-full mr-1 mb-0.5"
                    />{" "}
                    <span className="spartan-bold text-pink-800 dark:text-pink-500 hover:underline hover:underline-offset-2 transiciones">
                    Juan Jaramillo
                    </span>
                </span>
                </Popover.Button>
                <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
                >
                <Popover.Panel className="borde-redondeado transiciones panel-popover-contacto backdrop-blur-lg fondo-translucido">
                    <div className="overflow-hidden">
                    <div className="contenedor-botones-popover-contacto">
                        {solutions.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            target={item.target}
                            className="group boton-popover-contacto transiciones"
                        >
                            <div className="icono-boton-popover-contacto transiciones">
                            <item.icon
                                className="group-hover:stroke-pink-500"
                                aria-hidden="true"
                            />
                            </div>
                            <div className="ml-1 pt-1">
                            <p className="group-hover:text-pink-500 spartan-medium texto-boton-popover-contacto transiciones">
                                {item.name}
                            </p>
                            </div>
                        </a>
                        ))}
                    </div>
                    </div>
                </Popover.Panel>
                </Transition>
            </>
            )}
        </Popover>
    );
}
export default AvatarJJDinamico;

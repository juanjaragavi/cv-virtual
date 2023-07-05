import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { Popover, Transition } from "@headlessui/react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { IconBrandTelegram } from "@tabler/icons-react";

const solutions = [
  {
    name: "LINKEDIN",
    href: "https://www.linkedin.com/in/juan-jaramillo-ai/",
    icon: IconBrandLinkedin,
    target: "_blank",
  },
  {
    name: "WHATSAPP",
    href: "https://wa.link/5twaug/",
    icon: IconBrandWhatsapp,
    target: "_blank",
  },
  {
    name: "TELEGRAM",
    href: "https://t.me/juanjaragavi",
    icon: IconBrandTelegram,
    target: "_blank",
  },
];

function PopoverContacto() {
  const { t } = useTranslation("common");
  return (
    <div className="contenedor-popover-contacto">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                                ${open ? "" : "text-opacity-90"}
                                group grid justify-center trigger-popover-contacto boton-conoce-mas boton-idioma transiciones estilos-interactivos-botones`}
            >
              <div className="flex">
                <span className="text-sm sm:text-xl group-hover:text-pink-500 pt-1.5 spartan-medium transiciones">
                  {t("PonteEnContacto.title", { framework: "React" })}
                </span>
                <svg
                  className="mt-1 w-6 h-6 ml-2 group-hover:stroke-pink-500 transiciones"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                  />
                </svg>
              </div>
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
              <Popover.Panel className="ml-4 borde-redondeado transiciones panel-popover-contacto">
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
    </div>
  );
}

export default PopoverContacto;

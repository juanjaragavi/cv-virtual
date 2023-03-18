import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { IconBrandTelegram } from "@tabler/icons-react";

const solutions = [
    {
        name: "LINKEDIN",
        href: "https://www.linkedin.com/in/juan-jaramillo-tradebog/",
        icon: IconBrandLinkedin,
        target: "_blank"
    },
    {
        name: "WHATSAPP",
        href: "https://wa.link/9emctf/",
        icon: IconBrandWhatsapp,
        target: "_blank"
    },
    {
        name: "TELEGRAM",
        href: "https://t.me/juanjaragavi",
        icon: IconBrandTelegram,
        target: "_blank"
    },
    ];

    function PopoverContacto() {
    return (
        <div className="-ml-5 -mt-3 w-5/6 max-w-sm">
        <Popover className="relative">
            {({ open }) => (
            <>
                <Popover.Button
                className={`
                                ${open ? "" : "text-opacity-90"}
                                group mx-4 w-full rounded-full px-20 py-3 inline-flex items-center boton-conoce-mas boton-idioma transiciones estilos-interactivos-botones`}
                >
                <span className="group-hover:text-pink-500 pt-1 text-center spartan-medium transiciones">
                    PONTE EN CONTACTO
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-1 group-hover:stroke-pink-500 transiciones"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                    />
                </svg>
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
                <Popover.Panel className="borde-redondeado hover:border-pink-500 transiciones absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-3 sm:px-0 lg:max-w-3xl">
                    <div className="overflow-hidden">
                    <div className="relative grid gap-8 p-7 lg:grid-cols-3">
                        {solutions.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            target={item.target}
                            className="group -my-3 flex items-center justify-center rounded-full px-3 py-1 hover:border hover:border-pink-500 hover:no-underline transiciones"
                        >
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center text-gray-900 dark:text-white sm:h-8 sm:w-8 transiciones">
                            <item.icon
                                className="group-hover:stroke-pink-500"
                                aria-hidden="true"
                            />
                            </div>
                            <div className="ml-1 pt-1">
                            <p className="group-hover:text-pink-500 spartan-medium text-lg text-gray-900 dark:text-white transiciones">
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

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      className="group-hover:stroke-pink-500"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}
export default PopoverContacto;

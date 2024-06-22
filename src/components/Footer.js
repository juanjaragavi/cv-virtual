import React from "react";
import LogoJJ from "./LogoJJ";
import Columna from "../layouts/Columna";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation("common");
  const EmailJJ = () => {
    window.open("mailto:info@juanjaramillo.tech", "_parent");
  };
  const estiloPrimeraColumna = {
    border: 0,
    borderColor: "white",
    borderRadius: 0,
    flexBasis: "50%;",
    margin: 0,
  };

  return (
    <footer className="footer-general">
      <div className="m-0 sm:ml-20">
        <LogoJJ />
      </div>
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row w-full justify-center items-center">
        <Columna style={estiloPrimeraColumna}>
          <h4 className="leading-[1rem] text-gray-900 text-sm sm:text-[1rem] 2xl:text-xl dark:text-white font-medium">
            © 2024{" "}
            <span className="titulo-degradado font-bold">
              {t("Nombre.title", { framework: "React" })}
            </span>
          </h4>
          <p className="leading-[1rem] dark:text-white font-light text-sm sm:text-[1rem] sm:mt-0.5 2xl:mt-0.5 w-full">
            {t("DerechosReservados.title", { framework: "React" })}
          </p>
        </Columna>
        <div className="columna borde-redondeado border-l-1 border-0 sm:border-l-2 sm:border-r-0 border:gray-800 dark:border-white rounded-none">
          <a
            href={EmailJJ}
            onClick={EmailJJ}
            className="ml-0 group hover:cursor-pointer text-sm sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl transiciones"
          >
            <svg
              className="icono-email-footer group-hover:scale-110 group-hover:stroke-pink-500 transiciones"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
              <path d="M3 7l9 6l9 -6"></path>
            </svg>
            info@juanjaramillo.tech
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

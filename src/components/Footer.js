import React from "react";
import ContColumnas from "../layouts/ContColumnas";
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
  const estilosColumnas = {
    borderLeftWidth: 1,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderColor: "white",
    borderRadius: 0,
    flexBasis: "33.3333333%;",
    margin: 0,
  };
  return (
    <footer className="footer-general">
      <ContColumnas>
        <Columna style={estiloPrimeraColumna}>
          <h4 className="font-medium text-xl">
            © 2023{" "}
            <span className="titulo-degradado font-bold">
              {t("Nombre.title", { framework: "React" })}
            </span>
          </h4>
          <p className="font-light text-[1rem] -mt-2.5">
            {t("DerechosReservados.title", { framework: "React" })}
          </p>
        </Columna>
        <Columna style={estilosColumnas}>
          <a
            href={EmailJJ}
            onClick={EmailJJ}
            className="group hover:cursor-pointer text-xl transiciones"
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
        </Columna>
      </ContColumnas>
    </footer>
  );
}
export default Footer;

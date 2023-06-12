import React from "react";
import AWSUrl from "../media/AWSUrl";
import { useTranslation } from "react-i18next";

function LogoJJ({ onClick }) {

  const { t } = useTranslation("common");

  return (
  <div className="flex flex-col dark:flex-col-reverse">
    <img onClick={onClick} className="mb-5 dark:mb-0 visible dark:invisible dark:h-0 dark:w-0 mt-5 relative w-44 h-[2.3rem] sm:w-[12rem] sm:h-[2.5rem] 2xl:mr-24" src={AWSUrl.URL + "logo-juan-jaramillo-light.png"} alt={t("Menu.title", { framework: "React" })} title={t("Menu.title", { framework: "React" })} />

    <img onClick={onClick} className="dark:mb-0 dark:visible invisible h-0 w-0 m-0 p-0 dark:mt-5 relative dark:w-44 dark:h-[2.3rem] dark:sm:w-[12rem] dark:sm:h-[2.5rem] dark:2xl:mr-24" src={AWSUrl.URL + "logo-juan-jaramillo.png"} alt={t("Menu.title", { framework: "React" })} title={t("Menu.title", { framework: "React" })} />
  </div>
  );
}

export default LogoJJ;

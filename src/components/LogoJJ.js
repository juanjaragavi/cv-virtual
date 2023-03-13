import React from "react";
import { useTranslation } from "react-i18next";

function LogoJJ({className}) {
  const { t } = useTranslation("common");
  return (
    <img
      className={className}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        type: "tween",
        duration: 1,
        delay: 0.5,
      }}
      alt={t("AltLogoJJ.title", { framework: "React" })}
      src={require("../assets/logo-juan-jaramillo-light.png")}
      title={t("AltLogoJJ.title", { framework: "React" })}
    />
  );
}

export default LogoJJ;

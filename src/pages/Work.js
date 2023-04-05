import React from "react";
import Seccion from "../layouts/Seccion";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import ContInternas from "../layouts/ContInternas";
import Calculator from "../components/Calculator";

function Work() {
  const sinBorde = { border: 0 };

  const { t } = useTranslation("common");
  return (
    <ContInternas>
      <Seccion style={sinBorde}>
        <Calculator />
      </Seccion>
      <Footer />
    </ContInternas>
  );
}

export default Work;

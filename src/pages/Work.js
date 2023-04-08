import React from "react";
import Seccion from "../layouts/Seccion";
import Footer from "../components/Footer";
import ContInternas from "../layouts/ContInternas";
import Calculator from "../components/Calculator";
import Clock from "../components/Clock";
import CurrencyConverter from "../components/CurrencyConverter";
import Calendar from "../components/Calendar";
import NewsTicker from "../components/NewsTicker";

function Work() {
  const sinBorde = { border: 0 };

  return (
    <ContInternas>
      <Seccion style={sinBorde}>
        <Calculator />
        <Clock />
        <CurrencyConverter />
        <Calendar />
        <NewsTicker />
      </Seccion>
      <Footer />
    </ContInternas>
  );
}

export default Work;

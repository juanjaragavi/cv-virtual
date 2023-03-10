import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import FixedMenu from "./components/FixedMenu";
import { MantineProvider } from "@mantine/core";
import LangSwitcherButtons from "./media/LangSwitcherButtons";
import { useTranslation } from "react-i18next";

function App() {
  const [t, i18n] = useTranslation("common");

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Header />
      <Hero />
      <LangSwitcherButtons
        onClickEn={() => i18n.changeLanguage('en')}
        onClickEs={() => i18n.changeLanguage('es')}
        buttonTextEn={t('English.title', {framework:'React'})}
        buttonTextEs={t('Spanish.title', {framework:'React'})}
      />
      <FixedMenu />
    </MantineProvider>
  );
}

export default App;

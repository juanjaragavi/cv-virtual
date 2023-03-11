import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import FixedMenu from "./components/FixedMenu";
import { MantineProvider } from "@mantine/core";
import LangSwitcherButtons from "./media/LangSwitcherButtons";
import { useAnimationControls } from "framer-motion";
import { useTranslation } from "react-i18next";
import LangSplash from "./media/LangSplash";
import HeaderMovil from "./components/HeaderMovil";

function App() {
  const langSelect = useAnimationControls();
  const [t, i18n] = useTranslation("common");

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Header />
      <HeaderMovil />
      <LangSplash
        animate={langSelect}
        onClickEnSplash={() => {
          i18n.changeLanguage("en");
          langSelect.start({
            scale: 0,
          });
        }}
        onClickEsSplash={() => {
          i18n.changeLanguage("es");
          langSelect.start({
            scale: 0,
          });
        }}
      />
      <Hero />
      <LangSwitcherButtons
        onClickEn={() => i18n.changeLanguage("en")}
        onClickEs={() => i18n.changeLanguage("es")}
        buttonTextEn={t("English.title", { framework: "React" })}
        buttonTextEs={t("Spanish.title", { framework: "React" })}
      />
      <FixedMenu />
    </MantineProvider>
  );
}

export default App;
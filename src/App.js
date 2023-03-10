import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import FixedMenu from "./components/FixedMenu";
import { MantineProvider } from "@mantine/core";
import { LanguageProvider } from "./modules/LanguageContext";
import LangSwitcherButtons from "./media/LangSwitcherButtons";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <LanguageProvider>
        <Header />
        <Hero />
        <LangSwitcherButtons />
        <FixedMenu />
      </LanguageProvider>
    </MantineProvider>
  );
}

export default App;

import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import FixedMenu from "./components/FixedMenu";
import { MantineProvider } from "@mantine/core";
import { LanguageProvider } from "./modules/LanguageContext";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <LanguageProvider>
        <Header />
        <Hero />
        <FixedMenu />
      </LanguageProvider>
    </MantineProvider>
  );
}

export default App;

import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import FixedMenu from "./components/FixedMenu";
import { MantineProvider } from "@mantine/core";
import LangSwitcherButtons from "./media/LangSwitcherButtons";
import LangSplash from "./media/LangSplash";
import HeaderMovil from "./components/HeaderMovil";
import SpeechBubble from "./media/SpeechBubble";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Header />
      <HeaderMovil />
      <LangSplash />
      <Hero />
      <LangSwitcherButtons />
      <SpeechBubble />
      <FixedMenu />
    </MantineProvider>
  );
}

export default App;

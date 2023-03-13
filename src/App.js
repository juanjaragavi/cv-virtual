import React, { useState } from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import LangSplash from "./media/LangSplash";
import FixedMenu from "./components/FixedMenu";
import { MantineProvider } from "@mantine/core";
import SpeechBubble from "./media/SpeechBubble";
import HeaderMovil from "./components/HeaderMovil";
import LangSwitcherButtons from "./media/LangSwitcherButtons";

function App() {
  const [move, setMove] = useState('x12')

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Header />
      <HeaderMovil />
      <LangSplash />
      <Hero />
      <LangSwitcherButtons setMove={setMove} />
      <SpeechBubble move={move} />
      <FixedMenu />
    </MantineProvider>
  );
}

export default App;

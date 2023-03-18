import Hero from "./components/Hero";
import React, { useState } from "react";
import Header from "./components/Header";
import LangSplash from "./media/LangSplash";
import FixedMenu from "./components/FixedMenu";
import { MantineProvider } from "@mantine/core";
import SpeechBubble from "./media/SpeechBubble";
import HeaderMovil from "./components/HeaderMovil";
import LangSwitcherButtons from "./media/LangSwitcherButtons";

function App() {
  const [animateHeader, setAnimateHeader] = useState("inactive");
  const [animateBubble, setAnimateBubble] = useState("inactive");
  const [animateSwitcher, setAnimateSwitcher] = useState("inactive");
  const [startAnimations, setStartAnimations] = useState("inactive");
  const [animateFixedMenu, setAnimateFixedMenu] = useState("inactive");
  const [animateHeaderMovil, setAnimateHeaderMovil] = useState("inactive");

  return (
    <main className="App">
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Header animateHeader={animateHeader} />
        <HeaderMovil animateHeaderMovil={animateHeaderMovil} />
        <LangSplash
          setAnimateHeader={setAnimateHeader}
          setAnimateBubble={setAnimateBubble}
          setStartAnimations={setStartAnimations}
          setAnimateSwitcher={setAnimateSwitcher}
          setAnimateFixedMenu={setAnimateFixedMenu}
          setAnimateHeaderMovil={setAnimateHeaderMovil}
        />
        <Hero startAnimations={startAnimations} />
        <LangSwitcherButtons
          animateSwitcher={animateSwitcher}
        />
        <SpeechBubble animateBubble={animateBubble} />
        <FixedMenu animateFixedMenu={animateFixedMenu} />
      </MantineProvider>
    </main>
  );
}

export default App;

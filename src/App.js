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
  const [move, setMove] = useState("x5");
  const [animateHeader, setAnimateHeader] = useState("inactive");
  const [animateBubble, setAnimateBubble] = useState("inactive");
  const [animateSwitcher, setAnimateSwitcher] = useState("inactive");
  const [startAnimations, setStartAnimations] = useState("inactive");
  const [animateFixedMenu, setAnimateFixedMenu] = useState("inactive");

  return (
    <div className="App">
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Header animateHeader={animateHeader} />
        <HeaderMovil/>
        <LangSplash
          setAnimateHeader={setAnimateHeader}
          setAnimateBubble={setAnimateBubble}
          setStartAnimations={setStartAnimations}
          setAnimateSwitcher={setAnimateSwitcher}
          setAnimateFixedMenu={setAnimateFixedMenu}
        />
        <Hero startAnimations={startAnimations} />
        <LangSwitcherButtons
          setMove={setMove} 
          animateSwitcher={animateSwitcher}
        />
        <SpeechBubble
          move={move}
          animateBubble={animateBubble} 
        />
        <FixedMenu animateFixedMenu={animateFixedMenu} />
      </MantineProvider>
    </div>
  );
}

export default App;

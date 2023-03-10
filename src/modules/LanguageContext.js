import React, { createContext, useContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = (props) => {
  const [language, setLanguage] = useState("Spanish");
  return (
    <LanguageContext.Provider> {props.children} </LanguageContext.Provider>
  );
};

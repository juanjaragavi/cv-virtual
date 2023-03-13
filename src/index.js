import React from "react";
import "./index.css";
import App from "./App";
import i18next from "i18next";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import common_en from "./translations/en/common.json";
import common_es from "./translations/es/common.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    en: {
      common: common_en,
    },
    es: {
      common: common_es,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

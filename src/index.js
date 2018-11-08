import React from "react";
import ReactDOM from "react-dom";

import { reactI18nextModule } from "react-i18next";

import i18n from "i18next";

import resources from "./resources";
import Header from "./Header";
import Footer from "./Footer";
import "./styles.css";

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

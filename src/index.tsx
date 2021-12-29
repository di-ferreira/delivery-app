import ReactDOM from "react-dom";
import FontStyles from "./assets/fonts";
import GlobalStyle from "./globalStyles";
import App from "./App";
import React from "react";

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <FontStyles />
    <App />
  </React.Fragment>,
  document.getElementById("root")
);

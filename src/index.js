import React from "react";
import ReactDOM from "react-dom";
import "./styles/Global.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

ReactDOM.render(
  <AppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>,

  document.getElementById("root")
);


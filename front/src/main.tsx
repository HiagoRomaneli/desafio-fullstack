import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ClientsProvider } from "./Contexts/clientContext/clientContext";
import { GlobalStyle } from "./Styles/global";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <ClientsProvider>
        <App />
      </ClientsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

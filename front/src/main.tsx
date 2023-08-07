import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ClientsProvider } from "./Contexts/clientContext/clientContext";
import { ContactsProvider } from "./Contexts/contactContext/contactContext";
import { GlobalStyle } from "./Styles/global";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <ClientsProvider>
        <ContactsProvider>
          <App />
        </ContactsProvider>
      </ClientsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

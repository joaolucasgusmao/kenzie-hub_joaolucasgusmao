import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./providers/UserContext.jsx";
import { FormProvider } from "./providers/FormContext.jsx";
import { TechProvider } from "./providers/TechContext.jsx";
import { ModalProvider } from "./providers/ModalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FormProvider>
        <UserProvider>
          <ModalProvider>
            <TechProvider>
              <App />
            </TechProvider>
          </ModalProvider>
        </UserProvider>
      </FormProvider>
    </BrowserRouter>
  </React.StrictMode>
);

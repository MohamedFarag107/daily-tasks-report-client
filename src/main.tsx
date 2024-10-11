import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { Provider } from "react-redux";
import { store } from "@/store/store.ts";
import { App } from "@/app.tsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Toaster position="top-center" closeButton richColors />
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);

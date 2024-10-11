import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "sonner";

import "@/index.css";
import { store } from "@/store/store.ts";
import { App } from "@/app.tsx";

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

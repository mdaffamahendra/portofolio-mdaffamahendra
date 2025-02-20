import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import DarkModeContextProvider from "../context/DarkMode.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </StrictMode>
);

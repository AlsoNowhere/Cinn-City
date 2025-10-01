import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";

import { App } from "./components/App.component";

import "./styles/index.css";

const chakraTheme = createSystem(defaultConfig);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={chakraTheme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
);

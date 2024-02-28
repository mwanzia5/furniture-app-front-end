import React from "react";

import App from "./App.jsx";
import { createRoot } from 'react-dom/client'

import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./components/Auth.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);






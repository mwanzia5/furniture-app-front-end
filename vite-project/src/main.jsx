


// import ReactDOM from 'react-dom/client'


// ReactDOM.createRoot(document.getElementById('root')).render()


// import React from 'react';
// import { createRoot } from 'react-dom/client'; // Import createRoot from "react-dom/client"
// import App from './App.jsx';

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import React from 'react';
// import { createRoot } from 'react-dom/client';

import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./components/Auth.jsx"


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);






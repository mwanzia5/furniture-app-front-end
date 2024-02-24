import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import  ChakraBaseProvider  from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import './app.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ChakraProvider>
    <App />
   </ ChakraProvider>
  </React.StrictMode>,
)

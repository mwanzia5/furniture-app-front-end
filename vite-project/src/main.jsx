
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ReviewList from  "./pages/review.jsx";
//import  ChakraBaseProvider  from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'







createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <ChakraProvider>
    <ReviewList/>


    

    <App />
   </ ChakraProvider>
  </React.StrictMode>,
)


import Order from "./pages/checkout"

// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQ';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import Header from './components/Header';
import Home from './pages/Home';
import Items from "./pages/products";


const App = () => {
  return (

    <div>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Products" element={<Items/>} />
          </Routes>
        </Router>
      </div>
    <Router>
      <div>
        <Footer />
        <Routes>
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/FAQ" element={<FAQ />} />
          <Route exact path="/RefundPolicy" element={<RefundPolicy />} />
          <Route exact path="/ShippingPolicy" element={<ShippingPolicy />} />
        </Routes>
      </div>
    </Router>
    </div>
  );

}

export default App;

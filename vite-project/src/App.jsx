import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQ';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import Header from './components/Header';
import Home from './pages/Home';
// import ReviewList from "./pages/review";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          {/* <Route path="/review" element={<ReviewList />} /> */}
        </Routes>
        <Footer />
        <Routes>
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/FAQ" element={<FAQ />} />
          <Route exact path="/RefundPolicy" element={<RefundPolicy />} />
          <Route exact path="/ShippingPolicy" element={<ShippingPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

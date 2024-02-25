import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQ';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import Header from './components/Header';
import Home from './pages/Home';

import SignIn from './pages/SignIn';
import SignupForm from "./pages/SignUp";
import Profile from "./pages/profile";



const App = () => {
  return (

    <div>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/profile" element={<Profile />}  />
            <Route path="/Orders" element={<Order />} />
            
          </Routes>
        </Router>
      </div>

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

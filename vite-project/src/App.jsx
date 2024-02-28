

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import Header from "./components/Header";
import Items from "./pages/products";
import SignupForm from "./pages/SignUp";
import Order from "./pages/checkout";
import ReviewList from "./pages/review";
import SignIn from "./pages/signin";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

;




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
            {/* <Route path="/Orders" element={<Order />} /> */}
            <Route path="/review" element={<ReviewList />} />

          </Routes>
        </Router>
      </div>


    <Router>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/products" element={<Items />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/checkout" element={<Order />} />
        <Route path="/review" element={<ReviewList />} />

        <Route exact path="/AboutUs" element={<AboutUs />} />
        <Route exact path="/FAQ" element={<FAQ />} />
        <Route exact path="/RefundPolicy" element={<RefundPolicy />} />
        <Route exact path="/ShippingPolicy" element={<ShippingPolicy />} />
      </Routes>
      <Footer />

    </Router>
    </div>
  );
};

export default App;

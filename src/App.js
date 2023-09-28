import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import { CartContext } from "./CartContext";
import Navigation from "./components/Navigation";




const App = () => {
  const [cart, setCart] = useState({});
// Fetch cart data from localStorage and set it to the cart state
useEffect(() => {
  const storedCart = window.localStorage.getItem('cart');
  if (storedCart) {
    setCart(JSON.parse(storedCart));
  }
}, []);

// Update localStorage whenever the cart state changes
useEffect(() => {
  window.localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);


  return (
    <div className=" static min-h-screen bg-black">
      <Router>
        <CartContext.Provider value={{ cart, setCart }}>
          <Navigation />
        
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/products" element={<Product />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartContext.Provider>
      </Router>
    </div>
  );
};

export default App;

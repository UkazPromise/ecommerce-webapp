import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Body from '../components/Body';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Purchase from './Purchase';

const Mainpage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div>
      <Navbar cartItemCount={cart.length} />
      <Hero />
      <Routes>
        <Route path="/" element={<Body addToCart={addToCart} />} />
        <Route path="/shop" element={<Body addToCart={addToCart} />} />
        <Route path="/purchase" element={<Purchase cart={cart} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Mainpage;

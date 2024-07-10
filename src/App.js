import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mainpage from './pages/Mainpage';
import Purchase from './pages/Purchase';
import Checkout from './pages/Checkout';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Mainpage addToCart={addToCart} />} />
        <Route path="/purchase" element={<Purchase cart={cart} />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;

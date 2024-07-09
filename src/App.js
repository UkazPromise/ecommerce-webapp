import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Purchase from './pages/Purchase';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage addToCart={addToCart} />} />
        <Route path="/purchase" element={<Purchase cart={cart} />} />
      </Routes>
    </Router>
  );
};

export default App;

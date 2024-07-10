import React from 'react';
import Body from '../components/Body';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const Mainpage = ({ addToCart }) => {
  return (
    <div>
      <Hero />
      <Body addToCart={addToCart} />
      <Footer />
    </div>
  );
};

export default Mainpage;

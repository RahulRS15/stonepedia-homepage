// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import './styles/App.css'; // Assuming you're using a custom CSS file

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <main>
        <AboutUs />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default App;

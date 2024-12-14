// src/components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to Stonepedia</h1>
        <p>Explore the world of stones</p>
        <a href="/explore" className="btn btn-primary">Explore Now</a>
      </div>
    </div>
  );
};

export default Hero;

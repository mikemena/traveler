import React from 'react';
import './Hero.css';

const Hero = ({ imageSrc }) => {
  return (
    <div className="hero">
      <img src={imageSrc} alt="Traveler" className="hero_image" />
      <h1 className="hero_title">Traveler</h1>
    </div>
  );
};

export default Hero;

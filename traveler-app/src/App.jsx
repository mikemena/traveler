import './App.css';
import React from 'react';
import beach from '../src/assets/beach.jpg';
import maldives from '../src/assets/maldives.jpg';
import nature from '../src/assets/nature.jpg';
import sunrise from '../src/assets/sunrise.jpg';
import Hero from './components/Hero';
import Slider from './components/Slider';

function App() {
  return (
    <>
      <Hero imageSrc={beach} />
      <Slider
        imageSrc={maldives}
        title="Maldives"
        subtitle="The Maldives is a tropical paradise"
      />
      <Slider
        imageSrc={nature}
        title="Nature"
        subtitle="Nature is beautiful"
        flipped
      />
      <Slider
        imageSrc={sunrise}
        title="Sunrise"
        subtitle="Sunrise is amazing"
      />
    </>
  );
}

export default App;

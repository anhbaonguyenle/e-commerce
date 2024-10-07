import React from 'react';
import './Hero.css';
import hero from '../../assets/Hero-w.png'
const Hero = ({ theme }) => {
  return (
    <div className="hero-container">
        <img src={hero} alt="Hero image of a webstie" className='hero-image'/>
    </div>
  );
};

export default Hero;

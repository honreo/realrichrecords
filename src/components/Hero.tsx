
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-20 px-4">
      <img 
        src="/lovable-uploads/13f0e81d-761f-4cbf-8229-e1dbbdca9941.png"
        alt="RRR Logo"
        className="w-48 h-48 mb-8"
      />
      <h1 className="text-5xl font-bold text-gold text-center mb-4">REAL RICH RECORDS</h1>
      <p className="text-xl text-gold/80 mb-8">WHERE ROYALTY SOUNDS RICH</p>
      <button className="gold-button">LISTEN NOW</button>
    </section>
  );
};

export default Hero;

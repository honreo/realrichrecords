
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Artists from '../components/Artists';
import AboutSection from '../components/AboutSection';
import Merch from '../components/Merch';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/MerchOverride.css';

const Index = () => {
  useEffect(() => {
    // Apply the class to the Merch section grid
    const applyGridClass = () => {
      const merchGrid = document.querySelector('.merch-grid');
      if (merchGrid) {
        merchGrid.classList.add('merchGrid');
      }
    };

    // Call immediately and then observe DOM changes
    applyGridClass();
    
    // Setup a mutation observer to handle dynamic content
    const observer = new MutationObserver((mutations) => {
      applyGridClass();
    });

    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="dark">
      <Navbar />
      <Hero />
      <Artists />
      <AboutSection />
      <Merch />
      <Footer />
    </div>
  );
};

export default Index;

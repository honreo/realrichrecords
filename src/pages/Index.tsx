
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Artists from '../components/Artists';
import Merch from '../components/Merch';
import { Instagram, Youtube } from 'lucide-react';
import { Icon } from 'lucide-react';
import { Tiktok } from '@lucide/lab';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Artists />
      
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gold mb-8">Latest Release</h2>
          <div className="flex justify-center space-x-6 mb-16">
            {['spotify', 'apple', 'youtube'].map((platform) => (
              <button key={platform} className="gold-button">
                {platform}
              </button>
            ))}
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gold mb-4">ABOUT</h2>
            <p className="text-gold/80">Where royalty sounds rich.</p>
          </div>
          
          <div className="flex justify-center space-x-6">
            <Instagram className="w-6 h-6 text-gold hover:text-gold/80 cursor-pointer" />
            <Youtube className="w-6 h-6 text-gold hover:text-gold/80 cursor-pointer" />
            <Icon iconNode={Tiktok} className="w-6 h-6 text-gold hover:text-gold/80 cursor-pointer" />
          </div>
        </div>
      </section>
      
      <Merch />
    </div>
  );
};

export default Index;

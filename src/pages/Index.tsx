
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Artists from '../components/Artists';
import Merch from '../components/Merch';
import { Instagram, Youtube, Github, Music, Headphones } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Artists />
      
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="w-full md:w-1/3">
              <img
                src="/lovable-uploads/668041d1-57b5-4fcc-8d8f-4b5bbcaaa9d0.png"
                alt="Latest Release Cover"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold text-white mb-8">LATEST RELEASE</h2>
              <div className="flex space-x-6 mb-6">
                <Music className="w-8 h-8 text-white hover:text-white/80 cursor-pointer" />
                <Headphones className="w-8 h-8 text-white hover:text-white/80 cursor-pointer" />
                <Youtube className="w-8 h-8 text-white hover:text-white/80 cursor-pointer" />
              </div>
            </div>
          </div>
          
          <div className="mb-16 text-left flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold text-gold mb-4">ABOUT US</h2>
              <p className="text-gold/80">Where royalty sounds rich.</p>
            </div>
            
            <div className="flex space-x-6">
              <Instagram className="w-6 h-6 text-gold hover:text-gold/80 cursor-pointer" />
              <Youtube className="w-6 h-6 text-gold hover:text-gold/80 cursor-pointer" />
              <Github className="w-6 h-6 text-gold hover:text-gold/80 cursor-pointer" />
            </div>
          </div>
        </div>
      </section>
      
      <Merch />
    </div>
  );
};

export default Index;

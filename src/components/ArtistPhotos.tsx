
import React from 'react';

const ArtistPhotos = () => {
  return (
    <section id="artist-photos" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gold text-center mb-12">ARTIST PHOTOS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="overflow-hidden">
            <img 
              src="/lovable-uploads/e21132b8-c21e-4638-ac83-08c39ba3ed7e.png" 
              alt="Artist with car" 
              className="w-full h-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden">
            <img 
              src="/lovable-uploads/b7271561-f71c-4f9b-a0e3-c31744576c21.png" 
              alt="Artist with money" 
              className="w-full h-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden">
            <img 
              src="/lovable-uploads/5f01719d-f284-4468-9a3e-f9cb612e8fd8.png" 
              alt="Artist in purple hoodie" 
              className="w-full h-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden">
            <img 
              src="/lovable-uploads/6d8ebc15-55e9-4216-9797-2d41947a05ab.png" 
              alt="Artist in orange outfit" 
              className="w-full h-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden">
            <img 
              src="/lovable-uploads/4e6d9837-6729-410f-bcf5-77e9a89c4021.png" 
              alt="Artist counting money" 
              className="w-full h-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistPhotos;

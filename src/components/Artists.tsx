
import React from 'react';

const Artists = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gold text-center mb-12">Our Artists</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src="/lovable-uploads/5a4191ab-78f5-4b78-a722-63616824128a.png"
              alt="Artist in purple hoodie"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src="/lovable-uploads/05fdde9a-b7d9-411f-b162-87ccacc91647.png"
              alt="Artist in orange outfit"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src="/lovable-uploads/d61e3748-ad38-491b-be7b-75c1a1462bf7.png"
              alt="Artist in black beanie"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artists;

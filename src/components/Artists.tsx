
import React from 'react';

const Artists = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gold text-center mb-12">Artists</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative aspect-[3/4] overflow-hidden flex flex-col">
            <img
              src="/lovable-uploads/50969e7a-4f49-4620-bb48-1548055f1d0c.png"
              alt="Artist in sunglasses and leather jacket"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
            <p className="text-xl text-gold text-center mt-4 font-bold">ARTIST</p>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden flex flex-col">
            <img
              src="/lovable-uploads/43d53867-4c34-4b69-814d-403f075341d1.png"
              alt="Artist with long hair"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
            <p className="text-xl text-gold text-center mt-4 font-bold">NAMER</p>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden flex flex-col">
            <img
              src="/lovable-uploads/d5aa1187-0c40-420c-b6b3-f0b0e3b7a049.png"
              alt="Artist in beanie"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
            <p className="text-xl text-gold text-center mt-4 font-bold">ARTEN</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artists;

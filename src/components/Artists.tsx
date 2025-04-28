import React from 'react';

const artistsData = [
  { name: 'ARTIST', image: '/lovable-uploads/6de16123-aa64-4f95-9e70-0ccbba2615b6.png' },
  { name: 'NAMER', image: '/lovable-uploads/6de16123-aa64-4f95-9e70-0ccbba2615b6.png' },
  { name: 'ARTEN', image: '/lovable-uploads/6de16123-aa64-4f95-9e70-0ccbba2615b6.png' },
];

const Artists = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {artistsData.map((artist, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-full aspect-square overflow-hidden mb-4">
              <img 
                src={artist.image} 
                alt={artist.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gold">{artist.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Artists;

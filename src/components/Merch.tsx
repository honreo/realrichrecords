
import React from 'react';
import { Button } from "@/components/ui/button";

const products = [
  {
    name: 'The Real Rich Tee',
    price: 30,
    image: '/placeholder.svg'
  },
  {
    name: 'Crown Hoodie',
    price: 60,
    image: '/placeholder.svg'
  },
  {
    name: 'R Logo Snapback',
    price: 35,
    image: '/placeholder.svg'
  },
  {
    name: 'REAL Tote',
    price: 25,
    image: '/placeholder.svg'
  }
];

const Merch = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-gold text-center mb-4">REAL RICH MERCH</h2>
        <p className="text-xl text-gold/80 text-center mb-12">Limited drops. Stay rich.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 merch-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="w-full aspect-square mb-4 bg-gray-900 flex items-center justify-center">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/placeholder.svg';
                  }}
                />
              </div>
              <h3 className="text-xl font-bold text-gold mb-2">{product.name}</h3>
              <p className="text-gold/80 mb-4">${product.price}</p>
              <Button 
                className="bg-gold hover:bg-gold/80 text-black font-bold"
              >
                ADD TO CART
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Merch;

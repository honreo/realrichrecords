
import React from 'react';
import { Button } from "@/components/ui/button";

const products = [
  {
    name: 'The Real Rich Tee',
    price: 30,
    image: '/lovable-uploads/7244be68-f45a-4232-9979-dea78f289625.png'
  },
  {
    name: 'Crown Hoodie',
    price: 60,
    image: '/lovable-uploads/b0d61785-de30-4f8d-9fbe-ad622185d603.png'
  },
  {
    name: 'R Logo Snapback',
    price: 35,
    image: '/lovable-uploads/df8351d4-bb3d-4d46-b55e-e8a8632b4ac2.png'
  },
  {
    name: 'REAL Tote',
    price: 25,
    image: '/lovable-uploads/df8351d4-bb3d-4d46-b55e-e8a8632b4ac2.png'
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
              <div className="w-full aspect-square mb-4">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
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


import React from 'react';

const products = [
  {
    name: 'The Real Rich Tee',
    price: 30,
    image: '/lovable-uploads/df8351d4-bb3d-4d46-b55e-e8a8632b4ac2.png'
  },
  {
    name: 'Crown Hoodie',
    price: 60,
    image: '/lovable-uploads/df8351d4-bb3d-4d46-b55e-e8a8632b4ac2.png'
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <button className="gold-button">ADD TO CART</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Merch;

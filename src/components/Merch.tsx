import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import "../styles/MerchOverride.css";

// Keeping existing hoodie image from the uploaded files
import hoodie from "/lovable-uploads/05fdde9a-b7d9-411f-b162-87ccacc91647.png";
// Keeping existing t-shirt image from the uploaded files
import tshirt from "/lovable-uploads/13f0e81d-761f-4cbf-8229-e1dbbdca9941.png";
// Keeping the black hoodie image
import blackHoodie from "/lovable-uploads/dfe982aa-6329-40c4-b720-e8d7af104fd4.png";
// Keeping the black t-shirt image
import blackTshirt from "/lovable-uploads/5869d5a5-d436-4c03-9e64-3c53a38095c0.png";
// Adding the new tote bag image
import toteBag from "/lovable-uploads/3e831333-b411-4429-98f7-cc30a210e381.png";
// Adding the new cap image
import cap from "/lovable-uploads/96b5c569-bef8-46b9-b575-6902c6febeb5.png";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
};

export default function Merch() {
  const [selectedItems, setSelectedItems] = useState<Product[]>([]);

  const products: Product[] = [
    { id: 1, name: "Black Hoodie with Gold RR Logo", price: 99.99, image: blackHoodie, type: "Hoodie" },
    { id: 2, name: "Black T-Shirt with Gold RR Logo", price: 49.99, image: blackTshirt, type: "T-Shirt" },
    { id: 3, name: "Black Tote Bag with Gold RR Logo", price: 34.99, image: toteBag, type: "Tote Bag" },
    { id: 4, name: "Black Cap with Gold RR Logo", price: 29.99, image: cap, type: "Cap" },
    { id: 5, name: "Premium White Hoodie", price: 89.99, image: hoodie, type: "Hoodie" },
    { id: 6, name: "Premium White T-Shirt", price: 39.99, image: tshirt, type: "T-Shirt" },
  ];

  const handleAddToCart = (product: Product) => {
    setSelectedItems([...selectedItems, product]);
  };

  return (
    <section className="py-20 md:py-32 bg-[#0F0F0F] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            REAL RICH MERCH
          </h2>
          <p className="text-zinc-400 text-center max-w-2xl">
            Exclusive merchandise for the Real Rich community. Limited editions, premium quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="bg-[#1A1A1A] border-zinc-800 overflow-hidden transition-all hover:border-yellow-500/50 hover:-translate-y-1 duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-square w-full overflow-hidden bg-zinc-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-white">{product.name}</h3>
                    <span className="text-yellow-500 font-bold">${product.price}</span>
                  </div>
                  <p className="text-zinc-400 text-sm">{product.type}</p>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 border-t border-zinc-800">
                <Button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-zinc-800 hover:bg-yellow-600 text-white transition-colors"
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {selectedItems.length > 0 && (
          <div className="mt-12 bg-[#1A1A1A] border border-zinc-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-white">Your Cart</h3>
            <div className="space-y-4">
              {selectedItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-zinc-900 rounded overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{item.name}</p>
                      <p className="text-sm text-zinc-400">{item.type}</p>
                    </div>
                  </div>
                  <p className="text-yellow-500 font-bold">${item.price}</p>
                </div>
              ))}
              <div className="pt-4 border-t border-zinc-800 flex justify-between">
                <p className="font-bold text-white">Total:</p>
                <p className="font-bold text-yellow-500">
                  ${selectedItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                </p>
              </div>
              <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold">
                Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

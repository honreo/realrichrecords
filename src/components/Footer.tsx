
import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and About */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">REAL RICH</h2>
            <p className="text-gray-400 max-w-sm">
              A showcase of the finest music, art, and merchandise. Join our community and explore the creative world.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Artists</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Merchandise</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <p className="text-gray-400">Stay updated with our latest releases and events.</p>
            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 flex-grow"
              />
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 transition-colors rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} REAL RICH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { Apple, Youtube } from 'lucide-react';
import albumCover from "/lovable-uploads/6ed4da9f-f845-48b6-b3b5-0309938a7432.png";

const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Latest Release Section with Music ID */}
        <div id="music" className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="w-full md:w-1/2">
            <img 
              src={albumCover} 
              alt="Latest Release" 
              className="w-full max-w-md mx-auto md:mx-0" 
            />
          </div>
          
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">LATEST RELEASE</h2>
            <div className="flex gap-6 justify-center md:justify-start">
              <a 
                href="https://open.spotify.com/artist/5BJWzVSBmbQFfiTOlJXjO0?si=eR1NV3DhTzGLDaCw2OPs_Q" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500 transition-colors"
              >
                {/* Custom Spotify SVG icon */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="32" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 11.8a6 6 0 019.65 1.17" />
                  <path d="M8 8.5a8 8 0 0112.5 3.2" />
                  <path d="M8 14.88a4 4 0 016.2-.5" />
                </svg>
              </a>
              <a 
                href="https://music.apple.com/us/artist/thumbz/1090686070" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500 transition-colors"
              >
                <Apple size={32} />
              </a>
              <a 
                href="https://youtube.com/@thumbzrrr?si=-L-Ex-DHeG17xAOH" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500 transition-colors"
              >
                <Youtube size={32} />
              </a>
            </div>
          </div>
        </div>
        
        {/* About Us Section */}
        <div id="about" className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">ABOUT US</h2>
            <p className="text-xl text-white">Where royalty sounds rich</p>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end gap-6 items-center">
            <a 
              href="https://open.spotify.com/artist/5BJWzVSBmbQFfiTOlJXjO0?si=eR1NV3DhTzGLDaCw2OPs_Q"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-500 transition-colors"
            >
              {/* Custom Spotify SVG icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 11.8a6 6 0 019.65 1.17" />
                <path d="M8 8.5a8 8 0 0112.5 3.2" />
                <path d="M8 14.88a4 4 0 016.2-.5" />
              </svg>
            </a>
            <a 
              href="https://music.apple.com/us/artist/thumbz/1090686070"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-500 transition-colors"
            >
              <Apple size={24} />
            </a>
            <a 
              href="https://youtube.com/@thumbzrrr?si=-L-Ex-DHeG17xAOH"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-500 transition-colors"
            >
              <Youtube size={24} />
            </a>
            <a 
              href="https://open.spotify.com/artist/5BJWzVSBmbQFfiTOlJXjO0?si=eR1NV3DhTzGLDaCw2OPs_Q"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-500 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0 -6 0" />
                <path d="M13 12.75v8.25" />
                <path d="M19.2 8.02a8 8 0 0 0 -14.4 0" />
                <path d="M18.47 5.07c-3.27 -1.72 -7.67 -1.72 -10.94 0" />
                <path d="M15.34 10.07c-1.67 -.88 -3.01 -.88 -4.68 0" />
                <path d="M11 12.75v8.25" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

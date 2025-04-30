
import React from 'react';

const Songs = () => {
  return (
    <section id="music" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gold text-center mb-12">MUSIC</h2>
        <div className="max-w-3xl mx-auto">
          <iframe 
            style={{ borderRadius: "12px" }} 
            src="https://open.spotify.com/embed/track/2t17SaxxJczKlTDgkTzxZJ?utm_source=generator" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="Spotify Player"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Songs;

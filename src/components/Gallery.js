import React from 'react';

const galleryImages = [
  { src:'/rmc1.png', alt: 'Modern Concrete Plant' },
  { src: '/rmc2.png', alt: 'Construction Site' },
  { src: '/rmc3.png', alt: 'Industrial Project' },
  { src: '/rmc4.png', alt: 'Batching Plant' },
  { src: '/rmc5.png', alt: 'Concrete Pouring' },
  { src: '/rmc6.png', alt: 'Construction Equipment' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-28 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight animate-fade-in-up">Gallery</h2>
          <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-slate-600 animate-fade-in-up delay-200">Our Recent Projects</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="glass rounded-3xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up">
              <img src={img.src} alt={img.alt} className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105 cursor-pointer" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery; 
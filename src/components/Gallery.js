import React from 'react';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', alt: 'Modern Concrete Plant' },
  { src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80', alt: 'Construction Site' },
  { src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80', alt: 'Industrial Project' },
  { src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80', alt: 'Batching Plant' },
  { src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80', alt: 'Concrete Pouring' },
  { src: 'https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=800&q=80', alt: 'Construction Equipment' },
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
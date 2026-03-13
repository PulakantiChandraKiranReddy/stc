import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
            {/* Glassy background visual */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-slate-100/80 to-white/60" />
            {/* Logo watermark */}
            <img src="/stcBackground.jpg" alt="STC Watermark" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 w-full pointer-events-none select-none z-0" />
            <div className="relative z-10 px-4">
                <h1 className="text-5xl md:text-8xl font-extrabold text-slate-900 tracking-tight leading-tight drop-shadow-2xl animate-fade-in-up mb-8">
                    Building the Future<br />
                    <span className="text-orange-500">On a Foundation of Strength</span>
                </h1>
                <p className="mt-4 text-2xl md:text-3xl text-slate-900 max-w-3xl mx-auto font-light animate-fade-in-up delay-200 mb-10">
                    Delivering high-quality, reliable concrete solutions for projects of any scale. Your trusted partner in construction excellence.
                </p>
                <div className="mt-8 animate-fade-in-up delay-400">
                    <a href="#contact" className="bg-orange-500 text-white text-2xl font-bold px-12 py-5 rounded-full shadow-2xl hover:bg-orange-600 transition-all transform hover:scale-110 hover:shadow-orange-500/40 focus:outline-none focus:ring-4 focus:ring-orange-400/50 animate-bounce-slow">
                        Request a Free Site Visit
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

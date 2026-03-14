import React from 'react';

const Hero = () => {
    return (
        <section className="relative min-h-[100dvh] sm:min-h-screen flex items-center justify-center text-center overflow-hidden bg-slate-200">
            {/* Full-cover background image: landscape fits desktop; on mobile (portrait) shows center and scales to cover */}
            <img
                src="/stcBackground.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-center sm:object-center pointer-events-none select-none z-0"
                aria-hidden
            />
            {/* Overlay so text stays readable on all screens */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/75 to-white/90 z-[1]" />
            <div className="relative z-10 w-full max-w-[100vw] px-4 py-12 sm:py-16 box-border">
                <h1 className="text-2xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 tracking-tight leading-tight drop-shadow-lg animate-fade-in-up mb-4 sm:mb-8 break-words">
                    Building the Future
                    <br className="hidden sm:block" />
                    <span className="text-orange-500 block mt-1">On a Foundation of Strength</span>
                </h1>
                <p className="mt-3 sm:mt-4 text-sm sm:text-xl md:text-2xl lg:text-3xl text-slate-800 max-w-3xl mx-auto font-light animate-fade-in-up delay-200 mb-6 sm:mb-10 px-0 sm:px-2 break-words">
                    Delivering high-quality, reliable concrete solutions for projects of any scale. Your trusted partner in construction excellence.
                </p>
                <div className="mt-6 sm:mt-8 animate-fade-in-up delay-400">
                    <a
                        href="#contact"
                        className="inline-block text-center bg-orange-500 text-white text-sm sm:text-lg md:text-xl font-bold px-6 py-3 sm:px-10 sm:py-4 md:px-12 md:py-5 rounded-full shadow-xl hover:bg-orange-600 transition-all hover:scale-105 hover:shadow-orange-500/40 focus:outline-none focus:ring-4 focus:ring-orange-400/50 animate-bounce-slow max-w-[90vw]"
                    >
                        Request a Free Site Visit
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

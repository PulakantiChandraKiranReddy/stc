import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header id="header" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-200/40' : 'bg-white/60 backdrop-blur-md'} glass`} style={{height: '5.5rem'}}>
            <div className="container mx-auto px-4 sm:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 flex flex-col items-start">
                        <a href="/" className="group flex items-center space-x-3" aria-label="STC Sai Tirumala Concrete – Home">
                            <img src="/stc5.png" alt="STC Sai Tirumala Concrete logo" className="block h-19 w-12 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                            <div>
                                <span className="block text-2xl md:text-3xl font-extrabold text-slate-900 tracking-wide drop-shadow-lg">STC<span className="text-orange-500">.</span></span>
                                <p className="text-xs text-slate-500 -mt-1 font-semibold tracking-widest">SAI TIRUMALA CONCRETE</p>
                            </div>
                        </a>
                    </div>
                    <nav className="hidden md:flex items-center space-x-10">
                        <a href="#about" className="text-base text-slate-700 hover:text-orange-500 transition-colors font-medium">About</a>
                        <a href="#why-us" className="text-base text-slate-700 hover:text-orange-500 transition-colors font-medium">Why Us</a>
                        <a href="#services" className="text-base text-slate-700 hover:text-orange-500 transition-colors font-medium">Services</a>
                        <a href="#clients" className="text-base text-slate-700 hover:text-orange-500 transition-colors font-medium">Clients</a>
                        <a href="#gallery" className="text-base text-slate-700 hover:text-orange-500 transition-colors font-medium">Gallery</a>
                        <a href="#blog" className="text-base text-slate-700 hover:text-orange-500 transition-colors font-medium">Blog</a>
                        <a href="#contact" className="text-base text-slate-700 hover:text-orange-500 transition-colors font-medium">Contact</a>
                    </nav>
                    <div className="hidden md:block">
                        <a href="#contact" className="bg-orange-500 text-white text-base font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-orange-600 transition-colors transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-300">Get a Quote</a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} id="mobile-menu-button" className="text-slate-700 p-2" aria-label="Toggle menu">
                            <svg id="menu-icon-open" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${isOpen ? 'hidden' : ''}`}> <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                            <svg id="menu-icon-close" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${isOpen ? '' : 'hidden'}`}> <line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div id="mobile-menu" className={`${isOpen ? '' : 'hidden'} md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/40`}> <div className="px-4 pt-4 pb-6 space-y-2">
                <a href="#about" className="block px-4 py-3 rounded-lg text-lg font-medium text-slate-700 hover:text-orange-500 hover:bg-slate-100">About</a>
                <a href="#why-us" className="block px-4 py-3 rounded-lg text-lg font-medium text-slate-700 hover:text-orange-500 hover:bg-slate-100">Why Us</a>
                <a href="#services" className="block px-4 py-3 rounded-lg text-lg font-medium text-slate-700 hover:text-orange-500 hover:bg-slate-100">Services</a>
                <a href="#clients" className="block px-4 py-3 rounded-lg text-lg font-medium text-slate-700 hover:text-orange-500 hover:bg-slate-100">Clients</a>
                <a href="#gallery" className="block px-4 py-3 rounded-lg text-lg font-medium text-slate-700 hover:text-orange-500 hover:bg-slate-100">Gallery</a>
                <a href="#blog" className="block px-4 py-3 rounded-lg text-lg font-medium text-slate-700 hover:text-orange-500 hover:bg-slate-100">Blog</a>
                <a href="#contact" className="block px-4 py-3 rounded-lg text-lg font-medium text-slate-700 hover:text-orange-500 hover:bg-slate-100">Contact</a>
                <div className="pt-4">
                    <a href="#contact" className="w-full text-center block bg-orange-500 text-white text-base font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-orange-600 transition-colors">Get a Quote</a>
                </div>
            </div></div>
        </header>
    );
};

export default Header;

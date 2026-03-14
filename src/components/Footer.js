import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-slate-200/40 py-10 bg-gradient-to-b from-white via-slate-50 to-white">
            <div className="container mx-auto px-4 sm:px-8 text-center text-slate-500">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-orange-500 transition-colors">
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    </a>
                    <a href="https://wa.me/919542411666" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-orange-500 transition-colors">
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                    </a>
                    <a href="mailto:info@saitirumalaconcrete.com" aria-label="Email" className="hover:text-orange-500 transition-colors">
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </a>
                </div>
                <p>&copy; 2024 SAI TIRUMALA CONCRETE. All Rights Reserved.</p>
                <p className="text-sm mt-2">Built on a Foundation of Quality and Trust.</p>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';

const whyUsFeatures = [
    { icon: 'HardHat', title: "Custom Concrete Grades", description: "Tailored mixes to meet the specific structural needs of your project." },
    { icon: 'ShieldCheck', title: "Consistent Quality", description: "Rigorous quality control ensures every batch meets the highest standards." },
    { icon: 'Clock', title: "Timely Delivery", description: "Punctual and reliable delivery service to keep your project on schedule." },
    { icon: 'Leaf', title: "Eco-Friendly Practices", description: "Committed to sustainable practices that minimize environmental impact." },
    { icon: 'Zap', title: "Expert Advice", description: "Our experienced team is available to provide guidance and free site visits." },
    { icon: 'Award', title: "Quality Assurance", description: "Backed by IoT-enabled systems for precision in every mix." },
    { icon: 'DollarSign', title: "Competitive Pricing", description: "Top-tier quality and service at a fair and competitive price point." },
    { icon: 'Phone', title: "24/7 Service", description: "We are available around the clock to support your project needs." },
];

const LucideIcon = ({ name }) => {
    const icons = {
        HardHat: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 mx-auto"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15.5V12a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3.5"/><path d="M12 15.5V11"/></svg>,
        ShieldCheck: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 mx-auto"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
        Clock: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 mx-auto"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
        Leaf: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 mx-auto"><path d="M11 20A7 7 0 0 1 4 13H2a10 10 0 0 0 10 10z"/><path d="M12 2a7 7 0 0 1 7 7h2a10 10 0 0 0-10-10z"/><path d="M12 22a7 7 0 0 1-7-7H3a10 10 0 0 0 10 10z"/><path d="M22 12a7 7 0 0 1-7 7h-2a10 10 0 0 0 10-10z"/></svg>,
        Zap: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 mx-auto"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2z"/></svg>,
        Award: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 mx-auto"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>,
        DollarSign: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 mx-auto"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
        Phone: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 mx-auto"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    };
    return icons[name];
}

const WhyUs = () => {
    return (
        <section id="why-us" className="py-28 bg-gradient-to-b from-white via-slate-50 to-white">
            <div className="container mx-auto px-4 sm:px-8 text-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight animate-fade-in-up">Why Choose Us</h2>
                    <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-slate-600 mb-12 animate-fade-in-up delay-200">The STC Advantage</h3>
                </div>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {whyUsFeatures.map((feature, index) => (
                        <div key={index} className="glass p-8 rounded-3xl text-center shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up" style={{minHeight: '260px'}}>
                            <LucideIcon name={feature.icon} />
                            <h4 className="mt-6 font-bold text-xl md:text-2xl text-slate-900">{feature.title}</h4>
                            <p className="mt-3 text-base md:text-lg text-slate-600 font-light">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;

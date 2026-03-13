
import React from 'react';

const services = [
    {
        title: 'Ready-Mix Concrete',
        description: 'High-quality, pre-mixed concrete delivered to your site, ensuring consistency and strength for all your construction needs.',
        icon: 'M19 8l-4 4h3v4h-3l4 4V8zM5 8l4 4H6v4h3l-4 4V8z'
    },
    {
        title: 'Stamped Concrete',
        description: 'Decorative concrete that mimics the look of stone, brick, or other materials, perfect for patios, driveways, and walkways.',
        icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z'
    },
    {
        title: 'Concrete Pumping',
        description: 'Efficient and precise concrete placement for large or hard-to-reach areas, saving time and labor on your project.',
        icon: 'M18 8h-1V6h-2v2h-1c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h1v2h2v-2h1c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-3 10h-1v-2h1v2zm0-4h-1v-2h1v2z'
    },
    {
        title: 'Foundation Pouring',
        description: 'Expert foundation services for residential and commercial buildings, ensuring a solid and durable base for your structure.',
        icon: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'
    },
    {
        title: 'Concrete Sealing',
        description: 'Protect and extend the life of your concrete surfaces with our professional sealing services, preventing damage from water, stains, and weather.',
        icon: 'M18 8h-1V6h-2v2h-1c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h1v2h2v-2h1c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-3 10h-1v-2h1v2zm0-4h-1v-2h1v2z'
    },
    {
        title: 'Shotcrete Services',
        description: 'Versatile and high-strength sprayed concrete for a variety of applications, including pools, retaining walls, and repairs.',
        icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h-1v-2h1v2zm0-4h-1v-2h1v2zm0-4h-1V9h1v2z'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-28 bg-gradient-to-b from-white via-slate-50 to-white">
            <div className="container mx-auto px-4 sm:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight animate-fade-in-up">Our Services</h2>
                    <p className="text-xl md:text-2xl text-slate-500 font-light animate-fade-in-up delay-200">Comprehensive concrete solutions tailored to your needs.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <div key={index} className="glass p-10 flex flex-col items-center text-center shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-3xl animate-fade-in-up" style={{minHeight: '340px'}}>
                            <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 text-white mb-8 shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">{service.title}</h3>
                            <p className="text-lg text-slate-600 font-light">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

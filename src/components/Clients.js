import React from 'react';

const BuildingIcon = ({ className = "w-10 h-10 sm:w-12 sm:h-12" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
        <path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" />
    </svg>
);

const ConstructionIcon = ({ className = "w-10 h-10 sm:w-12 sm:h-12" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
        <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
        <path d="M4 15.5V12a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3.5" />
        <path d="M12 15.5V11" />
    </svg>
);

const AwardIcon = ({ className = "w-10 h-10 sm:w-12 sm:h-12" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
);

const clients = [
    { name: 'Sri Sampadha Homes', icon: BuildingIcon },
    { name: 'SV Constructions', icon: ConstructionIcon },
    { name: 'L&T', icon: AwardIcon },
];

const Clients = () => {
    return (
        <section id="clients" className="py-16 sm:py-24 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <div className="text-center mb-10 sm:mb-14 md:mb-16">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-2 sm:mb-4 tracking-tight">
                        Our Clients
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 font-light max-w-2xl mx-auto px-1">
                        Trusted by leading names in construction
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
                    {clients.map((client, index) => {
                        const Icon = client.icon;
                        return (
                            <div
                                key={index}
                                className="glass rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl flex items-center gap-3 sm:gap-4 md:gap-5 min-h-[88px] sm:min-h-[100px]"
                            >
                                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 text-white shadow-md">
                                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                                </div>
                                <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-800 leading-tight break-words text-left">
                                    {client.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Clients;

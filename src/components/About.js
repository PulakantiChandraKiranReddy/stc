import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 md:py-40 bg-gradient-to-b from-white via-slate-50 to-white">
            <div className="container mx-auto px-4 sm:px-8">
                <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl bg-white/60 border border-white/30 ring-1 ring-slate-200/40 transition-transform duration-500 hover:scale-105 animate-fade-in-up">
                            <img src="stc10.jpeg" alt="Sai Tirumala Concrete Plant" className="w-full h-auto rounded-3xl" />
                        </div>
                    </div>
                    <div className="md:w-1/2 animate-fade-in-up delay-200">
                        <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 tracking-wide mb-2">About Us</h2>
                        <h3 className="mt-2 text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-8">Your Partner in Building Trust & Strength</h3>
                        <p className="text-xl md:text-2xl text-slate-600 mb-6 font-light">
                            At Sai Tirumala Concrete, we’re not just in the business of mixing concrete—we’re in the business of building trust, strength, and lasting relationships. With multiple IoT-enabled batching plants across Adibatla and Kandukur, we serve everyone from small individual builders to large-scale infrastructure developers.
                        </p>
                        <p className="text-lg md:text-xl text-slate-500 font-light">
                            Our commitment to 24/7 service, precision mixing, and punctual delivery makes us a reliable partner in any construction journey.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

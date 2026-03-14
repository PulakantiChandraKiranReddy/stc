// import React from 'react';

// const Contact = () => {
//     return (
//         <section id="contact" className="py-28 bg-gradient-to-b from-white via-slate-50 to-white">
//             <div className="container mx-auto px-4 sm:px-8">
//                 <div className="text-center mb-16">
//                     <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight animate-fade-in-up">Contact Us</h2>
//                     <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-slate-600 animate-fade-in-up delay-200">Let's Build Something Great Together</h3>
//                     <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto font-light animate-fade-in-up delay-400">
//                         Ready to start your project or need expert advice? Reach out to us today. We're available 24/7 to discuss your needs.
//                     </p>
//                 </div>
//                 <div className="max-w-4xl mx-auto glass p-12 rounded-3xl shadow-2xl animate-fade-in-up">
//                     <div className="flex flex-col md:flex-row justify-around items-center gap-8 text-center md:text-left mb-10">
//                         <div className="flex items-center gap-4">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
//                             <div>
//                                 <h4 className="text-lg font-semibold text-slate-900">Call Us Directly</h4>
//                                 <a href="tel:9542311666" className="text-2xl text-slate-700 hover:text-orange-500 transition-colors font-semibold">95423 11666</a>
//                             </div>
//                         </div>
//                         <div className="w-px h-16 bg-slate-200 hidden md:block"></div>
//                         <div className="flex items-center gap-4">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
//                             <div>
//                                 <h4 className="text-lg font-semibold text-slate-900">Our Locations</h4>
//                                 <p className="text-2xl text-slate-700 font-semibold">Adibatla & Kandukur</p>
//                             </div>
//                         </div>
//                     </div>
//                     <p className="text-center mt-8 text-slate-500 font-light">Or, send us a message and we'll get back to you shortly.</p>
//                     <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
//                         <input type="text" placeholder="Your Name" className="bg-white/80 border border-slate-200 rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-lg" />
//                         <input type="email" placeholder="Your Email" className="bg-white/80 border border-slate-200 rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-lg" />
//                         <textarea placeholder="Your Message" rows="4" className="md:col-span-2 bg-white/80 border border-slate-200 rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-lg"></textarea>
//                         <div className="md:col-span-2 text-center">
//                             <button type="submit" className="bg-orange-500 text-white font-semibold px-10 py-4 rounded-xl shadow-lg hover:bg-orange-600 transition-colors transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-300 text-lg">
//                                 Send Message
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Contact;
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

    const form = useRef();

    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            setModalMessage("✅ Message sent successfully! We will contact you shortly.");
            setModalOpen(true);
            form.current.reset();
        })
        .catch((error) => {
            console.error(error);
            setModalMessage("❌ Failed to send message. Please try again.");
            setModalOpen(true);
        });
    };

    return (
        <>
        <section id="contact" className="py-28 bg-gradient-to-b from-white via-slate-50 to-white">
            <div className="container mx-auto px-4 sm:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight animate-fade-in-up">Contact Us</h2>
                    <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-slate-600 animate-fade-in-up delay-200">Let's Build Something Great Together</h3>
                    <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto font-light animate-fade-in-up delay-400">
                        Ready to start your project or need expert advice? Reach out to us today. We're available 24/7 to discuss your needs.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto glass p-12 rounded-3xl shadow-2xl animate-fade-in-up">

                    <div className="flex flex-col md:flex-row justify-around items-center gap-8 text-center md:text-left mb-10">

                        <div className="flex items-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>

                            <div>
                                <h4 className="text-lg font-semibold text-slate-900">Call Us Directly</h4>
                                <a href="tel:9542311666" className="text-2xl text-slate-700 hover:text-orange-500 transition-colors font-semibold">95423 11666</a>
                            </div>
                        </div>

                        <div className="w-px h-16 bg-slate-200 hidden md:block"></div>

                        <div className="flex items-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>

                            <div>
                                <h4 className="text-lg font-semibold text-slate-900">Our Locations</h4>
                                <p className="text-2xl text-slate-700 font-semibold">Adibatla & Kandukur</p>
                            </div>
                        </div>

                    </div>

                    <p className="text-center mt-8 text-slate-500 font-light">
                        Or, send us a message and we'll get back to you shortly.
                    </p>

                    <form ref={form} onSubmit={sendEmail} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="bg-white/80 border border-slate-200 rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-lg"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="bg-white/80 border border-slate-200 rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-lg"
                        />

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="4"
                            required
                            className="md:col-span-2 bg-white/80 border border-slate-200 rounded-xl p-4 text-slate-900 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-lg"
                        />

                        <div className="md:col-span-2 text-center">
                            <button
                                type="submit"
                                className="bg-orange-500 text-white font-semibold px-10 py-4 rounded-xl shadow-lg hover:bg-orange-600 transition-colors transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-300 text-lg"
                            >
                                Send Message
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </section>

        {/* Modal */}
        {modalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">

                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center animate-fade-in">

                    <p className="text-lg text-slate-700 mb-6">
                        {modalMessage}
                    </p>

                    <button
                        onClick={() => setModalOpen(false)}
                        className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
                    >
                        Close
                    </button>

                </div>

            </div>
        )}

        </>
    );
};

export default Contact;
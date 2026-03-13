import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white selection:bg-orange-500">
      <Header />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
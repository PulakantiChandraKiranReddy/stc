import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import Clients from './components/Clients';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white selection:bg-orange-500">
      <Header />
      <main id="main-content" aria-label="Main content">
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <Clients />
        <Gallery />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
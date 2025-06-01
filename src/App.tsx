import React from 'react';
    import './App.css';
    import { Header } from './components/layout/Header';
    import { Footer } from './components/layout/Footer';
    import { HeroSection } from './components/sections/HeroSection';
    import { FeaturedCars } from './components/sections/FeaturedCars';
    import { AboutUs } from './components/sections/AboutUs';
    import { ContactUs } from './components/sections/ContactUs';

    function App() {
      return (
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <HeroSection />
            <FeaturedCars />
            <AboutUs />
            <ContactUs />
          </main>
          <Footer />
        </div>
      );
    }

    export default App;

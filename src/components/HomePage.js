import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import StatsSection from './StatsSection';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="main" id="top">
      <Header />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;

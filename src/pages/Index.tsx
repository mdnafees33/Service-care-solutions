
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductCategories from '../components/ProductCategories';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <AboutSection />
      <ProductCategories />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

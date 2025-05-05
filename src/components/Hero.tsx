
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-sreeblue to-sreeblue-light text-white">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Quality Electronic Components & Solutions
            </h1>
            <p className="text-lg mb-8">
              Your trusted partner for electronic components, industrial supplies and automation solutions since 1982
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#products" className="bg-white text-sreeblue hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors">
                Explore Products
              </a>
              <a href="#contact" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-colors">
                Contact Us
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            {/* This would typically have an image, but we're using a placeholder for now */}
            <div className="bg-white/20 rounded-lg p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">⚡</div>
                <p className="text-xl font-semibold">Powering Industries</p>
                <p>with Quality Electronics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

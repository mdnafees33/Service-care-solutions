
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gray-100 rounded-lg p-8 h-full">
              <div className="aspect-square rounded-lg bg-sreeblue/10 flex items-center justify-center mb-6">
                <span className="text-6xl">🏢</span>
              </div>
              <div className="text-center">
                <p className="text-xl font-semibold text-sreeblue">Established in 1982</p>
                <p className="text-gray-600 mt-2">40+ Years of Excellence</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-sreeblue mb-6">About Sree Balaji Electronics</h2>
            <p className="text-gray-700 mb-4">
              Established in 1982, Sree Balaji Electronics has been a trusted supplier of electronic components and industrial automation solutions for over four decades. We are committed to providing high-quality products and exceptional service to our customers.
            </p>
            <p className="text-gray-700 mb-6">
              Our extensive product range, technical expertise, and dedication to customer satisfaction have made us a preferred partner for industries across South India. We work with leading manufacturers and brands to ensure our customers receive the best products for their applications.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-sreeblue mb-2">Our Vision</h3>
                <p className="text-sm text-gray-600">To be the leading provider of quality electronic components and automation solutions.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-sreeblue mb-2">Our Mission</h3>
                <p className="text-sm text-gray-600">Delivering reliable products with exceptional service and technical support.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

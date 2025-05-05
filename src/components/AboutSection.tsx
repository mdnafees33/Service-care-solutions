import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
    <div className="container-custom">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 mb-4">
          Welcome to our website! We are a passionate team dedicated to providing high-quality solutions for our customers.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Our mission is to create innovative products that help individuals and businesses thrive in today's fast-paced world. We believe in the power of technology to drive change and are committed to making a positive impact on the communities we serve.
        </p>
        <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-500 transition-colors">
          Learn More
        </button>
      </div>
      </div>  
    </section>
  );
};

export default AboutSection;

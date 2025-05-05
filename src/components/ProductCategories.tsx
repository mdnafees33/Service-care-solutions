
import React from 'react';

const productCategories = [
  {
    id: 1,
    title: "PLC & SCADA",
    description: "Programmable Logic Controllers and Supervisory Control systems",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Sensors & Transducers",
    description: "High-quality industrial sensing devices",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Power Supplies",
    description: "Reliable power supply units for all applications",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Control Panels",
    description: "Custom designed control panel solutions",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Motors & Drives",
    description: "Wide range of motors and variable frequency drives",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Cables & Wires",
    description: "High-quality cables for industrial applications",
    image: "/placeholder.svg"
  }
];

const ProductCategories = () => {
  return (
    <section id="products" className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-sreeblue mb-2">Our Product Range</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of electronic components, industrial automation products, and electrical supplies to meet all your requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category) => (
            <div key={category.id} className="product-card group">
              <div className="bg-gray-100 rounded-md mb-4 flex items-center justify-center h-48">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-16 h-16 opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="text-xl font-semibold text-sreeblue mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary inline-block">Request Product Catalogue</a>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;

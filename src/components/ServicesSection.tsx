
import React from 'react';
import { Settings, Tool, TrendingUp, Clock, Truck, HeadphonesIcon } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Industrial Automation",
    description: "Complete industrial automation solutions for various industries",
    icon: <Settings className="w-12 h-12 text-sreeblue" />
  },
  {
    id: 2,
    title: "Technical Support",
    description: "Expert advice and technical support for all products",
    icon: <Tool className="w-12 h-12 text-sreeblue" />
  },
  {
    id: 3,
    title: "System Integration",
    description: "Seamless integration of various control systems",
    icon: <TrendingUp className="w-12 h-12 text-sreeblue" />
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Round-the-clock support for critical systems",
    icon: <Clock className="w-12 h-12 text-sreeblue" />
  },
  {
    id: 5,
    title: "Express Delivery",
    description: "Fast and reliable delivery across South India",
    icon: <Truck className="w-12 h-12 text-sreeblue" />
  },
  {
    id: 6,
    title: "After-Sales Service",
    description: "Comprehensive after-sales service and maintenance",
    icon: <HeadphonesIcon className="w-12 h-12 text-sreeblue" />
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-sreeblue mb-2">Our Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of services to support our customers with their automation and electronic component needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.id} className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-sreeblue mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

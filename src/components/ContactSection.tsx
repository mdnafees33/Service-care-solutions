
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-sreeblue mb-2">Contact Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have questions or need assistance? Contact our team and we'll be happy to help you with your requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-sreeblue mb-6">Send us a message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sreeblue" 
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sreeblue" 
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sreeblue" 
                  placeholder="Your Phone Number"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sreeblue" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-sreeblue text-white p-8 rounded-lg mb-6">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Address:</p>
                    <p>No. 123, Anna Salai, Chennai - 600002, Tamil Nadu, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone:</p>
                    <p>+91 44 1234 5678</p>
                    <p>+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email:</p>
                    <p>info@sreebalajielectronics.com</p>
                    <p>sales@sreebalajielectronics.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Business Hours:</p>
                    <p>Monday - Saturday: 9:30 AM - 6:30 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-sreeblue mb-4">Our Branches</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Chennai (Head Office)</p>
                  <p className="text-gray-600">No. 123, Anna Salai, Chennai - 600002</p>
                </div>
                <div>
                  <p className="font-medium">Coimbatore</p>
                  <p className="text-gray-600">No. 45, DB Road, R.S. Puram, Coimbatore - 641002</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

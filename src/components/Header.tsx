
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-sreeblue">
            <span className="text-sreeblue">SREE BALAJI</span> <span className="text-sreegold">ELECTRONICS</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-700 hover:text-sreeblue font-medium">Home</a>
          <a href="#about" className="text-gray-700 hover:text-sreeblue font-medium">About Us</a>
          <a href="#products" className="text-gray-700 hover:text-sreeblue font-medium">Products</a>
          <a href="#services" className="text-gray-700 hover:text-sreeblue font-medium">Services</a>
          <a href="#contact" className="text-gray-700 hover:text-sreeblue font-medium">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-sreeblue" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-inner">
          <nav className="flex flex-col space-y-4">
            <a href="#home" className="text-gray-700 hover:text-sreeblue font-medium" onClick={toggleMobileMenu}>Home</a>
            <a href="#about" className="text-gray-700 hover:text-sreeblue font-medium" onClick={toggleMobileMenu}>About Us</a>
            <a href="#products" className="text-gray-700 hover:text-sreeblue font-medium" onClick={toggleMobileMenu}>Products</a>
            <a href="#services" className="text-gray-700 hover:text-sreeblue font-medium" onClick={toggleMobileMenu}>Services</a>
            <a href="#contact" className="text-gray-700 hover:text-sreeblue font-medium" onClick={toggleMobileMenu}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-gray-800 dark:bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <a href="#" onClick={handleLogoClick} className="text-3xl font-bold text-white" style={{ fontFamily: "'Pacifico', cursive" }}>
              iHike
            </a>
            <p className="text-gray-400">
              Expertly guided hiking adventures for every skill level. Find your trail with us.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Column 2: Tours */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Tours</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">All Tours</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Custom Trips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="mt-1 mr-2">&#9993;</span>
                <a href="mailto:support@ihike.com" className="hover:text-white transition-colors">support@ihike.com</a>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-2">&#9742;</span>
                <a href="tel:+911234567890" className="hover:text-white transition-colors">+91 12345 67890</a>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-2">&#128205;</span>
                <span>Dehradun, Uttarakhand, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 dark:bg-black/50 py-6">
        <div className="container mx-auto px-6 text-center text-sm text-gray-500">
          &copy; {currentYear} iHike Adventures Pvt. Ltd. All Rights Reserved. | 
          <a href="#" className="hover:text-white transition-colors mx-2">Privacy Policy</a> | 
          <a href="#" className="hover:text-white transition-colors mx-2">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

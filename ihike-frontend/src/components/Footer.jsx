import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: About iHike */}
          <div className="space-y-4">
            <a href="/dashboard" className="text-3xl font-bold text-white" style={{ fontFamily: "'Pacifico', cursive" }}>
              iHike
            </a>
            <p className="text-gray-400">
              Your personal hub for adventure. Manage your bookings, discover new trails, and get ready for the journey ahead.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/dashboard" className="text-gray-400 hover:text-white transition-colors">Dashboard</a></li>
              <li><a href="/explore" className="text-gray-400 hover:text-white transition-colors">Explore Hikes</a></li>
              <li><a href="/my-bookings" className="text-gray-400 hover:text-white transition-colors">My Bookings</a></li>
              <li><a href="/profile" className="text-gray-400 hover:text-white transition-colors">My Profile</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Support</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3">
                <Mail size={18} />
                <a href="mailto:support@ihike.com" className="hover:text-white transition-colors">support@ihike.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} />
                <a href="tel:+911234567890" className="hover:text-white transition-colors">+91 12345 67890</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Dehradun, India</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook"><Facebook size={22} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram"><Instagram size={22} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter"><Twitter size={22} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Youtube"><Youtube size={22} /></a>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-gray-900 py-6">
        <div className="container mx-auto px-6 text-center text-sm text-gray-500">
          &copy; {currentYear} iHike Adventures Pvt. Ltd. | 
          <a href="/privacy" className="hover:text-white transition-colors mx-2">Privacy Policy</a> | 
          <a href="/terms" className="hover:text-white transition-colors mx-2">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

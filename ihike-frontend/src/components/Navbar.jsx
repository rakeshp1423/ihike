import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, User, Settings, LogOut, ChevronDown, Menu, X } from 'lucide-react';

// Mock user data, to be replaced with actual user data from state/context
const user = {
  name: 'Aarav',
  avatar: 'https://placehold.co/100x100/818CF8/ffffff?text=A',
};

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const profileRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Explore Hikes', href: '/explore' },
    { title: 'My Bookings', href: '/my-bookings' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left Side: Logo and Desktop Navigation */}
        <div className="flex items-center gap-8">
          <a href="/dashboard" className="text-3xl font-bold text-green-600" style={{ fontFamily: "'Pacifico', cursive" }}>
            iHike
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
                <a key={link.title} href={link.href} className="font-semibold text-gray-600 hover:text-green-600 transition-colors">{link.title}</a>
            ))}
          </div>
        </div>

        {/* Right Side: Actions and Profile */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2">
            <button className="p-2 rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            {/* Profile Dropdown */}
            <div className="relative" ref={profileRef}>
              <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100">
                <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full border-2 border-green-500" />
                <span className="hidden sm:inline font-semibold text-gray-700">{user.name}</span>
                <ChevronDown size={16} className={`text-gray-500 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 origin-top-right"
                  >
                    <a href="/profile" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><User size={16} /> My Profile</a>
                    <a href="/settings" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"><Settings size={16} /> Settings</a>
                    <hr className="my-2 border-gray-200" />
                    <a href="/" className="flex items-center gap-3 px-4 py-2 text-sm text-red-500 hover:bg-red-50"><LogOut size={16} /> Logout</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
                <div className="p-4 space-y-2">
                    {navLinks.map(link => (
                        <a key={link.title} href={link.href} className="block px-4 py-2 rounded-md text-gray-700 font-semibold hover:bg-gray-100">{link.title}</a>
                    ))}
                    <hr className="my-2"/>
                    <div className="flex items-center px-4 py-2">
                      <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full border-2 border-green-500 mr-3" />
                      <span className="font-semibold text-gray-700">{user.name}</span>
                    </div>
                    <a href="/profile" className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100">My Profile</a>
                    <a href="/settings" className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100">Settings</a>
                    <a href="/logout" className="block px-4 py-2 rounded-md text-red-500 font-semibold hover:bg-red-50">Logout</a>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
